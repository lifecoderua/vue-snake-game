<template>
  <p>I am the field</p>
  {{ field }}
  <div class="field">
    <div class="row"
         v-for="(row, i) in field"
         :key="i">
      <div :class="['cell', cell.style]"
           v-for="(cell, j) in row"
           :key="j"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Options, Vue} from 'vue-class-component';

  @Options({
    props: {
      field: Array,
    },
  })
  export default class Field extends Vue {
    field!: any[][];
  }
</script>

<style
  scoped
  lang="less">
  @import "../assets/common";

  @cell-size: 20px;
  @cell-margin: 1px;

  .field {
    .row {
      height: @cell-size;
      margin: @cell-margin;

      .cell {
        display: inline-block;
        width: @cell-size;
        height: @cell-size;
        margin: @cell-margin;

        background-color: @theme-light;

        &.snake {
          background-color: lighten(@theme-accent1, 10%);
        }

        &.snake-head {
          background-color: @theme-accent1;
        }
      }
    }
  }
</style>
