import { LinkContainer } from "react-router-bootstrap";

const SurahList = ({ data }) => {
  return (
    <>
      <LinkContainer to={`/surah/${data.nomor}`} style={{ cursor: "pointer" }}>
        <div className="card text-bg-dark mb-3">
          <div className="card-body">
            <h3 className="card-title text-center">{data.asma}</h3>
            <p className="card-text text-center">
              <i>{data.nama}</i>
            </p>
          </div>
        </div>
      </LinkContainer>
    </>
  );
};

export default SurahList;
