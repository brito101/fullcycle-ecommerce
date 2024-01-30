import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: 'af26bd7b-ee63-44ec-87a6-8b5ecb8e4fb1',
      name: 'Produto 1',
      description: 'Descrição Produto 1',
      price: 17.7,
      image_url: 'xxx',
    },
    {
      id: 'af26bd7b-ee63-44ec-87a6-8b5ecb8e4fa2',
      name: 'Produto 2',
      description: 'Descrição Produto 2',
      price: 17.2,
      image_url: 'xxx',
    },
    {
      id: 'af26bd7b-ee63-44ec-87a6-8b5ecb8e4fb3',
      name: 'Produto 3',
      description: 'Descrição Produto 3',
      price: 17.3,
      image_url: 'xxx',
    },
    {
      id: 'af26bd7b-ee63-44ec-87a6-8b5ecb8e4fb4',
      name: 'Produto 4',
      description: 'Descrição Produto 4',
      price: 17.4,
      image_url: 'xxx',
    },
    {
      id: 'af26bd7b-ee63-44ec-87a6-8b5ecb8e4fb5',
      name: 'Produto 5',
      description: 'Descrição Produto 5',
      price: 17.7,
      image_url: 'xxx',
    },
    {
      id: 'af26bd7b-ee63-44ec-87a6-8b5ecb8e4fb6',
      name: 'Produto 6',
      description: 'Descrição Produto 6',
      price: 17.5,
      image_url: 'xxx',
    },
    {
      id: 'af26bd7b-ee63-44ec-87a6-8b5ecb8e4fb7',
      name: 'Produto 7',
      description: 'Descrição Produto 7',
      price: 17.7,
      image_url: 'xxx',
    },
    {
      id: 'af26bd7b-ee63-44ec-87a6-8b5ecb8e4fb8',
      name: 'Produto 8',
      description: 'Descrição Produto 8',
      price: 17.6,
      image_url: 'xxx',
    },
    {
      id: 'af26bd7b-ee63-44ec-87a6-8b5ecb8e4fb9',
      name: 'Produto 9',
      description: 'Descrição Produto 9',
      price: 17.7,
      image_url: 'xxx',
    },
    {
      id: 'af26bd7b-ee63-44ec-87a6-8b5ecb8e4fb0',
      name: 'Produto 10',
      description: 'Descrição Produto 10',
      price: 17.8,
      image_url: 'xxx',
    },
  ]);

  await app.close();
}

bootstrap();
