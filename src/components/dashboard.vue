<template>
  <div>
    <div style="height: 10vh"></div>
    <div class="row">
      <div class="col s12 m6 offset-m3">
        <div class="card">
          <div class="card-content black-text">
            <span class="card-title">I want food in {{city}}</span>
            <input class="black-text" placeholder="Enter in a city" type="text" v-model="city">
          </div>
          <div class="card-action">
            <a class="waves-effect waves-light btn amber accent-4" v-on:click="search">Search</a>
            <a class="waves-effect waves-light btn right amber accent-4" v-on:click="random">I'm feeling lucky</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m6" v-for="(post, index) in posts" v-bind:key="post.name">
        <div class="card">
          <i v-on:click="close(index, post)" class="material-icons right black-text">close</i>
          <div class="card-content black-text" v-on:click="placeid(post)">
            <span class="card-title">{{post.name}}</span>
            <p v-on:click="directions(post)">{{post.formatted_address}}</p>
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
        },
        placeid(post){
          var id = post.place_id
          this.$router.push({path: id})
        },
        random(){
          axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+' + this.city + '&key=' + apiKey)
            .then(response =>  {
              var placeid = this.posts = response.data.results[[Math.floor(Math.random() * 20)+ 1]].place_id
              this.$router.push({path: placeid})
            })
            .catch(e => {
                alert(e);
            }) 
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



 input:not([type]):focus:not([readonly]),
input[type=text]:not(.browser-default):focus:not([readonly]),
input[type=password]:not(.browser-default):focus:not([readonly]),
input[type=email]:not(.browser-default):focus:not([readonly]),
input[type=url]:not(.browser-default):focus:not([readonly]),
input[type=time]:not(.browser-default):focus:not([readonly]),
input[type=date]:not(.browser-default):focus:not([readonly]),
input[type=datetime]:not(.browser-default):focus:not([readonly]),
input[type=datetime-local]:not(.browser-default):focus:not([readonly]),
input[type=tel]:not(.browser-default):focus:not([readonly]),
input[type=number]:not(.browser-default):focus:not([readonly]),
input[type=search]:not(.browser-default):focus:not([readonly]),
textarea.materialize-textarea:focus:not([readonly]) {
    border-bottom: 1px solid rgb(71, 71, 71);
    -webkit-box-shadow: 0 1px 0 0 rgb(49, 49, 49);
    box-shadow: 0 1px 0 0 rgb(44, 44, 44);
}

::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #131414;
}        

</style>
 
 <style scoped>
p{
  cursor: pointer;
}

</style>
