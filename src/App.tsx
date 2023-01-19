import React from "react";

import { getLocalTimeZone, today } from "@internationalized/date";

const Calendar = React.lazy(() => import("./components/Calendar"));
const RangeCalendar = React.lazy(() => import("./components/RangeCalendar"));

const App = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div>
        <Calendar />
      </div>
      <div>
        <RangeCalendar
          minValue={today(getLocalTimeZone())}
          defaultValue={{
            start: today(getLocalTimeZone()),
            end: today(getLocalTimeZone()).add({ weeks: 2 }),
          }}
        />
      </div>
    </div>
  );
};

export default App;
