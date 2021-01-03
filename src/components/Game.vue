<template>
  <div class="hello">
    <h1>A little snake game</h1>
    <p>
      A little red hood snake game I am.
    </p>
    <Field :field="game.field"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Field from '@/components/Field.vue';
import {Game as GameCore} from '@/services/game.ts';

const FIELD_SIZE = 15;

@Options({
  props: {
  },
  components: {
    Field,
  },
})
export default class Game extends Vue {
  // field: any[][] = [];

  game!: GameCore;


  created() {
    console.log('Game init');

    this.game = new GameCore({
      fieldSize: FIELD_SIZE,
      snakeLength: 3,
    });

    console.log('Initialized with', this.game);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
