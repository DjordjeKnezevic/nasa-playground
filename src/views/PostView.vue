<template>
  <div id="body">
    <div class="header">
      <div>
        <h1>Post {{ id }}</h1>
        <div class="article">
          <img src="@/assets/images/martianrover-journey.jpg" alt="" />
          <h1>MARTIAN ROVER JOURNEY</h1>
          <span>FEBRUARY 6, 2023</span>
          <p>
            Our website templates are created with inspiration, checked for quality and originality
            and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a
            lot with them. You can modify them. You can use them to design websites for clients, so
            long as you agree with the Terms of Use. You can even remove all our links if you want
            to.
          </p>
          <p>
            Looking for more templates? Just browse through all our Free Website Templates and find
            what you’re looking for. But if you don’t find any website template you can use, you can
            try our Free Web Design service and tell us all about it. Maybe you’re looking for
            something different, something special. And we love the challenge of doing something
            different and something special.
          </p>
        </div>
        <div class="sidebar">
          <ul>
            <li>
              <h1>FEATURED POSTS</h1>
              <RouterLink to="/blog/1"
                ><img src="@/assets/images/moon-satellite.jpg" alt=""
              /></RouterLink>
              <h2>SOYUZ TMA-M</h2>
              <span>FEBRUARY 6, 2023</span>
            </li>
            <li>
              <h1>RECENT POSTS</h1>
              <ul>
                <li>
                  <RouterLink to="/blog/1"
                    ><img src="@/assets/images/alien-life.jpg" alt=""
                  /></RouterLink>
                  <h2>ALIEN LIFE</h2>
                  <span>FEBRUARY 3, 2023</span>
                </li>
                <li>
                  <RouterLink to="/blog/2"
                    ><img src="@/assets/images/galaxy.jpg" alt=""
                  /></RouterLink>
                  <h2>THE GALAXY</h2>
                  <span>FEBRUARY 1, 2023</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostView',
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>
