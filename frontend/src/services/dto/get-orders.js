import axios from "axios";

export default async () => {
  try {

    const { data: reqResponse } = await axios.get(`${process.env.VUE_APP_API}/orders`);
    return reqResponse;

  } catch (e) {
    return false;
  }
};