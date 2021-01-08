<template>
  <div class="hello">
    <h1>A little snake game</h1>
    <p>
      A little red hood snake game I am.
    </p>
    <p>You know what, the snake is: {{game.snake}}</p>
    <Field :field="field"/>
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

  field!: any;

  initGame() {
    console.log('Game init');

    this.game = new GameCore({
      fieldSize: FIELD_SIZE,
      snakeLength: 3,
    });

    this.field = {
      ...this.game.field,
    };

    this.$forceUpdate();
  }

  created() {
    this.initGame();

    document.addEventListener('keydown', this.keyboardHandler);

    console.log('Initialized with', this.game);
  }

  onGameUpdate(game: GameCore) {
    this.field = {
      ...game.field,
    };
    this.$forceUpdate();
  }

  keyboardHandler(e: KeyboardEvent) {
    if (this.game.snake.collision) {
      this.initGame();
      return;
    }

    const controlCodes: any = {
      ArrowUp: Direction.up,
      ArrowDown: Direction.down,
      ArrowLeft: Direction.left,
      ArrowRight: Direction.right,
    }

    const newDirection: any = controlCodes[e.code as any];

    if (newDirection !== undefined) {
      this.game.run(this.onGameUpdate);
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
