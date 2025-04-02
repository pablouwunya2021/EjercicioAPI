# EjercicioAPI - API de Gestión de Incidentes



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
     Servidor corriendo en puerto 3001
     ```
   - Si no funciona, asegúrate de que el script `"start": "node server.js"` esté en `package.json`.

2. **Prueba los endpoints**:
   - Usa los siguientes comandos cURL o impórtalos a Postman:

   **Crear un incidente** (POST /incidents):
   ```bash
   curl -X POST http://localhost:3001/incidents \
   -H "Content-Type: application/json" \
   -d '{"reporter":"Morch","description":"explotó la pc je je ayuda gfesito","status":"pendiente"}'

   ## Configuración de la base de datos (PostgreSQL)

### Requisitos
- PostgreSQL (versión 12 o superior) instalado. Descarga desde [postgresql.org](https://www.postgresql.org/download/).
- pgAdmin 4 (opcional, para gestión gráfica).

### Pasos para configurar la base de datos
1. **Instala PostgreSQL**:
   - Descarga e instala PostgreSQL en tu máquina.
   - Durante la instalación, anota la contraseña que configures para el usuario `postgres`.


2. **Crea la base de datos**:
   - Abre pgAdmin 4 o usa la terminal con `psql`.
   - Crea la base de datos:
     ```sql
     CREATE DATABASE incident_tracker;
     ```

3. **Crea la tabla**:
   - Ejecuta el script `init.sql` proporcionado en el repositorio:
     - En pgAdmin, abre "Query Tool", selecciona la base de datos `incident_tracker`, y ejecuta el contenido de `init.sql`.


4. **Configura las credenciales**:
   - Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
     ```
     PORT=3001
     PGHOST=localhost
     PGUSER=postgres
     PGPASSWORD=tu_contraseña
     PGDATABASE=incident_tracker
     PGPORT=5432
     ```
   - Reemplaza `tu_contraseña` con la contraseña del usuario `postgres` que configuraste al instalar PostgreSQL.