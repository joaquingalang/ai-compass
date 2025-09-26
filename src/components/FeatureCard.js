import { ReactComponent as StarIcon } from "../assets/star_icon.svg";
import { ReactComponent as BrainIcon } from "../assets/brain_icon.svg";
import { ReactComponent as StatsIcon } from "../assets/stats_icon.svg";
import { ReactComponent as CultureIcon } from "../assets/culture_icon.svg";
import TiltCard from "./TiltCard";

function FeatureCard({ icon, title, desc }) {
  const featureIcon = () => {
    switch (icon) {
      case "brain":
        return <BrainIcon className="mr-3" />;
      case "stats":
        return <StatsIcon className="mr-3" />;
      case "culture":
        return <CultureIcon className="mr-3" />;
      default:
        return <StarIcon className="mr-3" />;
    }
  };

  return (
    <TiltCard className="w-full h-[18rem]">
      {/* Gradient border wrapper */}
      <div className="relative w-full h-[15rem] rounded-lg p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-brand-turqoise-200 hover:to-brand-turqoise-100 transition duration-300">
        {/* Inner card (so gradient shows as border) */}
        <div className="w-full h-full rounded-lg bg-brand-indigo-100 flex flex-col">
          <div className="m-10">
            <div className="flex items-center mb-4">
              {featureIcon()}
              <p className="text-brand-indigo-400 font-outfit text-3xl font-medium">
                {title}
              </p>
            </div>
            <p className="text-brand-indigo-200 text-[22px]">{desc}</p>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

export default FeatureCard;
