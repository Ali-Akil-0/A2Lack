import axios from "axios";

const insatance = axios.create({
  baseURL: "http://localhost:9000",
});
export default insatance;
