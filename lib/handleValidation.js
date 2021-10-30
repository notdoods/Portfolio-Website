const handleValidation = async (name, email, message) => {
  let isValid = false;

  if (name.length >= 0 && email.length >= 0 && message >= 0) {
    isValid = true;
  }
  console.log(isValid);
  return isValid;
};

export default handleValidation;
