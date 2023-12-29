# Instalar node js
## ¿Qué es NPM?
Cuando trabajamos con Node.js, a menudo necesitamos instalar módulos adicionales para expandir sus funcionalidades. Node es modular por naturaleza, lo que significa que viene con un conjunto básico de funcionalidades y requerirá la instalación de módulos adicionales para la mayoría de las operaciones. Para facilitar este proceso, utilizamos npm (Node Package Manager). Con npm, la instalación de nuevos módulos es una tarea simple y eficiente.

## Instalación
Para poder instalar una aplicación de react js desde el CLI, debemos previamente instalar
node js.
1. Ingresar a: https://nodejs.org/en/
2. Descargar la última versión LTS de node Js
3. Ejecutar el archivo descargado y seguir los pasos

## Babel
Es una herramienta que convierte código JavaScript de última generación o con funcionalidades avanzadas a un formato que cualquier navegador o versión de Node.js pueda comprender. Utiliza plugins para definir qué transformaciones aplicar; por ejemplo, el plugin "babel-plugin-transform-es2015-arrow-functions" convierte las funciones de flecha de ECMAScript 2015 a funciones regulares, mientras que "babel-plugin-transform-react-jsx" permite entender y convertir código JSX a JavaScript estándar.

###  Instalación global
Para instalar Babel globalmente, debes abrir la terminal o cmd en Windows y ejecutar el siguiente comando:

```bash
npm install --global babel-cli
```
Babel está construido modularmente, y en este caso, nos interesa el módulo de ES6. Instálalo en tu directorio raíz con el siguiente comando:
```bash
npm i -D babel-preset-es2015
```
Luego, configura Babel creando un archivo .babelrc con el siguiente contenido:
```json
{
  "presets": ["es2015"]
}
```
Para compilar directamente un archivo, escribe en la terminal:
```bash
babel mi-fichero.js -o mi-fichero-compilado.js
```

## Instalación local
Desde la terminal o CMD nos ubicamos en el directorio deseado y ejecutamos:
```bash
npm install --save-dev babel-cli
```
Una vez que la instalación finalice, tendrás un archivo package.json similar a este:
```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "devDependencies": {
    "babel-cli": "^6.0.0"
  }
}
```
Ahora, en lugar de ejecutar Babel directamente desde la línea de comandos, puedes escribir comandos en los scripts de npm para usar tu versión local.

Simplemente agrega el campo "scripts" en el archivo package.json ubicado en la raíz del proyecto. En este campo, coloca el comando de Babel, como por ejemplo "build".

```bash
npm i -D babel-preset-es2015
```