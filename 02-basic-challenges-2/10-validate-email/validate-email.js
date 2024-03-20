const validateEmail = (str) => {
  const validChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validChar.test(str);
};

module.exports = validateEmail;
