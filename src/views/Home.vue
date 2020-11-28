<template>
  <div>
    <div class="hero" v-bind:style="{ backgroundImage: 'url(' + image + ')'} ">
      <div class="container">
        <form action="#" class="find-location" @submit.prevent="getData">
          <input type="text" v-model="search"  placeholder="Find your location...">
          <input type="submit" value="Find">
        </form>

      </div>
    </div>
    <div class="forecast-table">
      <div class="container">
        <div class="forecast-container">
          <div class="today forecast">
            <div class="forecast-header">
              <div class="day">Mon</div>
              <div class="date">6 Oct</div>
            </div> <!-- .forecast-header -->
            <div class="forecast-content">
              <div class="location">{{ name }}</div>
              <div class="degree">
                <div class="num">{{ temp }}<sup>o</sup>C</div>
                <div class="forecast-icon">
                  <img src="images/icons/icon-1.svg" alt="" width=90>
                </div>
              </div>
              <span><img src="images/icon-umberella.png" alt="">20%</span>
              <span><img src="images/icon-wind.png" alt="">{{ speed }}km/h</span>
              <span><img src="images/icon-compass.png" alt="">East</span>
              <h4 class="mt-6"> Rain </h4>
            </div>
          </div>
          <div class="forecast">
            <div class="forecast-header">
              <div class="day">Tue</div>
            </div> <!-- .forecast-header -->
            <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-3.svg" alt="" width=48>
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div>
          </div>
          <div class="forecast">
            <div class="forecast-header">
              <div class="day">Wed</div>
            </div> <!-- .forecast-header -->
            <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-5.svg" alt="" width=48>
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div>
          </div>
          <div class="forecast">
            <div class="forecast-header">
              <div class="day">Thur</div>
            </div> <!-- .forecast-header -->
            <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-7.svg" alt="" width=48>
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div>
          </div>
          <div class="forecast">
            <div class="forecast-header">
              <div class="day">Fri</div>
            </div> <!-- .forecast-header -->
            <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-12.svg" alt="" width=48>
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div>
          </div>
          <div class="forecast">
            <div class="forecast-header">
              <div class="day">Sat</div>
            </div> <!-- .forecast-header -->
            <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-13.svg" alt="" width=48>
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div>
          </div>
          <div class="forecast">
            <div class="forecast-header">
              <div class="day">Sun</div>
            </div> <!-- .forecast-header -->
            <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-14.svg" alt="" width=48>
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main class="main-content">
      <div class="fullwidth-block">
        <div class="container">
          <h2 class="section-title">Live cameras</h2>
          <h4>{{ info }}</h4>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="live-camera">
                <figure class="live-camera-cover"><img src="images/live-camera-1.jpg" alt=""></figure>
                <h3 class="location">New York</h3>
                <small class="date">8 oct, 8:00AM</small>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="live-camera">
                <figure class="live-camera-cover"><img src="images/live-camera-2.jpg" alt=""></figure>
                <h3 class="location">Los Angeles</h3>
                <small class="date">8 oct, 8:00AM</small>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="live-camera">
                <figure class="live-camera-cover"><img src="images/live-camera-3.jpg" alt=""></figure>
                <h3 class="location">Chicago</h3>
                <small class="date">8 oct, 8:00AM</small>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="live-camera">
                <figure class="live-camera-cover"><img src="images/live-camera-4.jpg" alt=""></figure>
                <h3 class="location">London</h3>
                <small class="date">8 oct, 8:00AM</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fullwidth-block" v-bind:style="{ backgroundColor: ('#262936') }">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="news">
                <div class="date">06.10</div>
                <h3><a href="#">Doloremque laudantium totam sequi </a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo saepe assumenda dolorem modi, expedita voluptatum ducimus necessitatibus. Asperiores quod reprehenderit necessitatibus harum, mollitia, odit et consequatur maxime nisi amet doloremque.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="news">
                <div class="date">06.10</div>
                <h3><a href="#">Doloremque laudantium totam sequi </a></h3>
                <p>Nobis architecto consequatur ab, ea, eum autem aperiam accusantium placeat vitae facere explicabo temporibus minus distinctio cum optio quis, dignissimos eius aspernatur fuga. Praesentium totam, corrupti beatae amet expedita veritatis.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="news">
                <div class="date">06.10</div>
                <h3><a href="#">Doloremque laudantium totam sequi </a></h3>
                <p>Enim impedit officiis placeat qui recusandae doloremque possimus, iusto blanditiis, quam optio delectus maiores. Possimus rerum, velit cum natus eos. Cumque pariatur beatae asperiores, esse libero quas ad dolorem. Voluptates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fullwidth-block">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h2 class="section-title">Application features</h2>
              <ul class="arrow-feature">
                <li>
                  <h3>Natus error sit voluptatem accusantium</h3>
                  <p>Doloremque laudantium totam rem aperiam Inventore veritatis et quasi architecto beatae vitae.</p>
                </li>
                <li>
                  <h3>Natus error sit voluptatem accusantium</h3>
                  <p>Doloremque laudantium totam rem aperiam Inventore veritatis et quasi architecto beatae vitae.</p>
                </li>
                <li>
                  <h3>Natus error sit voluptatem accusantium</h3>
                  <p>Doloremque laudantium totam rem aperiam Inventore veritatis et quasi architecto beatae vitae.</p>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h2 class="section-title">Weather analyssis</h2>
              <ul class="arrow-list">
                <li><a href="#">Accusantium doloremque laudantium rem aperiam</a></li>
                <li><a href="#">Eaque ipsa quae ab illo inventore veritatis quasi</a></li>
                <li><a href="#">Architecto beatae vitae dicta sunt explicabo</a></li>
                <li><a href="#">Nemo enim ipsam voluptatem quia voluptas</a></li>
                <li><a href="#">Aspernatur aut odit aut fugit, sed quia consequuntur</a></li>
                <li><a href="#">Magni dolores eos qui ratione voluptatem sequi</a></li>
                <li><a href="#">Neque porro quisquam est qui dolorem ipsum quia</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h2 class="section-title">Awesome Photos</h2>
              <div class="photo-grid">
                <a href="#"><img src="images/thumb-1.jpg" alt="#"></a>
                <a href="#"><img src="images/thumb-2.jpg" alt="#"></a>
                <a href="#"><img src="images/thumb-3.jpg" alt="#"></a>
                <a href="#"><img src="images/thumb-4.jpg" alt="#"></a>
                <a href="#"><img src="images/thumb-5.jpg" alt="#"></a>
                <a href="#"><img src="images/thumb-6.jpg" alt="#"></a>
                <a href="#"><img src="images/thumb-7.jpg" alt="#"></a>
                <a href="#"><img src="images/thumb-8.jpg" alt="#"></a>
                <a href="#"><img src="images/thumb-9.jpg" alt="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main> <!-- .main-content -->
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {

    name: 'Home',
    components: {
      //HelloWorld
    },
    data() {
      return {
        info: "",
        temp: 0,
        speed: "",
        name: "loading...",
        image: 'images/banner.png',
        search: "Lagos, ng"
      }
    },
    mounted() {
      const axios = require('axios');
      const apiGet = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.search +'&APPID=13eac6566d4c67caaf918ae74e60b7c9';

      axios
              .get(apiGet)
              .then(response => (
                 this.info = response.data,
                 this.name = response.data.name + ', ' + response.data.sys.country,
                 this.temp = Math.round(response.data.main.temp) - 273,
                 this.speed = response.data.wind.speed,

                 console.log(response.data)
              ))
              .catch(error => {
                console.log(error)
                this.info = error
              });
    },

    methods: {
      getData(){
        const axios = require('axios');
        const apiGet = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.search +'&APPID=13eac6566d4c67caaf918ae74e60b7c9';
        //const apiGet2 = 'http://api.weatherapi.com/v1/current.json?key=c023dec647674ea78c8155213202711&q=' + this.search;
        axios
                .get(apiGet)
                .then(response => (
                   this.info = response.data,
                   this.name = response.data.name + ', ' + response.data.sys.country,
                   this.temp = Math.round(response.data.main.temp) - 273,
                   this.speed = response.data.wind.speed,

                   console.log(response.data)
                ))
                .catch(error => {
                  console.log(error)
                  this.info = error
                });
      }
    }
  }
</script>
