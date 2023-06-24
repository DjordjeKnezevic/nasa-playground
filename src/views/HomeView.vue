<template>
  <div id="body" class="home">
    <div class="header">
      <div>
        <img src="@/assets/images/satellite.png" alt="" class="satellite" />
        <h1>Check out APOD</h1>
        <h2>NASA's Astronomy Picture Of The Day</h2>
        <RouterLink to="/apod" class="more">View APOD</RouterLink>
        <!-- <h3>FEATURED PROJECTS</h3>
        <ul>
          <li>
            <RouterLink to="/projects"
              ><img src="@/assets/images/project-image1.jpg" alt=""
            /></RouterLink>
          </li>
          <li>
            <RouterLink to="/projects"
              ><img src="@/assets/images/project-image2.jpg" alt=""
            /></RouterLink>
          </li>
          <li>
            <RouterLink to="/projects"
              ><img src="@/assets/images/project-image3.jpg" alt=""
            /></RouterLink>
          </li>
          <li>
            <RouterLink to="/projects"
              ><img src="@/assets/images/project-image4.jpg" alt=""
            /></RouterLink>
          </li>
        </ul> -->
      </div>
    </div>
    <!-- <div class="body">
      <div>
        <h1>OUR MISSION</h1>
        <p>
          This website template has been designed by Free Website Templates for you, for free. You
          can replace all this text with your own text.
        </p>
      </div>
    </div>
    <div class="footer">
      <div>
        <ul>
          <li>
            <h1>FEATURED VIDEO</h1>
            <RouterLink to="/blog"
              ><img src="@/assets/images/mars-rover.jpg" alt="" /><span></span
            ></RouterLink>
          </li>
          <li>
            <h1>LATEST BLOG</h1>
            <ul>
              <li>
                <RouterLink to="/blog"
                  ><img src="@/assets/images/finding-planet.jpg" alt=""
                /></RouterLink>
                <h1>FINDING PLANET X-123</h1>
                <span>FEBRUARY 6, 2023</span>
                <RouterLink to="/blog" class="more">Read More</RouterLink>
              </li>
              <li>
                <RouterLink to="/blog"
                  ><img src="@/assets/images/new-satellitedish.jpg" alt=""
                /></RouterLink>
                <h1>NEW SATELLITE DISH</h1>
                <span>FEBRUARY 3, 2023</span>
                <RouterLink to="/blog" class="more">Read More</RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div> 
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style>
#body {
  background-color: #000000;
  margin: 0;
  margin-top: 60px;
  min-height: 808px;
  overflow: hidden;
  padding: 0;
  width: 100%;
}
#body.home {
  background: none;
  margin: 0;
  /* min-height: 1308px; */
  min-height: 708px;
  overflow: hidden;
  padding: 0;
  width: 100%;
}
#body.home .header {
  background: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
}
#body.home .header div {
  margin: 0 auto;
  max-width: 940px;
  overflow: hidden;
  padding: 0 10px;
  position: relative;
}
#body.home .header div img.satellite {
  display: block;
  left: 10px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 41px;
  width: auto;
  z-index: 50;
}
#body.home .header div h1 {
  color: #ffffff;
  display: block;
  float: right;
  font-family: audiowide-regular-webfont;
  font-size: 50px;
  font-weight: normal;
  line-height: 60px;
  margin: 187px 0 27px;
  padding: 0 38px 0 399px;
  position: relative;
  text-align: right;

  width: 503px;
  z-index: 60;
}
#body.home .header div h2 {
  color: #ffffff;
  display: block;
  float: right;
  font-family: Arial;
  font-size: 30px;
  font-weight: normal;
  line-height: 43px;
  margin: 0 0 36px;
  padding: 0 146px 0 506px;
  position: relative;
  text-align: right;

  width: 288px;
  z-index: 60;
}
#body.home .header div a.more {
  background-color: #000000;
  color: #a3a3a3;
  display: block;
  float: right;
  font-family: Arial;
  font-size: 18px;
  font-weight: normal;
  height: 49px;
  line-height: 49px;
  margin: 0 200px 0 0;
  padding: 0;
  text-align: center;

  position: relative;
  width: 180px;
  z-index: 55;
}
#body.home .header div a.more:hover {
  background-color: #ab000b;
  color: #ffffff;
}
#body.home .header div h3 {
  background: url('../assets/images/bg-transparent1.png') repeat;
  color: #a3a3a3;
  float: left;
  font-family: audiowide-regular-webfont;
  font-size: 23px;
  font-weight: normal;
  line-height: 23px;
  margin: 96px 0 0;
  min-height: 27px;
  padding: 17px 0 10px;
  position: relative;
  text-align: center;

  width: 940px;
}
#body.home .header div ul {
  display: inline-block;
  list-style: none outside none;
  margin: 0 0 -6px;
  overflow: hidden;
  padding: 0;
  width: auto;
}
#body.home .header div ul li:first-child {
  padding: 0;
}
#body.home .header div ul li {
  border: medium none;
  float: left;
  margin: 0;
  padding: 0;
  width: auto;
}
#body.home .header div ul li a {
  display: block;
  float: none;
  height: 156px;
  margin: 0;
  padding: 0;
  width: 235px;
}
#body.home .header div ul li a img {
  cursor: pointer;
  filter: alpha(opacity=100); /* Needed for IE8 and old versions */
  opacity: 1;
  display: block;
  margin: 0;
  padding: 0;
  width: auto;
}
#body.home .header div ul li a img:hover {
  filter: alpha(opacity=70); /* Needed for IE8 and old versions */
  opacity: 0.7;
}
#body.home .body {
  background-color: #630031;
  margin: 0;
  min-height: 168px;
  overflow: hidden;
  padding: 0;
  width: 100%;
}
#body.home .body div {
  margin: 0 auto;
  max-width: 940px;
  overflow: hidden;
  padding: 31px 10px 0;
}
#body.home .body div h1 {
  color: #ffffff;
  display: block;
  font-family: audiowide-regular-webfont;
  font-size: 32px;
  font-weight: normal;
  line-height: 32px;
  margin: 0 auto 24px;
  padding: 0;
  text-align: center;

  width: 780px;
}
#body.home .body div p {
  color: #ffffff;
  display: block;
  font-family: Arial;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  width: 780px;
}
#body.home .body div p a {
  color: #ffffff;
  font-family: Arial;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin: 0 auto;
  padding: 0;
  text-decoration: underline;
}
#body.home .body div p a:hover {
  color: #a3a3a3;
}
#body.home .footer {
  background-color: #000000;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
}
#body.home .footer div {
  margin: 0 auto;
  max-width: 960px;
  overflow: hidden;
  padding: 32px 0 16px;
}
#body.home .footer div ul {
  display: inline-block;
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: auto;
}
#body.home .footer div ul li:first-child {
  float: left;
  margin: 0 10px;
  padding: 0;
  width: 460px;
}
#body.home .footer div ul li {
  float: left;
  margin: 0 0 0 10px;
  padding: 0 0 0 20px;
  width: 440px;
}
#body.home .footer div ul li h1 {
  color: #ffffff;
  font-family: audiowide-regular-webfont;
  font-size: 32px;
  font-weight: normal;
  line-height: 32px;
  margin: 0 0 44px;
  padding: 0;
  text-align: left;

  width: auto;
}
#body.home .footer div ul li a {
  display: block;
  height: 258px;
  margin: 0;
  position: relative;
  padding: 0;
  width: 460px;
}
#body.home .footer div ul li a img {
  cursor: pointer;
  filter: alpha(opacity=100); /* Needed for IE8 and old versions */
  opacity: 1;
  display: block;
  margin: 0;
  padding: 0;
  width: auto;
}
#body.home .footer div ul li a:hover img {
  filter: alpha(opacity=70); /* Needed for IE8 and old versions */
  opacity: 0.7;
}
#body.home .footer div ul li a span {
  background: url(../assets/images/icons.png) no-repeat 0 -152px;
  display: block;
  height: 72px;
  left: 199px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 94px;
  width: 62px;
}
#body.home .footer div ul li a:hover span {
  background: url(../assets/images/icons.png) no-repeat 0 -226px;
}
#body.home .footer div ul li ul {
  display: inline-block;
  list-style: none outside none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 440px;
}
#body.home .footer div ul li ul li {
  border-top: 1px solid #a3a3a3;
  float: none;
  margin: 0;
  overflow: hidden;
  padding: 39px 10px 38px 0;
  width: 440px;
}
#body.home .footer div ul li ul li:first-child {
  border: medium none;
  margin: 0;
  padding: 0 0 38px;
  width: 440px;
}
#body.home .footer div ul li ul li a {
  display: block;
  float: left;
  height: 90px;
  margin: 0 20px 0 0;
  padding: 0;
  width: 100px;
}
#body.home .footer div ul li ul li a img {
  cursor: pointer;
  filter: alpha(opacity=100); /* Needed for IE8 and old versions */
  opacity: 1;
  display: block;
  margin: 0;
  padding: 0;
  width: auto;
}
#body.home .footer div ul li ul li a img:hover {
  filter: alpha(opacity=70); /* Needed for IE8 and old versions */
  opacity: 0.7;
}
#body.home .footer div ul li ul li h1 {
  color: #a3a3a3;
  float: left;
  font-family: audiowide-regular-webfont;
  font-size: 23px;
  font-weight: normal;
  line-height: 23px;
  margin: 0;
  padding: 4px 0 8px;
  text-align: left;

  width: 310px;
}
#body.home .footer div ul li ul li span {
  color: #ffffff;
  display: block;
  float: left;
  font-family: Arial;
  font-size: 14px;
  font-weight: normal;
  line-height: 14px;
  margin: 0 0 10px;
  padding: 0;
  text-align: left;

  width: 310px;
}
#body.home .footer div ul li ul li a.more {
  background-color: #3c0f38;
  color: #ffffff;
  display: block;
  float: right;
  font-family: Arial;
  font-size: 14px;
  font-weight: normal;
  height: 31px;
  line-height: 31px;
  margin: 0;
  padding: 0;
  text-align: center;

  width: 120px;
}
#body.home .footer div ul li ul li a.more:hover {
  background-color: #620031;
}
</style>
