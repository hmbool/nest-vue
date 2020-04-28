import { CommonModule } from './../../../libs/common/src/common.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';

import { EpisodesModule } from './episodes/episodes.module';
import { CoursesModule } from './courses/courses.module';
import { MulterModule } from '@nestjs/platform-express';


const MAO = require('multer-aliyun-oss');
// 引用数据库模块libs
@Module({
  imports: [
    CommonModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_EKY_ID,
              accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
              bucket: process.env.OSS_BUCKET
              // dest: 'uploads'
            }
          })
        }
      }
    }),
    // MulterModule.register({
        
        
    //   }),
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
