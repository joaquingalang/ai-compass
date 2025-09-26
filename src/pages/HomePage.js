import { ReactComponent as StarIcon } from "../assets/star_icon.svg";
import GroupPhoto from "../assets/group_photo.png";
import NavBar from "../components/NavBar";
import ResearcherTile from "../components/ResearcherTile";
import FeatureCard from "../components/FeatureCard";
import Waves from "../components/Waves";

function HomePage() {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <section name="hero" className="relative h-[40rem] overflow-hidden">
        <Waves/>
        <div className="relative z-10 h-full mx-[97px] grid grid-cols-2">
          <div className="flex justify-start items-center">
            <p className="text-brand-indigo-400 font-outfit text-6xl font-medium">
              Detecting AI influence,<br />preserving human voice.
            </p>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex flex-col">
              <p className="text-2xl text-brand-indigo-200 font-outfit">
                We evaluate the likelihood that a piece was written by
                <br />AI. Our goal is to support academic integrity and
                <br />authentic writing.
              </p>
              <div className="flex mt-4">
                <div className="bg-transparent border-2 border-brand-indigo-400 rounded-xl mr-2 cursor-pointer">
                  <p className="text-2xl text-brand-indigo-400 font-outfit px-4 py-2">
                    View Paper
                  </p>
                </div>
                <div className="bg-brand-turqoise-200 rounded-xl mx-2 cursor-pointer">
                  <p className="text-2xl text-white font-outfit px-4 py-2">
                    Start Analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section name="quote">
        <div className="w-full h-[18rem] bg-brand-turqoise-100 flex flex-col justify-center items-center">
          <div className="w-[50%] h-[15rem] flex flex-col justify-center items-center">
            <p className="text-3xl text-brand-indigo-400 font-outfit text-center mb-8">
              “As an academic, what do you have? You have the quality of your
              work and the integrity with which you do it.”
            </p>
            <p className="text-3xl text-brand-indigo-400 font-outfit text-end self-end">
              — Ezekiel Emanuel
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section name="features"  className="relative h-[40rem] overflow-hidden">
        <Waves/>
        <div className="relative z-10 h-[40rem] mx-[97px] flex flex-col justify-center items-center">
          <div className="flex mb-[3.5rem]">
            <StarIcon />
            <p className="text-4xl font-outfit font-medium mx-8">Key Features</p>
            <StarIcon />
          </div>
          <div className="w-full grid grid-cols-3 gap-12">
            <FeatureCard
              icon={"brain"}
              title={"AI Detection"}
              desc={
                "Analyzes essays, poems, and papers to estimate the likelihood of AI involvement."
              }
            />
            <FeatureCard
              icon={"stats"}
              title={"Clear Results"}
              desc={
                "Presents easy-to-understand scores and explanations to highlight authenticity."
              }
            />
            <FeatureCard
              icon={"culture"}
              title={"Academic Focus"}
              desc={
                "Built to support originality, integrity, and trust in scholarly work."
              }
            />
          </div>
        </div>
      </section>

      {/* Researchers Section */}
      <section name="researchers">
        <div className="w-full h-[25rem] bg-brand-turqoise-200">
          <div className="mx-[97px] py-[4rem]">
            <p className="text-white text-4xl font-outfit font-medium mb-2">
              Meet the Researchers
            </p>
            <p className="text-white text-lg font-outfit font-light mb-6">
              From SVPSPC: Students committed to innovation and academic
              integrity.
            </p>
            <div className="w-full grid grid-cols-5 gap-5">
              <ResearcherTile name={"Leitner Vital"} />
              <ResearcherTile name={"Leitner Vital"} />
              <ResearcherTile name={"Leitner Vital"} />
              <ResearcherTile name={"Leitner Vital"} />
              <ResearcherTile name={"Leitner Vital"} />
              <ResearcherTile name={"Leitner Vital"} />
              <ResearcherTile name={"Leitner Vital"} />
              <ResearcherTile name={"Leitner Vital"} />
              <ResearcherTile name={"Leitner Vital"} />
              <ResearcherTile name={"Leitner Vital"} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section name="contact"  className="relative overflow-hidden">
        <Waves/>
        <div className="relative z-10 mx-[97px] my-[80px]">
          <div className="w-full h-full grid grid-cols-2 gap-40">
              <div className="w-full h-full bg-brand-indigo-400 rounded-xl p-10">
                <form action="">
                  <p className="text-white text-xl font-outfit font-light">GET IN TOUCH</p>

                  <p className="text-white text-[56px] font-outfit font-extrabold">Contact.</p>

                  <label htmlFor="name" className="text-white text-xl font-outfit font-medium">Your Name</label>
                  <input id="name" placeholder="What's your name?" className="w-full bg-brand-indigo-300 rounded-xl mt-2 mb-5 px-5 py-3"/>

                  <label htmlFor="email" className="text-white text-xl font-outfit font-medium">Your Email</label>
                  <input id="email" placeholder="What's your email?" className="w-full bg-brand-indigo-300 rounded-xl mt-2 mb-5 px-5 py-3"/>
                  
                  <p htmlFor="message" className="text-white text-xl font-outfit font-medium">Your Message</p>
                  <textarea id="message" placeholder="What do you want to say?" className="w-full h-[15rem] bg-brand-indigo-300 rounded-xl mt-2 mb-5 px-5 py-3"></textarea>

                  <div className="flex justify-end">
                    <input type="submit" value="Send Message" className="rounded-lg text-white text-lg bg-brand-turqoise-200 font-semibold px-5 py-2 cursor-pointer"/>
                  </div>
                </form>
              </div>

              <div className="w-full h-full flex justify-center items-center">
                <img src={GroupPhoto} alt="Group 1" className="relative z-0" />
              </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
