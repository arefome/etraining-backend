<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
# Etraining API

![NestJS Logo](https://nestjs.com/img/logo-small.svg)

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

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

   ```env
   NODE_ENV=development
   JWT_SECRET=tu_secreto_jwt
   ```

4. Ejecuta las migraciones de la base de datos:

   ```bash
   npx prisma migrate dev
   ```

## Uso

Para iniciar la aplicación en modo desarrollo, ejecuta:

```bash
pnpm run start:dev
```

La API estará disponible en `http://localhost:3000`.

## Endpoints

### Autenticación

- `POST /auth/login` - Iniciar sesión y obtener un token JWT.

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

## Pruebas

Para ejecutar las pruebas unitarias, utiliza:

```bash
pnpm run test
```

Para ejecutar las pruebas de extremo a extremo (e2e):

```bash
pnpm run test:e2e
```

## Despliegue

Para usar una bd de turso agregar:

 ```env
 TURSO_DATABASE_URL=tu_url_de_base_de_datos
 TURSO_AUTH_TOKEN=tu_token_de_autenticación
 ```

Para desplegar la aplicación en Google Cloud Run, asegúrate de tener configuradas las credenciales de Google Cloud y ejecuta:

```bash
pnpm run build
gcloud run deploy
```