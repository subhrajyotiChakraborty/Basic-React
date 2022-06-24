import { PieChart } from "react-minimal-pie-chart";

import { useChartData } from "../hooks/useChartData";

const Chart = () => {
  const { isLoading, chartData } = useChartData();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(chartData);
  return (
    <PieChart
      label={({ dataEntry }) => dataEntry.title}
      labelStyle={{ fontSize: 5 }}
      data={chartData}
    />
  );
};

export default Chart;
