import axios from "axios";

export default async () => {
  try {

    const reqResponse = await axios.get(`${process.env.VUE_APP_API}/orders`);
    console.log(reqResponse);

    return reqResponse;

  } catch (e) {
    console.log(e);
    return false;
  }
};