function didNoteExpired(data) {
  const currentTime = new Date().getTime();
  const expirationTime = new Date(
    data.expirationTime._seconds * 1000
  ).getTime();
  return currentTime > expirationTime;
}

module.exports = {
  didNoteExpired,
};
