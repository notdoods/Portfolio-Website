export const handleValidation = (name, email, message) => {
  let isValid = false;
  console.log(isValid);

  if (
    name.length > 0 &&
    email.length > 0 &&
    email.includes("@") &&
    message.length > 0
  ) {
    isValid = true;
  }
  return isValid;
};
