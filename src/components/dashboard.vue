<template>
  <div>
    <div class="row">
      <form class="col s12">
        <div class="input-field col s6 offset-s3">
          <h1>{{city}}</h1>

          <input placeholder="Placeholder" type="text" v-model="city">
          <a class="waves-effect waves-light btn" v-on:click="search">button</a>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col s12 m6" v-for="(post, index) in posts" v-bind:key="post.id">
        <div  v-on:click="directions(post)" class="card">
          <i v-on:click="close(index, post)" class="material-icons right black-text">close</i>
          <div class="card-content black-text">
            <span class="card-title">{{post.name}}</span>
            <p>{{post.formatted_address}}</p>
          </div>
          <div class="card-action">
            <div class="chip" v-for="chip in post.types" v-bind:key="chip.id">
             {{chip}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
                this.posts = response.data.results
            })
            .catch(e => {
                alert(e);
            }) 

        },
        close(index){
          this.posts.splice(index, 1)
        },
        directions(post){
          var lat = post.geometry.location.lat
          var lng = post.geometry.location.lng
          var id = post.place_id
          window.open('https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lng + '&query_place_id=' + id, '_blank');
        }
    }
}
</script>

<style>
.material-icons {
    cursor: pointer;
}

nav{
  background-color: #fbc02d;
}

.card-content{
  background-color: #fbc02d;
}

.card-action{
  background-color: #c49000 !important;
}

.chip{
  background-color: #fff263;
}
</style>
