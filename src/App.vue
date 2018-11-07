<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar'
import dashboard from './components/dashboard'


export default {
  name: 'App',
  components: {
    navbar,
    // eslint-disable-next-line
    dashboard
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
  text-align: center;
  color: #2c3e50;
}
</style>
