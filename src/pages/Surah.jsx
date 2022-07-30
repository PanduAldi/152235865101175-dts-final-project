import React, { useEffect, useState } from "react";
import DetailSurahContainer from "../containers/DetailSurahContainer";
import PageLayout from "../Layout/PageLayout";
import "./style/PageHero.css";

const Surah = () => {
  const [title] = useState("Detail Surah");

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

        <section className="container">
          <div className="row">
            <div className="col-lg-4">
              <DetailSurahContainer />
            </div>
            <div className="col-lg-8"></div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Surah;
