<template>
    <div class="comment">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="请输入想要BB的内容(最多吐槽120个字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="index">
                <div class="cmt-title">
                    第{{ index+1 }}楼 &nbsp;用户:{{ item.user_name }}&nbsp;发表时间:{{ item.add_time }}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="more">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageindex: 1,
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getComment();
  },
  props: ["id"],
  methods: {
    getComment() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex + "")
        .then(res => {
          // console.log(res.body)
          if (res.body.status === 0) {
            //   this.comments = res.body.message
            this.comments = this.comments.concat(res.body.message);
          }
        });
    },
    more() {
      this.pageindex++;
      this.getComment();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        Toast("请输入评论内容");
      } else {
        this.$http
          .post("api/postcomment/" + this.id, {
            content: this.msg
          })
          .then(res => {
            // console.log(res);
            if (res.body.status === 0) {
              // 1. 拼接出一个评论对象
              var cmt = {
                user_name: "匿名用户",
                content: this.msg.trim()
              };
              this.comments.unshift(cmt);
              this.msg = "";
            }
          });
      }
    }
  }
};
</script>

<style lang="less">
.comment {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>