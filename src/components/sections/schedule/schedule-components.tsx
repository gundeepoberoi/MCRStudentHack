import { Card, CardContent } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";
import { ScheduleItems } from "@/lib/schedule";

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
        <h2 className="font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl text-center">
          {title}
        </h2>
        <p className="mt-4 font-display text-2xl tracking-tight text-white text-right">
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
        <div key={`date-${day.date}-${index}`} className="flex flex-col">
          <h3 className="text-2xl font-semibold tracking-tight z-10">
            <time dateTime={day.datetime}>{day.date}</time>
          </h3>
          <p className="mt-1.5 text-base tracking-tight z-10">{day.desc}</p>

          <Card className="mt-10 space-y-8 bg-gray-900 px-10 py-14 text-center flex flex-col grow isolate shadow-lg ring-1 ring-black/5 border-none backdrop-blur-sm text-white overflow-hidden">
            <Meteors number={20} className="bg-[#18D1D4] z-10" />
            <CardContent>
              <ol role="list" className="space-y-8">
                {day.events.map((event, index) => (
                  <li
                    key={`event-${event.title}-${index}`}
                    aria-label={event.title}
                  >
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

const ScheduleScreenLayout = () => {
  return (
    <div className="overflow-x-auto gap-y-10 gap-x-4">
      {/* <div
              className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8"
              role="tablist"
              aria-orientation="vertical"
            >
              <div className="relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0 opacity-70">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  <time dateTime="2022-04-04">
                    <button
                      className="ui-not-focus-visible:outline-none"
                      id="headlessui-tabs-tab-:Rlj9rqnla:"
                      role="tab"
                      type="button"
                      aria-selected="false"
                      tabIndex={-1}
                      data-headlessui-state
                      aria-controls="headlessui-tabs-panel-:R6j9rqnla:"
                    >
                      <span className="absolute inset-0" />
                      April 4
                    </button>
                  </time>
                </h3>
                <p className="mt-1.5 text-base tracking-tight text-blue-900">
                  The first day of the conference is focused on dark patterns
                  for ecommerce.
                </p>
              </div>
              <div className="relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0">
                <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
                  <time dateTime="2022-04-05">
                    <button
                      className="ui-not-focus-visible:outline-none"
                      id="headlessui-tabs-tab-:Rpj9rqnla:"
                      role="tab"
                      type="button"
                      aria-selected="true"
                      tabIndex={0}
                      data-headlessui-state="selected"
                      aria-controls="headlessui-tabs-panel-:Raj9rqnla:"
                    >
                      <span className="absolute inset-0"></span>April 5
                    </button>
                  </time>
                </h3>
                <p className="mt-1.5 text-base tracking-tight text-blue-900">
                  Next we spend the day talking about deceiving people with
                  technology.
                </p>
              </div>
            </div>
            <div>
              <span
                aria-hidden="true"
                id="headlessui-tabs-panel-:R6j9rqnla:"
                role="tabpanel"
                aria-labelledby="headlessui-tabs-tab-:Rlj9rqnla:"
                tabIndex={-1}
                style={{
                  position: "fixed",
                  top: "1px",
                  left: "1px",
                  width: "1px",
                  height: "0px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  borderWidth: "0px",
                }}
              ></span>
              <div
                className="ui-not-focus-visible:outline-none"
                id="headlessui-tabs-panel-:Raj9rqnla:"
                role="tabpanel"
                aria-labelledby="headlessui-tabs-tab-:Rpj9rqnla:"
                tabIndex={0}
                data-headlessui-state="selected"
              >
                <ol
                  role="list"
                  className="space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
                >
                  <li aria-label="Damaris Kimura talking about The invisible card reader at 9:00AM - 10:00AM PST">
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                      Damaris Kimura
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">
                      The invisible card reader
                    </p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                      <time dateTime="2022-04-05T9:00AM-08:00">9:00AM</time> -{" "}
                      <time dateTime="2022-04-05T10:00AM-08:00">10:00AM</time>{" "}
                      PST
                    </p>
                  </li>
                  <li aria-label="Ibrahim Frasch talking about Stealing fingerprints at 10:00AM - 11:00AM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10"></div>
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                      Ibrahim Frasch
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">
                      Stealing fingerprints
                    </p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                      <time dateTime="2022-04-05T10:00AM-08:00">10:00AM</time> -{" "}
                      <time dateTime="2022-04-05T11:00AM-08:00">11:00AM</time>{" "}
                      PST
                    </p>
                  </li>
                  <li aria-label="Cathlene Burrage talking about Voting machines at 11:00AM - 12:00PM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10"></div>
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                      Cathlene Burrage
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">
                      Voting machines
                    </p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                      <time dateTime="2022-04-05T11:00AM-08:00">11:00AM</time> -{" "}
                      <time dateTime="2022-04-05T12:00PM-08:00">12:00PM</time>{" "}
                      PST
                    </p>
                  </li>
                  <li aria-label="Lunch talking about null at 12:00PM - 1:00PM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10"></div>
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                      Lunch
                    </h4>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                      <time dateTime="2022-04-05T12:00PM-08:00">12:00PM</time> -{" "}
                      <time dateTime="2022-04-05T1:00PM-08:00">1:00PM</time> PST
                    </p>
                  </li>
                  <li aria-label="Rinaldo Beynon talking about Blackhat SEO that works at 1:00PM - 2:00PM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10"></div>
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                      Rinaldo Beynon
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">
                      Blackhat SEO that works
                    </p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                      <time dateTime="2022-04-05T1:00PM-08:00">1:00PM</time> -{" "}
                      <time dateTime="2022-04-05T2:00PM-08:00">2:00PM</time> PST
                    </p>
                  </li>
                  <li aria-label="Waylon Hyden talking about Turning your audience into a botnet at 2:00PM - 3:00PM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10"></div>
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                      Waylon Hyden
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">
                      Turning your audience into a botnet
                    </p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                      <time dateTime="2022-04-05T2:00PM-08:00">2:00PM</time> -{" "}
                      <time dateTime="2022-04-05T3:00PM-08:00">3:00PM</time> PST
                    </p>
                  </li>
                  <li aria-label="Giordano Sagucio talking about Fly phishing at 3:00PM - 4:00PM PST">
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10"></div>
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">
                      Giordano Sagucio
                    </h4>
                    <p className="mt-1 tracking-tight text-blue-900">
                      Fly phishing
                    </p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                      <time dateTime="2022-04-05T3:00PM-08:00">3:00PM</time> -{" "}
                      <time dateTime="2022-04-05T4:00PM-08:00">4:00PM</time> PST
                    </p>
                  </li>
                </ol>
              </div>
              <span
                aria-hidden="true"
                id="headlessui-tabs-panel-:Rej9rqnla:"
                role="tabpanel"
                aria-labelledby="headlessui-tabs-tab-:Rtj9rqnla:"
                tabIndex={-1}
                style={{
                  position: "fixed",
                  top: "1px",
                  left: "1px",
                  width: "1px",
                  height: "0px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  borderWidth: "0px",
                }}
              ></span>
            </div> */}
    </div>
  );
};

export { ScheduleHeader, ScheduleLgScreenLayout };