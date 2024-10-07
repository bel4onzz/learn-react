export const validateForm = (formData) => {
    const errors = {};
    if (formData.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters long";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Invalid email format";
    }
    if (!formData.gender) {
      errors.gender = "Please select your gender";
    }
    if (formData.interests.length === 0) {
      errors.interests = "At least one interest must be selected";
    }
    if (!formData.country) {
      errors.country = "Please select your country";
    }
    return errors;
  };