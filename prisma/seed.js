"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Crear roles
        const roles = ['ADMIN', 'COORDINADOR', 'DOCENTE', 'ESTUDIANTE'];
        for (const role of roles) {
            yield prisma.role.upsert({
                where: { name: role },
                update: {},
                create: { name: role },
            });
        }
        // Crear estados de inscripción
        const statuses = ['INSCRIPTO', 'APROBADO', 'RECHAZADO', 'CERTIFICADO'];
        for (const status of statuses) {
            yield prisma.inscriptionStatus.upsert({
                where: { name: status },
                update: {},
                create: { name: status },
            });
        }
        // Crear categorías
        const categories = ['Programación', 'Big Data', 'Blockchain', 'Marketing'];
        for (const category of categories) {
            yield prisma.category.upsert({
                where: { name: category },
                update: {},
                create: { name: category },
            });
        }
        // Crear modalidades
        const modalities = ['Virtual', 'Remoto', 'Presencial'];
        for (const modality of modalities) {
            yield prisma.modality.upsert({
                where: { name: modality },
                update: {},
                create: { name: modality },
            });
        }
    });
}
main()
    .then(() => console.log('Seed ejecutado correctamente'))
    .catch((e) => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
