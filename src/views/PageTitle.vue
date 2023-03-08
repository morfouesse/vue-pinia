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
@import "src/constants/colors.sass"
.title
  text-align: center
  font-size: 40px
  font-weight: bold
  color: $red
  margin-bottom: 30px
</style>
