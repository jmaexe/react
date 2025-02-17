import Axios from "axios";

export default Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_ACCESS_TOKEN,
  },
});
