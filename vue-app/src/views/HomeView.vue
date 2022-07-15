<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/background.jpg" width="300" height="300">
    <Welcome msg="B L O G"/>
    <!-- <p>Contador 🤣: {{ $store.state.contador }}</p> -->
    <!-- <p :style="[contador >= 100 ? { 'color': 'green' } : { 'color': 'red' }]">Contador 🤣: {{ contador }}</p> -->
    <p :style="colorCounter">Contador 🤣: {{ counter }}</p>
    <!-- <button @click="actionIncreaseCounter">like</button>
    <button @click="actionDecreaseCounter">dislike</button>
    <br/> -->
    <!-- <button :likeDislike="true" @click="actionButton({ likeDislike: likeDislike, counter: 5 })">{{ likeButton }}</button> -->
    <br/>
    <ButtonLikeDislike :likeDislike="true" />
    <ButtonLikeDislike :likeDislike="false" />
    <hr/>
    <!-- <Form /> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import Welcome from '@/components/Welcome.vue';
import ButtonLikeDislike from '@/components/ButtonLikeDislike';
/* import Form from '@/components/Form.vue'; */

export default {
  name: 'HomeView',
  components: {
    Welcome,
    ButtonLikeDislike,
    /* Form */
  },
  props: {
    likeDislike: Boolean
  },
  computed: {
    ...mapState(['counter']),
    colorCounter() {
      return [this.counter >= 100 ? { 'color': 'green' } : { 'color': 'rgb(51, 51, 51)' }]
    },
    likeButton() {
      return this.likeDislike ? 'like' : 'dislike'
    }
  },
  methods: {
    ...mapMutations(['increaseCounter(state)']),
    ...mapActions(['actionIncreaseCounter']),
    ...mapActions(['actionDecreaseCounter']),
    ...mapActions(['actionLikeButton'])
  }
};
</script>

<style scoped>
.home{
  background: linear-gradient(to bottom right, rgb(213, 182, 238), rgb(219, 219, 219));
}
</style>
