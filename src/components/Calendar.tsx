import {
  CalendarStateOptions,
  useCalendarState,
} from "@react-stately/calendar";
import { useCalendar } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";

// Omit these because we get them in component.
type Props = Omit<
  CalendarStateOptions,
  "locale" | "visibleDuration" | "createCalendar"
>;

const Calendar = ({ ...props }: Props) => {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    visibleDuration: { months: 2 },
    locale,
    createCalendar,
  });

  let { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props,
    state
  );

  return (
    <div {...calendarProps} className="inline-block text-gray-800">
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

export default Calendar;
