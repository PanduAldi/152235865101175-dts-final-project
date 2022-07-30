import React, { useEffect, useState } from "react";
import PageLayout from "../Layout/PageLayout";
import "./style/PageHero.css";

const Tentang = () => {
  const [title] = useState("Tentang Mengaji Qur`an");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <PageLayout>
        <div className="pageJumbotron jumbotron-fluid mb-5">
          <div className="container">
            <h1 className="display-4">{title}</h1>
          </div>
        </div>

        <section className="container" style={{ marginBottom: "41vh" }}>
          <div className="card">
            <div className="card-body">
              <h5>
                <p>
                  Mengaji Qur'an Apps adalah Platform Al Quran digital dengan
                  terjemahan Bahasa Indonesia dan audio mp3 murattal full, 114
                  surah atau 30 juz tanpa pembatasan. terdapat fitur tambahan
                  seperti jadwal sholat pada aplikasi Mengaji Qu'ran ini.
                </p>
                <p>
                  Aplikasi ini dibuat untuk memenuhi tugas Final Project DTS
                  PROA REACT DEVELOPER. 😇{" "}
                </p>
              </h5>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Tentang;
