import { PageHero } from "@/components/PageHero";
import { Navigation, ShieldCheck, HeartHandshake } from "lucide-react";

import imgMain1 from "@/assets/newimg/Ho1Honouring Women in Maritime – From Policy to Practice.jpg";
import imgMain2 from "@/assets/newimg/Ho1Honouring Women in Maritime – From Policy to Practice2.jpg";
import imgChangingTide from "@/assets/newimg/Ho1 A Changing Tide.jpg";
import imgReality from "@/assets/newimg/Ho1 Responsibility And reality.jpg";
import imgConnection from "@/assets/newimg/Ho1 The Power of Connection.png";
import imgRole from "@/assets/newimg/Ho1 The Role We Play.jpg";
import imgLookingAhead from "@/assets/newimg/Ho1 Looking Ahead.jpg";

const WomenInMaritime = () => {
  return (
    <>
      <PageHero
        eyebrow="May 18 Recognition"
        title="Honouring Women in Maritime"
        description="From Policy to Practice: A global recognition led by the International Maritime Organization. A moment to reflect, recognize, and renew our commitment."
      />

      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <img src={imgMain1} alt="Women in Maritime" className="rounded-2xl shadow-card w-full h-[300px] object-cover" />
            <img src={imgMain2} alt="Women in Maritime" className="rounded-2xl shadow-card w-full h-[300px] object-cover" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-navy">A Changing Tide</h2>
              <p className="text-text-mid leading-relaxed">
                For generations, the maritime industry has been shaped by resilience, endurance, and tradition. For women, however, the journey into this space has often required something more. It has required determination in the face of barriers, and the courage to step into roles where representation has been limited.
              </p>
              <p className="text-text-mid leading-relaxed">
                Today, that tide is changing. Across vessels and ports around the world, women are not only participating, they are leading. They are navigating ships, managing cargo operations, and shaping an industry that moves over 90 percent of the world’s goods.
              </p>
            </div>
            <div>
              <img src={imgChangingTide} alt="A Changing Tide" className="rounded-2xl shadow-card w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-gray">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img src={imgReality} alt="Responsibility and Reality" className="rounded-2xl shadow-card w-full" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-coral h-6 w-6" />
              <h2 className="text-3xl font-extrabold text-navy">Choosing a Different Path</h2>
            </div>
            <p className="text-text-mid leading-relaxed">
              Among them is Chief Officer Reshma Nilofer Naha. A trailblazing mariner with Fednav, she is notably the first Indian woman to become a marine pilot and today serves as a Chief Officer.
            </p>
            <p className="text-text-mid leading-relaxed">
              "I chose this because I wanted to do something different, something not many girls choose," she says. While the work is demanding, she is clear about one thing: "It is not that this job belongs to men or women. It is not about gender."
            </p>
            <p className="text-text-mid leading-relaxed">
              Her role is critical. On vessels like the Federal Hamilton, the Chief Officer oversees cargo operations from start to finish. "My role is to handle the cargo... and to take care of it throughout the voyage. It is a big responsibility."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4">
            <img src={imgConnection} alt="Power of Connection" className="rounded-2xl shadow-sm w-full h-48 object-cover" />
            <h3 className="text-xl font-bold text-navy">The Power of Connection</h3>
            <p className="text-sm text-text-mid leading-relaxed">
              "It is very thoughtful. It feels great getting a visitor," Reshma shared. In an environment where seafarers spend months away from home, these moments matter. They provide familiarity and care.
            </p>
          </div>
          <div className="space-y-4">
            <img src={imgRole} alt="The Role We Play" className="rounded-2xl shadow-sm w-full h-48 object-cover" />
            <h3 className="text-xl font-bold text-navy">The Role We Play</h3>
            <p className="text-sm text-text-mid leading-relaxed">
              At Mission to Seafarers Canada, our commitment to women in maritime is not symbolic. It is active. It is reflected in the support we provide through ship visits, the relationships we build, and the spaces we create.
            </p>
          </div>
          <div className="space-y-4">
            <img src={imgLookingAhead} alt="Looking Ahead" className="rounded-2xl shadow-sm w-full h-48 object-cover" />
            <h3 className="text-xl font-bold text-navy">Looking Ahead</h3>
            <p className="text-sm text-text-mid leading-relaxed">
              Honouring Women in Maritime is about acknowledging how far we still have to go. The future of maritime depends on diversity and turning intention into action.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WomenInMaritime;