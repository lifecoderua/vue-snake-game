<template>
  <div class="hello">
    <h1>A little snake game</h1>
    <p>
      A little red hood snake game I am.
    </p>
    <Field :field="field"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Field from '@/components/Field.vue';

const FIELD_SIZE = 15;

@Options({
  props: {
  },
  components: {
    Field,
  },
})
export default class Game extends Vue {
  field: any[][] = [];

  created() {
    console.log('Game init');
    for (let i = 0; i < FIELD_SIZE; i++) {
      const row = [];
      for (let j = 0; j < FIELD_SIZE; j++) {
        row.push({});
      }

      this.field.push(row);
    }

    console.log('Initialized with', this.field);
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
