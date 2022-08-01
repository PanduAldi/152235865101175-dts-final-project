import React, { useEffect, useState } from "react";
import SholatApi from "../apis/SholatApi";
import SholatTable from "../components/SholatTable";

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const SholatContainer = () => {
  const [sholat, setSholat] = useState([]);
  const [kotaData, setKotaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(true);
  const [idKota, setIdKota] = useState(1406);
  const [kota, setKota] = useState("");
  const tgl = new Date();

  const locationChangeHandler = (e) => {
    setLoading(true);
    const targetLoc = e.target.value;

    const fetchData = async () => {
      await SholatApi.get(
        `/jadwal/${targetLoc}/${tgl.getFullYear()}/${tgl.getMonth() + 1}`
      )
        .then((res) => {
          console.log(res.data);
          setSholat(res.data.data.jadwal);
          setKota(`${res.data.data.lokasi} ${res.data.data.daerah}`);
          setIdKota(targetLoc);
        })
        .catch((err) => {
          setResult(false);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      await SholatApi.get(
        `/jadwal/${idKota}/${tgl.getFullYear()}/${tgl.getMonth() + 1}`
      )
        .then((res) => {
          console.log(res.data);
          setSholat(res.data.data.jadwal);
          setKota(`${res.data.data.lokasi} ${res.data.data.daerah}`);
        })
        .catch((err) => {
          setResult(false);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  //kota Data
  useEffect(() => {
    const fetchKota = async () => {
      await SholatApi.get("/kota/semua")
        .then((res) => {
          setKotaData(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchKota();
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="text-center mb-5">
            {kota}
            <br />
            <small>
              Bulan {months[tgl.getMonth()]} {tgl.getFullYear()}
            </small>
          </h4>

          <div className="row mb-4">
            <div className="col-lg-2">
              <label htmlFor="">Pilih Kota / Kabupaten :</label>
              <select className="form-control" onChange={locationChangeHandler}>
                {kotaData.map((dt) => {
                  return (
                    <option
                      key={dt.id}
                      value={dt.id}
                      selected={parseInt(dt.id) === idKota ? "selected" : ""}
                    >
                      {dt.lokasi}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Imsyak</th>
                  <th>Subuh</th>
                  <th>Terbit</th>
                  <th>Dhuha</th>
                  <th>Dzuhur</th>
                  <th>Ashar</th>
                  <th>Magrib</th>
                  <th>Isya</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <>
                    <tr>
                      <td colSpan={9} className="text-center">
                        <div className="alert alert-info">
                          <div className="alert-body text-center">
                            <div className="spinner-border" role="status">
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                ) : result ? (
                  sholat.map((dt, idx) => {
                    return (
                      <>
                        <SholatTable key={idx} data={dt} />
                      </>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={9} className="text-center">
                      <div className="alert alert-danger">
                        <div className="alert-body text-center">
                          Tidak Ada Data
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SholatContainer;
