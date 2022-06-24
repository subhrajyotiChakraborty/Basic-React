import { MONTHS } from "../data/months";
export function formatData(data) {
  const copyData = [...data];
  copyData.map((d) => {
    d.title = ` ${new Date(d.date).getDate()} ${
      MONTHS[new Date(d.date).getMonth() + 1].short
    }`;
    d.value = d.units;
    d.color = getRandomColor();
  });
  return copyData;
}

export function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
