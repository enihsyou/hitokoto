<template>
  <div id="word-container">

    <!--整个网页的背景图层-->
    <div class='background'
         :style="{backgroundImage:`url(${currentWord.imageUrl})`}"></div>

    <!--文字部分-->
    <div class="word-card">
      <Hitokoto :author="currentWord.author"
                :sentence="currentWord.sentence" />
    </div>

    <el-badge :value="currentWord.likes"
              :max="99"
              class="like-badge">
      <el-button circle
                 class="like-button"
                 :class="{'animated': currentWord.liked}"
                 @click="plusOne">
        <!--<font-awesome-icon icon='heart' />-->
      </el-button>
    </el-badge>

    <el-button circle
               class="next-button"
               @click="switchToNextWord">
      <font-awesome-icon icon='heart' />
    </el-button>
  </div>
</template>

<script>
import Hitokoto from "@/components/Hitokoto";
import { mapGetters } from "vuex";
import store from "@/data/store";
import { ADD_WORD, LIKE_A_WORD, DISLIKE_A_WORD } from "@/data/mutation-types";

import { getWordFromHitokotoApi } from "@/service/web-api";

const switchInterval = 5000;

export default {
  name: "WordPage",
  components: {
    Hitokoto
  },
  store,
  data() {
    return {
      currentWord: {}
    };
  },
  methods: {
    plusOne() {
      if (this.currentWord.liked) {
        store.commit(DISLIKE_A_WORD, this.currentWord.id);
      } else {
        store.commit(LIKE_A_WORD, this.currentWord.id);
      }
    },
    switchToNextWord() {
      this.currentWord = this.$store.getters.randomWord;

      getWordFromHitokotoApi().then(hitokoto => {
        let w = {
          id: hitokoto.id,
          author: hitokoto.creator,
          sentence: hitokoto.hitokoto,
          imageUrl: "https://piccdn.freejishu.com/images/2016/04/04/pixiv51081070.png",
          likes: Math.floor(Math.random() * 120),
          liked: false
        };
        store.commit(ADD_WORD, w);
      });
    }
  },
  mounted() {
    this.switchToNextWord();
  }
  // computed: mapGetters({
  //   /**@type {HitokotoWord|string}*/
  //   currentWord: "randomWord"
  // })
};
</script>

<style scoped
       lang="scss">

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

.next-button {
  position: absolute;
  right: 2em;
  bottom: 3em;
}
</style>
