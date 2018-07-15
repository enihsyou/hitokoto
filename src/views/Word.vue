<template>
  <div id="word-container">
    <el-carousel height="100%" indicator-position="none" arrow="never" :interval="switchInterval"
                 class="word-cards-container">
      <el-carousel-item v-for="item in words" class="word-card-container">
        <!--整个网页的背景图层-->
        <div class='background' :style="{backgroundImage:`url(${item.imageUrl})`}"></div>

        <!--文字部分-->
        <el-card class="word-card">
          <div>
            <Hitokoto class="hitokoto-component" :author="item.author" :sentence="item.sentence" />
          </div>
        </el-card>

        <div class="like-part">
          <el-button circle class="like-button" @click="plusOne(item)">
            <input type="checkbox" name="" id="btn" />
            <label class="btn-love" for="btn"></label>
          </el-button>
          <transition name="bounce" mode="out-in">
              <p :key="item.likes">
                {{ item.likes }}
              </p>
          </transition>

        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Hitokoto from "@/components/Hitokoto";

const switchInterval = 5000;

export default {
  name: "WordPage",
  components: {
    Hitokoto
  },
  data() {
    return {
      switchInterval,
      words: [
        {
          id: 1,
          author: "危险的操作",
          sentence: "跌跌撞撞的成长，又美又疼才是本质。",
          imageUrl: "https://piccdn.freejishu.com/images/2016/04/04/pixiv51081070.png",
          likes: 1
        }, {
          id: 2,
          author: "镜音リン",
          sentence: "就算这全世界 都将与你为敌 我也会守护你 所以你只需要在那微笑就好",
          imageUrl: "https://piccdn.freejishu.com/images/2016/04/06/9ab4978a40fac751dcffccd65610e530.jpg",
          likes: 2
        }, {
          id: 3,
          author: "少女终末旅行",
          sentence: "和绝望，和睦相处",
          imageUrl: "https://piccdn.freejishu.com/images/2016/09/25/930f5212c99ccc71accd4615cb03e255.jpg",
          likes: 3
        }
      ]
    };
  },
  methods: {
    plusOne(word) {
      word.likes += 1
    }
  }
};
</script>

<style scoped lang="scss">

#btn {
  position: absolute;
  left: -100%;
  top: -100%;
  opacity: 0;
  z-index: -1;
}

.btn-love {
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.btn-love:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  margin: 0 auto;
  background: url(https://abs.twimg.com/a/1446862637/img/t1/web_heart_animation.png) 0 0 no-repeat;
  background-size: 2900%;
  height: 100px;
  width: 100px;
}

#btn:checked + .btn-love:after {
  -webkit-animation: heart-burst steps(28) 0.8s 1 both;
  animation: heart-burst steps(28) 0.8s 1 both;
}

@-webkit-keyframes heart-burst {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}

@keyframes heart-burst {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}

#word-container {

}

.bounce-enter-active {

}

.bounce-leave-active {
  -webkit-animation: heart-burst steps(28) 0.8s 1 both;
  animation: heart-burst steps(28) 0.8s 1 both;
  animation-duration: 1s;
}


/*整个走马灯容器*/
.word-cards-container {
  height: 100%;

  /*每一张卡片的容器*/
  .word-card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /*每一张卡片的文字区域*/
  .word-card {
    background-color: darkgrey;
    margin-left: 3vw;
    margin-right: 3vw;
    padding-bottom: 1em;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .5);
  }

  /*卡片里的一言*/
  .hitokoto-component {

  }

  /*卡片里的点赞按钮*/
  .like-part {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .like-button {
      margin-top: 3em;
      color: #fe5890;

    }
    p {
      color: darkgrey;
      text-align: center;
      display: block;
    }
  }

  /*卡片背景图层*/
  .background {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    filter: brightness(0.6);
  }
}


</style>
