<template>
  <div id="header">
    <div>
      <RouterLink to="/" class="logo"
        ><h1>NASA Playground</h1>
        <img src="@/assets/images/nasa-logo.jpg" alt=""
      /></RouterLink>
      <ul id="navigation">
        <li
          v-for="item in navItems"
          :key="item.text"
          :class="['Projects', 'Blog'].includes(item.text) ? 'menu' : ''"
        >
          <RouterLink :to="item.url">{{ item.text }}</RouterLink>
          <!-- <ul v-if="item.text === 'Projects'" class="primary">
            <li>
              <RouterLink to="/projects/1">proj 1</RouterLink>
            </li>
            <li>
              <RouterLink to="/projects/2">proj 2</RouterLink>
            </li>
          </ul>
          <ul v-if="item.text === 'Blog'" class="secondary">
            <li>
              <RouterLink to="/blog/1">Single post</RouterLink>
            </li>
            <li>
              <RouterLink to="/blog/2">Second post</RouterLink>
            </li>
          </ul> -->
        </li>
      </ul>
    </div>
    <div v-role="['unauthorized']" class="user-block">
      <ul>
        <li><RouterLink to="/login">Login</RouterLink></li>
        <li><RouterLink to="/register">Register</RouterLink></li>
      </ul>
    </div>
    <div v-role="['user', 'premium-user', 'admin']" class="user-block">
      <ul>
        <li class="menu">
          <ul class="third">
            <li>
              <RouterLink :to="'/profile?id=' + loggedUser.id">Go to my profile</RouterLink>
            </li>
            <li v-role="['admin']">
              <RouterLink to="/adminpanel">Go to admin panel</RouterLink>
            </li>
            <li><RouterLink @click="logoutUser" to="/">Logout</RouterLink></li>
          </ul>
          <RouterLink :to="'/profile?id=' + loggedUser.id"> {{ loggedUser.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useUsersStore, LOGOUT_USER } from '@/stores/users'

export default {
  name: 'TheNavbar',
  data() {
    return {
      // navItems: [
      //   { text: 'Home', url: '/' },
      //   { text: 'APOD', url: '/apod' },
      //   { text: 'Projects', url: '/projects' },
      //   { text: 'Blog', url: '/blog' },
      //   { text: 'Contact', url: '/contact' }
      // ]
      navItems: [
        { text: 'Home', url: '/' },
        { text: 'APOD', url: '/apod' },
        { text: 'Contact', url: '/contact' }
      ]
    }
  },
  computed: {
    ...mapState(useUsersStore, ['loggedUser'])
  },
  methods: {
    ...mapActions(useUsersStore, [LOGOUT_USER]),
    logoutUser() {
      this.LOGOUT_USER()
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
#header {
  background: url(../assets/images/bg-transparent1.png) repeat;
  margin: 0;
  min-height: 60px;
  padding: 0;
  width: auto;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
}
#header div {
  min-height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
}
#header div a.logo {
  display: flex;
  justify-content: flex-end;
  height: 60px;
  margin: 0 44px 0 0;
  padding: 0;
  width: 400px;
}
#header div a img {
  display: block;
  margin: 0;
  padding: 0;
  width: auto;
}
#header div a h1 {
  margin: 0 20px 0 0 !important;
  display: flex;
  align-items: center;
}
#header div a h1 {
  color: white;
  margin: 0px auto;
}
#header div ul {
  float: left;
  list-style: none;
  margin: 0;
  padding: 0;
  width: auto;
}
#header div ul li {
  float: left;
  margin: 0;
  padding: 0;
  width: auto;
}
#header div ul li a {
  color: #ffffff;
  display: block;
  font-family: Arial;
  font-size: 18px;
  font-weight: normal;
  line-height: 59px;
  margin: 0;
  min-height: 60px;
  padding: 0 24px;
  text-align: center;

  width: auto;
}
#header div ul li a:hover {
  background-color: #620031;
  color: #ffffff;
}
#header div ul li.selected a {
  background-color: #000000;
  color: #a3a3a3;
}
#header div ul li.menu {
  position: relative;
}
#header div ul li.menu ul {
  display: block;
  left: -99999px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 60px;
  width: 142px;
  z-index: 50;
}
#header div ul li.menu:hover ul.primary {
  left: -18px;
}
/* #header div ul li.menu ul.primary.selected {
  left: 31px;
} */
#header div ul li.menu:hover ul.secondary {
  left: -33px;
}
#header div ul li.menu:hover ul.third {
  left: -45px;
}
/* #header div ul li.menu ul.secondary.selected {
  left: -20px;
} */
#header div ul li.menu ul li {
  margin: 0;
  padding: 0;
  width: 150px;
}
#header div ul li.menu ul li a {
  background-color: #620031;
  color: #ffffff;
  display: block;
  font-family: Arial;
  font-size: 14px;
  font-weight: normal;
  line-height: 60px;
  margin: 0;
  min-height: 60px;
  padding: 0 10px;
  text-align: center;

  width: auto;
}
#header div ul li.menu ul.primary.selected li a,
#header div ul li.menu ul.secondary.selected li a {
  background-color: #000000;
  color: #a3a3a3;
}

.user-block {
  position: absolute;
  right: 40px;
  top: 0;
  color: white;
}
.user-block ul li a {
  font-size: 14px !important;
  padding: 0px 12px !important;
}
</style>
