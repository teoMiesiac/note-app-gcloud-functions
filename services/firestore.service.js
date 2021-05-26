const Firestore = require("@google-cloud/firestore");
const Constants = require("../constants");

const firestore = new Firestore({
  projectId: Constants.PROJECT_ID,
  timestampsInSnapshots: true,
});

function createNote(body) {
  return firestore.collection(Constants.COLLECTION_NAME).add({
    text: body.text,
    password: body.password,
    expirationTime: new Date(body.expirationTime),
  });
}

function getNote(id) {
  return firestore.collection(Constants.COLLECTION_NAME).doc(id).get();
}

module.exports = {
  createNote,
  getNote,
};
