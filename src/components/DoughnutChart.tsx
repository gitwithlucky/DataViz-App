import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ doughnutData }: any) => {
  return (
    <>
      <section>
        <div style={{width: '30rem', height: '20rem'}}>
          <Doughnut
        
            data={doughnutData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Orders by categories",
                },
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

export default DoughnutChart;
