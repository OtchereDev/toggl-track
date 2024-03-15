import { ArrowRight, CircleCheck } from "../shared/icons";

const cards = [
  {
    title: "40+ hours saved monthly",
    message:
      "at Perception Engineering with one-click time tracking and reporting",
  },
  {
    title: "100% time tracking adoption",
    message:
      "with easy, non-intrusive time reporting at software consultancy Newlogic",
  },
  {
    title: "20% increase in profitability",
    message: "by accurately tracking billable work hours at Sweat+Co PR agency",
    isYellow: true,
  },
];

export default function TimeTracking() {
  return (
    <section className="bg-[#2c1338] px-10 py-28">
      <div className="ml-16 mb-20 bg-[#f8d8f3] text-[clamp(3rem*0.6,3vw,3rem)] font-gtMedium max-w-[950px] font-medium p-8 rounded-[20px]">
        <h3 className="font-gtMedium">Time tracking? Do you mean</h3>
        <div className="flex items-center gap-4">
          <div className="bg-[#412a4d] transition-all rounded-full px-5 py-1.5 text-white">
            <p>micromanaging</p>
          </div>
          <h3>my employees?</h3>
        </div>
      </div>
      <div className="pl-[35%] mr-8 mb-20">
        <h3 className="font-gtMedium text-[#FEFBFA] mb-5 leading-[1.25] text-[clamp(3rem*0.6,3vw,3rem)]">
          No, we do not. At Toggl, we see time as an{" "}
          <span className="text-[#e28fd8] opportunity px-16 font-gtMediumRotate">
            opportunity.
          </span>
        </h3>
        <p className="text-[#FEFBFA]  text-[1.55rem] leading-[1.7]">
          An opportunity to convert time tracked into actionable insights that
          boost productivity, increase efficiency and balance team workloads. So
          you can drive{" "}
          <span className="opportunity-underline">
            profitability and growth
          </span>{" "}
          while prioritising your team's{" "}
          <span className="opportunity-underline">trust and well-being</span>.
        </p>
      </div>
      <div className="px-8">
        <h3 className="text-[#FEFBFA] font-semibold">
          COMPANIES THAT USE TOGGL TRACK SEE:
        </h3>

        <div className="flex gap-8 mt-8">
          {cards.map((card) => (
            <div
              className={`${
                card.isYellow ? "bg-[#fdf1ec]" : "bg-[#f8d8f3]"
              } flex-1 p-7 rounded-lg`}
            >
              <h3 className="font-gtMedium text-[clamp(2rem*0.75,2.5vw,2rem*0.88)] pr-4 leading-[0.9] mb-4">
                {card.title}
              </h3>
              <p className="text-[#6B5A74] text-[clamp(1.125rem*0.9,1.25vw,1.125rem)] mb-8">
                {card.message}
              </p>

              <div className="border-t border-gray-800 flex pt-4 gap-3 items-center">
                <p className="font-gtMedium hover:font-gtMediumRotate cursor-pointer">
                  Read case study
                </p>
                <ArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="font-gtMedium text-[#fdf1ec] text-[clamp(3rem*0.6,3vw,3rem)] text-center max-w-[800px] mx-auto">
          Want better insights on how your team is spending their time?
        </h3>

        <div className="flex justify-center items-center mt-9 text-white gap-7">
          {[
            "No credit card required",
            "Free 30-day trial for all features",
            "Cancel anytime",
          ].map((item) => (
            <div className="flex gap-2 items-center">
              <CircleCheck />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-9 pb-9">
          <button className="bg-[#e67cd8] text-white px-5 py-3.5 rounded-full">
            Start tracking for free
          </button>
          <button className="text-white">Or read more case studies</button>
        </div>
      </div>
    </section>
  );
}
