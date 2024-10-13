import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryCard = ({ country, isEditing = false }) => {
  return (
    <>
      <div className="card custom-card mx-auto my-2" style={{ width: "12rem" }}>
        <img src={country.flags.png} className="card-img-top h-25" />
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="row">
            <div className="col-12 border-secondary border-bottom p-2">
              <b>{!(country.capital === "undefined") ? country.name.common : "frkica"}</b>
            </div>
          </div>
          <div className="row h-25 border-secondary border-bottom p-1 justify-content-between align-items-center">
            <div className="col-6 fw-bold font-small">Region</div>
            <div className="col-6 font-small">{country.region}</div>
          </div>
          <div className="row h-25 border-secondary border-bottom p-1 justify-content-between align-items-center">
            <div className="col-6 fw-bold font-small">Population: </div>
            <div className="col-6 font-small">{country.population}</div>
          </div>

          {isEditing && (
            <>
              <div className="row h-25 border-secondary border-bottom p-1 justify-content-between align-items-center">
                <div className="col-6 fw-bold font-small">Capital: </div>
                <div className="col-6 font-small">
                  {country.capital.map((item, index) => {
                    return (
                      item + (index < country.capital.length - 1 ? ", " : "")
                    );
                  })}
                </div>
              </div>
              <div className="row h-25 border-secondary border-bottom p-1 justify-content-between align-items-center">
                <div className="col-6 fw-bold font-small">Continents: </div>
                <div className="col-6 font-small">
                  {country.continents.map((item, index) => {
                    return (
                      item + (index < country.continents.length - 1 ? ", " : "")
                    );
                  })}
                </div>
              </div>
              <div className="row h-25 border-secondary border-bottom p-1 justify-content-between align-items-center">
                <div className="col-6 fw-bold font-small">unMember: </div>
                <div className="col-6 font-small">
                  {country.unMember ? "Yes" : "No"}
                </div>
              </div>
            </>
          )}

          {!isEditing ? (
            <Link
              to={`/countries/${country.name.common}`}
              className="btn btn-primary"
            >
              Edit
            </Link>
          ) : (
            <Link to={`/countries`} className="btn btn-primary mt-2">
              Back to countires
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    flags: PropTypes.shape({
      png: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
    capital: PropTypes.array,
    continents: PropTypes.array.isRequired,
    region: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    unMember: PropTypes.bool.isRequired,
  }).isRequired,
  isEditing: PropTypes.bool,
};

export default CountryCard;
