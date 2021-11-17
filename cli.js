#!/usr/bin/env node
const {
  GestorArchivos,
  GestorDirectorios,
  ç,
  GestorDeContenidos,
} = require("./models/gestorDeArchivos");

const files = [
  "src",
  "src/model",
  "src/views",
  "src/views/partials",
  "src/controller",
  "src/middleware",
  "src/public",
  "src/public/img",
  "src/public/js",
  "src/public/css",
  "src/routes",
];

const crearCarpetasPrincipales = () => {
  files.forEach((item) => {
    GestorDirectorios.crearDirectorio(process.env.PWD, item);
  });
};

const crearArchivos = () => {
  files.forEach((item) => {
    if (
      !item.includes("src/view") &&
      item != "src/routes" &&
      !item.includes("public")
    ){
      GestorArchivos.crearArchivo(
        `${process.env.PWD}/${item}`,
        "index.js",
        GestorDeContenidos.getContenido("index")
      );
      }
     if( item == "src/routes"){
      GestorArchivos.crearArchivo(
        `${process.env.PWD}/${item}`,
        "index.js",
        GestorDeContenidos.getContenido("index.routes")
      );
      GestorArchivos.crearArchivo(
        `${process.env.PWD}/${item}`,
        "home.js",
        GestorDeContenidos.getContenido("home.routes")
      );
      
     }
     if( item == "src/controller"){
      GestorArchivos.crearArchivo(
        `${process.env.PWD}/${item}`,
        "navigationController.js",
        GestorDeContenidos.getContenido("controller")
      );
      
     }
     if (item == "src/public/css") {
      GestorArchivos.crearArchivo(
        `${process.env.PWD}/${item}`,
        "style.css",
        GestorDeContenidos.getContenido("css")
      );
    }
  });

  files
    .filter((item) => item.includes("view"))
    .forEach((item) => {
      if (item == "src/views"){
        GestorArchivos.crearArchivo(
          `${process.env.PWD}/${item}`,
          "index.ejs",
          GestorDeContenidos.getContenido("view")
        );
        GestorArchivos.crearArchivo(
          `${process.env.PWD}/${item}`,
          "error.ejs",
          GestorDeContenidos.getContenido("error")
        );
      }
       
      if (item == "src/views/partials") {
        GestorArchivos.crearArchivo(
          `${process.env.PWD}/${item}`,
          "head.ejs",
          GestorDeContenidos.getContenido("view.partial.head")
        );
        GestorArchivos.crearArchivo(
          `${process.env.PWD}/${item}`,
          "nav.ejs",
          GestorDeContenidos.getContenido("view.partial.nav")
        );
      }
     
    });

  GestorArchivos.crearArchivo(
    `${process.env.PWD}/src/`,
    "app.js",
    GestorDeContenidos.getContenido("app")
  );
  GestorArchivos.crearArchivo(
    `${process.env.PWD}/src/`,
    "index.js",
    GestorDeContenidos.getContenido("app.index")
  );
  GestorArchivos.crearArchivo(
    `${process.env.PWD}`,
    "package.json",
    GestorDeContenidos.getContenido("packjson")
  );
  GestorArchivos.crearArchivo(
    `${process.env.PWD}`,
    ".sequelizerc",
    GestorDeContenidos.getContenido("sequelizerc")
  );
  GestorArchivos.crearArchivo(
    `${process.env.PWD}`,
    ".gitignore",
    GestorDeContenidos.getContenido("gitignore")
  );
};
const main = () => {
  try {
    crearCarpetasPrincipales();
    crearArchivos();
  } catch (error) {
    console.log(error);
  }
};

main();
