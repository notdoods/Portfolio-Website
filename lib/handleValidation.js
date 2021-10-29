const handleValidation = async (name, email, message) => {
  let tempErrors = {};
  let isValid = true;

  if (name.length <= 0 || email.length <= 0 || message <= 0) {
    isValid = false;
  }
  return isValid;
};

export default handleValidation;
