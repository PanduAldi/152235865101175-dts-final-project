import axios from "axios";

// Di sini kita membuat instance dari axios
const SholatApi = axios.create({
  baseURL: "https://api.myquran.com/v1/sholat",
});

export default SholatApi;
