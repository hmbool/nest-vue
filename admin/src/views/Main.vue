<template>
  <el-container>
    <el-aside width="200px">
      <!-- Aside content -->
      <!-- vertical 垂直   指定到当前页面  router 表示是个路由菜单-->
      <el-menu mode="vertical" style="height:100vh;" :default-active="$router.path" router >
        <el-submenu
          v-for="(item, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}`"
        >
          <template slot="title">{{item.title}}</template>
          <!-- index 路由 -->
          <el-menu-item
            v-for="(subItem, subIndex) in item.items"
            :key="`menu-item-${index}-${subIndex}`"
            :index="subItem.path"  
          >{{subItem.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <!-- Header content -->
        <h3>视频 - 后台管理界面</h3>
      </el-header>
      <el-main>
        <!-- Main content -->
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

// 标记组件
@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        items: [
          { title: "首页", path: "/" },
          { title: "课程管理", path: "/courses/list" },
          { title: "课时管理", path: "/episodes/list" },
        ]  // 子菜单
      },
      {
        title: "运营管理",
        items: [
          { title: "用户管理", path: "/users/list" },
        ]  // 子菜单
      },
    ]
  };
}
</script>

<style>
</style>