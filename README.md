# EjercicioAPI - API de Gestión de Incidentes

Este proyecto es una API RESTful desarrollada con Node.js y Express para gestionar incidentes reportados por empleados en una empresa. Permite crear, consultar, actualizar y eliminar reportes de incidentes relacionados con equipos de trabajo (computadoras, impresoras, redes, etc.). En esta versión, los datos se almacenan en memoria (usando un arreglo), lo que elimina la necesidad de una base de datos externa como MongoDB durante el desarrollo inicial.

## Requisitos previos

- **Node.js**: Versión 14.x o superior. Descarga desde [nodejs.org](https://nodejs.org/).
- **npm**: Viene incluido con Node.js.
- Un cliente HTTP como [Postman](https://www.postman.com/), [cURL](https://curl.se/), o cualquier navegador para probar los endpoints.

## Instalación

1. **Clona o descarga el proyecto**:
   - Si estás usando Git:
     ```bash
     git clone <url-del-repositorio>
     cd EjercicioAPI
     ```
   - O descarga el código y descomprímelo en una carpeta.

2. **Instala las dependencias**:
   - En la raíz del proyecto, ejecuta:
     ```bash
     npm install
     ```
   - Esto instalará `express` y `dotenv`, las únicas dependencias necesarias.

3. **Configura las variables de entorno**:
   - Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
     ```
     PORT=3000
     ```
   - El puerto por defecto es 3000, pero puedes cambiarlo si lo deseas.


## Uso

1. **Inicia el servidor**:
   - En la raíz del proyecto, ejecuta:
     ```bash
     npm start
     ```
   - Verás el mensaje:
     ```
     Servidor corriendo en puerto 3000
     ```
   - Si no funciona, asegúrate de que el script `"start": "node server.js"` esté en `package.json`.

2. **Prueba los endpoints**:
   - Usa los siguientes comandos cURL o impórtalos a Postman:

   **Crear un incidente** (POST /incidents):
   ```bash
   curl -X POST http://localhost:3000/incidents \
   -H "Content-Type: application/json" \
   -d '{"reporter":"Morch","description":"explotó la pc je je ayuda gfesito","status":"pendiente"}'