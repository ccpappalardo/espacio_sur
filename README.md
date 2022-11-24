# E S P A C I O S U R

Espacio Sur es un proyecto E-Commerce de venta de Cursos On-line, realizado en React Js y como servidor se utilizó Firebase.

# Funcionalidades del Proyecto - Usuario

- Mediante el sitio se pueden visualizar los cursos que hay disponibles para inscribirse en Espacio Sur.
- Se pueden filtrar los cursos, según la modalidad del curso (Presencial / Online).
- A simple vista, se puede observar en cada uno de ellos, una imágen ilustrativa, el titulo, el descuento disponible, la modalidad de cursado y el precio.
- A través del botón ver detalle, se puede acceder al contenido de cada curso, que en este momento es ficticio. El usuario puede seleccionar la cantidad de cupos a comprar y agregarlos al carrito de compras.
- En el carrito de compras, se podrá:
  - visualizar un resumen de compra.
  - eliminar los productos.
  - vaciar el carrito, en caso de arrepentirse de la compra.
  - así como también, ir al checkout para finalizar el pedido.
- Para poder finalizar la compra, es necesario completar un formulario de contacto con los datos personales del Usuario, mediante el cual se le mostrará en pantalla un código de seguimiento de la órden.

# Funcionalidades del Proyecto - Base de Datos

- Posee Modalidades Dinámicas, es decir que si se agrega una nueva modalidad en la base de datos, la misma se verá reflejada en el menú de navegación de forma automática.
- Posee Productos Dinámicos, es decir que si se agrega un nuevo producto en la base de datos, el mismo se verá reflejado en la lista de productos, así como también se agregará al filtro de categorías.

# Librerías Utilizadas

- [React Js](https://es.reactjs.org/).
  React Js: Una biblioteca de JavaScript para construir interfaces de usuario, es de código abierto y su objetivo es facilitar el desarrollo de aplicaciones en una sola página.

- [Node Js](https://nodejs.org/en/) Node. js es un entorno de ejecución de JavaScript, basado en una arquitectura no bloqueante y manejada por eventos para ayudar a los desarrolladores a crear aplicaciones distribuidas robustas. De código abierto y multiplataforma, se emplea para desarrollar aplicaciones de servidor.

- [Node Package Manager - NPM](https://www.npmjs.com/)
  Es el gestor de paquetes, módulos o librerías que nos proporciona Node.js

- [React-Router-Dom](https://reactrouter.com/en/main) es una librería que se utiliza bastante con React y que nos facilita el proceso de definir las rutas de navegación dentro de nuestra aplicación.

  ```bash
  npm install react-router-dom
  ```

- [Firebase](https://firebase.google.com/) es una plataforma para el desarrollo de aplicaciones web y aplicaciones móviles lanzada en 2011 y adquirida por Google en 2014.

  ```bash
  npm install firebase
  ```

- [React-spinners](https://www.npmjs.com/package/react-spinners) Es una libreria de React que proporciona un componente SVG que se puede implementar para la operación de espera asíncrona antes de que los datos se carguen en la vista del usuario.

  ```bash
  npm install --save react-spinners
  ```

- [React-toastify]() es una librería que te permite añadir notificaciones de una forma muy facil, las mismas se pueden personalizar en estilo y mensaje que le muestra al usuario.

  ```bash
  npm install --save react-toastify
  ```

- [GitHub](https://github.com/) GitHub es un servicio basado en la nube que aloja un sistema de control de versiones (VCS) llamado Git. Éste permite a los desarrolladores colaborar y realizar cambios en proyectos compartidos, a la vez que mantienen un seguimiento detallado de su progreso.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
