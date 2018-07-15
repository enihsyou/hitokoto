<template>
  <nav id="navigation">
    <div class="header-row">
      <!-- Bars icon -->
      <font-awesome-icon id="draw-toggler" icon='bars' @click="toggleDrawer()" />
      <!-- Title -->
      <router-link to='/' class='header-title'>
        <span>We Quote</span>
      </router-link>
      <!-- Upload icon-->
      <router-link to='/upload'>
        <font-awesome-icon id="draw-uploader" icon='arrow-alt-circle-up' />
      </router-link>
    </div>

    <aside class='drawer' :class="{'is-visible': drawerOpened}">
      <!-- Title -->
      <span class="header-title">We Quote</span>
      <!-- Navigation -->
      <ul class="drawer-navigation">

        <router-link to='/' class='navigation-link'>
          <li>主页</li>
        </router-link>

        <router-link to='/login' class='navigation-link'>
          <li>登录</li>
        </router-link>

        <router-link to='/login' class='navigation-link'>
          <li>用户</li>
        </router-link>

        <router-link to='/login' class='navigation-link'>
          <li>关于</li>
        </router-link>

      </ul>
    </aside>
    <div class='drawer-obfuscator' :class="{'is-visible': drawerOpened}" @click="toggleDrawer()"></div>
  </nav>
</template>

<script>

export default {
  name: "",
  data() {
    return {
      drawerOpened: false
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerOpened = !this.drawerOpened;
    },
  }
};
</script>

<style scoped lang="scss">

$transition-duration: 600ms;

#navigation {

}

.header-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  color: #efefef;
  text-decoration: none;
  pointer-events: auto;

  #draw-toggler {
    margin: 0.5em 0.75em;
    font-size: 2em;
    cursor: pointer;
  }

  .header-title {
    flex-grow: 1;
    padding-left: 0.25em;
    font-size: 2em;
    text-decoration: inherit;
    color: inherit;
  }

  #draw-uploader {
    margin: 0.5em 0.75em;
    font-size: 2em;
    color: #efefef;
  }

}

.drawer {
  z-index: 22;
  position: absolute;
  top: 0;
  width: 100%;
  max-height: 75vh;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  background-color: whitesmoke;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);

  padding: 2em 3em;

  transform: translateY(-105%);
  transition-duration: $transition-duration;
  &.is-visible {
    transform: translateY(0);
  }

  .header-title {
    font-size: 2em;
  }

  /*列表元素样式*/
  .drawer-navigation {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-bottom: 0;
    padding-left: 0;

    .navigation-link {
      text-decoration: none;
      opacity: .87;
      color: #232323;
      font-size: 1.5em;
      padding: 0.6em 0;
    }
  }
}

.drawer-obfuscator {
  z-index: 21;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
  background-color: #1212127f;
  pointer-events: none;
  transition-duration: $transition-duration * 2 / 3;

  &.is-visible {
    opacity: 1;
    pointer-events: auto;
  }
}

</style>
