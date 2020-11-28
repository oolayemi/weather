<template>
  <div id="app">

    <div class="site-content">
      <div class="site-header">
        <div class="container">
          <a href="index.html" class="branding">
            <img src="images/logo.png" alt="" class="logo">
            <div class="logo-type">
              <h1 class="site-title">{{ appName }}</h1>
              <small class="site-description">Multi-function website</small>
            </div>
          </a>

          <!-- Default snippet for navigation -->
          <div class="main-navigation">
            <button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
            <ul class="menu">
              <li class="menu-item"><router-link to="/">Home</router-link></li>
              <li class="menu-item"><router-link to="/news">News</router-link></li>
              <li class="menu-item"><router-link to="/live-cameras">Live cameras</router-link></li>
              <li class="menu-item"><router-link to="/photos">Photos</router-link></li>
              <li class="menu-item"><router-link to="/contact">Contact</router-link></li>
            </ul> <!-- .menu -->
          </div> <!-- .main-navigation -->

          <div class="mobile-navigation"></div>

        </div>
      </div> <!-- .site-header -->

      <router-view/>

      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <form action="#" class="subscribe-form">
                <input type="text" placeholder="Enter your email to subscribe...">
                <input type="submit" value="Subscribe">
              </form>
            </div>
            <div class="col-md-3 col-md-offset-1">
              <div class="social-links">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <a href="#"><i class="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div>

          <p class="colophon">Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
        </div>
      </footer> <!-- .site-footer -->
    </div>
  </div>
</template>

<script>

  export default {
    name: "app",
    computed: {
      appName(){
        return "ViewApp!"
      }
    }
  }
</script>