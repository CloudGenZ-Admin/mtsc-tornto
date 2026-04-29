import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Ship, Anchor, Users, Heart, CheckCircle2, Navigation } from "lucide-react";

// Importing Images
import imgM1 from "@/assets/M/M1A Mission Rooted in the Port.png";
import imgM2 from "@/assets/M/M2Leadership That Reflects the Future.png";
import imgM3 from "@/assets/M/M3The Return of a Harbour Home.jpg";
import imgM4 from "@/assets/M/M4.png";
import imgV1 from "@/assets/M/V1.png";
import imgV2 from "@/assets/M/V2A Life of Service in Thunder Bay.jpg";

const Newsletter = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        eyebrow="May Newsletter"
        title="MTSC Monthly Update"
        description="Discover the latest news from the Port of Toronto, updates on our returning Harbour Home, and inspiring stories from the volunteers who make our mission possible."
      />

      {/* Maritime News Intro & Mission */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow flex items-center justify-center gap-2 mb-3">
              <Ship className="w-5 h-5" /> Maritime News
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
              Port of Toronto: A Harbour of Trade, A Place of Care, A New Chapter Begins
            </h2>
            <p className="text-lg text-text-mid leading-relaxed">
              Most people never think about the Port of Toronto. Yet every day, it quietly keeps Canada moving. 
              Ships arrive carrying the goods that shape daily life, materials for our cities, food for our tables, 
              and supplies that fuel entire industries. Like ports around the world, it is part of a global system 
              where around 80 to 90 percent of global trade by volume is transported by sea.
            </p>
            <p className="text-lg text-text-mid leading-relaxed mt-4">
              But beyond cargo and commerce, the Port of Toronto is also a place of people. Every vessel carries 
              seafarers, individuals who spend months at sea, far from home, working long hours in often isolating 
              conditions. For many, arriving in port is one of the few opportunities to rest, reconnect with loved 
              ones, and access support on land.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Anchor className="text-coral h-6 w-6" />
                <h3 className="text-2xl font-extrabold text-navy">A Mission Rooted in the Port</h3>
              </div>
              <p className="text-text-mid leading-relaxed">
                For over six decades, Mission to Seafarers Canada has been part of that story in Toronto. Through 
                the Mission to Seafarers Southern Ontario, the organization has supported seafarers since the early 
                1960s, offering something simple, yet powerful: a place of welcome.
              </p>
              <p className="text-text-mid leading-relaxed">
                Guided by a dedicated Board of Directors and regional leadership, the Mission to Seafarers Southern 
                Ontario continues to strengthen its impact across ports in the region, ensuring that care for 
                seafarers remains consistent, coordinated, and deeply human.
              </p>
            </div>
            <div>
              <img src={imgM1} alt="A Mission Rooted in the Port" className="rounded-2xl shadow-card w-full object-cover aspect-video" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Harbour Home */}
      <section className="py-20 bg-warm-gray">
        <div className="container-page space-y-20">
          
          {/* Leadership Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={imgM2} alt="Leadership That Reflects the Future" className="rounded-2xl shadow-card w-full object-cover aspect-video" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-extrabold text-navy">Leadership That Reflects the Future</h3>
              <p className="text-text-mid leading-relaxed">
                At the heart of this work is Judith Alltree, a leader whose impact has shaped seafarer welfare 
                across Canada. From expanding services across Southern Ontario to supporting national coordination 
                during the COVID-19 pandemic, her leadership reflects decades of commitment to those who are often 
                unseen. And it carries deeper meaning.
              </p>
              <p className="text-text-mid leading-relaxed">
                In a sector historically led by men, seafarer welfare at the Port of Toronto has long been guided 
                by a woman. As the maritime industry continues to evolve, this leadership stands not just as 
                progress, but as proof of what is possible.
              </p>
            </div>
          </div>

          {/* Harbour Home Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-navy">The Return of a Harbour Home</h3>
              <p className="text-text-mid leading-relaxed">
                In 2019, the Mission’s physical presence in the port was lost following a devastating flood. 
                For seven years, the work continued, but without a place to gather, something was missing. 
                Because for seafarers, space matters. A place to sit. A place to call home. A place to simply be.
              </p>
              <p className="text-text-mid leading-relaxed font-medium text-navy">
                Now, with the support of the Port of Toronto, that space is returning. A new station is reopening 
                within the port, restoring a place where seafarers can connect with loved ones, receive practical 
                support, and experience the care that has defined this Mission for generations.
              </p>
            </div>
            <div>
              <img src={imgM3} alt="The Return of a Harbour Home" className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]" />
            </div>
          </div>

        </div>
      </section>

      {/* Marking the moment & More than a port */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-navy">Marking the Moment: Women in Maritime 2026</h3>
                <p className="text-text-mid leading-relaxed">
                  This reopening will be marked by Women in Maritime 2026, hosted in partnership with SeaLight 
                  Sisters Society and Georgian College, and aligned with the International Day for Women in 
                  Maritime led by the International Maritime Organization. 
                </p>
                <p className="text-text-mid leading-relaxed">
                  Guided by the theme <em>From Policy to Practice: Advancing Gender Equality for Maritime Excellence</em>, 
                  the event brings together industry leaders, educators, and emerging voices to move beyond 
                  conversation and into action. The choice to mark this reopening in this way is intentional. It 
                  reflects the leadership already shaping this work. The voices that must continue to be elevated. 
                  And the future the maritime industry is building toward.
                </p>
              </div>

              <div className="bg-warm-gray rounded-2xl p-6 md:p-8 border border-border mt-8">
                <h3 className="text-xl font-extrabold text-navy mb-4 flex items-center gap-2">
                  <Navigation className="text-coral w-5 h-5" /> More Than a Port
                </h3>
                <p className="text-text-mid mb-6">
                  The Port of Toronto will always be a place of trade. But through the work of the Mission to 
                  Seafarers, it is also a place of care. A place where a seafarer can step off a ship and find:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3 items-center"><CheckCircle2 className="text-coral w-5 h-5 shrink-0" /><span className="font-medium text-navy">A warm drink</span></li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="text-coral w-5 h-5 shrink-0" /><span className="font-medium text-navy">A connection home</span></li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="text-coral w-5 h-5 shrink-0" /><span className="font-medium text-navy">A moment of rest</span></li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="text-coral w-5 h-5 shrink-0" /><span className="font-medium text-navy">A reminder that they are not invisible</span></li>
                </ul>
                <p className="text-navy font-bold italic">Because behind every shipment is a person.</p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img src={imgM4} alt="Women in Maritime 2026" className="rounded-2xl shadow-card w-full object-cover lg:sticky lg:top-24" />
            </div>

          </div>
        </div>
      </section>

      {/* Volunteer Spotlight */}
      <section className="py-20 md:py-28 bg-navy text-white overflow-hidden relative">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Users size={400} />
        </div>
        
        <div className="container-page relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow flex items-center justify-center gap-2 mb-3 text-coral">
              <Heart className="w-5 h-5" /> Volunteer Spotlight
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Celebrating Those Who Serve Behind the Scenes
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              At the Mission to Seafarers Canada, our work does not begin with programs, buildings, or events. 
              It begins with people. Volunteers are the quiet force behind everything we do. They are the ones 
              who show up, who listen, who care, and who make it possible for seafarers to feel seen in moments 
              when they are far from home. Without volunteers, this mission would not exist.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-2xl font-extrabold text-white">A Life of Service in Thunder Bay</h3>
              <p className="text-white/80 leading-relaxed">
                At our Thunder Bay station, Ed Swayze, Senior Chaplain, understands this deeply. His work is not 
                done alone. It is shared. Day by day and visit by visit, Ed divides his time between seafarers 
                and the dedicated volunteers who stand beside him. Whether it is coordinating ship visits, offering 
                support, or simply being present, volunteers extend the reach of care far beyond what one person 
                could do.
              </p>
              <p className="text-white/80 leading-relaxed">
                Their contribution is not small. It is essential. Recognizing this, Ed is currently developing a 
                Volunteer Handbook, a thoughtful and practical guide designed to ensure that every volunteer is 
                supported, prepared, and empowered to serve effectively. Because when volunteers are equipped, the 
                impact multiplies.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <img src={imgV1} alt="Volunteers in action" className="rounded-2xl shadow-card w-full object-cover border-4 border-white/10" />
              <img src={imgV2} alt="Ed Swayze in Thunder Bay" className="rounded-2xl shadow-card w-full object-cover border-4 border-white/10" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            <div>
              <h4 className="text-xl font-bold text-coral mb-3">One Mission. Many Hands.</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Across all our stations in Canada, this story continues. From Toronto to Hamilton, from Halifax to 
                Newfoundland and Labrador, and in Thunder Bay, volunteers are welcoming seafarers into safe spaces, 
                offering conversation and companionship.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-coral mb-3">A Thank You That Matters</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                To every volunteer across our network, we say this clearly. Thank you for your time. Thank you for 
                your compassion. Because of you, a seafarer stepping off a ship in an unfamiliar port does not feel 
                alone. They feel welcomed.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-coral mb-3">Moving Forward Together</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                As we continue to grow across Canada, our commitment remains the same. To invest in our volunteers. 
                To support their leadership. And to recognize that behind every act of care is a person who has 
                chosen to give their time to others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-coral text-white text-center">
        <div className="container-page max-w-4xl mx-auto">
          <Heart className="mx-auto h-12 w-12 text-white/90 mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Every Act of Kindness Makes a Difference
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto">
            From reading our latest news to lending a hand, your involvement helps remind seafarers that they 
            are not alone. Join us in making a difference today.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Button size="lg" asChild className="w-full sm:w-auto bg-white hover:bg-gray-100 text-coral font-bold h-14 px-8">
              <Link to="/get-involved#donate">Donate Now</Link>
            </Button>

            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-navy bg-transparent font-bold h-14 px-6">
              <Link to="/get-involved#ways-to-help">Become a Volunteer</Link>
            </Button>

            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-navy bg-transparent font-bold h-14 px-6">
              <Link to="/contact">Contact the Station</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;