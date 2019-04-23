import React, { createContext, useState } from "react";

export const ShiftTimesContext = createContext(null);

const hours = [
  "12:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00"
];

const ampm = ["AM", "PM"];

const prebuilt = {
  shift_one_begin: "06:00",
  shift_one_end: "14:00",
  shift_two_begin: "14:00",
  shift_two_end: "22:00",
  shift_three_begin: "22:00",
  shift_three_end: "06:00"
};

export default function ShiftTimesProvider(props) {
  const [id, setId] = useState(-1);
  const [option, setOption] = useState("");
  const [noThirdShift, setNoThirdShift] = useState(false);
  const [shiftOneStart, setShiftOneStart] = useState(0);
  const [shiftOneStartAmPm, setShiftOneStartAmPm] = useState(0);
  const [shiftOneEnd, setShiftOneEnd] = useState(0);
  const [shiftOneEndAmPm, setShiftOneEndAmPm] = useState(0);
  const [shiftTwoStart, setShiftTwoStart] = useState(0);
  const [shiftTwoStartAmPm, setShiftTwoStartAmPm] = useState(0);
  const [shiftTwoEnd, setShiftTwoEnd] = useState(0);
  const [shiftTwoEndAmPm, setShiftTwoEndAmPm] = useState(0);
  const [shiftThreeStart, setShiftThreeStart] = useState(0);
  const [shiftThreeStartAmPm, setShiftThreeStartAmPm] = useState(0);
  const [shiftThreeEnd, setShiftThreeEnd] = useState(0);
  const [shiftThreeEndAmPm, setShiftThreeEndAmPm] = useState(0);

  const loadShiftTimes = shiftTimes => {
    const {
      shift_one_begin,
      shift_one_end,
      shift_three_begin,
      shift_three_end,
      shift_two_begin,
      shift_two_end,
      id
    } = shiftTimes;

    setId(id);

    const parseShiftTimes = shiftTime => {
      let time = parseInt(shiftTime);
      let ap = "AM";
      if (time >= 12) {
        time = time % 12;
        ap = "PM";
      }

      if (time === 0) {
        time = `12:00`;
      } else if (time < 10) {
        time = `0${time}:00`;
      } else {
        time = `${time}:00`;
      }
      time = hours.indexOf(time);
      ap = ampm.indexOf(ap);
      return [time, ap];
    };

    const isPreset = shiftTimes => {
      let preset = true;
      for (let time in shiftTimes) {
        if (shiftTimes[time] !== prebuilt[time]) {
          preset = false;
        }
      }

      return preset;
    };

    if (
      isPreset({
        shift_one_begin,
        shift_one_end,
        shift_three_begin,
        shift_three_end,
        shift_two_begin,
        shift_two_end
      })
    ) {
      setOption("prebuilt");
    } else {
      setOption("custom");
    }
    if (shift_one_begin) {
      const [time, ap] = parseShiftTimes(shift_one_begin);
      setShiftOneStart(time);
      setShiftOneStartAmPm(ap);
    }
    if (shift_one_end) {
      const [time, ap] = parseShiftTimes(shift_one_end);
      setShiftOneEnd(time);
      setShiftOneEndAmPm(ap);
    }
    if (shift_two_begin) {
      const [time, ap] = parseShiftTimes(shift_two_begin);
      setShiftTwoStart(time);
      setShiftTwoStartAmPm(ap);
    }
    if (shift_two_end) {
      const [time, ap] = parseShiftTimes(shift_two_end);
      setShiftTwoEnd(time);
      setShiftTwoEndAmPm(ap);
    }
    if (shift_three_begin) {
      const [time, ap] = parseShiftTimes(shift_three_begin);
      setShiftThreeStart(time);
      setShiftThreeStartAmPm(ap);
    } else {
      setNoThirdShift(true);
    }
    if (shift_three_end) {
      const [time, ap] = parseShiftTimes(shift_three_end);
      setShiftThreeEnd(time);
      setShiftThreeEndAmPm(ap);
    }
  };

  const createShiftTimes = () => {
    if (option === "prebuilt") {
      return prebuilt;
    }

    const parseShiftTimes = (shiftTime, ap) => {
      let time = parseInt(shiftTime);
      if (time === 12) {
        if (ap === "AM") {
          time = 0;
        }
      } else {
        time = time + (ap === "AM" ? 0 : 12);
      }
      if (time < 10) {
        time = `0${time}`;
      }

      return `${time}:00:00`;
    };

    const shift_one_begin = parseShiftTimes(
      hours[shiftOneStart],
      ampm[shiftOneStartAmPm]
    );
    const shift_one_end = parseShiftTimes(
      hours[shiftOneEnd],
      ampm[shiftOneEndAmPm]
    );
    const shift_two_begin = parseShiftTimes(
      hours[shiftTwoStart],
      ampm[shiftTwoStartAmPm]
    );
    const shift_two_end = parseShiftTimes(
      hours[shiftTwoEnd],
      ampm[shiftTwoEndAmPm]
    );
    const shift_three_begin = parseShiftTimes(
      hours[shiftThreeStart],
      ampm[shiftThreeStartAmPm]
    );
    const shift_three_end = parseShiftTimes(
      hours[shiftThreeEnd],
      ampm[shiftThreeEndAmPm]
    );
    let shiftTimesUpdated = {
      shift_one_begin,
      shift_one_end,
      shift_two_begin,
      shift_two_end,
      shift_three_begin: null,
      shift_three_end: null,
      id
    };
    if (!noThirdShift) {
      shiftTimesUpdated = {
        ...shiftTimesUpdated,
        shift_three_begin,
        shift_three_end
      };
    }

    return shiftTimesUpdated;
  };

  return (
    <ShiftTimesContext.Provider
      value={{
        option,
        noThirdShift,
        setNoThirdShift,
        shiftOneStart,
        shiftOneStartAmPm,
        shiftOneEnd,
        shiftOneEndAmPm,
        shiftTwoStart,
        shiftTwoStartAmPm,
        shiftTwoEnd,
        shiftTwoEndAmPm,
        shiftThreeStart,
        shiftThreeStartAmPm,
        shiftThreeEnd,
        shiftThreeEndAmPm,
        setOption,
        setShiftOneStart,
        setShiftOneStartAmPm,
        setShiftOneEnd,
        setShiftOneEndAmPm,
        setShiftTwoStart,
        setShiftTwoStartAmPm,
        setShiftTwoEnd,
        setShiftTwoEndAmPm,
        setShiftThreeStart,
        setShiftThreeStartAmPm,
        setShiftThreeEnd,
        setShiftThreeEndAmPm,
        hours,
        ampm,
        loadShiftTimes,
        prebuilt,
        id,
        createShiftTimes
      }}
    >
      {props.children}
    </ShiftTimesContext.Provider>
  );
}
