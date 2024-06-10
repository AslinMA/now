import { useState } from "react";
const [dateRange, setDateRange] = useState({ start: "", end: "" });


const handleDateChange = (e, type) => {
  const value = e.target.value;
  setDateRange((prevRange) => ({
    ...prevRange,
    [type]: value,
  }));
};

const DateRange = () => {
  return (
    <div className="absolute top-0 left-0 right- bg-white border border-gray-300 p-4 z-10">
            <div className="flex justify-center items-center">
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => handleDateChange(e, "start")}
                className="border px-3 py-2 mr-2"
              />
              <p className="font-primary mr-2 font-bold">To</p>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => handleDateChange(e, "end")}
                className="border px-3 py-2"
              />
              <button
                onClick={filterByDateRange}
                className="bg-primary text-white px-4 py-2 rounded ml-2 hover:shadow-3xl"
              >
                Apply
              </button>
            </div>
          </div>
  )
}

export default DateRange
