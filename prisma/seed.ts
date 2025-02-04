import { PrismaClient } from '@prisma/client';
import { first } from 'rxjs';

const prisma = new PrismaClient();

async function main() {
  // Crear roles
  const roles = ['ADMIN', 'COORDINADOR', 'DOCENTE', 'ESTUDIANTE'];
  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role },
      update: {},
      create: { name: role },
    });
  }

  // Crear estados de inscripción
  const statuses = ['INSCRIPTO', 'APROBADO', 'RECHAZADO', 'CERTIFICADO'];
  for (const status of statuses) {
    await prisma.inscriptionStatus.upsert({
      where: { name: status },
      update: {},
      create: { name: status },
    });
  }

  // Crear categorías
  const categories = ['Programación', 'Big Data', 'Blockchain', 'Marketing'];
  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category },
      update: {},
      create: { name: category },
    });
  }

  // Crear modalidades
  const modalities = ['Virtual', 'Remoto', 'Presencial'];
  for (const modality of modalities) {
    await prisma.modality.upsert({
      where: { name: modality },
      update: {},
      create: { name: modality },
    });
  }

  const rolesIds = await prisma.role.findMany({ select: { id: true } });
  // crete users con roles
  const users = [
    {
      first_name: 'Juan',
      last_name: 'Perez',
      email: 'juanperez@gmail.com',
      phone: '+56 987654321',
      role_id: rolesIds[0].id,
    },
    {
      first_name: 'Maria',
      last_name: 'Sanchez',
      email: 'mariasanchez@gmail.com',
      phone: '+56 987654322',
      role_id: rolesIds[1].id,
    },
    {
      first_name: 'Pedro',
      last_name: 'Rodriguez',
      email: 'pedrorodriguez@gmail.com',
      phone: '+56 987654323',
      role_id: rolesIds[2].id,
    },
    {
      first_name: 'Carlos',
      last_name: 'Hernandez',
      email: 'carloshernandez@gmail.com',
      phone: '+56 987654324',
      role_id: rolesIds[3].id,
    },
  ];
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }
}

main()
  .then(() => console.log('Seed ejecutado correctamente'))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
