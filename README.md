# Daily Dosis

Daily Dosis es una aplicación móvil diseñada para ayudar a los usuarios a gestionar recordatorios de medicamentos de manera eficiente. Este proyecto forma parte del trabajo de unidad tres de la asignatura Taller de Dispositivos Móviles y se centra en la implementación de una cáscara de navegación basada en los mockups desarrollados previamente durante la fase de diseño y experiencia móvil.

## Avances en la Unidad 4 (Parte A) 
### Componentes nuevos implementados
En esta unidad, se agregaron dos nuevos componentes a la aplicación:
1. **`ion-item`:** Personalizado para seleccionar la frecuencia de las dosis mediante un menú desplegable.
2. **`ion-toast`:** Mensaje emergente temporal que informa al usuario sobre la acción realizada, como el guardado de un recordatorio.

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

