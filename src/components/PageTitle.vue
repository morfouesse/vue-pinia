<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'page-title',
  props:{
    title: {
      type: String
    }
  }
});
</script>

<template>
  <h1 class="title">{{ title }}</h1>
</template>

<style lang="sass" scoped>
@import "../constants/Main"
.title
  text-align: center
  font-size: 58px
  font-weight: bold
  color: $red
  margin-bottom: 30px
  filter: drop-shadow(5px 1px 44px red)

</style>
