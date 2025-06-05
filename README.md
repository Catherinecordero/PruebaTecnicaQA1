# Playwright + Cucumber BDD Example - Sauce Demo Login
# Prueba Técnica QA - Ejercicio #1: Framework BDD

Este repositorio contiene la implementación de un framework BDD para automatizar un escenario de inicio de sesión.

## Descripción

Ejercicio #1: Implementación de Framework BDD

Utilicé Playwright junto con Cucumber (BDD) para automatizar el escenario de inicio de sesión en la URL [https://www.saucedemo.com](https://www.saucedemo.com).

## Estructura del proyecto

- `features/`  
  Carpeta que contiene los archivos `.feature` con los escenarios escritos en Gherkin.

- `features/step-definitions/`  
  Archivos `.js` que implementan los pasos definidos en los features.

- `package.json`  
  Configuración del proyecto y dependencias.

- `cucumber.js`  
  Configuración para ejecutar las pruebas con Cucumber.

## Cómo ejecutar las pruebas

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Catherinecordero/PruebaTecnicaQA1.git


## Cómo usar

1. Instala dependencias:

```bash
npm install
```

2. Ejecuta tests:

```bash
npm run test
```

Esto abrirá un navegador Chromium y realizará el login automatizado en https://www.saucedemo.com/.
"# PruebaTecnicaQA" 
