import { scheduleList } from "@/lib/schedule";
import { ScheduleHeader, ScheduleLgScreenLayout } from "./scheduleComponents";

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 sm:py-32">
      <ScheduleHeader
        title="Schedule"
        description="A 24-hour hackathon to build the best among us amongst us in the among
          us metaverse."
      />
      <div className="relative mt-14 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"></div>
          <ScheduleLgScreenLayout data={scheduleList} />
        </div>
      </div>
    </section>
  );
}
