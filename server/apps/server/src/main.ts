import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 跨域
  app.enableCors()
  // 使用 SwaggerModule 类初始化 Swagger
  const options = new DocumentBuilder()
    .setTitle('全站之巅-后台管理API')
    .setDescription('供后台管理界面调用的服务端API')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const PROT = process.env.SERVER_PROT || 3001
  await app.listen(PROT);
  console.log( `http://localhost:${PROT}/api-docs`)
}
bootstrap();
