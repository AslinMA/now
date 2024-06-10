import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const TABLE_HEAD = [
  "Dry Rubber",
  "M/R",
  "DRC",
  "Date",
  "VFA",
  "Ammonia",
  "Supervisor",
  "Driver",
  "Helper",
  "Vehicle",
];

// Sample dataset with 10 rows
const SAMPLE_ROWS = [
  {
    dryRubber: "1000 kg",
    mr: "20%",
    drc: "60%",
    date: "2024-05-18",
    vfa: "0.25%",
    ammonia: "0.05%",
    supervisor: "John Doe",
    driver: "Jane Smith",
    helper: "James Brown",
    vehicle: "ABC-1234",
  },
  {
    dryRubber: "800 kg",
    mr: "18%",
    drc: "55%",
    date: "2024-05-17",
    vfa: "0.80%",
    ammonia: "0.04%",
    supervisor: "Alice Johnson",
    driver: "Robert White",
    helper: "Chris Green",
    vehicle: "XYZ-5678",
  },
  {
    dryRubber: "1200 kg",
    mr: "22%",
    drc: "62%",
    date: "2024-05-16",
    vfa: "0.030%",
    ammonia: "0.06%",
    supervisor: "Michael Davis",
    driver: "Sarah Miller",
    helper: "David Wilson",
    vehicle: "DEF-9101",
  },
  {
    dryRubber: "950 kg",
    mr: "19%",
    drc: "58%",
    date: "2024-05-15",
    vfa: "0.75%",
    ammonia: "0.03%",
    supervisor: "Emily Clark",
    driver: "William Martinez",
    helper: "Daniel Rodriguez",
    vehicle: "GHI-1121",
  },
  {
    dryRubber: "1100 kg",
    mr: "21%",
    drc: "61%",
    date: "2024-05-14",
    vfa: "0.82%",
    ammonia: "0.05%",
    supervisor: "Patricia Lewis",
    driver: "Thomas Anderson",
    helper: "Paul Thomas",
    vehicle: "JKL-3141",
  },
  {
    dryRubber: "1050 kg",
    mr: "20.5%",
    drc: "60.5%",
    date: "2024-05-13",
    vfa: "0.03",
    ammonia: "0.035",
    supervisor: "Richard Johnson",
    driver: "Laura Davis",
    helper: "Mark Wilson",
    vehicle: "MNO-7890",
  },
  {
    dryRubber: "900 kg",
    mr: "19.5%",
    drc: "57.5%",
    date: "2024-05-12",
    vfa: "0.78%",
    ammonia: "0.035%",
    supervisor: "Jennifer Brown",
    driver: "Michael Taylor",
    helper: "Lisa Garcia",
    vehicle: "PQR-2468",
  },
  {
    dryRubber: "1150 kg",
    mr: "21.5%",
    drc: "61.5%",
    date: "2024-05-11",
    vfa: "0.81%",
    ammonia: "0.055%",
    supervisor: "Jessica Clark",
    driver: "David Hernandez",
    helper: "Karen Martinez",
    vehicle: "STU-1357",
  },
  {
    dryRubber: "950 kg",
    mr: "20%",
    drc: "60%",
    date: "2024-05-10",
    vfa: "0.85%",
    ammonia: "0.065%",
    supervisor: "Matthew Anderson",
    driver: "Emma White",
    helper: "Stephen Lee",
    vehicle: "VWX-3690",
  },
  {
    dryRubber: "1000 kg",
    mr: "20%",
    drc: "60%",
    date: "2024-05-09",
    vfa: "0.85%",
    ammonia: "0.05%",
    supervisor: "Nicole Martinez",
    driver: "Christopher Johnson",
    helper: "",
    vehicle: "YZA-8025",
  },
];


const Bills = () => {
  const [showDateRange, setShowDateRange] = useState(false);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [filteredRows, setFilteredRows] = useState(SAMPLE_ROWS);

  const handleDateChange = (e, type) => {
    const value = e.target.value;
    setDateRange((prevRange) => ({
      ...prevRange,
      [type]: value,
    }));
  };

  const filterByDateRange = () => {
    const startDate = new Date(dateRange.start);
    const endDate = new Date(dateRange.end);
    const filtered = SAMPLE_ROWS.filter((row) => {
      const rowDate = new Date(row.date);
      return rowDate >= startDate && rowDate <= endDate;
    });
    setFilteredRows(filtered);
    setShowDateRange(false); // Hide date range section after applying filters
  };

  const handleDateHeaderClick = () => {
    setShowDateRange(!showDateRange);
  };

  const calculateTotalDryRubber = () => {
    return filteredRows.reduce((total, row) => {
      const value = parseFloat(row.dryRubber.replace(" kg", ""));
      return total + value;
    }, 0);
  };

  const totalDryRubber = calculateTotalDryRubber();

  return (
    <div className="m-4 md:m-10 relative">
      <div>
        <h1 className="text-2xl md:text-4xl text-primary font-bold mb-4 px-4 md:px-10">
          Recent Quality of Latex
        </h1>
      </div>
      <div className="flex justify-center md:justify-end mb-4 px-4 md:px-10">
        <div className="flex flex-wrap items-center justify-center md:justify-start w-full md:w-auto">
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => handleDateChange(e, "start")}
            className="border px-3 py-2 mb-2 md:mb-0 mr-2 w-full md:w-auto"
          />
          <p className="font-primary mr-2 font-bold">To</p>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => handleDateChange(e, "end")}
            className="border px-3 py-2 mb-2 md:mb-0 w-full md:w-auto"
          />
          <button
            onClick={filterByDateRange}
            className="bg-primary text-white px-4 py-2 rounded ml-2 w-full md:w-auto hover:shadow-3xl"
          >
            Search
          </button>
        </div>
      </div>
      <div className="h-full w-full rounded-lg bg-white px-4 md:px-10">
        <div className="overflow-scroll p-4">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 cursor-pointer"
                    onClick={head === "Date" ? handleDateHeaderClick : null}
                  >
                    <div className="text-blue-gray-600 text-sm font-normal leading-none opacity-70">
                      {head === "Date" ? (
                        <span className="flex items-center">
                          Date
                          <MdArrowDropDown className="ml-1" />
                        </span>
                      ) : (
                        head
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => {
                const isLast = index === filteredRows.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className={classes}>
                      <div className="text-blue-gray-600 text-sm font-normal">
                        {row.dryRubber}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="text-blue-gray-600 text-sm font-normal">
                        {row.mr}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="text-blue-gray-600 text-sm font-normal">
                        {row.drc}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="text-blue-gray-600 text-sm font-normal">
                        {row.date}
                      </div>
                    </td>
                    <td
                      className={`${classes} ${
                        parseFloat(row.vfa.replace("%", "")) > 0.04 // Adjusted condition
                          ? "bg-red-500 text-white"
                          : "bg-Lgreen text-white"
                      }`}
                    >
                      <div className="text-blue-gray-600 text-sm font-normal">
                        {row.vfa}
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="text-blue-gray-600 text-sm font-normal">
                        {row.ammonia}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="text-blue-gray-600 text-sm font-normal">
                        {row.supervisor}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="text-blue-gray-600 text-sm font-normal">
                        {row.driver}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="text-blue-gray-600 text-sm font-normal">
                        {row.helper}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="text-blue-gray-600 text-sm font-normal">
                        {row.vehicle}
                      </div>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="p-4 font-bold text-blue-gray-600 text-sm ">
                  Total Dry Rubber
                </td>
                <td
                  className="p-4 font-bold text-white bg-primary text-sm text-center"
                  colSpan={2}
                >
                  {totalDryRubber} kg
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <button
            type="button"
            className="bg-green text-white font-bold py-3 px-8 rounded hover:bg-dark_green transition-all duration-300 shadow-3xl"
          >
            Previous
          </button>
          <button
            type="button"
            className="bg-green text-white font-bold py-3 px-8 rounded hover:bg-dark_green transition-all duration-300 shadow-3xl"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bills;
