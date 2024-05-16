import { Line } from "react-chartjs-2";

const LineGraph = ({ lineData }: any) => {
  return (
    <>
      <section>
        <div style={{ width: "30rem", height: "20rem" }}>
          <Line
            data={lineData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Revenue Over Time",
                },
                legend: {
                  display: false
                }
              },
              maintainAspectRatio: false,
              aspectRatio: 1,
            }}
          />
        </div>
      </section>
    </>
  );
};

export default LineGraph;
