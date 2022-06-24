import { useState, useEffect } from "react";

import getChartData from "../data/chartData";

export const useChartData = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(async () => {
    const chartData = await getChartData();
    setData(chartData);
    setLoading(false);
  }, []);

  return { isLoading, chartData: data };
};
