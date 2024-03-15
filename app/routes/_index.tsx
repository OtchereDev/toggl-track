import type { MetaFunction } from "@remix-run/node";

import Top from "~/components/home/Top";
import NavBar from "~/components/shared/NavBar";
import Brands from "~/components/home/Brands";
import Flexible from "~/components/home/Flexible";
import TimeTracking from "~/components/home/TimeTracking";

export const meta: MetaFunction = () => {
  return [
    { title: "Toggl Track: Time Tracking Software For Any Workflow" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="relative">
      <NavBar />
      <Top />
      <Brands />
      <Flexible />
      <TimeTracking />
    </main>
  );
}
