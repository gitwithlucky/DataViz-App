import SelectInput from "../utils/common/SelectInput";
import { useEffect, useState } from "react";
import {
  Order,
  getAllOrderData,
  monthsOfTheYear,
  numberWithCommas,
  timeFilter,
} from "../utils/helpers";
import OrderSummary from "../components/OrderSummary";
import "chart.js/auto";
import DoughnutChart from "../components/DoughnutChart";
import LineGraph from "../components/LineGraph";
import DataEntryForm from "./DataEntryForm";

const Dashboard = ({ isFormBeingDisplayed, displayEntryForm }: any) => {
  const [allOrderData, setAllOrderData] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [valueOfimeFilter, setValueOfimeFilter] = useState(timeFilter[0]);
  const uniqueCategories = [
    ...new Set(allOrderData?.map((data) => data.product_category)),
  ];
  const uniqueCustomers = [
    ...new Set(allOrderData?.map((data) => data.customer_name)),
  ];
  const counts: any = {};
  let totalRevenue = 0;
  const allOrderDataSize = allOrderData.length;

  const lineCountData = Array(10).fill(0);
  for (let i = 0; i < allOrderDataSize; i++) {
    const order = allOrderData[i];
    const category = order.product_category;
    counts[category] = counts[category] ? counts[category] + 1 : 1;
    const price = order.price;
    totalRevenue += price;
    const orderDate = new Date(order.order_date);
    const month = orderDate.getMonth();
    lineCountData[month] += price;
  }
  const doughnutCountData = uniqueCategories.map((entry) => counts[entry]);
  const bgDoughnutColors = doughnutCountData.map(() => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    // Construct the RGB color string.
    return `rgb(${x},${y},${z})`;
  });

  const lineCountColors = lineCountData.map(() => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    // Construct the RGB color string.
    return `rgb(${x},${y},${z})`;
  });

  const doughnutData = allOrderData
    ? {
        labels: uniqueCategories,
        datasets: [
          {
            data: doughnutCountData,
            backgroundColor: bgDoughnutColors,
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      }
    : null;

  const lineData = allOrderData
    ? {
        labels: monthsOfTheYear,
        datasets: [
          {
            data: lineCountData,
            backgroundColor: lineCountColors,
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      }
    : null;

  const fetchOrderData = async () => {
    const { data, responseError } = await getAllOrderData();

    if (responseError) {
      return;
    }
    const allDatum = data.data;
    setAllOrderData(allDatum);
  };
  useEffect(() => {
    fetchOrderData();
    setLoading(false);
  }, []); //rerender when a new order data is addded or removed via api call

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setValueOfimeFilter(value);
  };
  return (
    <>
      {isFormBeingDisplayed && allOrderDataSize && (
        <DataEntryForm
          displayEntryForm={displayEntryForm}
          selectValues={uniqueCategories}
        />
      )}
      {!isFormBeingDisplayed && (
        <div className="ml-9 bg-gray-100 p-9 w-max border rounded-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-bold text-2xl">Welcome, Matthew</h2>
              <p className="text-gray-600 font-medium">
                {new Date().toLocaleDateString("en-GB", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="border border-2 rounded-sm border-gray-500">
              <SelectInput
                name="timeFilter"
                selectId="timeFilterId"
                optionValues={timeFilter}
                currentValue={valueOfimeFilter}
                onChange={handleSelect}
              />
            </div>
          </div>
          <div>
            {loading ? (
              <h1>Loading...</h1> // change this to loading element
            ) : (
              <main>
                <section className="bg-white mt-5 rounded-3xl flex items-center justify-between p-5">
                  <div className="p-2 rounded">
                    <p className="text-gray-600">Total Revenue</p>
                    <p className="font-semibold text-5xl">
                      ${numberWithCommas(totalRevenue.toFixed(2))}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-gray-600">Orders</p>
                    <p className="font-semibold text-5xl">
                      {numberWithCommas(allOrderDataSize)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Customers</p>
                    <p className="font-semibold text-5xl">
                      {uniqueCustomers.length}
                    </p>
                  </div>
                </section>

                <section className="flex mt-9 justify-between">
                  <div className="bg-white rounded-3xl mr-3">
                    {allOrderDataSize && <LineGraph lineData={lineData} />}
                  </div>
                  <div className="bg-white rounded-3xl ml-5">
                    {allOrderDataSize && (
                      <DoughnutChart doughnutData={doughnutData} />
                    )}
                  </div>
                </section>
                <section className="bg-white mt-10 rounded-xl p-5 border">
                  {allOrderDataSize && (
                    <OrderSummary allOrderData={allOrderData} />
                  )}
                </section>
              </main>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
