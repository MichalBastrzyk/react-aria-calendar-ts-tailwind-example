import { useRef } from "react";

import { useRangeCalendarState } from "@react-stately/calendar";
import type { RangeCalendarStateOptions } from "@react-stately/calendar";

import { useRangeCalendar } from "@react-aria/calendar";

import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";

import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";

// Omit these because we get them in component.
type Props = Omit<
  RangeCalendarStateOptions,
  "locale" | "visibleDuration" | "createCalendar"
>;

const RangeCalendar = ({ ...props }: Props) => {
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 2 },
    locale,
    createCalendar,
  });

  let ref = useRef<HTMLDivElement>(null);
  let { calendarProps, prevButtonProps, nextButtonProps } = useRangeCalendar(
    props,
    state,
    ref
  );

  return (
    <div {...calendarProps} ref={ref} className="inline-block text-gray-800">
      <CalendarHeader
        state={state}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
      />
      <div className="flex gap-8">
        <CalendarGrid state={state} />
        <CalendarGrid state={state} offset={{ months: 1 }} />
      </div>
    </div>
  );
};

export default RangeCalendar;
