import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
      const libsql = createClient({
        url: `${process.env.TURSO_DATABASE_URL}`,
        authToken: `${process.env.TURSO_AUTH_TOKEN}`,
      });
      const adapter = new PrismaLibSQL(libsql);
      super({ adapter });
    } else {
      super();
    }
  }
  
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}