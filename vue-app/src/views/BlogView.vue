<template>
  <div class="blog">
    <!-- <Text title="I ❤️ dogs!!" msg="They are amazing"/> -->
    <!-- <img src="../assets/dog.jpg" alt="Photo dog by Charles Roth" height="250">
    <p><a href="https://www.pexels.com/photo/short-coated-brown-dog-sitting-inside-a-car-2797318/" target="_blank">Photo by Charles Roth</a></p>
    <button @click="consumeApi">Consume API</button> -->
    <p :style="colorCounter">Contador 🤣: {{ counter }}</p>
    <div v-for="item in items" :key="item.id">
      <router-link :to="`/blog/${ item.id }`">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Text from '@/components/Text.vue';

export default {
  name: 'BlogView',
  components: {
    Text
  },
  data() {
    return{
      arrayBlog: []
    }
  },
  computed: {
    ...mapState(['counter']),
    colorCounter() {
      return [this.counter >= 100 ? { 'color': 'green' } : { 'color': 'rgb(51, 51, 51)' }]
    }
  },
  methods: {
    async consumeApi(){
      try{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const array = await data.json();
        // console.log(array);
        this.arrayBlog = array;
      } catch(error){
        console.log(error);
      }
    },
    created(){
      this.consumeApi()
    }
  }
};
</script>