import { PageHero } from "@/components/PageHero";
import { Compass, Users, MapPin } from "lucide-react";

import imgGrowing from "@/assets/newimg/MF1 Growing together. Reaching further. Making an impact..png";
import imgHamilton from "@/assets/newimg/MF1-Hamilton Community and Connection.png";
import imgMovingForward from "@/assets/newimg/MF1-Moving Forward, Together.png";

const WhatsAhead = () => {
  return (
    <>
      <PageHero
        eyebrow="Future Outlook"
        title="What’s Ahead for Mission to Seafarers Canada"
        description="Growing together. Reaching further. Making an impact."
      />

      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-text-mid leading-relaxed">
              As Mission to Seafarers Canada continues to expand its presence across the country, one truth remains constant. Our strength comes from working together. Across stations, communities, and partnerships, we are building something that is both national in reach and deeply local in impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Compass className="text-coral h-6 w-6" />
                <h2 className="text-3xl font-extrabold text-navy">Toronto: A New Chapter Begins</h2>
              </div>
              <p className="text-sm font-bold text-coral">May 20, 2026</p>
              <p className="text-text-mid leading-relaxed">
                This spring marks a major milestone with the grand reopening of the Toronto station at the Port of Toronto. After years without a physical presence, the reopening represents more than a return. It signals a renewed commitment to serving seafarers in one of Canada’s most important ports. 
              </p>
            </div>
            <div>
              <img src={imgGrowing} alt="Growing Together" className="rounded-2xl shadow-card w-full" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={imgHamilton} alt="Hamilton Community" className="rounded-2xl shadow-card w-full" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <Users className="text-coral h-6 w-6" />
                <h2 className="text-3xl font-extrabold text-navy">Hamilton: Community and Connection</h2>
              </div>
              <p className="text-sm font-bold text-coral">Celebration Dinner</p>
              <p className="text-text-mid leading-relaxed">
                In Hamilton, we continue to strengthen relationships through community engagement. An upcoming Celebration Dinner will bring together supporters, partners, and volunteers who play a vital role in sustaining the Mission’s work. Moments like these remind us that behind every ship visit is a community making it possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-gray">
        <div className="container-page">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft border border-border">
            <div className="flex items-center gap-3 justify-center mb-4">
              <MapPin className="text-coral h-8 w-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-navy text-center mb-2">International Day of the Seafarer</h2>
            <p className="text-center text-coral font-bold mb-8">June 25, 2026</p>
            <p className="text-text-mid text-center max-w-2xl mx-auto mb-10">
              On June 25, communities across Canada will come together to recognize the people who keep the world moving. Multiple cities will host official proclamations and flag-raising ceremonies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              <div className="p-4 bg-warm-gray rounded-xl">
                <p className="font-bold text-navy">St. John’s, NL</p>
                <p className="text-sm text-text-mid">1:00 PM - City Hall</p>
              </div>
              <div className="p-4 bg-warm-gray rounded-xl">
                <p className="font-bold text-navy">Halifax, NS</p>
                <p className="text-sm text-text-mid">9:00 AM - Grand Parade</p>
              </div>
              <div className="p-4 bg-warm-gray rounded-xl">
                <p className="font-bold text-navy">Oshawa, ON</p>
                <p className="text-sm text-text-mid">9:00 AM - City Hall</p>
              </div>
              <div className="p-4 bg-warm-gray rounded-xl">
                <p className="font-bold text-navy">Toronto, ON</p>
                <p className="text-sm text-text-mid">10:00 AM - City Hall</p>
              </div>
              <div className="p-4 bg-warm-gray rounded-xl">
                <p className="font-bold text-navy">Hamilton, ON</p>
                <p className="text-sm text-text-mid">City Hall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white text-center">
        <div className="container-page max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-6">Moving Forward, Together</h2>
          <p className="text-lg text-white/80 mb-8">
            Across the country, various stations are in discussion about planning major annual events that will bring communities closer to the work of the Mission to Seafarers, including Port Walks and community-driven initiatives.
          </p>
          <img src={imgMovingForward} alt="Moving Forward Together" className="rounded-2xl shadow-card mx-auto max-w-full h-auto" />
        </div>
      </section>
    </>
  );
};

export default WhatsAhead;