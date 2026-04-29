import { PageHero } from "@/components/PageHero";
import { Ship, Anchor, MessageCircle, Heart } from "lucide-react";

import imgTheoMain from "@/assets/newimg/S1A Visit to the Theo G Istanbul.jpg";
import imgTheo1 from "@/assets/newimg/S1A Visit to the Theo G Istanbul 1Stimg.jpg";
import imgTheo2 from "@/assets/newimg/S1A Visit to the Theo G Istanbul 2nitimg.jpg";
import imgTheo3 from "@/assets/newimg/S1A Visit to the Theo G Istanbul 3rditimg.jpg";
import imgConversations from "@/assets/newimg/S1 Conversations That Matter.jpg";
import imgMoreThanVisit from "@/assets/newimg/S1More Than a Visit.jpg";

const ShipVisits = () => {
  return (
    <>
      <PageHero
        eyebrow="Ship Visits"
        title="A Simple Visit. A Powerful Impact."
        description="At Mission to Seafarers Canada, one of the most meaningful ways we support seafarers is through ship visits. What happens in those moments is far more powerful than it appears."
      />

      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Ship className="text-coral h-6 w-6" />
                <h2 className="text-3xl font-extrabold text-navy">A Visit to the Theo G Istanbul</h2>
              </div>
              <p className="text-text-mid leading-relaxed">
                We recently had the opportunity to follow Dan Phannenhour, Port Chaplain at the Hamilton station, during one of his ship visits.
              </p>
              <p className="text-text-mid leading-relaxed">
                Every visit begins with preparation. Before stepping on board, Dan reviews a full vessel briefing. This includes key details about the ship, its journey, and its crew. At first, it may seem routine, but this information becomes essential. It allows Dan to connect in a way that is personal, relevant, and meaningful.
              </p>
              <p className="text-navy font-medium">On this visit, the vessel was the Theo G Istanbul (IMO 9415246).</p>
            </div>
            <div>
              <img src={imgTheoMain} alt="The Theo G Istanbul" className="rounded-2xl shadow-card w-full object-cover" />
            </div>
          </div>

          {/* Image Grid for the visit progression */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <img src={imgTheo1} alt="Ship Visit 1" className="rounded-xl shadow-md w-full h-64 object-cover" />
            <img src={imgTheo2} alt="Ship Visit 2" className="rounded-xl shadow-md w-full h-64 object-cover" />
            <img src={imgTheo3} alt="Ship Visit 3" className="rounded-xl shadow-md w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-gray">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img src={imgConversations} alt="Conversations That Matter" className="rounded-2xl shadow-card w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle className="text-coral h-6 w-6" />
              <h2 className="text-3xl font-extrabold text-navy">Stepping On Board & Conversations</h2>
            </div>
            <p className="text-text-mid leading-relaxed">
              As Dan stepped aboard, he was warmly welcomed by the crew. They offered him coffee. In return, he offered chocolate. It was a small exchange, but it immediately created a sense of comfort and familiarity.
            </p>
            <p className="text-text-mid leading-relaxed">
              Seated in the crew lounge, the conversation unfolded naturally. It moved from global events and ongoing conflicts to life on board, the realities of work, and the long journeys at sea. Soon, the tone shifted. The crew began sharing photos of their families, stories of their children’s graduations, and memories from past vacations. 
            </p>
            <blockquote className="border-l-4 border-coral pl-4 text-navy italic font-medium">
              "What stood out most was not what was said, but what was felt. There was laughter. There was ease. There was a visible shift in energy."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="text-coral h-6 w-6" />
              <h2 className="text-3xl font-extrabold text-navy">Why Ship Visits Matter</h2>
            </div>
            <p className="text-text-mid leading-relaxed">
              Ship visits may appear simple, but their impact is profound. For seafarers who spend months at sea, often in isolation, these visits provide something deeply human: a chance to speak freely, a connection to the outside world, and a reminder that they are not alone.
            </p>
            <p className="text-text-mid leading-relaxed">
              Sometimes, all it takes is a conversation. A familiar gesture. A moment of presence. And in that moment, everything changes.
            </p>
            <h3 className="text-xl font-bold text-navy mt-6">More Than a Visit</h3>
            <p className="text-text-mid leading-relaxed">
              What Dan brings on board is not just support. It is presence. It is the ability to meet people where they are, to listen without judgment, and to create space for connection in an environment where it is often missing. That is the power of a ship visit. Not grand. Not complicated. But deeply, undeniably important.
            </p>
          </div>
          <div>
            <img src={imgMoreThanVisit} alt="More Than a Visit" className="rounded-2xl shadow-card w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShipVisits;