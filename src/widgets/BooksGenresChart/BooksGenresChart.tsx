import { useEffect } from "react";
import * as echarts from "echarts";
import { useTypedSelector } from "../../shared/hooks/useTypedSelector";

interface GenresCount {
  [key: string]: number;
}

const BooksGenresChart = () => {
  const { books } = useTypedSelector((state) => state.books);
  useEffect(() => {
    const chart = echarts.init(document.getElementById("book-chart"));

    const genres: GenresCount = {};
    books?.forEach((book) => {
      if (genres[book.genre]) {
        genres[book.genre]++;
      } else {
        genres[book.genre] = 1;
      }
    });

    const option = {
      title: {
        text: "Количество книг по жанрам",
      },
      tooltip: {},
      xAxis: {
        type: "category",
        data: Object.keys(genres),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: Object.values(genres),
          type: "bar",
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [books]);

  return <div id="book-chart" style={{ width: "100%", height: 400 }} />;
};

export default BooksGenresChart;
