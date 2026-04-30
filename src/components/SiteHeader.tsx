import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import logo from "@/assets/WhatsApp Image 2026-04-27 at 9.32.12 AM.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Seafarer Support" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu and reset accordion when route changes
  useEffect(() => {
    setOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Handle clicking outside of the header to close the mobile dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
        setMobileExpanded(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileAccordion = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img 
            src={logo} 
            alt="Mission to Seafarers Logo" 
            className="h-10 md:h-12 w-auto shrink-0 object-contain rounded-md group-hover:scale-105 transition-transform" 
          />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold text-navy">Mission to Seafarers</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-coral">Toronto</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            n.subItems ? (
              <div key={n.to} className="relative group">
                <NavLink
                  to={n.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive || location.pathname.includes(n.to) ? "text-coral" : "text-navy hover:text-coral"
                    }`
                  }
                >
                  {n.label}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </NavLink>
                
                {/* Desktop Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-56 bg-white rounded-xl shadow-card border border-border p-2 flex flex-col gap-1">
                    {n.subItems.map((sub) => (
                      <NavLink
                        key={sub.to}
                        to={sub.to}
                        end={sub.to === "/newsletter"}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                            isActive ? "bg-coral-pale text-coral" : "text-text-mid hover:text-navy hover:bg-warm-gray"
                          }`
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive ? "text-coral" : "text-navy hover:text-coral"
                  }`
                }
              >
                {n.label}
              </NavLink>
            )
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild size="sm" className="bg-coral hover:bg-coral-light text-white font-bold shadow-warm hover:shadow-warm-hover">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-navy hover:bg-warm-gray"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white animate-in fade-in slide-in-from-top-4 duration-300 shadow-xl">
          <div className="container-page py-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
            {nav.map((n) => (
              <div key={n.to} className="flex flex-col">
                {n.subItems ? (
                  <>
                    {/* Mobile Accordion Toggle Button */}
                    <button
                      onClick={() => toggleMobileAccordion(n.label)}
                      className={`px-3 py-3 text-base font-semibold rounded-md flex items-center justify-between w-full text-left transition-colors ${
                        location.pathname.includes(n.to) ? "bg-coral-pale text-coral" : "text-navy hover:bg-warm-gray"
                      }`}
                    >
                      {n.label}
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileExpanded === n.label ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    
                    {/* Mobile Smooth Expanding Dropdown */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileExpanded === n.label ? "max-h-[400px] opacity-100 mt-1" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-1 pl-4 border-l-2 border-warm-gray ml-3 mb-2">
                        {n.subItems.map((sub) => (
                          <NavLink
                            key={sub.to}
                            to={sub.to}
                            end={sub.to === "/newsletter"}
                            className={({ isActive }) =>
                              `px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                                isActive ? "text-coral font-bold bg-coral-pale/50" : "text-text-mid hover:text-navy hover:bg-warm-gray"
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={n.to}
                    end={n.to === "/"}
                    className={({ isActive }) =>
                      `px-3 py-3 text-base font-semibold rounded-md transition-colors ${
                        isActive ? "bg-coral-pale text-coral" : "text-navy hover:bg-warm-gray"
                      }`
                    }
                  >
                    {n.label}
                  </NavLink>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
              {/* <Button asChild variant="outline" className="border-2 border-navy text-navy font-bold w-full">
                <Link to="/get-involved#donate">Donate</Link>
              </Button> */}
              <Button asChild className="bg-coral hover:bg-coral-light text-white font-bold w-full">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};