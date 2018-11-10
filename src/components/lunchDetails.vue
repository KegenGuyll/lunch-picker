<template>
    <div>
        <div class="row">
            <div class="col s6 offset-s3">
                <div class="card ">
                    <div class="card-content black-text">
                        <span class="card-title">{{this.details.name}}</span>
                        <p>{{details.formatted_address}}</p>
                    </div>
                    <div class="card-action">
                        <div class="chip" v-for="chip in details.types" v-bind:key="chip.id">
                            {{chip}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="center">
          <carousel perPage=1 autoplay=true paginationEnabled=true>
            <slide v-for="images in details.photos" v-bind:key="images.id">
                <div>
                    <img v-bind:src="callingphoto1 + images.photo_reference + callingphoto2" />
                </div>
            </slide>
        </carousel>  
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Carousel, Slide } from 'vue-carousel';
const apiKey = 'AIzaSyBwiA2SF0qZepZfr5HncnNZATp-MtNkVOs'
export default {
    name: 'lunchDetails',
    components : {
        Carousel,
        Slide
    },
    data : function() {
        return {

            callingphoto1: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&maxheight=300&photoreference=',
            callingphoto2: '&key=AIzaSyBwiA2SF0qZepZfr5HncnNZATp-MtNkVOs',
            place_id : null,
            details : [

            ]

        }
    },
    created(){
       this.place_id = this.$route.params.place_id;
       axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid='+ this.place_id + '&key=' + apiKey)
            .then(response =>  {
                this.details = response.data.result
            })
            .catch(e => {
                alert(e);
            }) 
    }
}
</script>

<style>
 #header{
     background-image: url('https://maps.googleapis.com/maps/api/place/photo?maxwidth=1920&photoreference=CmRaAAAAR0LTn_8DSn08ApS67Bw455XUwYCNuCFJj0MsUsPH7WCL2atNzOKHit8lQTsBR1eP26h7O_yNKBBcdEZeGfFN2jNC707iIgEJMlbGSxOccv1Y5fIh9AQN_ssMO7E-qJoVEhCgiTA5k-7J9ChOQHPXXp1lGhQ3H5xhKFQKLuSshSryJpAFKI664A&key=AIzaSyBwiA2SF0qZepZfr5HncnNZATp-MtNkVOs');
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     height: 50vh;
     
 }
</style>
