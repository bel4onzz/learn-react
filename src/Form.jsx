import { useState } from "react";
import { validateForm } from "./validation";
import { INTERESTS } from "./interests";
import { COUNTRIES } from "./countries";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    interests: [],
    country: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    // setFormData({
    //     ...formData,
    //     [event.target.name]: event.target.value,
    // })

    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        interests: checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormErrors = validateForm(formData);

    if (Object.keys(newFormErrors).length === 0) {
      setSubmittedData(formData);
      setFormErrors({});
    } else {
      setFormErrors(newFormErrors);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              value={formData.name}
              onChange={handleChange}
              id="inputName"
              name="name"
              type="text"
              className="form-control transparent-input"
            />
            {formErrors.name && (
              <p className="text-danger">{formErrors.name}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              value={formData.email}
              onChange={handleChange}
              id="inputEmail"
              name="email"
              type="text"
              className="form-control transparent-input"
            />
            {formErrors.email && (
              <p className="text-danger">{formErrors.email}</p>
            )}
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <label className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10">
            <div className="form-check w-25">
              <label
                htmlFor="inputGenderMale"
                className="col-sm-2 col-form-label"
              >
                <input
                  value="male"
                  onChange={handleChange}
                  id="inputGenderMale"
                  name="gender"
                  type="radio"
                  checked={formData.gender === "male"}
                  className="form-check-input transparent-input"
                />
                Male
              </label>
            </div>
            <div className="form-check w-25">
              <label
                htmlFor="inputGenderFemale"
                className="col-sm-2 col-form-label"
              >
                <input
                  value="female"
                  onChange={handleChange}
                  id="inputGenderFemale"
                  name="gender"
                  type="radio"
                  checked={formData.gender === "female"}
                  className="form-check-input transparent-input"
                />
                Female
              </label>
            </div>
            {formErrors.gender && (
              <p className="text-danger">{formErrors.gender}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Interests:
          </label>
          <div className="col-sm-10">
            <div className="d-flex align-content-center flex-wrap">
              {INTERESTS.map((interest, index) => (
                <div key={index} className="form-check me-4 py-2">
                  <label
                    className="form-check-label"
                    htmlFor={`"interest" + ${index}`}
                  >
                    {interest}
                  </label>
                  <input
                    className="form-check-input transparent-input"
                    type="checkbox"
                    id={`"interest" + ${index}`}
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
          </div>
          {formErrors.interests && (
            <p className="text-danger">{formErrors.interests}</p>
          )}
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Country:</label>
          <div className="col-sm-10">
            <select
              className="form-select transparent-input"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              {COUNTRIES.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          {formErrors.country && (
            <p className="text-danger">{formErrors.country}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default Form;
