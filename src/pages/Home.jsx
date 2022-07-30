import React, { useState, useEffect } from "react";
import PageLayout from "../Layout/PageLayout";
import "./style/HeroStyle.css";
import logo from "../quranBG.svg";
import SholatApi from "../apis/SholatApi";
import SurahListContainer from "../containers/SurahListContainer";

const Home = () => {
  const [title] = useState("Beranda");
  const tgl = new Date();
  const [sholats, setSholats] = useState([]);
  const jadwalList = ["subuh", "dhuha", "dzuhur", "ashar", "maghrib", "isya"];

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SholatApi.get(
          `/jadwal/1406/${tgl.getFullYear()}/${
            tgl.getMonth() + 1
          }/${tgl.getDate()}`
        );

        setSholats(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PageLayout>
        <div className="jumbotron jumbotron-fluid mb-5">
          <div className="container">
            <img src={logo} width={300} height={300} alt="alternate" />
            <h1 className="display-4">Mengaji Qur'an</h1>
            <p>
              Platform Al Quran digital dengan terjemahan Bahasa Indonesia dan
              audio mp3 murattal full, 114 surah atau 30 juz tanpa pembatasan
            </p>
          </div>
        </div>

        <section>
          <h3 className="text-center mb-5" style={{ color: "#fff" }}>
            Daftar Surah
          </h3>
          <SurahListContainer />
        </section>
      </PageLayout>
    </>
  );
};

export default Home;
