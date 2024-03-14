import { scheduleList } from "@/lib/schedule";
import { ScheduleHeader, ScheduleLgScreenLayout } from "./schedule-components";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RxExclamationTriangle } from "react-icons/rx";
import { IconContext } from "react-icons";

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 sm:py-32">
      <ScheduleHeader
        title="Schedule"
        description="Our hackathons aren't just 24 hours of straight coding - there'll be many workshops, mini-games and events for everyone to have fun and learn!"
      />
      <div className="relative mt-14 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"></div>
          {/* <ScheduleLgScreenLayout data={scheduleList} /> */}
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[1.10] rounded-full blur-3xl -z-1 opacity-60" />

          {/* Alert Component: needs to be removed once the section is complete */}
          <Alert
            variant={"destructive"}
            className="text-xs md:font-medium md:text-lg backdrop-blur-sm text-[#10F6D3] border-[#10F6D3]"
          >
            <IconContext.Provider value={{ color: "#10F6D3" }}>
              <RxExclamationTriangle className="h-4 w-4" />
            </IconContext.Provider>
            <AlertTitle>Coming soon</AlertTitle>
            <AlertDescription>
              We are working on the schedule. Check back later for updates.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
