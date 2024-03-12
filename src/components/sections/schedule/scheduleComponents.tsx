import { Card, CardContent } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";

interface Events {
  title: string;
  description: string;
  time: string;
}

interface ScheduleItem {
  date: string;
  datetime: string;
  desc: string;
  events: Events[];
}

interface ScheduleItems extends Array<ScheduleItem> {}

const ScheduleHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
        <h2 className="font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 font-display text-2xl tracking-tight text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

const ScheduleLgScreenLayout = ({ data }: { data: ScheduleItems }) => {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[1.10] rounded-full blur-3xl -z-1 opacity-60" />
      {data.map((day, index) => (
        <div key={day.date + index} className="flex flex-col">
          <h3 className="text-2xl font-semibold tracking-tight z-10">
            <time dateTime={day.datetime}>{day.date}</time>
          </h3>
          <p className="mt-1.5 text-base tracking-tight z-10">{day.desc}</p>

          <Card className="mt-10 space-y-8 bg-gray-900 px-10 py-14 text-center flex flex-col grow isolate shadow-lg ring-1 ring-black/5 border-none backdrop-blur-sm text-white overflow-hidden">
            <Meteors number={20} className="bg-[#18D1D4] z-10" />
            <CardContent>
              <ol role="list" className="space-y-8">
                {day.events.map((event, index) => (
                  <li key={event.title + index} aria-label={event.title}>
                    <h4 className="text-lg font-semibold tracking-tight">
                      {event.title}
                    </h4>
                    <p className="mt-1 tracking-tight">{event.description}</p>
                    <p className="mt-1 font-mono text-sm">
                      <time dateTime={event.time}>{event.time}</time>
                    </p>
                    <div
                      className={
                        index !== day.events.length - 1
                          ? "mx-auto mt-8 h-0.5 w-48 bg-white/60 rounded-full"
                          : "hidden"
                      }
                    ></div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export { ScheduleHeader, ScheduleLgScreenLayout, type ScheduleItems };
