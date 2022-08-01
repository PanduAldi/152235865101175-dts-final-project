import React, { useEffect } from "react";
import PageLayout from "../Layout/PageLayout";
import "./style/HeroStyle.css";
import logo from "../quranBG.svg";
import SurahListContainer from "../containers/SurahListContainer";

const Home = () => {
  const title = "Beranda";

  useEffect(() => {
    document.title = title;
  }, [title]);

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
