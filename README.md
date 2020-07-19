# nest-vue
(nestjs)NodeJs+VueJs

# 全局安装
npm i -g @nestjs/cli

# 查看版本
nest -V

# 创建项目
nest new server

# 创建nest的子项目
1. nest g app admin

2. nest g mo -p admin users
3. nest g co -p admin users


# 启动
nest start -w admin

# 创建公用模块
nest g lib db

# 安装数据库模块
yarn add nestjs-typegoose @typegoose/typegoose
yarn add mongoose @types/mongoose


# 
# 安装 crud增删改查模块
yarn add nestjs-mongoose-crud

# 安装 swagger
yarn add @nestjs/swagger swagger-ui-express

# yarn add axios @types/axios
