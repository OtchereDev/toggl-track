import { Link } from "@remix-run/react";
import { useState } from "react";

import { Stars } from "../shared/icons";

import TimeReporting from "~/assets/image/flexible/screen-time-reporting.avif";
import TimeBilling from "~/assets/image/flexible/screen-time-billing.avif";
import ProjectTracking from "~/assets/image/flexible/screen-project-time-tracking.avif";
import TeamWorkload from "~/assets/image/flexible/screen-employee-time-tracking.avif";

const tabs = [
  {
    tab: "Time reporting",
    subtitle: "INSIGHTFUL TIME REPORTING SOFTWARE",
    title: "Know exactly how much time your team spends on tasks",
    message:
      "Say goodbye to inaccurate weekly timesheets and get a handle on your team's exact billable and non-billable hours.",
    comment:
      "Time management software that helps improve metrics and estimates",
    person: "Marie, Project Coordinator",
    image: TimeReporting,
  },
  {
    tab: "Time billing",
    subtitle: "ACCURATE TIME BILLING SOFTWARE",
    title:
      "Do you sell your time? We'll help you get the numbers right. Every time.",
    message:
      "Set hourly rates, track billable time, create invoices, and share them with your clients to get paid on time.",
    comment: "The best tool for tracking, budgeting, and invoicing",
    person: "Felicity, Enterprise",
    image: TimeBilling,
  },
  {
    tab: "Project tracking",
    subtitle: "PROJECT TIME TRACKING SOFTWARE",
    title: "No more anxiety over late deadlines or unprofitable projects",
    message:
      "Organize project tasks, track project hours, and compare estimated vs. actual time and costs to deliver projects profitably.",
    comment:
      "Changed our project time tracking into an organized, cohesive activity",
    person: "Steve, Small Business",
    image: ProjectTracking,
  },

  {
    tab: "Team workload",
    subtitle: "EMPLOYEE TIME TRACKING SOFTWARE",
    title:
      "Improve team productivity and happiness without the micromanagement",
    message:
      "Track employee work hours, generate timesheet reports, and balance resource workloads to keep the team from overworking or burning out.",
    comment:
      "Helps ensure there are no surprises in terms of deadlines, resources or efficiency",
    person: "Breanna, Software Coder",
    image: TeamWorkload,
  },
];

export default function Flexible() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="bg-[#fefbfa] px-[72px] pt-24 pb-24 overflow-x-hidden">
      <h1 className="text-center text-[clamp(3rem*0.6,3vw,3rem)] max-w-[700px] mx-auto font-gtMedium text-[#412A4C]">
        <span className="font-gtMediumRotate">Flexible</span> time tracking tool
        for your business needs
      </h1>

      <div className="flex justify-center items-center mt-14 gap-8">
        {tabs.map((tab, idx) => (
          <button
            className={`hover:font-gtMediumRotate px-6 py-3 rounded-full  font-semibold ${
              selected == idx
                ? "bg-[#412A4C] text-[#ffebbd] font-gtMediumRotate"
                : "text-[#412A4C] bg-[#ffebbd] font-gtMedium"
            }`}
            onClick={() => setSelected(idx)}
          >
            {tab.tab}
          </button>
        ))}
      </div>
      <div className="flex gap-[30px] mt-12">
        <div className="w-[40%]">
          <h4 className="text-[clamp(1rem*0.8,1vw,1rem*0.9)] font-semibold text-[#6B5A74] mb-6">
            {tabs[selected].subtitle}
          </h4>
          <h2 className="text-[clamp(2rem*0.8,2.5vw,2rem)] font-gtMedium leading-tight mb-6 text-[#412A4C]">
            {tabs[selected].title}
          </h2>
          <p className="mb-4">{tabs[selected].message}</p>

          <Link
            className="mb-7 inline-block l font-gtMedium hover:font-gtMediumRotate text-[#e67cd8]"
            to={""}
          >
            More about
          </Link>
          <div className="border-l-2 pl-5 border-[#412A4C]">
            <Stars />
            <p className="mt-2">“{tabs[selected].comment}”</p>
            <p className="mt-4 text-sm">{tabs[selected].person}</p>
          </div>
        </div>
        <div className="w-[60%]">
          <img src={tabs[selected].image} alt={tabs[selected].tab} />
        </div>
      </div>
    </section>
  );
}
