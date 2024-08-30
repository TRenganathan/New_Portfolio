// LineGraph.js
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
const LineGraph = ({ data }) => {
  // Prepare data for the graph
  const graphData = {
    labels: data.graph.map((item) => new Date(item.time).toLocaleTimeString()),
    datasets: [
      {
        label: "In Traffic",
        data: data.graph.map((item) => item.inTraffic / (1024 * 1024)),
        borderColor: "orange",
        fill: false,
      },
      {
        label: "Out Traffic",
        data: data.graph.map((item) => item.outTraffic / (1024 * 1024)),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  // Function to download as PNG
  const downloadAsPng = () => {
    const chart = document.getElementById("chart");
    html2canvas(chart).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "chart.png";
      link.click();
    });
  };

  // Function to download as PDF
  const downloadAsPdf = () => {
    const chart = document.getElementById("chart");
    html2canvas(chart).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("chart.pdf");
    });
  };

  return (
    <div>
      <Line
        id="chart"
        data={graphData}
        style={{ width: "300px", height: "300px" }}
      />
      <button onClick={downloadAsPng}>Download as PNG</button>
      <button onClick={downloadAsPdf}>Download as PDF</button>
    </div>
  );
};

export default LineGraph;
