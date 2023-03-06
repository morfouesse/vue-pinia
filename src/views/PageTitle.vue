<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'page-title',
});
</script>

<template>
  <h1 class="title">Les posts !</h1>
</template>

<style lang="sass" scoped>
  .title
    text-align: center
    font-size: 40px
    font-weight: bold
    color: rgb(166, 9, 9)
    margin-bottom: 30px
</style>
