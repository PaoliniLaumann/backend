const fs = require("fs");

class Container {
  constructor() {
    this.db = [];
    this.readJson = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
  }

  saveFile(object) {
    const data = {
      name: object?.name,
      info: object?.info,
      price: object?.price,
      id: this.readJson.length + 1,
    };

    this.db.push(...this.readJson, data);

    try {
      fs.writeFile("./data.json", JSON.stringify(this.db), () =>
        console.log("Done")
      );
    } catch (e) {
      console.log(e);
    }

    console.log(`El id asignado es ${data.id}`);
  }

  getById(myId) {
    this.readJson === "" ? console.log("No hay nada") : "";

    const matchId = this.readJson.find((product) => product.id === myId);
    /* matchId == undefined ? console.log("No existe.") : console.log(matchId); */
    return matchId === undefined ? 'This id isnt in the db' : matchId
  }

  deleteById(myId) {
    const matchId = this.readJson.filter((product) => product.id != myId);
    this.db.push(...matchId);
    console.log(this.db);

    try {
      fs.writeFile("./data.json", JSON.stringify(this.db), () =>
        console.log("Deleted!")
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: challenge.js ~ line 45 ~ Container ~ deleteById ~ error",
        error
      );
    }
  }

  deleteAll() {
    fs.writeFileSync("./data.json", JSON.stringify(this.db));
  }

  getAll() {
    return this.readJson
  }
}



module.exports = Container;