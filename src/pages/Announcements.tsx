import { PageHero } from "@/components/PageHero";
import { Package, CalendarCheck } from "lucide-react";

import imgParcel from "@/assets/newimg/Announcements 1 Big news.New ways to connect.png";
import imgEvent from "@/assets/newimg/Announcements 1Stay Connected Through Our Event Calendar.png";

const Announcements = () => {
  return (
    <>
      <PageHero
        eyebrow="Announcements"
        title="Big news. New ways to connect."
        description="Stay up to date with the latest services and events launching across Mission to Seafarers Canada."
      />

      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Package className="text-coral h-6 w-6" />
              <h2 className="text-3xl font-extrabold text-navy">Launching the Seafarer Parcel Pickup Service</h2>
            </div>
            <p className="text-text-mid leading-relaxed">
              We are proud to introduce our new Seafarer Parcel Pickup Service, a practical and innovative solution designed to meet a real need. For many seafarers, accessing personal items while at sea or in port can be difficult.
            </p>
            <p className="text-text-mid leading-relaxed font-medium text-navy">
              Through our platform, seafarers can:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-mid">
              <li>Ship personal items directly to a Mission to Seafarers Canada station.</li>
              <li>Access essential goods safely and reliably while in port.</li>
              <li>Experience greater comfort and convenience during their journey.</li>
            </ul>
            <p className="text-text-mid leading-relaxed mt-4">
              Once a parcel is delivered to a station, our team ensures it is securely received and ready for pickup when the seafarer arrives. It is a simple process, but one that makes a meaningful difference.
            </p>
          </div>
          <div>
            <img src={imgParcel} alt="Parcel Pickup Service" className="rounded-2xl shadow-card w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-gray">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img src={imgEvent} alt="Event Calendar" className="rounded-2xl shadow-card w-full" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <CalendarCheck className="text-coral h-6 w-6" />
              <h2 className="text-3xl font-extrabold text-navy">Stay Connected Through Our Event Calendar</h2>
            </div>
            <p className="text-text-mid leading-relaxed">
              Our work is always evolving, and so are the ways you can be part of it. Across Canada, our stations are hosting events that bring communities together, raise awareness, and support seafarers in meaningful ways. From local gatherings to national moments of recognition, there is always something happening.
            </p>
            <p className="text-text-mid leading-relaxed">
              To make it easy to stay informed, we invite you to explore our online event calendar. Updated monthly, the calendar highlights events taking place across our stations nationwide.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Announcements;