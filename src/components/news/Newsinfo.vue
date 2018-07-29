<template>
    <div class="newsInfo">
        <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="subtitle">
            <span>评论时间:{{ newsinfo.add_time }}</span>
            <span>评论:{{ newsinfo.click }}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content">

        </div>
        <!-- 评论区域 -->
        <comment :id="newid"></comment>
    </div>
</template>

<script>
import comment from "../subcomponents/Comment.vue"
export default {
    data(){
        return {
            newid:this.$route.params.id, //将URL 地址中 传递过来的ID值 挂载到 data 上 方便以后调用
            newsinfo:{}
        }
    },
    created(){
        this.getnewsinfo()
    },
    methods:{
        getnewsinfo(){
            this.$http.get('api/getnew/'+this.newid).then(res=>{
                // console.log(res.body)
                if(res.body.status === 0){
                    this.newsinfo = res.body.message
                }
            })
        }
    },
    components:{ //注册子组件
        comment
    }
}
</script>

<style lang="less" scoped>
    .newsInfo{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: hotpink;
        }
        .subtitle{
            font-size: 13px;
            color: aqua;
            display: flex;
            justify-content: space-between;
        }
        .content{
            font-size: 12px;
        }
    }
</style>