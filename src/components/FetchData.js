import axios from "axios";

export default axios.create({
  method: "get",
  baseURL: "https://www.themealdb.com/api/json/v1/1/random.php",
});
