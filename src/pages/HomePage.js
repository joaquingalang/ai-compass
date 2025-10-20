import { ReactComponent as StarIcon } from "../assets/star_icon.svg";
import GroupPhoto from "../assets/group_photo.png";
import CompassGif from "../assets/compass.gif";
import NavBar from "../components/NavBar";
import ResearcherTile from "../components/ResearcherTile";
import FeatureCard from "../components/FeatureCard";
import Waves from "../components/Waves";

const researchers = [
  "Christian Adlawan",
  "John Escoto",
  "Judelle Fajardo",
  "Kirsten Gueco",
  "Angelika Hertez",
  "Elisha Lugtu",
  "Mikhail Mallonga",
  "Joaquin Tagaza",
  "Cyrus Tolentino",
  "Leitnier Vital"
];

function HomePage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[32rem] sm:min-h-[36rem] lg:min-h-[40rem] overflow-hidden flex items-center mt-20"
      >
        <Waves />

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-[97px] grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Headline */}
          <div className="flex justify-center lg:justify-start items-center text-center lg:text-left">
            <p className="text-brand-indigo-400 font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Detecting AI influence,<br className="hidden sm:block" />
              preserving human voice.
            </p>
          </div>

          {/* Right Column: Description + Buttons */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="flex flex-col text-center lg:text-left space-y-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-indigo-200 font-outfit leading-relaxed">
                We evaluate the likelihood that a piece was written by AI.
                <br className="hidden sm:block" />
                Our goal is to support academic integrity and authentic writing.
              </p>

              {/* Buttons */}
              <div className="flex flex-row justify-center lg:justify-start items-center sm:items-stretch gap-4 sm:gap-6">
                <a href="https://docs.google.com/document/d/1C79m_3P8ldWXqTsC02rfRWm5PRtrzzEiNzcWlS7OO0M/edit?usp=sharing" target="_blank">
                  <button className="border-2 border-brand-indigo-400 text-brand-indigo-400 font-outfit rounded-xl px-6 py-3 text-lg sm:text-xl lg:text-2xl hover:bg-brand-indigo-400 hover:text-white transition-all duration-300 w-full sm:w-auto">
                    View Paper
                  </button>
                </a>

                <a href="/analysis">
                  <button className="bg-brand-turqoise-200 text-white font-outfit rounded-xl px-6 py-3 text-lg sm:text-xl lg:text-2xl hover:brightness-110 transition-all duration-300 w-full sm:w-auto">
                    Start Analysis
                  </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Quote Section */}
      <section id="quote">
        <div className="w-full py-16 sm:py-20 bg-brand-turqoise-100 flex flex-col justify-center items-center">
          <div className="w-[85%] sm:w-[65%] lg:w-[50%] text-center">
            <p className="text-2xl sm:text-3xl text-brand-indigo-400 font-outfit mb-8">
              “As an academic, what do you have? You have the quality of your
              work and the integrity with which you do it.”
            </p>
            <p className="text-xl sm:text-2xl text-brand-indigo-400 font-outfit text-end">
              — Ezekiel Emanuel
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 overflow-hidden">
        <Waves />
        <div className="relative z-10 mx-6 sm:mx-12 lg:mx-[97px] flex flex-col justify-center items-center">
          <div className="flex flex-wrap justify-center items-center mb-12 space-x-4">
            <StarIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-medium">
              Key Features
            </p>
            <StarIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
      <section id="researchers">
        <div className="w-full bg-brand-turqoise-200 py-16 px-6 sm:px-12 lg:px-[97px]">
          <p className="text-white text-3xl sm:text-4xl font-outfit font-medium mb-2 text-center lg:text-left">
            Meet the Researchers
          </p>
          <p className="text-white text-base sm:text-lg font-outfit font-light mb-8 text-center lg:text-left">
            From SVPSPC: Students committed to innovation and academic integrity.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {researchers.map((name, i) => (
              <ResearcherTile key={i} name={name} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-20">
        <Waves />
        <div className="relative z-10 mx-6 sm:mx-12 lg:mx-[97px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40 items-center">
            <div className="w-full bg-brand-indigo-400 rounded-xl p-6 sm:p-10">
              <form>
                <p className="text-white text-lg sm:text-xl font-outfit font-light">
                  GET IN TOUCH
                </p>
                <p className="text-white text-4xl sm:text-[56px] font-outfit font-extrabold mb-4">
                  Contact.
                </p>

                <label
                  htmlFor="name"
                  className="text-white text-lg sm:text-xl font-outfit font-medium"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  placeholder="What's your name?"
                  className="w-full bg-brand-indigo-300 rounded-xl mt-2 mb-5 px-5 py-3 text-white"
                />

                <label
                  htmlFor="email"
                  className="text-white text-lg sm:text-xl font-outfit font-medium"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  placeholder="What's your email?"
                  className="w-full bg-brand-indigo-300 rounded-xl mt-2 mb-5 px-5 py-3 text-white"
                />

                <label
                  htmlFor="message"
                  className="text-white text-lg sm:text-xl font-outfit font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="What do you want to say?"
                  className="w-full h-[12rem] sm:h-[15rem] bg-brand-indigo-300 rounded-xl mt-2 mb-5 px-5 py-3 text-white"
                ></textarea>

                <div className="flex justify-end">
                  <input
                    type="submit"
                    value="Send Message"
                    className="rounded-lg text-white text-base sm:text-lg bg-brand-turqoise-200 font-semibold px-5 py-2 cursor-pointer"
                  />
                </div>
              </form>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <img
                src={GroupPhoto}
                alt="Group 1"
                className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
