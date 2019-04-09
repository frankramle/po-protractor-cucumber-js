### instrucciones para instalar el proyecto local:

- disponer de una terminal/VM con SO (Windows 10 / Ubuntu 18.04) que tenga instalado JAVA, Protractor (5.4.1) y Google Chrome.
- Mediante GIT hacer un git clone del proyecto en una carpeta local (git clone https://github.com/frankramle/po-protractor-cucumber-js.git).
- de forma global: npm install -g protractor
- dentro de la carpeta del proyecto ejecutar "npm install" para instalar las dependencias dentro de la carpeta de proyecto. Luego:
    - webdriver-manager update 

### instrucciones run test:

- abrir una terminal y dirigirse hacia la carpeta del proyecto para ejecutar "npm run test". Este ALIAS se pueden encontrar dentro del archivo package.json (dentro del tag 'scripts').
- aclaracion: los test estan con desarrollados de manera asincrona usando el async/await
