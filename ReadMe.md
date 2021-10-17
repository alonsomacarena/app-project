# SkinCare App

  Proyecto para el Curso de Desarrollo de Aplicaciones de Coderhouse utilizando ReactNative

## Instalación

-npm install
-npm start

  
## Navegación

La aplicación cuenta con Stack Navigation y Tab Navigation. En las títulos de cada sección aquí abajo podrá encontrar la forma de navegación de cada uno:

### OnBoarding

Apenas se abre la aplicación, podrá ver unas pantallas de **OnBoarding.** Para pasarlas simplemente tiene que tocar *SKIP* o pasar todas las pantallas hasta la última y tocar *DONE*

### Login / Register

Luego del OnBoarding, va a aparecer la pantalla de **Login.** Si no esta loggeado, seleccione la opcion **Registrate** y, allí registrese con *Nombre, Email y Contraseña.* La aplicación tiene un ***AsyncStorage*** que permitirá que la próxima vez que ingrese, se haya guardado sus datos y no tenga que volver a ingresarlos.

### Home / Products

Después del Login, la primer pantalla que se verá es **Home**. Allí podrá encontrar las **Categorias de los Productos** y, una vez que seleccione **Favoritos** también podrá verlos allí.

En el ScrollHorizontal de **Categorías** podrá observar las 6 disponibles en este momento. Si selecciona alguna, navegará a la pantalla con los Productos de cada Categoria.**strong text** Allí puede seleccionar el/los que desea y, al hacerlo se dirigirá a la pantalla del **Detalle de Producto.** Una vez en la pantalla de Detalle podrá elegir si desea agregar ese Producto a Favoritos al hacer click en ***Agregar a Favoritos***. Para acceder a la pantalla para **Confirmar tus Favoritos** debes tocar el ***Button Flotante con la Estrella.*** Una vez allí, verás la lista entera de tus **Favoritos** con la opción de *eliminarlos* al pulsar el icono del tacho de basura y/o confirmalos al pulsar el botón **Confirmar** *(que enviará la lista a Firebase)*
Si no desea agregarlo a Favoritos, puede volver hacia atrás usando el HeaderButton o al pulsar 2 veces el ícono del Home.


### Favoritos

Una vez confirmados, tanto en Home como en Favoritos podrás ver el listado completo de tus productos favoritos
 
### Rutinas

Para acceder a **Rutinas**, debe tocar el ícono de Rutinas en el BottomTabBar. Esta pantalla tiene una ***demo*** de como se vería una vez que arme sus propias rutinas de día y de noche con sus productos favoritos.

### Registro

Al tocar el ícono de Registro, podrá acceder a la sección de **Registro Fotográfico**. Está sección esta pensada para que agregue un registro fotográfico semanal para ver los avances en su piel. La primera vez, verá la primer pantalla vacía y, en el Header el ícono **+**. Al tocar el HeaderButton, se dirigirá a la pantalla de **Agregar un Nuevo Registro**. Allí podrá seleccionar un título, agregar comentarios acerca de su progreso y, **Agregar una Foto accediendo a la Camara** *(acepte los permisos)*. Una vez listo, toque el botón ***Grabar*** y será redirigido a la pantalla principal de Registro. Ahora allí podrá ver su registro. Al tocar el mismo, accederá a la pantalla de **Detalles del Registro**. En esa pantalla podrá ver el detalle de todos sus registros.


### Perfil

Para acceder a **Perfil**, debe tocar el ícono de Perfil en el BottomTabBar. Esta pantalla tiene una ***demo*** de como se vería una vez que agregue su perfil. Si tiene funcionalidad la sección de **Agregar una Imagen de Perfil,** la que esta conectada con la **Galería de Fotos** de su teléfono *(acepte los permisos)*.
