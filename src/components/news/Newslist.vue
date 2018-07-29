<template>
    <div class="newslist">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in listnews" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h2>{{item.title}}</h2>
                        <p class='mui-ellipsis'>
                            <span>评论时间:{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                            <span>评论: {{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data(){
      return {
          listnews:[]
      }
  },
  created(){
      this.getnewslist()
  },
  methods:{
      getnewslist(){
          this.$http.get("api/getnewslist").then(res=>{
            //   console.log(res);  
              if(res.body.status === 0){
                  this.listnews = res.body.message
              }
          })
      }
  }
};
</script>

<style lang="less" scoped>
    .mui-table-view{
      li{
          h2{
              font-size: 14px;
          }
          p{
              color: skyblue;
              font-size: 12px;
              display: flex;
              justify-content: space-between;
          }
      }
    }
</style>