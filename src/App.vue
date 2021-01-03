<template>
  <Game msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Game from './components/Game.vue';

@Options({
  components: {
    Game,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
@import "assets/common";


html {
  background-color: @theme-bg;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
