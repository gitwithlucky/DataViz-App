import { useState } from "react";
import SelectInput from "../utils/common/SelectInput";
import { Order, postOrderDataRequest } from "../utils/helpers";

const DataEntryForm = ({ selectValues, displayEntryForm }: any) => {
  const [postedSuccesfully, setPostedSuccesfully] = useState(true);
  const [displaySuccessfulPosting, setDisplaySuccessfulPosting] =
    useState(false);
  const [inputs, setInputs] = useState({
    customer_name: "",
    product_name: "",
    product_category: selectValues[0],
    price: "",
    order_date: "",
  });
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const postOrderData = async (datum: Order) => {
    const { data, responseError } = await postOrderDataRequest(datum);

    if (responseError) {
      setPostedSuccesfully(false);
      return;
    } else if (data) {
      setDisplaySuccessfulPosting(true);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postOrderData({
      ...inputs,
      price: Number(inputs.price),
      order_date: new Date(inputs.order_date),
    });
  };
  return (
    <>
      <div className="max-w-fit fixed m-auto">
        <form onSubmit={handleSubmit} className="text-center">
          <label>
            Customer Name:
            <div className="border border-2 rounded-sm border-gray-500">
              <input
                type="text"
                name="customer_name"
                value={inputs.customer_name || ""}
                onChange={handleChange}
              />
            </div>
          </label>
          <label>
            Product Name:
            <div className="border border-2 rounded-sm border-gray-500">
              <input
                type="text"
                name="product_name"
                value={inputs.product_name || ""}
                onChange={handleChange}
              />
            </div>
          </label>
          <label>
            Product Category
            <div className="border border-2 rounded-sm border-gray-500">
              <SelectInput
                name="product_category"
                selectId="productCategoryId"
                optionValues={selectValues}
                currentValue={inputs.product_category}
                onChange={handleChange}
              />
            </div>
          </label>
          <label>
            Price:
            <div className="border border-2 rounded-sm border-gray-500">
              <input
                type="number"
                name="price"
                value={inputs.price}
                onChange={handleChange}
              />
            </div>
          </label>
          <label>
            Price:
            <div className="border border-2 rounded-sm border-gray-500">
              <input
                type="date"
                name="order_date"
                value={inputs.order_date}
                onChange={handleChange}
              />
            </div>
          </label>
          <div className="border my-3 text-white font-semibold bg-gray-600 border-2 rounded-2xl border-gray-500">
            <input type="submit" />
          </div>
        </form>
        <div className="border my-3 border-2 rounded-2xl border-gray-500 text-center text-white font-semibold bg-gray-600">
          <button className="" onClick={() => displayEntryForm(false)}>
            Cancel
          </button>
        </div>
        {!postedSuccesfully && (
          <h5 className="text-center">Failed to post data</h5>
        )}
        {displaySuccessfulPosting && (
          <h5 className="text-center">Posted Order successfully</h5>
        )}
      </div>
    </>
  );
};

export default DataEntryForm;
