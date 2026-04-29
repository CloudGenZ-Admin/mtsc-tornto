import { PageHero } from "@/components/PageHero";
import { Anchor, Home, Coffee } from "lucide-react";

import imgGangway from "@/assets/newimg/MS1A Different World, Just Beyond the Gangway.jpg";
import imgBuilding from "@/assets/newimg/MS1 More Than a Building.jpg";
import imgConnection from "@/assets/newimg/MS1A Space for Connection.jpg";
import imgPhysical from "@/assets/newimg/MS1Why Physical Stations Matter.jpg";
import imgLookingAhead from "@/assets/newimg/MS1 Looking Ahead.jpg";

const HamiltonStation = () => {
  return (
    <>
      <PageHero
        eyebrow="Inside Our Stations"
        title="A Glimpse into Hamilton"
        description="A different world, just beyond the gangway. How our Hamilton station provides a sanctuary of rest and connection for seafarers arriving in port."
      />

      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Anchor className="text-coral h-6 w-6" />
              <h2 className="text-3xl font-extrabold text-navy">A Different World</h2>
            </div>
            <p className="text-text-mid leading-relaxed">
              For seafarers, life is defined by routine, responsibility, and long stretches of time at sea. Days blend into nights. Work continues regardless of weather, time zone, or distance from home.
            </p>
            <p className="text-text-mid leading-relaxed">
              Ships are places of purpose. But they are not always places of rest. That is why stepping ashore matters. At the Port of Hamilton, the Mission to Seafarers Canada station offers something simple, yet profoundly important. A change of environment. A moment to breathe. A space to just be.
            </p>
          </div>
          <div>
            <img src={imgGangway} alt="Beyond the gangway" className="rounded-2xl shadow-card w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-gray">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <img src={imgBuilding} alt="More than a building" className="rounded-2xl shadow-card w-full h-full object-cover" />
            <img src={imgConnection} alt="Space for Connection" className="rounded-2xl shadow-card w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <Home className="text-coral h-6 w-6" />
              <h2 className="text-3xl font-extrabold text-navy">More Than a Building</h2>
            </div>
            <p className="text-text-mid leading-relaxed">
              At first glance, a seafarers’ centre may look modest. A few chairs. A warm drink. Wi-Fi. A quiet room. But inside, something much deeper is happening. The Hamilton station is a home away from home.
            </p>
            <p className="text-text-mid leading-relaxed">
              Seafarers work long hours under intense conditions. When a seafarer leaves the ship and enters a space like the Hamilton station, something shifts. The air feels different. The pace slows. The mind begins to relax. It is not just about comfort. It is a psychological reset.
            </p>
            <p className="text-navy font-bold italic">
              "Inside the station, connection happens naturally. They feel seen."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Coffee className="text-coral h-6 w-6" />
              <h2 className="text-3xl font-extrabold text-navy">Why Physical Stations Matter</h2>
            </div>
            <p className="text-text-mid leading-relaxed">
              In an increasingly digital world, it is easy to assume that connection can happen anywhere. But for seafarers, physical space still matters deeply. A station is not just a service hub. It is a place of belonging.
            </p>
            <p className="text-text-mid leading-relaxed">
              Sometimes, what matters most is not what is offered, but what is felt. A quiet chair. A moment of stillness. A space with no expectations. These are the moments that restore people. At its core, the Hamilton station is about dignity.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <img src={imgPhysical} alt="Physical Stations Matter" className="rounded-2xl shadow-card w-full h-48 object-cover" />
            <img src={imgLookingAhead} alt="Looking Ahead" className="rounded-2xl shadow-card w-full h-48 object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HamiltonStation;