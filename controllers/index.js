const services = require("../services");
const utils = require("../utils");

function createNote(req, res) {
  const body = req.body;
  if (!body.text || !body.params) {
    return res.status(400).send({ error: "provide correct data" });
  }

  if (body.text === "" || body.password === "") {
    return res.status(422).send({ error: "provide correct data" });
  }

  return services.firestoreService
    .createNote(body)
    .then((doc) => {
      return res.status(201).send({ id: doc.id });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ error: "unable to save note", err });
    });
}

function getNote(req, res) {
  const id = req.params.id;
  const password = req.body.password;

  return services.firestoreService
    .getNote(id)
    .then((doc) => {
      if (!(doc && doc.exists)) {
        return res.status(404).send({ error: "Sorry, note doesn't exist." });
      }
      const data = doc.data();

      if (data.password !== password) {
        return res.status(403).send({ error: "Wrong password" });
      }

      if (utils.didNoteExpired(data)) {
        return res.status(404).send({ error: "Note has expired" });
      }

      return res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ error: "Sth went wrong, try again" });
    });
}

module.exports = {
  createNote,
  getNote,
};
