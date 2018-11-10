<template>
    <div>
        <div style="height: 3vh"></div>
        <!-- <div class="row">
            <div class="col s12 m6 offset-m3">
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
        </div> -->
        <div class="center">
            <carousel perPage=1 autoplay=true>
                <slide v-for="images in details.photos" v-bind:key="images.id">
                    <div>
                        <img v-bind:src="callingphoto1 + 'maxheight=' + maxHeight + '&' + 'maxwidth=' + maxWidth + callingphot03 + images.photo_reference + callingphoto2" />
                    </div>
                </slide>
            </carousel>
        </div>
        <div style="height: 3vh"></div>
        <div class="row">
            <div class="col s12 m6 offset-m3">
                <div class="card ">

                    <div class="card-content black-text">
                        <span class="card-title">{{details.name}}</span>
                        <ul>
                            <li v-if="details.rating >= 1" class="section-star" v-bind:key="1"></li>
                            <li v-if="details.rating == 1.5" class="section-star-half" v-bind:key="1.5"></li>
                            <li v-if="details.rating >= 2" class="section-star" v-bind:key="2"></li>
                            <li v-if="details.rating == 2.5" class="section-star-half" v-bind:key="2.5"></li>
                            <li v-if="details.rating >= 3" class="section-star" v-bind:key="3"></li>
                            <li v-if="details.rating == 3.5" class="section-star-half" v-bind:key="3.5"></li>
                            <li v-if="details.rating >= 4" class="section-star" v-bind:key="4"></li>
                            <li v-if="details.rating == 4.5" class="section-star-half" v-bind:key="4.5"></li>
                            <li v-if="details.rating == 5" class="section-star" v-bind:key="5"></li>
                        </ul>
                        <ul>
                            <li v-if="details.price_level == 1">💲</li>
                            <li v-if="details.price_level == 2">💲💲</li>
                            <li v-if="details.price_level == 3">💲💲💲</li>
                            <li v-if="details.price_level == 4">💲💲💲💲</li>
                            <li v-if="details.price_level == 5">💲💲💲💲💲</li>
                        </ul>
                        <strong><span v-if="details.opening_hours.open_now == true " style="color: #3f9e25">OPENED</span></strong>
                        <strong><span v-if="details.opening_hours.open_now != true " style="color: #ff0000">CLOSED</span></strong>
                        <ul>
                            <li style="display: inline-block; vertical-align: middle;"><p>{{details.formatted_phone_number}}</p></li>
                        </ul>
                        <ul>
                            <li v-on:click="directions(details)" style="display: inline-block; vertical-align: middle; cursor: pointer;" ><svg xmlns="http://www.w3.org/2000/svg"
                                    x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48" style="fill:#000000;">
                                    <g id="surface1">
                                        <path style=" fill:#1C9957;" d="M 42 39 L 42 9 C 42 7.34375 40.65625 6 39 6 L 9 6 C 7.34375 6 6 7.34375 6 9 L 6 39 C 6 40.65625 7.34375 42 9 42 L 39 42 C 40.65625 42 42 40.65625 42 39 Z "></path>
                                        <path style=" fill:#3E7BF1;" d="M 9 42 L 39 42 C 40.65625 42 24 26 24 26 C 24 26 7.34375 42 9 42 Z "></path>
                                        <path style=" fill:#CBCCC9;" d="M 42 39 L 42 9 C 42 7.34375 26 24 26 24 C 26 24 42 40.65625 42 39 Z "></path>
                                        <path style=" fill:#EFEFEF;" d="M 39 42 C 40.65625 42 42 40.65625 42 39 L 42 38.753906 L 26.246094 23 L 23 26.246094 L 38.753906 42 Z "></path>
                                        <path style=" fill:#FFD73D;" d="M 42 9 C 42 7.34375 40.65625 6 39 6 L 38.753906 6 L 6 38.753906 L 6 39 C 6 40.65625 7.34375 42 9 42 L 9.246094 42 L 42 9.246094 Z "></path>
                                        <path style=" fill:#D73F35;" d="M 36 2 C 30.476563 2 26 6.476563 26 12 C 26 18.8125 33.664063 21.296875 35.332031 31.851563 C 35.441406 32.53125 35.449219 33 36 33 C 36.550781 33 36.558594 32.53125 36.667969 31.851563 C 38.335938 21.296875 46 18.8125 46 12 C 46 6.476563 41.523438 2 36 2 Z "></path>
                                        <path style=" fill:#752622;" d="M 39.5 12 C 39.5 13.933594 37.933594 15.5 36 15.5 C 34.066406 15.5 32.5 13.933594 32.5 12 C 32.5 10.066406 34.066406 8.5 36 8.5 C 37.933594 8.5 39.5 10.066406 39.5 12 Z "></path>
                                        <path style=" fill:#FFFFFF;" d="M 14.492188 12.53125 L 14.492188 14.632813 L 17.488281 14.632813 C 17.09375 15.90625 16.03125 16.816406 14.492188 16.816406 C 12.660156 16.816406 11.175781 15.332031 11.175781 13.5 C 11.175781 11.664063 12.660156 10.179688 14.492188 10.179688 C 15.316406 10.179688 16.070313 10.484375 16.648438 10.980469 L 18.195313 9.433594 C 17.21875 8.542969 15.921875 8 14.492188 8 C 11.453125 8 8.992188 10.464844 8.992188 13.5 C 8.992188 16.535156 11.453125 19 14.492188 19 C 19.304688 19 20.128906 14.683594 19.675781 12.539063 Z "></path>
                                    </g>
                                </svg></li>
                            <li v-on:click="directions(details)" style="display: inline-block; cursor: pointer;">
                                <p>{{details.formatted_address}}</p>
                            </li>
                        </ul>

                    </div>
                    <div class="card-action">
                        <div class="chip" v-for="chip in details.types" v-bind:key="chip.id">
                            {{chip}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m4" v-for="reviews in details.reviews" v-bind:key="reviews.id">
                <div class="card horizontal z-depth-5">
                    <div class="card-image">
                        <a v-bind:href="reviews.author_url">
                            <img v-bind:src="reviews.profile_photo_url">
                        </a>
                        <p class="center">{{reviews.author_name}}</p>
                        <ul class="center">
                            <li v-if="reviews.rating >= 1" class="section-star" v-bind:key="1"></li>
                            <li v-if="reviews.rating == 1.5" class="section-star-half" v-bind:key="1.5"></li>
                            <li v-if="reviews.rating >= 2" class="section-star" v-bind:key="2"></li>
                            <li v-if="reviews.rating == 2.5" class="section-star-half" v-bind:key="2.5"></li>
                            <li v-if="reviews.rating >= 3" class="section-star" v-bind:key="3"></li>
                            <li v-if="reviews.rating == 3.5" class="section-star-half" v-bind:key="3.5"></li>
                            <li v-if="reviews.rating >= 4" class="section-star" v-bind:key="4"></li>
                            <li v-if="reviews.rating == 4.5" class="section-star-half" v-bind:key="4.5"></li>
                            <li v-if="reviews.rating == 5" class="section-star" v-bind:key="5"></li>
                        </ul>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content" style="background-color: #CDCDCD;">
                            <p>{{reviews.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
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

            maxHeight: '',
            maxWidth : '',
            callingphoto1: 'https://maps.googleapis.com/maps/api/place/photo?',
            callingphoto2: '&key=AIzaSyBwiA2SF0qZepZfr5HncnNZATp-MtNkVOs',
            callingphot03: '&photoreference=',
            place_id : null,
            details : [

            ]

        }
    },
    created(){
       this.maxWidth =  window.screen.width;
       this.maxHeight = window.screen.height;

         if (this.maxHeight == 1080){
           this.maxHeight =  window.screen.height /4;
         } else{
             this.maxHeight = window.screen.height /2;
         }
         if (this.maxWidth == 1920){
             this.maxWidth =  window.screen.width /2;
         } else{
             this.maxWidth =  window.screen.width;
         }
         
       this.place_id = this.$route.params.place_id;
       axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid='+ this.place_id + '&key=' + apiKey)
            .then(response =>  {
                this.details = response.data.result
            })
            .catch(e => {
                alert(e);
            }) 
    },
    methods: {
        directions(details){
          var lat = details.geometry.location.lat
          var lng = details.geometry.location.lng
          var id = details.place_id
          window.open('https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lng + '&query_place_id=' + id, '_blank');
        }
    }
}
</script>

<style scoped>
.card.horizontal{
    background-color: #CDCDCD;
}

.card.horizontal .card-stacked .card-content {

    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: auto;
    overflow: -moz-scrollbars-none;
    height: 150px;

}

.section-star{
vertical-align: baseline;
display: inline-block;
width: 15px;
height: 14px;
margin: 0 1px;
background-size: 15px 14px;
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAABkklEQVR4Ac2Wu6oTQRzGf2JlZ+sFBbVRLMQXEJ9B0mgjgiEm+x8QtBC00FR5A5/B0kfQiIKNhcQmRDCSZGfgtOcU4Vw+SCCE3ZO9c37wwTD/y8fMsLNDUUKbSxJN4x0mNW9sDL3jK03y37gajENp2uEKTREiXgbHkaRxc8aOH2tjb3ynCWY9rq9NJW235qib2Hi9aSzFjlfUTTB+bhtrjjqJX3BDRklSrMg3+exEX3YpGH/SjBXL0kNe21v43BsHalKHvLEvD5IIPe57Y1KD6US9OY2/T7kYjM9VmaqXepKRc97xJhjLEoZL9VAv8jJ3PPSORV5T1aiWMvyLuOyNb1lNlauaqu7mQY4VD6r8945zrHhcjWmXe3nPWDVVrLafdiFIKbF+Fec7SvhUfi863JU0TjAfUYZZl9sJph+nLS6wQmPNbefNjTtltvnthuFeHPGIFBRTzsaT6F0Z41+rMxvO2lxjB8rRy1M1qi360ripay92fPjU4jwZUW5svFet73KLvCwiHgfjAQVRbWw84axxDHyajlb+vInhAAAAAElFTkSuQmCC);
background-repeat: no-repeat;
}

.section-star-half{
vertical-align: baseline;
display: inline-block;
width: 15px;
height: 14px;
margin: 0 1px;
background-size: 15px 14px;
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAABjUlEQVR4Ac2VzeoSYRhHz78yCyGyL4MIpCm1cFwGXUF0AW5EzMlJ8qtuoEWLoFWtuoKW3UIXEOhkZmQULjKtEDdtg6Ae4RVMxo95Zxw6cLYe+DnzDD44ogyd08rQMZTh8bpMEjCV4c09qPAQyCnPEBbjOm8X4dDmdm5jzO7zZylsihH2zQebR4twqHPLzH2X8GX2SadIeh5dDSuPep+vQnNUo73N7w2GG8Ip0djB+Oor8mDa4pf64c2qsEez4inc6Ja48a3BeA/hjHicTfQLxL/c41WA4aR4iB05GNg8nrX47SNsimfRoXuHWz9azDTCV8UYfmhbXPxaw/EQNgL7cHyq8txD+DxBIU/6yEM4TRD0SlzX+I+P4ZePd3m2JpxVuoUT+GWizuSykzqfgagy5Xo+/fCmRG41OqzyYpz/5wodiBdc4lH9mW2eLILTJj/fWxRZzwnx2lL4HLrIpIN5dFTD6RS4xHYioqHCV9DBKZOZn0x5uJ6+zHMYbyREU+sb/c7C7lncRJ+YeJL/jb/xFy1olMjhLgAAAABJRU5ErkJggg==);
background-repeat: no-repeat;
}
</style>
