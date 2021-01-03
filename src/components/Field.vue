<template>
  <p>I am the field</p>
  {{ field }}
  <div class="field">
    <div class="row"
         v-for="(row, i) in field"
         :key="i">
      <div class="cell"
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

<style lang="less">
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

        background-color: deepskyblue;
      }
    }
  }
</style>
