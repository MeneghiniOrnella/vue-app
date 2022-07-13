<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/background.jpg" width="300" height="300">
    <Welcome msg="B L O G"/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'HomeView',
  components: {
    Welcome
  }
};
</script>

<style scoped>
.home{
  background: linear-gradient(to bottom right, rgb(213, 182, 238), rgb(219, 219, 219));
}
</style>
