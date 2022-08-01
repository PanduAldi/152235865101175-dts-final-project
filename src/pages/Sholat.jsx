import React, { useEffect } from "react";
import SholatContainer from "../containers/SholatContainer";
import PageLayout from "../Layout/PageLayout";
import "./style/PageHero.css";

const Sholat = () => {
  const title = "Jadwal Sholat";

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
          <SholatContainer />
        </section>
      </PageLayout>
    </>
  );
};

export default Sholat;
