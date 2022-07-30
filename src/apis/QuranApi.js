import axios from "axios";

// Di sini kita membuat instance dari axios
const QuranId = axios.create({
  baseURL: "https://api-alquranid.herokuapp.com",
});

const QuranV2 = axios.create({
  baseURL: "https://quran-api-id.vercel.app",
});

export { QuranId, QuranV2 };
