import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Ship, Wifi, Coffee, Heart, Scissors, MapPin, HeartHandshake,
  MessageCircle, Sparkles, Calendar, Package, Phone, Clock, Globe, Users, X
} from "lucide-react";

import lounge from "@/assets/Algoma-Bear-Visit-21.avif";
import judithImg from "@/assets/Toronto Station Chaplin And manager-Rev.Judith Alltree.png";
import heroBg from "@/assets/SeasurferSupport.avif"; // Added new background image import

// ==========================================
// FORM COMPONENTS
// ==========================================

const HaircutForm = ({ onClose }: { onClose: () => void }) => {
  const [form, setForm] = useState({ name: "", ship: "", expectedDate: "", contact: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Haircut Request received", description: "Our team will contact you to confirm." });
    setForm({ name: "", ship: "", expectedDate: "", contact: "", notes: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-warm-gray p-6 md:p-8 shadow-card space-y-5 animate-in fade-in slide-in-from-bottom-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scissors className="h-6 w-6 text-coral" />
          <h3 className="text-xl font-extrabold text-navy">Book a Haircut</h3>
        </div>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-coral transition-colors" aria-label="Close form">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><Label>Name *</Label><Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Ship Name *</Label><Input required value={form.ship} onChange={e => setForm({ ...form, ship: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Expected Date in Port</Label><Input type="date" value={form.expectedDate} onChange={e => setForm({ ...form, expectedDate: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>WhatsApp or Email *</Label><Input required value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} className="mt-1.5 bg-white" /></div>
      </div>
      <Button type="submit" size="lg" className="w-full bg-coral hover:bg-coral-light text-white font-bold h-12">Submit Booking</Button>
    </form>
  );
};

const VisitForm = ({ onClose }: { onClose: () => void }) => {
  const [form, setForm] = useState({ name: "", ship: "", contact: "", location: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Visit Request received", description: "Our team will schedule a visit to your ship." });
    setForm({ name: "", ship: "", contact: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-warm-gray p-6 md:p-8 shadow-card space-y-5 animate-in fade-in slide-in-from-bottom-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Ship className="h-6 w-6 text-coral" />
          <h3 className="text-xl font-extrabold text-navy">Request a Ship Visit</h3>
        </div>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-coral transition-colors" aria-label="Close form">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><Label>Name *</Label><Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Ship Name *</Label><Input required value={form.ship} onChange={e => setForm({ ...form, ship: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Port Location / Pier</Label><Input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>WhatsApp or Email *</Label><Input required value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} className="mt-1.5 bg-white" /></div>
      </div>
      <Button type="submit" size="lg" className="w-full bg-coral hover:bg-coral-light text-white font-bold h-12">Schedule Visit</Button>
    </form>
  );
};

const ParcelForm = ({ onClose }: { onClose: () => void }) => {
  const [form, setForm] = useState({ name: "", ship: "", contact: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Parcel Request received", description: "We will keep an eye out for your package." });
    setForm({ name: "", ship: "", contact: "", details: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-warm-gray p-6 md:p-8 shadow-card space-y-5 animate-in fade-in slide-in-from-bottom-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6 text-coral" />
          <h3 className="text-xl font-extrabold text-navy">Send or Receive a Parcel</h3>
        </div>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-coral transition-colors" aria-label="Close form">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="p-4 bg-white border border-border rounded-xl text-sm text-text-mid mb-2">
        <strong className="text-navy block mb-1">Instructions:</strong>
        Address your parcel to: <strong>Your Name, M/V [Ship Name], 8 Unwin Avenue, Toronto, ON M5A 3L1</strong>. Fill out this form to let us know it's coming.
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><Label>Name *</Label><Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Ship Name *</Label><Input required value={form.ship} onChange={e => setForm({ ...form, ship: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>WhatsApp or Email *</Label><Input required value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>Tracking Number / Details</Label><Input value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} className="mt-1.5 bg-white" /></div>
      </div>
      <Button type="submit" size="lg" className="w-full bg-coral hover:bg-coral-light text-white font-bold h-12">Submit Parcel Details</Button>
      <div className="text-center mt-2">
        <a href="https://parcel.mtsc.ca" target="_blank" rel="noreferrer" className="text-coral font-bold hover:underline text-sm">
          Or visit our dedicated Parcel Portal
        </a>
      </div>
    </form>
  );
};

// UPDATED: Added direct WhatsApp button below the form.
const ChaplainForm = ({ onClose }: { onClose: () => void }) => {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "The Chaplain will reach out to you privately." });
    setForm({ name: "", contact: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-warm-gray p-6 md:p-8 shadow-card space-y-5 animate-in fade-in slide-in-from-bottom-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6 text-coral" />
          <h3 className="text-xl font-extrabold text-navy">Message the Chaplain</h3>
        </div>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-coral transition-colors" aria-label="Close form">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><Label>Name (Optional)</Label><Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>WhatsApp or Email *</Label><Input required value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div className="sm:col-span-2"><Label>Private Message</Label><Textarea rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="mt-1.5 bg-white" /></div>
      </div>
      
      <div className="flex flex-col gap-3 mt-2">
        <Button type="submit" size="lg" className="w-full bg-coral hover:bg-coral-light text-white font-bold h-12 flex gap-2 items-center justify-center">
          Send Private Message
        </Button>
        
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-border"></div>
          <span className="flex-shrink-0 px-4 text-text-mid text-sm font-medium uppercase tracking-wider">OR CONNECT DIRECTLY</span>
          <div className="flex-grow border-t border-border"></div>
        </div>
        
        <a 
          href="https://wa.me/16472953219" 
          target="_blank" 
          rel="noreferrer" 
          className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold h-12 flex gap-2 items-center justify-center rounded-md transition-colors"
        >
          <MessageCircle className="h-5 w-5" /> Message on WhatsApp
        </a>
      </div>
    </form>
  );
};

const GeneralSupportForm = ({ onClose }: { onClose: () => void }) => {
  const [form, setForm] = useState({ name: "", contact: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Support Request received", description: "We are here for you and will connect shortly." });
    setForm({ name: "", contact: "", details: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-warm-gray p-6 md:p-8 shadow-card space-y-5 animate-in fade-in slide-in-from-bottom-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-coral" />
          <h3 className="text-xl font-extrabold text-navy">Request Support</h3>
        </div>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-coral transition-colors" aria-label="Close form">
          <X className="h-6 w-6" />
        </button>
      </div>
      <p className="text-sm text-text-mid mt-1">For general help (mental, practical, or urgent needs).</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><Label>Name *</Label><Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div><Label>WhatsApp or Email *</Label><Input required value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} className="mt-1.5 bg-white" /></div>
        <div className="sm:col-span-2"><Label>How can we help? *</Label><Textarea rows={4} required value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} className="mt-1.5 bg-white" /></div>
      </div>
      <Button type="submit" size="lg" className="w-full bg-coral hover:bg-coral-light text-white font-bold h-12">Get Help</Button>
    </form>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const Support = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  const quickAccessCards = [
    { id: 'haircut', icon: Scissors, title: "Book a Haircut", desc: "Simple booking form" },
    { id: 'parcel', icon: Package, title: "Send or Receive a Parcel", desc: "Instructions + request form" },
    { id: 'visit', icon: Ship, title: "Request a Ship Visit", desc: "Schedule a visit" },
    { id: 'chaplain', icon: MessageCircle, title: "Message the Chaplain", desc: "Private message/support via Form or WhatsApp" }, // Updated desc
    { id: 'support', icon: Heart, title: "Request Support", desc: "General help (mental, practical, urgent)" }
  ];

  const handleCloseForm = () => setActiveForm(null);

  const scrollToSection = (id: string) => {
    setActiveForm(id);
    document.getElementById("quick-access")?.scrollIntoView({ behavior: "smooth" });
  };

  const renderActiveForm = () => {
    switch (activeForm) {
      case 'haircut': return <HaircutForm onClose={handleCloseForm} />;
      case 'parcel': return <ParcelForm onClose={handleCloseForm} />;
      case 'visit': return <VisitForm onClose={handleCloseForm} />;
      case 'chaplain': return <ChaplainForm onClose={handleCloseForm} />;
      case 'support': return <GeneralSupportForm onClose={handleCloseForm} />;
      default: return null;
    }
  };

  return (
    <>
      {/* 1. Hero Section - UPDATED TO LIGHT UI WITH BACKGROUND IMAGE */}


      {/* 1. Hero Section - UPDATED TO NAVY UI */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-navy min-h-[45vh] flex items-center justify-center border-b border-navy-dark">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Seafarer Support Background" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="container-page relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/20 text-coral-light text-xs font-extrabold uppercase tracking-widest border border-coral/30">
              <Heart className="w-4 h-4 text-coral-light" /> Seafarer Support
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Support While You’re at Port
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
            Wherever you’re from, you are welcome here.<br className="hidden md:block" />
            We’re here to support you with practical help, connection, and care while you’re in Toronto.
          </p>
        </div>
      </section>

      {/* 2. Quick Access */}
      <section id="quick-access" className="py-20 bg-white scroll-mt-10">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">How Can We Help You Today?</h2>
          </div>

          {/* ON-PAGE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {quickAccessCards.map((card) => (
              <button
                key={card.id}
                onClick={() => {
                  setActiveForm(card.id);
                  // Add a small timeout to ensure the form is rendered before scrolling
                  setTimeout(() => {
                    formContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100);
                }}
                className={`p-6 rounded-2xl border text-left transition-all hover:shadow-card hover:-translate-y-1 flex flex-col items-start ${activeForm === card.id ? "border-coral bg-coral-pale ring-1 ring-coral" : "border-border bg-white"
                  }`}
              >
                <card.icon className={`h-10 w-10 mb-4 ${activeForm === card.id ? "text-coral" : "text-navy"}`} />
                <h3 className="font-bold text-navy text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-text-mid font-medium">{card.desc}</p>
              </button>
            ))}
          </div>

          {/* Attached Ref to the container rendering the active form */}
          <div ref={formContainerRef} className="max-w-3xl mx-auto scroll-mt-20">
            {renderActiveForm()}
          </div>
        </div>
      </section>

      {/* 3. Simple Reassurance Section */}
      <section className="py-20 bg-warm-gray">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-soft aspect-[5/4]">
            <img src={lounge} alt="Seafarers lounge" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              You Are Not Alone
            </h2>
            <p className="mt-5 text-lg text-text-mid font-medium leading-relaxed">
              We support seafarers from around the world with:
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Free Wi-Fi access",
                "Transportation assistance",
                "Friendly conversation and a place to relax",
                "Emotional and spiritual support",
                "Help with practical needs while in port"
              ].map((t) => (
                <li key={t} className="flex gap-4 items-center">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-coral/10 text-coral">
                    <HeartHandshake className="h-5 w-5" />
                  </span>
                  <span className="text-navy font-bold text-lg">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-20 bg-white text-center border-b border-warm-gray">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Getting Support is Easy</h2>
          <div className="mt-14 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-navy text-white flex items-center justify-center font-black text-2xl mb-6 shadow-md">1</div>
              <h3 className="font-bold text-navy text-xl">Choose the service you need</h3>
            </div>
            <div className="flex flex-col items-center relative">
              {/* Connecting Line hidden on mobile */}
              <div className="hidden sm:block absolute top-8 -left-[50%] w-full h-[2px] bg-warm-gray -z-10"></div>
              <div className="h-16 w-16 rounded-full bg-coral text-white flex items-center justify-center font-black text-2xl mb-6 shadow-md">2</div>
              <h3 className="font-bold text-navy text-xl">Fill out a quick request form</h3>
            </div>
            <div className="flex flex-col items-center relative">
               {/* Connecting Line hidden on mobile */}
               <div className="hidden sm:block absolute top-8 -left-[50%] w-full h-[2px] bg-warm-gray -z-10"></div>
              <div className="h-16 w-16 rounded-full bg-coral-light text-white flex items-center justify-center font-black text-2xl mb-6 shadow-md">3</div>
              <h3 className="font-bold text-navy text-xl">Our team will contact you shortly</h3>
            </div>
          </div>
          <p className="mt-12 text-lg font-bold text-coral flex items-center justify-center gap-2 bg-coral/10 py-4 px-6 rounded-full inline-flex">
            If urgent, contact us directly below.
          </p>
        </div>
      </section>

      {/* 5. Contact / Emergency Support */}
      <section className="py-16 bg-navy text-white">
        <div className="container-page text-center">
          <h2 className="text-3xl text-white md:text-4xl font-extrabold mb-10">Need Immediate Help?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <a href="tel:+16472953219" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full transition-colors font-bold text-lg w-full sm:w-auto">
              <Phone className="h-6 w-6" /> Phone: +1 647-295-3219
            </a>
            <a href="https://wa.me/16472953219" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] px-8 py-4 rounded-full transition-colors font-bold text-white text-lg w-full sm:w-auto">
              <MessageCircle className="h-6 w-6" /> WhatsApp
            </a>
            <a href="mailto:glutenfreepriest@gmail.com" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full transition-colors font-bold text-lg w-full sm:w-auto">
              Email: glutenfreepriest@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* 6. Location & Visiting Info */}
      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Visit Us at the Port of Toronto</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4 p-6 bg-warm-gray rounded-2xl">
                <MapPin className="h-8 w-8 text-coral shrink-0" />
                <div>
                  <strong className="block text-navy text-lg mb-1">Address:</strong>
                  <span className="text-text-mid font-medium">8 Unwin Avenue, Toronto</span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-6 bg-warm-gray rounded-2xl">
                <Clock className="h-8 w-8 text-coral shrink-0" />
                <div>
                  <strong className="block text-navy text-lg mb-1">Opening Hours:</strong>
                  <span className="text-text-mid font-medium">Check with our team for daily operating hours.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="aspect-square md:aspect-video lg:aspect-square bg-warm-gray rounded-3xl shadow-soft flex items-center justify-center overflow-hidden border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.497161490382!2d-79.347566!3d43.63782369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb1d39382c3d%3A0x48c47df25b0c53d3!2s8%20Unwin%20Ave%2C%20Toronto%2C%20ON%20M5A%203L1%2C%20Canada!5e0!3m2!1sen!2sin!4v1777293037926!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 7 & 8. Language Accessibility & Support Team (Merged Sections) */}
      <section className="py-24 bg-warm-gray">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Trust / Human Touch */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">Meet Your Support Team</h2>
              <p className="text-xl text-text-mid max-w-lg mx-auto lg:mx-0 mb-14 font-medium leading-relaxed">
                Our team is here to welcome you, listen, and support you during your time in port.
              </p>
              
              <div className="flex flex-col items-center lg:items-start group">
                <div className="w-48 h-48 mb-6 overflow-hidden rounded-full shadow-lg ring-8 ring-white transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={judithImg} 
                    alt="Rev. Judith Alltree" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-navy">Rev. Judith Alltree</h3>
                <p className="text-coral font-bold mt-1 text-lg">Station Chaplain</p>
              </div>
            </div>

            {/* Language Accessibility */}
            <div className="bg-coral text-white rounded-3xl p-10 md:p-14 shadow-soft text-center lg:text-left h-full flex flex-col justify-center">
              <Globe className="h-16 w-16 mb-6 text-white mx-auto lg:mx-0" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">We Welcome Seafarers from Around the World</h2>
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                If English is not your first language, we will do our best to support you.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Support;