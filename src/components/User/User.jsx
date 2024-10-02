import "./index.css";
import PropTypes from "prop-types";

const User = ({ userData = {} }) => {
  if (!userData) {
    return <></>;
  }
  return (
    <div className="page-content page-container mt-4" id="page-content">
      <div className="row p-2 justify-content-center">
        <div className="col-xl-8 col-md-12 w-100 p-0">
          <div className="card user-card-full">
            <div className="row m-l-0 m-r-0">
              <div className="col-sm-4 bg-c-lite-info user-profile">
                <div className="d-flex flex-column h-100 justify-content-between text-center text-default">
                  <div className="m-b-25">
                    <img
                      src={`https://robohash.org/${userData.id}`}
                      className="img-radius"
                      alt="User-Profile-Image"
                    />
                  </div>
                  <h6 className="f-w-600">
                    {userData.name} - {userData.username}
                  </h6>
                  <p>
                    {userData.address.street}, {userData.address.city}
                  </p>
                </div>
              </div>
              <div className="col-sm-8 bg-c-lite-data">
                <div className="card-block">
                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600 text-default">
                    Information
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600 text-default">Email</p>
                      <h6 className="text-muted f-w-400">{userData.email}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600 text-default">Phone</p>
                      <h6 className="text-muted f-w-400">
                        {String(userData.phone)}
                      </h6>
                    </div>
                  </div>
                  <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600 text-default">
                    Projects
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600 text-default">Company</p>
                      <h6 className="text-muted f-w-400">
                        {userData.company.name}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600 text-default">
                        Business strategy
                      </p>
                      <h6 className="text-muted f-w-400">
                        {userData.company.bs}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bs: PropTypes.string.isRequired,
    }).isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default User;
