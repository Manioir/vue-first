<template>
    <div class="photo">
        <!-- 顶部滑动条区域 -->
       <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="(item,index) in carte" :key="index">
                       {{ item.title }}
                    </a>
                </div>
            </div>
       </div>
       <!-- 图片列表区域 -->
       <ul class="photo-list">
            <li v-for="item in cates" :key="item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h3 class="info-title">
                        {{ item.title }}
                    </h3>
                    <div class="info-body">
                        {{ item.zhaiyao }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { Lazyload } from "mint-ui";
import mui from "../../lib/dist/mui/js/mui.min.js";
export default {
  data() {
    return {
      carte: [],
      cates:[]
    };
  },
  created() {
    this.getcarte();
    this.cate(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getcarte() {
      this.$http.get("api/getimgcategory").then(res => {
        //   console.log(res)
        if (res.body.status === 0) {
          this.carte = res.body.message;
          this.carte.unshift({ title: "全部", id: 0 });
        }
      });
    },
    cate(cateid) {
      this.$http.get("api/getimages/"+cateid).then(res => {
        console.log(res);
        if(res.body.status === 0){
            this.cates = res.body.message
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: none;
  margin: 0;
  padding: 0;
}

.photo-list{
    list-style: none;
    padding: 10px;
    padding-bottom: 0;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 10px #999;
        position: relative;
        img{
            width: 100%;
            vertical-align: middle;         
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info{
            color: white;
            background: rgba(0, 0, 0, 0.4);
            position: absolute;
            bottom: 0;
            text-align: left;
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px;
            }
        }
    }
}
</style>