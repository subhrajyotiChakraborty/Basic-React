import { formatData } from "../utils";

const data = [
  {
    date: 1493922600000,
    units: 32,
  },
  {
    date: 1494009000000,
    units: 55,
  },
  {
    date: 1494095400000,
    units: 32,
  },
  {
    date: 1494181800000,
    units: 41,
  },
  {
    date: 1494268200000,
    units: 21,
  },
  {
    date: 1494354600000,
    units: 45,
  },
];

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(formatData(data));
    }, 2000);
  });
}

export default getData;
