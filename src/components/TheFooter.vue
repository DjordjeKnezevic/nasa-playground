<template>
  <div id="footer">
    <div class="connect">
      <div>
        <h1>FOLLOW US ON</h1>
        <div>
          <a href="http://www.facebook.com" class="facebook">facebook</a>
          <a href="http://www.twitter.com" class="twitter">twitter</a>
        </div>
      </div>
    </div>
    <div class="footnote">
      <div>
        <p>&copy; 2023 BY NASA PLAYGROUND</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
#footer {
  margin: 0;
  padding: 0;
  width: auto;
}
#footer .connect {
  background-color: #a3a3a3;
  margin: 0;
  min-height: 84px;
  overflow: hidden;
  padding: 0;
  width: auto;
}
#footer .connect div {
  margin: 0 auto;
  max-width: 960px;
  overflow: hidden;
  padding: 24px 0 0;
}
#footer .connect div h1 {
  color: #ffffff;
  float: left;
  font-family: audiowide-regular-webfont;
  font-size: 23px;
  font-weight: normal;
  line-height: 23px;
  margin: 0;
  padding: 8px 25px 0 0;
  text-align: right;

  width: 525px;
}
#footer .connect div div {
  float: left;
  margin: 0;
  overflow: hidden;
  padding: 0 0 0 20px;
  width: 380px;
}
#footer .connect div div a {
  background: url(../assets/images/icons.png) no-repeat;
  display: block;
  float: left;
  height: 36px;
  margin: 0;
  padding: 0;
  text-indent: -99999px;
  width: 18px;
}
#footer .connect div div a.facebook {
  background-position: 0 0;
  margin: 0 0 0 16px;
  width: 18px;
}
#footer .connect div div a.twitter {
  background-position: 0 -114px;
  margin: 0 0 0 28px;
  width: 44px;
}
#footer .connect div div a.googleplus {
  background-position: 0 -38px;
  margin: 0 0 0 27px;
  width: 37px;
}
#footer .connect div div a.pinterest {
  background-position: 0 -76px;
  margin: 0 0 0 29px;
  width: 30px;
}
#footer .connect div div a.facebook:hover {
  background-position: -20px 0;
}
#footer .connect div div a.twitter:hover {
  background-position: -46px -114px;
}
#footer .connect div div a.googleplus:hover {
  background-position: -38px -38px;
}
#footer .connect div div a.pinterest:hover {
  background-position: -32px -76px;
}
#footer .footnote {
  background-color: #ffffff;
  margin: 0;
  min-height: 84px;
  overflow: hidden;
  padding: 0;
  width: auto;
}
#footer .footnote div {
  margin: 0 auto;
  overflow: hidden;
  padding: 34px 0 0;
  width: 960px;
}
#footer .footnote div p {
  color: #000000;
  display: block;
  font-family: Arial;
  font-size: 12px;
  font-weight: normal;
  margin: 0 auto;
  padding: 0;
  text-align: center;

  width: 940px;
}
#wix {
  max-width: 728px;
  margin: 0 auto;
}
#wix a img {
  width: 100%;
}
</style>
