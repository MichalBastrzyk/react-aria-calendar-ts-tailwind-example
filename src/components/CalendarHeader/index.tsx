import { useDateFormatter } from "@react-aria/i18n";

import type {
  CalendarState,
  RangeCalendarState,
} from "@react-stately/calendar";

import type { AriaButtonProps } from "@react-aria/button";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import Button from "./Button";

type Props = {
  state: CalendarState | RangeCalendarState;
  prevButtonProps: AriaButtonProps<"button">;
  nextButtonProps: AriaButtonProps<"button">;
};

const CalendarHeader = ({ state, prevButtonProps, nextButtonProps }: Props) => {
  let monthDateFormatter = useDateFormatter({
    month: "long",
    year: "numeric",
    timeZone: state.timeZone,
  });

  return (
    <div className="flex items-center py-4">
      <Button {...prevButtonProps}>
        <HiChevronLeft className="h-6 w-6" />
      </Button>
      <h2
        aria-hidden
        className="flex-1 align-center font-bold text-xl text-center"
      >
        {monthDateFormatter.format(
          state.visibleRange.start.toDate(state.timeZone)
        )}
      </h2>
      <h2
        aria-hidden
        className="flex-1 align-center font-bold text-xl text-center"
      >
        {monthDateFormatter.format(
          state.visibleRange.start.add({ months: 1 }).toDate(state.timeZone)
        )}
      </h2>
      <Button {...nextButtonProps}>
        <HiChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default CalendarHeader;
