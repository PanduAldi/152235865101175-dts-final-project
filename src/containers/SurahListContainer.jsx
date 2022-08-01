import React, { useState, useEffect } from "react";
import SurahList from "../components/SurahList";
import { QuranId } from "../apis/QuranApi";
import logo from "../quranBG.svg";
import { Button, Form, InputGroup } from "react-bootstrap";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";

const SurahListContainer = () => {
  const [surah, setSurah] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(true);
  const [input, setInput] = useState("");

  const searchHandler = () => {
    setIsLoading(true);
    const fetchData = async () => {
      await QuranId.get(`/surah/search/${input}`)
        .then((res) => {
          if (res.data.data.length === 0) {
            setResult(false);
          } else {
            setSurah(res.data.data);
            setResult(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setResult(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  };

  const refreshSurahHandler = () => {
    setIsLoading(true);

    const fetchData = async () => {
      await QuranId.get(`/surah`)
        .then((res) => {
          if (!res.data.data) {
            setResult(false);
          } else {
            setSurah(res.data.data);
            setResult(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setResult(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  };

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await QuranId.get("/surah");
        console.log(response);
        setSurah(response.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSurah();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* search section */}
            <section>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Cari Surah"
                  aria-label=""
                  aria-describedby="basic-addon2"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                <Button
                  variant="dark"
                  onClick={searchHandler}
                  id="button-addon2"
                >
                  <AiOutlineFileSearch />
                </Button>
              </InputGroup>
            </section>
          </div>
          {isLoading ? (
            <>
              <div className="alert alert-info">
                <div className="alert-body text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </>
          ) : result ? (
            surah.map((srh) => {
              return (
                <>
                  <div className="col-lg-3 col-xs-6">
                    <SurahList key={srh.nomor} data={srh} />
                  </div>
                </>
              );
            })
          ) : (
            <>
              <div className="container text-center" style={{ color: "#fff" }}>
                <img src={logo} width={100} height={100} alt="alternate" />
                <h4>Data Tidak Ditemukan !!!</h4>
                <p>
                  <button
                    className="btn btn-warning"
                    onClick={refreshSurahHandler}
                  >
                    {" "}
                    <BiRefresh /> Refresh Surah
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SurahListContainer;
