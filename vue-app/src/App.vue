<template>
  <Navbar />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
}
</script>

<!-- <style>
body{
  background: linear-gradient(rgb(230, 230, 230), rgb(235, 190, 248));
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #041f3d;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #b14dcf;
}

nav a.router-link-exact-active {
  color: #172fb9;
}
</style> -->
