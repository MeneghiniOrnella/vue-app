<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="" alt="">
    <small>Foto de Dids en Pexels</small>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #970e97;
}
</style>
