import { GET_CATEGORY } from "./actionType";
// import { headers, URL } from "../config";
import axios from "axios";

export const getCategory = () => async (dispatch) => {
  let response = await axios.get("http://localhost:5000/categories");
  dispatch({
    type: GET_CATEGORY,
    payload: response.data,
    loader: false,
  });
};