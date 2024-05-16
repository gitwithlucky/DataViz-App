import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { config } from "../configs/config";

export interface AvatarProps {
  src: string;
  alt: string;
}

export interface SelectInputProps {
  selectId: string;
  optionValues: string[];
  name: string;
  currentValue: string;
  onChange: (e: any) => void;
}

interface RequestWithRetryResult {
  data: any;
  responseError: AxiosError | null;
}

export interface Order {
  order_number?: number;
  createdAt?: string;
  updatedAt?: string;
  customer_name: string;
  product_name: string;
  product_category: string;
  price: number;
  order_date: string | Date;
}

export const makeRequest = async (
  config: AxiosRequestConfig
): Promise<RequestWithRetryResult> => {
  try {
    const response = await axios({
      ...config,
    });

    return { data: response.data, responseError: null };
  } catch (error: any) {
    return { data: null, responseError: error };
  }
};

export const getAllOrderData = async () => {
  const options = {
    method: "GET",
    url: `${config.apiBaseEndPoint}/api/v1/fetch_orders`,
    data: {},
  };

  const { data, responseError } = await makeRequest(options);
  return { data, responseError };
};

export const postOrderDataRequest = async (datum: Order) => {
  const options = {
    method: "POST",
    url: `${config.apiBaseEndPoint}/api/v1/create_order`,
    data: datum,
  };

  const { data, responseError } = await makeRequest(options);
  return { data, responseError };
};

export const numberWithCommas = (number: string | number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const monthsOfTheYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const timeFilter = [
  "This Month",
  "This Year",
  "Last Month",
  "Last Year",
];
