<template>
  <div id="hitokoto" class="hitokoto-fullpage">
    <div class="bracket left">『</div>
    <div class="word" id="hitokoto_text">{{word}}</div>
    <div class="bracket right">』</div>
    <div class="author" id="hitokoto_author">-「{{author}}」</div>
  </div>
</template>

<script>
export default {
  name: 'Hitokoto',
  data() {
    return {
      word: '一个人觉得寂寞，和另一个人相互依偎又有什么错',
      author: '人渣的本愿',
    };
  },
};
</script>

<style scoped lang="scss">
/* Hitokoto Page */
.hitokoto-fullpage {
  position: relative;
  color: white;
  z-index: 1;
  margin: 35vh auto;

  width: 60%;
}

.hitokoto-fullpage .bracket {
  font-size: 30px;
}

.hitokoto-fullpage .bracket.left {
  position: absolute;
  left: 0;
  top: 0;
}

.hitokoto-fullpage .bracket.right {
  position: absolute;
  right: 0;
  bottom: 0;
}

.hitokoto-fullpage .word {
  font-size: 2.3rem;
  text-align: center;
  line-height: 50px;
  word-break: normal;
  margin: 0;
  padding: 15px 50px;
}

.hitokoto-fullpage .author {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  float: right;
  margin-top: 40px;
}

@media screen and (max-width: 600px)  {
  .hitokoto-fullpage {
    width: 90%;
    margin-bottom: 10vh;
  }
}
</style>
