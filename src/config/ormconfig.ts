import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'portex',
  entities: [__dirname + '/entities/*.ts'],
  synchronize: true,  // Para desarrollo; en producción es mejor manejar migraciones
  logging: false,
});
