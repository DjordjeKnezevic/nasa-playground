<template>
  <div id="body">
    <div class="header">
      <div>
        <h1>Blog</h1>
        <div class="article">
          <ul>
            <li>
              <RouterLink to="/blog/1"
                ><img src="@/assets/images/astronaut.jpg" alt=""
              /></RouterLink>
              <h1>SUCCESFUL REPAIR OF THE MX-1 SAT</h1>
              <span>FEBRUARY 6, 2023</span>
              <p>
                This website template has been designed by Free Website Templates for you, for free.
                You can replace all this text with your own text.
              </p>
              <RouterLink to="/blog/1" class="more">Read More</RouterLink>
            </li>
            <li>
              <RouterLink to="/blog/1"
                ><img src="@/assets/images/satellite-dish.jpg" alt=""
              /></RouterLink>
              <h1>ALIEN SIGNAL DISCOVERY</h1>
              <span>FEBRUARY 3, 2023</span>
              <p>
                You can remove any link to our website from this website template, you're free to
                use this website template without linking back to us.
              </p>
              <RouterLink to="/blog/1" class="more">Read More</RouterLink>
            </li>
          </ul>
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
  name: 'BlogView'
}
</script>
