import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import logo from "@/assets/WhatsApp Image 2026-04-27 at 9.32.12 AM.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Seafarer Support" },
  { to: "/get-involved", label: "Get Involved" },
  // { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img 
            src={logo} 
            alt="Mission to Seafarers Logo" 
            // FIXED: Set height, used w-auto to keep natural shape, removed rounded-full so it doesn't cut corners
            className="h-10 md:h-12 w-auto shrink-0 object-contain rounded-md group-hover:scale-105 transition-transform" 
          />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold text-navy">Mission to Seafarers</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-coral">Toronto</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
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
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* <Button asChild variant="outline" size="sm" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold">
            <Link to="/donate">Donate Nationally</Link>
          </Button> */}
          <Button asChild size="sm" className="bg-coral hover:bg-coral-light text-white font-bold shadow-warm hover:shadow-warm-hover">
            <Link to="/contact">Contact Toronto</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-navy hover:bg-warm-gray"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white animate-fade-in">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-3 text-base font-semibold rounded-md ${
                    isActive ? "bg-coral-pale text-coral" : "text-navy hover:bg-warm-gray"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Button asChild variant="outline" className="border-2 border-navy text-navy font-bold">
                <Link to="/get-involved#donate">Donate </Link>
              </Button>
              <Button asChild className="bg-coral hover:bg-coral-light text-white font-bold">
                <Link to="/contact">Contact Toronto</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};