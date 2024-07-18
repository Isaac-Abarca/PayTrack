# PayTrack

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Collaboration](#collaboration)
6. [FAQs](#faqs)
7. [License](#license)

### General Info
***
PayTrack es una aplicación diseñada para gestionar deudas de manera eficiente. Permite agregar, visualizar y administrar deudas, así como adjuntar comprobantes en formato de imagen. La aplicación está desarrollada utilizando React, Firebase y otras tecnologías modernas para ofrecer una experiencia de usuario fluida y responsive.

### Screenshot
![Screenshot](https://www.united-internet.de/fileadmin/user_upload/Brands/Downloads/Logo_IONOS_by.jpg)

## Technologies
***
A continuación, se presenta una lista de las tecnologías utilizadas en este proyecto:

### Dependencias de Producción
* [dotenv](https://www.npmjs.com/package/dotenv): ^16.4.5
* [firebase](https://firebase.google.com/): ^10.12.3
* [prop-types](https://www.npmjs.com/package/prop-types): ^15.8.1
* [react](https://reactjs.org/): ^18.3.1
* [react-dom](https://reactjs.org/docs/react-dom.html): ^18.3.1
* [react-hot-toast](https://react-hot-toast.com/): ^2.4.1
* [react-router](https://reactrouter.com/): ^6.24.1
* [react-router-dom](https://reactrouter.com/web/guides/quick-start): ^6.24.1

### Dependencias de Desarrollo
* [@types/react](https://www.npmjs.com/package/@types/react): ^18.3.3
* [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^18.3.0
* [@vitejs/plugin-react-swc](https://www.npmjs.com/package/@vitejs/plugin-react-swc): ^3.5.0
* [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.4.19
* [eslint](https://eslint.org/): ^8.57.0
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): ^7.34.2
* [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ^4.6.2
* [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ^0.4.7
* [postcss](https://postcss.org/): ^8.4.39
* [tailwindcss](https://tailwindcss.com/): ^3.4.4
* [vite](https://vitejs.dev/): ^5.3.1

## Installation
***
Para instalar y ejecutar esta aplicación localmente, sigue estos pasos:

1. Clona el repositorio:
$ git clone https://github.com/Isaac-Abarca/PayTrack.git
$ cd ../path/to/the/file

2. Instala las dependencias:
$ npm install

3. Inicia la aplicación:
$ npm run dev


## Usage
***
Aquí tienes una breve guía de uso de la aplicación:

### Agregar una Deuda
1. Navega a la sección "Agregar Nueva Deuda".
2. Rellena los campos requeridos: Deudor, Acreedor, Monto Inicial y Descripción.
3. Adjunta un comprobante si es necesario (solo se permiten imágenes).
4. Haz clic en "Agregar Deuda". Si todos los campos son válidos, la deuda se agregará a la base de datos de Firebase y podrás verla en la lista de deudas.

### Ver y Administrar Deudas
1. Navega a la sección "Lista de Deudas".
2. Aquí verás todas las deudas agregadas, con opciones para ver detalles y eliminar deudas.

## Collaboration
***
Si deseas colaborar en este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y commitea (`git commit -m 'Agregar nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request describiendo los cambios realizados.

> “La colaboración es la clave del éxito en el desarrollo de software.”

## FAQs
***
A continuación, algunas preguntas frecuentes:

1. **¿Qué hacer si encuentro un bug?**
Si encuentras un bug, por favor abre un [issue](https://example.com/issues) detallando los pasos para reproducirlo.

2. **¿Cómo puedo solicitar una nueva funcionalidad?**
Puedes solicitar nuevas funcionalidades abriendo un [issue](https://example.com/issues) y etiquetándolo como "enhancement".

3. **¿Es posible usar esta aplicación en dispositivos móviles?**
Sí, la aplicación está diseñada para ser responsive y funcionar en dispositivos móviles.

4. **¿Qué bases de datos soporta la aplicación?**
Actualmente, la aplicación utiliza Firebase Firestore como base de datos.

## License
***
Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

