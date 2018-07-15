<template>
  <div id="word-container">

    <!--整个网页的背景图层-->
    <div class='background' :style="{backgroundImage:`url(${word.imageUrl})`}"></div>

    <!--文字部分-->
    <div class="word-card">
      <Hitokoto :author="word.author" :sentence="word.sentence" />
    </div>

    <el-badge :value="word.likes" :max="99" class="like-badge">
      <el-button circle class="like-button"
                 :class="{animated}"
                 @click="plusOne();">
        <!--<font-awesome-icon icon='heart' />-->
      </el-button>
    </el-badge>

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
      animated: false,
      word: {
        id: 1,
        author: "危险的操作",
        sentence: "跌跌撞撞的成长，又美又疼才是本质。",
        imageUrl: "https://piccdn.freejishu.com/images/2016/04/04/pixiv51081070.png",
        likes: 1
      }
    };
  },
  methods: {
    plusOne() {
      if (this.animated) {
        this.word.likes -= 1;
      } else {
        this.word.likes += 1;
      }

      this.animated = !this.animated;
    }
  }
};
</script>

<style scoped lang="scss">

@keyframes bounce {
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
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

.bounce-enter-active {
  animation-name: bounce;
  transform-origin: center bottom;
  transition-duration: 400ms;
}

.bounce-leave-active {
  opacity: 0;
  animation-duration: 100ms;
}

/*整个容器*/
#word-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /*文字区域*/
  .word-card {
    margin-left: 3vw;
    margin-right: 3vw;
    padding-bottom: 1em;
  }

  /*点赞按钮*/
  .like-button {
    display: block;
    padding: 2em;
    cursor: pointer;
    background: url(https://abs.twimg.com/a/1446862637/img/t1/web_heart_animation.png) 0 0 no-repeat, white;
    background-size: 2900%;
    color: #e2264d;

    &.animated {
      animation: heart-burst steps(28) 0.8s 1 both;
    }
  }

  .like-badge {
    margin-top: 3em;
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
