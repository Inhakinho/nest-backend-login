import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carga las variables de entorno desde el archivo .env
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    }), // Usa la variable de entorno para la conexión a MongoDB
    AuthModule, // Importa el módulo de autenticación
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('Database connection URI:', process.env.MONGO_URI);
  }
}
