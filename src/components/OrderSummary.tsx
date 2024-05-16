import { Order, numberWithCommas } from "../utils/helpers";

const OrderSummary = ({ allOrderData }: { allOrderData: Order[] }) => {
  const allOrderDataJSX = allOrderData.map((orderData: Order, idx: number) => {
    return (
      <tr key={`${orderData.order_number}+${idx}`}>
        <td>{idx + 1}</td>
        <td>{orderData.customer_name}</td>
        <td>{orderData.product_name}</td>
        <td>{orderData.product_category}</td>
        <td>{new Date(orderData.order_date).toLocaleDateString("en-GB")}</td>
        <td>${numberWithCommas(orderData.price.toFixed(2))}</td>
        <td>•••</td>
      </tr>
    );
  });

  return (
    <>
      <section>
        <h4 className="text-gray-600 font-semibold">ORDERS</h4>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Date</th>
              <th>Price</th>
              <th>•••</th>
            </tr>
          </thead>
          <tbody>{allOrderDataJSX}</tbody>
        </table>
      </section>
    </>
  );
};

export default OrderSummary;
