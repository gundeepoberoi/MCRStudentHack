import {
  ScheduleHeader,
  ScheduleLgScreenLayout,
  type ScheduleItems,
} from "./scheduleComponents";

const scheduleList: ScheduleItems = [
  {
    date: "April 13",
    datetime: "2024-04-13",
    desc: "Day 1 of hackathon.",
    events: [
      {
        time: "9:00AM - 10:00AM",
        title: "Some event title",
        description: "Some event description.",
      },
      {
        time: "10:00AM - 11:00AM",
        title: "Some event title",
        description: "Some event description.",
      },
    ],
  },
  {
    date: "April 14",
    datetime: "2024-04-14",
    desc: "Day 2 of hackathon.",
    events: [
      {
        time: "9:00AM - 10:00AM",
        title: "Some event title",
        description: "Some event description.",
      },
    ],
  },
];

const Schedule = () => {
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
};

export default Schedule;
