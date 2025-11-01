function isValidEmail(email) {
  if (!email || email.trim() === '') {
    return false;
  }

  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

module.exports = { isValidEmail };
