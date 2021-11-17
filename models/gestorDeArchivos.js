const fs = require("fs");
const path = require("path");

class GestorArchivos {
  static crearArchivo(dir, name, contenido = "...") {
    try {
      fs.writeFileSync(`${dir}/${name}`, contenido, "utf8");
    } catch (error) {
      console.log(error);
    }
  }
}

class GestorDirectorios {
  static crearDirectorio(dir, name) {
    try {
      fs.mkdirSync(`${dir}/${name}`);
    } catch (error) {
      console.log(error);
    }
  }
}

class GestorDeContenidos {
  static getContenido(name) {
    try {
      const text = fs.readFileSync(
        path.resolve(__dirname, `../script/${name}.txt`),{encoding: 'utf8'}
      );
      return text;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  GestorArchivos,
  GestorDirectorios,
  GestorDeContenidos,
};
