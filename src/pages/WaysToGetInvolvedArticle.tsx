import { PageHero } from "@/components/PageHero";
import { HandHeart, Facebook, Instagram, Linkedin, Heart, Gift } from "lucide-react";

import imgPrayer from "@/assets/newimg/GT1The Power of Prayer.jpg";
import imgGive from "@/assets/newimg/GT1 Give With Purpose.jpg";
import imgHost from "@/assets/newimg/GT1 Host Your Own Fundraiser.jpg";
import imgBePart from "@/assets/newimg/GT1Be Part of the Mission.jpg";

const WaysToGetInvolvedArticle = () => {
  return (
    <>
      <PageHero
        eyebrow="Take Action"
        title="Ways to Get Involved"
        description="Turning compassion into action. At Mission to Seafarers Canada, every act of support matters."
      />

      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <HandHeart className="text-coral h-6 w-6" />
              <h2 className="text-3xl font-extrabold text-navy">The Power of Prayer</h2>
            </div>
            <p className="text-text-mid leading-relaxed">
              This month, we are inviting you to take part in something deeply meaningful. Our May Appeal is centered on our Prayer Wall. Sending a prayer to a seafarer is simple. On our website, click the Prayer Wall button and submit your message.
            </p>
            <p className="text-text-mid leading-relaxed">
              It takes only a moment, but for someone at sea, it can mean everything. Prayer has the power to comfort, to uplift, and to remind seafarers that they are not alone.
            </p>
          </div>
          <div>
            <img src={imgPrayer} alt="The Power of Prayer" className="rounded-2xl shadow-card w-full" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-coral text-white text-center">
        <div className="container-page max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Stay Connected</h2>
          <p className="text-white/90 text-lg">
            One of the simplest ways to support our work is by staying engaged. Follow us on social media. Share our stories. Help us amplify the voices of seafarers.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a href="https://linkedin.com/company/mission-to-seafarers-canada/" target="_blank" rel="noreferrer" className="p-3 bg-white text-coral rounded-full hover:scale-110 transition-transform"><Linkedin className="w-6 h-6" /></a>
            <a href="https://www.instagram.com/missiontoseafarerscanada/" target="_blank" rel="noreferrer" className="p-3 bg-white text-coral rounded-full hover:scale-110 transition-transform"><Instagram className="w-6 h-6" /></a>
            <a href="https://www.facebook.com/SeafarersCanada/" target="_blank" rel="noreferrer" className="p-3 bg-white text-coral rounded-full hover:scale-110 transition-transform"><Facebook className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-gray">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Gift className="text-coral h-10 w-10 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-navy mb-4">Give with Purpose</h2>
            <p className="text-text-mid">Mission to Seafarers Canada is part of a global ministry dedicated to caring for seafarers. You can support this work in many ways:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 className="font-bold text-navy mb-2">Make a Donation</h4>
              <p className="text-sm text-text-mid">Give a one-time gift or become a monthly supporter.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 className="font-bold text-navy mb-2">Tribute Gifts</h4>
              <p className="text-sm text-text-mid">Honour someone special by making a gift in their name.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 className="font-bold text-navy mb-2">Donor-Advised Funds</h4>
              <p className="text-sm text-text-mid">Recommend a gift and make an immediate impact.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 className="font-bold text-navy mb-2">Securities</h4>
              <p className="text-sm text-text-mid">Donate stocks or mutual funds to maximize your impact.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 className="font-bold text-navy mb-2">Corporate Support</h4>
              <p className="text-sm text-text-mid">Partner with us to support seafarers and Canada’s economy.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 className="font-bold text-navy mb-2">Legacy Giving</h4>
              <p className="text-sm text-text-mid">Leave a lasting legacy for generations to come.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img src={imgGive} alt="Give with purpose" className="rounded-xl shadow-card w-full h-48 object-cover" />
            <img src={imgHost} alt="Host your own fundraiser" className="rounded-xl shadow-card w-full h-48 object-cover" />
            <img src={imgBePart} alt="Be part of the mission" className="rounded-xl shadow-card w-full h-48 object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WaysToGetInvolvedArticle;