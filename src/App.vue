<template>
  <div id="app">
    <!-- 头部区域 -->
    <mt-header fixed title="长沙黑马程序员·vue项目"></mt-header>
    <!-- main区域 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部区域 -->
    <Muitabbar></Muitabbar>
  </div>
</template>

<script>
// 引入定义好的组件
import Muitabbar from './muicomponents/MuiTabbar.vue'
export default {
  components: {
    // 注册组件
    Muitabbar
  }
};
</script>

<style>
  #app{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
     position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
  /* 该类名，解决 tabbar 点击无法切换的问题 */
.mui-bar-tab .mui-tab-item-llb.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mint-header{
  z-index: 99!important;
}
</style>
