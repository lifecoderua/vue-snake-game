<template>
  <div class="hello">
    <h1>A little snake game</h1>
    <p>
      A little red hood snake game I am.
    </p>
    <p>You know what, the snake is: {{game.snake}}</p>
    <Field :field="game.field"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Field from '@/components/Field.vue';
import {Game as GameCore} from '@/services/game.ts';
import {Direction} from '@/services/snake';

const FIELD_SIZE = 15;

@Options({
  props: {
  },
  components: {
    Field,
  },
})
export default class Game extends Vue {
  game!: GameCore;

  created() {
    console.log('Game init');

    this.game = new GameCore({
      fieldSize: FIELD_SIZE,
      snakeLength: 3,
    });

    document.addEventListener('keydown', this.keyboardHandler);

    console.log('Initialized with', this.game);
  }

  keyboardHandler(e: KeyboardEvent) {
    const controlCodes: any = {
      ArrowUp: Direction.up,
      ArrowDown: Direction.down,
      ArrowLeft: Direction.left,
      ArrowRight: Direction.right,
    }

    console.log('keydown', e.code);

    const newDirection: any = controlCodes[e.code as any];

    // debugger;
    if (newDirection) {
      this.game.run();
      this.game.snake.setDirection(newDirection);
    }
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
