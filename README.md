## Descripción

API construida con NestJS, diseñada para gestionar cursos, inscripciones y usuarios en un entorno educativo. Esta API permite a los administradores gestionar roles, cursos y estados de inscripción, mientras que los usuarios pueden inscribirse en cursos y acceder a su información.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Pruebas](#pruebas)
- [Despliegue](#despliegue)

## Características

- Gestión de usuarios y roles.
- Creación y gestión de cursos.
- Inscripción de usuarios en cursos.
- API RESTful con documentación Swagger.
- Soporte para autenticación JWT.

## Tecnologías Utilizadas

- [NestJS](https://nestjs.com/) - Framework para construir aplicaciones del lado del servidor.
- [Prisma](https://www.prisma.io/) - ORM para gestionar la base de datos.
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación.
- [SQLite](https://www.sqlite.org/index.html) - Base de datos ligera.
- [Docker](https://www.docker.com/) - Contenerización de la aplicación.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/etraining-api.git
   cd etraining-api
   ```

2. Instala pnpm:

   ```bash
   npm install -g pnpm
   ```

3. Instala las dependencias:

   ```bash
   pnpm install
   ```

4. Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

   ```env
   NODE_ENV=development
   JWT_SECRET=tu_secreto_jwt
   ```

5. Ejecuta las migraciones de la base de datos:

   ```bash
   pnpm dlx prisma migrate dev
   ```

6. Ejecuta las semillas:

   ```bash
   pnpm dlx prisma db seed
   ```

## Uso

Para iniciar la aplicación en modo desarrollo, ejecuta:

```bash
pnpm run start:dev
```

La API estará disponible en `http://localhost:3000`.

## Endpoints

### Autenticación

- `POST /auth/login` - Iniciar sesión obten un token temporaal que se debe verificar
- `GET /auth/verify?token=tu_token` - Verificar el token y obten un token permanente que se debe usar en las siguientes peticiones

### Usuarios

- `GET /users` - Obtener todos los usuarios.
- `POST /users` - Crear un nuevo usuario.
- `GET /users/:id` - Obtener un usuario por ID.
- `PATCH /users/:id` - Actualizar un usuario.
- `DELETE /users/:id` - Eliminar un usuario.

### Cursos

- `GET /courses` - Obtener todos los cursos.
- `POST /courses` - Crear un nuevo curso.
- `GET /courses/:id` - Obtener un curso por ID.
- `PATCH /courses/:id` - Actualizar un curso.
- `DELETE /courses/:id` - Eliminar un curso.

### Inscripciones

- `GET /enrollments` - Obtener todas las inscripciones.
- `POST /enrollments` - Inscribirse en un curso.
- `GET /enrollments/:user_id/:course_id` - Obtener una inscripción por ID de usuario y curso.
- `PATCH /enrollments/:user_id/:course_id` - Actualizar una inscripción.
- `DELETE /enrollments/:user_id/:course_id` - Eliminar una inscripción.

La documentación de la API se puede consultar en `http://localhost:3000/api`


## docker

Para construir la imagen Docker, ejecuta:

```bash
docker build -t etraining-api .
```

Luego, ejecuta:

```bash
docker run -p 3000:3000 etraining-api
```
## Googlo Cloud Run

La aplicación se encuentra en el repositorio de Google Cloud Run, en dos ambientes: uno para desarrollo y otro para producción.

Desarrollo:
  - URL: https://etraining-api-service-965369668049.us-east1.run.app/api

Producción:
  - URL: https://etraining-api-service-staging-965369668049.us-east1.run.app/api
