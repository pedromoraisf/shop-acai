import axios from "axios";

export default async data => {
  try {

    const reqResponse = await axios.post(`${process.env.VUE_APP_API}/order/store`, { data });
    return reqResponse;

  } catch (e) {
    return false;
  }
};