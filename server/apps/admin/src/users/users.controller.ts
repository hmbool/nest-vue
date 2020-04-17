import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';

//  crud增删改查模块
@Crud({
  model: User
})

@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}          // 引用注入模型

  @Get('option')
  option() {
    return {
      title: '用户管理',
      column: [
        { prop: 'username', label: '用户名' },
        // { prop: 'cover', label: '课程封面图' },
      ]
    }
  }
}
