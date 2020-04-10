// 用户模型
import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true   // 增加时间戳
  }
})


export class User {
  // 我们必须用 @ApiProperty() 装饰器对其进行注释或者使用 CLI 插件自动完成
  @ApiProperty({
    description: '用户名',
    example: 'user1'
  })
  @prop()
  username: string

  @ApiProperty({
    description: '密码',
    example: 'pass1'
  })
  @prop()
  passward: string
}