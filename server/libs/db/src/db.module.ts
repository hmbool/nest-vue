import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Episode } from './models/episodes.model';

const models = TypegooseModule.forFeature([
  User,
  Course,
  Episode
])


// 全局引用
@Global()
@Module({
  imports: [
    // 连接数据库
    TypegooseModule.forRoot('mongodb://localhost/topfullstack', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models,  // 导入
  ],
  providers: [DbService],
  exports: [DbService, models],  // 导出模型
})
export class DbModule {}
