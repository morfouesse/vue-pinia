<script setup lang="ts">


import {useRouter} from "vue-router";
import {RoutePath} from "@/constants/RoutePath";

const router = useRouter();
function goToPosts(): void{
  router.push(RoutePath.POSTS);
}
</script>
<template>
  <main>
    <div class="title">
      <h1>Poooosst</h1>
      <p>un endroit incroyable,</p>
      <p>créer, modifier, supprimer</p>
      <div class="space-button">
        <v-btn @click="goToPosts" class="btn"  size="x-large">C'est parti !</v-btn>
      </div>
    </div>
  </main>
</template>
<style lang="sass" scoped>
@import "src/constants/Main.sass"
.title
  padding: 50px 50px

  h1, p
    line-height: 64px
    font-size: 65px
    font-weight: 700
    text-align: center
    @media screen and (max-width: map-get($breakpoints, tablet))
      font-size: 48px
      line-height: normal
    @media screen and (max-width: map-get($breakpoints, mobile))
      font-size: 36px
      line-height: normal
  h1
    background: -webkit-linear-gradient(129deg, #35495e -54%, #41b883)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

  .space-button
    margin-top: 30px
    text-align: center
    .btn
      background-color: #41b883
      color: white
      font-size: 25px
      font-weight: 700
      text-transform: none
      letter-spacing: normal

</style>