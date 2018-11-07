<template>
  <div id="app">
    <navbar/>
      <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar'
import dashboard from './components/dashboard'

/* eslint-disable */
export default {
  name: 'App',
  components: {
    navbar,
    dashboard,
  },
  data () {
    return {
      
    }
  }
}
</script>




<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
