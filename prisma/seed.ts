import { PrismaClient } from '@prisma/client';

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
}

main()
  .then(() => console.log('Seed ejecutado correctamente'))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
