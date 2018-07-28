<template>
    <div class="">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in listLunBotu" :key="item.id">
                <img :src="item.img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
      <muigird></muigird>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import MuiGird from '../../muicomponents/MuiGird.vue'
export default {
  data() {
    return {
      listLunBotu: []
    };
  },
  created() {
    this.getLunBoTu();
  },
  methods: {
    getLunBoTu() {
      // this.$http.post("请求路径地址","传递的参数",)
      this.$http.get("api/getnewslist").then(res => {
        // console.log(res.body);
        // 成功了
        if (res.body.status === 0) {
          this.listLunBotu = res.body.message;
        }
      },function(res){
          if(res.body.status !== 0){
              Toast("获取数据失败");
          }
      })
    }
  },
  components:{
    'muigird':MuiGird
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
      border: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

</style>