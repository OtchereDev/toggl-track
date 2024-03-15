import { PlayIcon } from "~/components/shared/icons";
import Banner from "~/assets/image/toggl-track-reports.avif";

export default function Top() {
  return (
    <section className="bg-[#2c1338] pt-32 pb-10 px-10 flex gap-10 items-center overflow-x-hidden">
      <div className="w-[50%] pl-8">
        <h1 className="text-[clamp(4.5rem*0.5,4.2vw,4.5rem)]  font-semibold font-gtMedium text-white leading-tight">
          <span className="text-[#e67cd8] font-gtMediumRotate">
            Frictionless
          </span>{" "}
          time tracking software for teams
        </h1>
        <p className="text-white leading-[1.5] max-w-[90%] text-[clamp(1.375rem*0.75,1.55vw,1.375rem)] mt-9">
          Give your team a time tracker they’ll love, and help your managers
          make profitable project decisions with meaningful time data insights.
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-[#e67cd8] hover:bg-white hover:bg-opacity-10 text-white py-3 px-6 rounded-full">
            Start tracking for free
          </button>
          <button className="flex items-center gap-2 text-white py-3 px-6 hover:bg-white hover:bg-opacity-10 rounded-full group">
            <PlayIcon color="white" className="w-6 h-6 group-hover:scale-125" />
            See how it works
          </button>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="w-[130%] relative right-0 banner">
          <img src={Banner} className="w-[90%]" />
        </div>
      </div>
    </section>
  );
}
