import React from "react";

import UpcomingBatch from "../UpcomingBatch/UpcomingBatch";

function createData(classNumber, day, time) {
  return { classNumber, day, time };
}

const batches = [
  createData("Class 1: 06-Jan", "Wednesday", "11:00 AM – 11:45 AM (IST)"),
  createData("Class 2: 07-Jan", "Thursday", "11:00 AM – 11:45 AM (IST)"),
  createData("Class 3: 13-Jan", "Wednesday", "11:00 AM – 11:45 AM (IST)"),
  createData("Class 4: 14-Jan", "Thursday", "11:00 AM – 11:45 AM (IST)"),
  createData("Class 5: 20-Jan", "Wednesday", "11:00 AM – 11:45 AM (IST)"),
  createData("Class 6: 21-Jan", "Thursday", "11:00 AM – 11:45 AM (IST)"),
  createData("Class 7: 27-Jan", "Wednesday", "11:00 AM – 11:45 AM (IST)"),
  createData("Class 8: 28-Jan", "Thursday", "11:00 AM – 11:45 AM (IST)"),
  createData("Class 9: 03-Feb", "Wednesday", "11:00 AM – 11:45 AM (IST)"),
  createData("Class 10: 04-Feb", "Thursday", "11:00 AM – 11:45 AM (IST)"),
];

export default function Home(props) {
  return <UpcomingBatch batches={batches} rowsPerPage={5} />;
}
