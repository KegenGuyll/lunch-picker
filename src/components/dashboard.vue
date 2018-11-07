<template>
    <div>
      <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6 offset-s3">
          <h1>{{city}}</h1>
          <input placeholder="Placeholder" type="text" v-model="city">
          <a class="waves-effect waves-light btn" v-on:click="search">button</a>
          <p>{{posts}}</p>
        </div>
      </div>
        </form>
      </div>   
    <!-- <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1" v-for="post in posts" v-bind:key="post.id">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>{{posts.name}}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div> -->
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
const apiKey = 'AIzaSyBwiA2SF0qZepZfr5HncnNZATp-MtNkVOs'
export default {
    name: 'dashboard',
    data(){
        return {

            city : '',
            posts : [

            ]
        }
    },
    methods: {
        search(){
            axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+' + this.city + '&key=' + apiKey)
            .then(response =>  {
                this.post = response.data
            })

        }
    }
}
</script>

<style>

</style>
