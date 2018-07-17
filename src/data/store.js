import Vue from "vue";
import Vuex from "vuex";
import { ADD_WORD, LIKE_A_WORD, DISLIKE_A_WORD } from "./mutation-types";

Vue.use(Vuex);

/**
 * @typedef {Object} HitokotoWord
 * @property {number} id 本条一言的id
 * @property {string} author 作者
 * @property {string} sentence 一言正文
 * @property {string} imageUrl 背景图片地址
 * @property {number} likes 喜欢次数
 * @property {boolean} liked 是否点击了喜欢
 */

export default new Vuex.Store({
  /**@property { [HitokotoWord] } words 很多话*/
  state: {
    user: {
      username: ""
    },
    words: [
      {
        id: 1,
        author: "危险的操作",
        sentence: "跌跌撞撞的成长，又美又疼才是本质。",
        imageUrl: "https://piccdn.freejishu.com/images/2016/04/04/pixiv51081070.png",
        likes: 87,
        liked: false
      },
      {
        id: 2,
        author: "危险的sdfg操作",
        sentence: "跌跌fsdgdsfg撞撞的成长，又美又疼才是本质。",
        imageUrl: "https://piccdn.freejishu.com/images/2016/04/04/pixiv51081070.png",
        likes: 8,
        liked: false
      },
      {
        id: 3,
        author: "危险fdg的sdfg操作",
        sentence: "3244324跌跌fsdgdsfg撞撞的成长，又美又疼才是本质。",
        imageUrl: "https://piccdn.freejishu.com/images/2016/04/04/pixiv51081070.png",
        likes: 1,
        liked: true
      }
    ]
  },
  mutations: {
    /**
     * @param state
     * @param {HitokotoWord} newWord 要添加的新句子
     */
    [ADD_WORD](state, newWord) {
      state.words.push(newWord);
    },
    [LIKE_A_WORD](state, likedWordId) {
      let word = state.words.find(word => word.id === likedWordId);
      word.liked = true;
      word.likes += 1;
    },
    [DISLIKE_A_WORD](state, likedWordId) {
      let word = state.words.find(word => word.id === likedWordId);
      word.liked = false;
      word.likes -= 1;
    }
  },
  getters: {
    /**@return {HitokotoWord}*/
    randomWord: state => {
      return state.words[Math.floor(Math.random() * state.words.length)];
    },
    likedWords: state => {
      return state.words.filter(word => word.liked);
    }
  }
});
