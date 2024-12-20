# Daily Dosis

Daily Dosis es una aplicación móvil diseñada para ayudar a los usuarios a gestionar recordatorios de medicamentos de manera eficiente. Este proyecto forma parte del trabajo de la Unidad 4 de la asignatura Taller de Dispositivos Móviles y se centra en la implementación de la funcionalidad restante de la aplicación, junto con la generación del APK.

## Generación del APK
El archivo APK fue generado utilizando Visual Studio Code.
El comando utilizado: ./gradlew assembleDebug
Ruta de APK generado: android/app/build/outputs/apk/debug/app-debug.apk

### Problemas enfrentados
1. **Configuración del JDK**
- Se corrigió la ruta de JAVA_HOME para que apunte al JDK 23, asegurando compatibilidad con Gradle y Android Studio.
- Problema resuelto modificando las variables de entorno y el archivo settings.json en Visual Studio Code.

### Cómo ejecutar el proyecto
1. **Requisitos previos:**
- Node.js y Ionic CLI.
- Android Studio con un JDK compatible (JDK 11 o superior).

### Pasos para compilar y generar el APK:
1. **Abre una terminal en la carpeta raíz del proyecto.Abre una terminal en la carpeta raíz del proyecto:**
- Ejecuta los siguientes comandos: 
- npx cap sync android
- npx cap open android
2. **Instala el APK en un dispositivo Android desde la ruta generada.**

## Avances en la Unidad 4 (Parte B)
### Componentes nuevos implementados en esta etapa
- **`ion-datetime`:** Selector de fecha y hora para establecer recordatorios con un diseño interactivo de scroll.
- **`ion-alert`:** Mensaje emergente de confirmación para eliminar un recordatorio.
- **`ion-modal`:** Ventana emergente para mostrar detalles adicionales sobre los recordatorios.

### Detalles de implementación
- **`ion-datetime`:** Utilizado en la página "Agregar Recordatorio" para permitir a los usuarios seleccionar la fecha y hora exacta de sus recordatorios. Se implementaron        opciones de formato y se personalizó su tamaño y posición en la pantalla.
- **`ion-alert`:** Implementado en la misma página para confirmar la eliminación de un recordatorio. Este componente solicita confirmación antes de realizar la acción.
- **`ion-modal`:** Utilizado en la página "Agregar Recordatorio" para abrir una ventana emergente que muestra detalles adicionales sobre los recordatorios. 

### Problemas enfrentados
1. **Duplicación de ion-datetime**
- **Problema:** El componente se mostró dos veces debido a un error en la estructura del HTML.
  Solución: Se consolidó el diseño en un único ion-datetime, ajustando los estilos y eliminando redundancias.
2. **Errores de cierre de etiquetas en HTML**
- **Problema:** La página generaba errores debido a etiquetas mal cerradas o no anidadas correctamente.
  Solución: Se ajustó la estructura HTML aplicando indentación y validación de cierre de etiquetas.

## Próximo paso
Generar el APK no firmado para pruebas y distribución en dispositivos Android.

## Avances en la Unidad 4 (Parte A) 
### Componentes nuevos implementados
En esta unidad, se agregaron dos nuevos componentes a la aplicación:
1. **`ion-item`:** Personalizado para seleccionar la frecuencia de las dosis mediante un menú desplegable.
2. **`ion-toast`:** Mensaje emergente temporal que informa al usuario sobre la acción realizada, como el guardado de un recordatorio.

### Detalles de implementación
- **`ion-item`:** Utilizado en la página Frecuencia de Dosis para permitir al usuario seleccionar una opción del menú desplegable. El diseño fue personalizado con estilos CSS para ajustarlo al diseño deseado.
- **`ion-toast`:** Implementado en la misma página para mostrar mensajes emergentes temporales al realizar una acción, como seleccionar una opción. La funcionalidad se configuró utilizando `ToastController` de Ionic.

### Conclusión (Parte A) 
Con esta etapa, la aplicación Dosis Diarias cuenta con dos nuevos componentes (`ion-datetime` y `ion-toast`) que mejoran la experiencia del usuario. Además, se solucionaron problemas de estilo y funcionalidad, logrando un progreso hacia el desarrollo completo de la app.

### Problemas enfrentados
Durante la implementación de estos componentes, se enfrentaron los siguientes desafíos:
1. **Error TS2339 en el uso de `ion-select`:**  
   Solución: Se declaró la propiedad `selectedFrequency` en el archivo TypeScript y se vinculó correctamente con `ngModel`.

2. **Estilo de componentes ocupando todo el ancho de la pantalla:**  
   Solución: Se personalizaron los estilos con CSS para ajustar el tamaño y agregar márgenes y bordes redondeados.

3. **Fallo al mostrar el Toast:**  
   Solución: Se importó e inyectó correctamente el `ToastController` en el archivo TypeScript.

### Instrucciones para la instalación y ejecución
El proceso de instalación no ha cambiado y sigue los mismos pasos:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/PauliGonz/App-Dosis-Diarias.git
- Instala las dependencias con el comando npm install 
- ejecuta el proyecto con el comando ionic serve

## Características
- **Menú lateral:** Navegación fluida entre las páginas de la aplicación.
- **Páginas disponibles:**
  - Inicio
  - Bienvenida
  - Agregar recordatorio
  - Buscador
  - Buscador de medicamentos
  - Cuenta
  - Frecuencia de dosis
  - Recordatorio exitoso

## Requisitos previos
Para hacer correr la app debes tener instalados los siguientes elementos antes de ejecutar:
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Ionic CLI](https://ionicframework.com/docs/cli) (`npm install -g @ionic/cli`)
- Git para clonar el repositorio

## Instalación
1. Clona este repositorio:
   git clone https://github.com/tu-usuario-github/daily-dosis.git
   - cd daily-dosis

## Instala las dependencias del proyecto
  - npm install

## Ejecuta proyecto
  - ionic serve
  - Puedes acceder a la aplicación en tu navegador en http://localhost:8100.

## Desarrollo
Este proyecto utiliza Ionic para estructurar y facilitar la navegación entre páginas, siguiendo los principios de diseño previamente establecidos. Las principales funcionalidades implementadas incluyen:

Configuración de rutas en Ionic para habilitar la navegación entre las páginas.
Diseño de la interfaz utilizando componentes predeterminados de Ionic, asegurando una experiencia de usuario coherente.
Implementación de un menú lateral para una navegación accesible.

## Problemas enfrentados
Durante el desarrollo, se presentaron los siguientes desafíos y sus respectivas soluciones:

  - Error en la configuración inicial del Ionic CLI: Esto se resolvió verificando la instalación correcta de Node.js y       
    reinstalando el CLI.
  - Enlace roto entre páginas del menú: Se corrigió mediante la revisión de las rutas en el archivo app-routing.module.ts.
  - Durante el desarrollo, surgieron dificultades al intentar integrar componentes de Bootstrap con los de Ionic. algunos        estilos no se comportaban como se esperaba. Se soluciona revisando la documentación y la forma de implementar los            estilos de bootstrap en línea de código.

## Tecnologías utilizadas

- ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) **HTML5**: Para la estructura de las páginas.
- ![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) **CSS3**: Para la personalización del diseño.
- ![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript**: Para la lógica de navegación y el uso de Ionic.
- ![Angular](https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) **Angular**: Framework utilizado con Ionic para desarrollar la cáscara de navegación.
- ![Ionic](https://img.shields.io/badge/Ionic-%234482FA.svg?style=for-the-badge&logo=ionic&logoColor=white) **Ionic Framework**: Para construir la interfaz y navegación de la aplicación.
- ![Visual Studio Code](https://img.shields.io/badge/VSCode-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) **Visual Studio Code**: Editor de texto utilizado durante el desarrollo.

