// 用户模型
import { prop, modelOptions, Ref, arrayProp } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Episode } from './episodes.model'

@modelOptions({
  schemaOptions: {
    timestamps: true   // 增加时间戳
  }
})


export class Course {
  // 我们必须用 @ApiProperty() 装饰器对其进行注释或者使用 CLI 插件自动完成
  @ApiProperty({
    description: '课程名称',
  })
  @prop()
  name: string

  @ApiProperty({
    description: '封面图'
  })
  @prop()
  cover: string


  // 数组字段
  // @arrayProp({ itemsRef: 'Episode' })
  // episodes: Ref<Episode>[]
}