<template>
  <div class="hitokoto">
    <div class="bracket left">『</div>
    <div class="sentence">{{sentence}}</div>
    <div class="bracket right">』</div>
    <div class="author">-「{{author}}」</div>
  </div>
</template>

<script>
export default {
  name: "Hitokoto",
  props: {
    author: {
      type: String,
      required: true
    },
    sentence: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@import '../variables';

/* Hitokoto Page */
.hitokoto {
  position: relative;
  font-size: 2rem;
  color: $main-font-color;
}

.bracket {
  font-size: 0.85em;
  position: absolute;

  &.left {
    left: 0;
    top: 0;
  }

  &.right {
    right: 0;
    bottom: 0;
  }
}

.sentence {
  font-size: 1.15em;
  text-align: center;
  line-height: 1.25em;
  word-break: normal;
  margin: 0;
  padding: 0.4em 1em;
}

.author {
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.7);
  float: right;
  margin-top: 1em;
}

/*.vertical {*/
  /*writing-mode: vertical-lr;*/

  /*.bracket {*/
    /*&.left {*/
      /*left: unset;*/
      /*right: 0;*/
      /*top: 0;*/
    /*}*/
    /*&.right {*/
      /*left: 0;*/
      /*right: unset;*/
      /*bottom: 0;*/
    /*}*/
  /*}*/

/*}*/
</style>
