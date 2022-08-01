import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import DetailAyatContainer from "../containers/DetailAyatContainer";
import DetailSurahContainer from "../containers/DetailSurahContainer";
import PageLayout from "../Layout/PageLayout";
import "./style/PageHero.css";

const Surah = () => {
  const title = "Detail Surah";

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
              <div className="d-grid gap-2">
                <LinkContainer to="/">
                  <button
                    className="btn btn-danger"
                    style={{
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                    type="button"
                  >
                    Kembali ke Beranda
                  </button>
                </LinkContainer>
              </div>
              <DetailSurahContainer />
            </div>
            <div className="col-lg-8">
              <DetailAyatContainer />
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Surah;
