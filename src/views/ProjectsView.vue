<template>
  <div id="body">
    <div class="header">
      <div>
        <h1>Projects</h1>
        <ul>
          <li>
            <RouterLink to="/projects/1"
              ><img src="@/assets/images/curious-rover.jpg" alt=""
            /></RouterLink>
            <div>
              <h1>MARS CURIOSITY ROVER</h1>
              <p>
                Our website templates are created with inspiration, checked for quality and
                originality and meticulously sliced and coded. What’s more, they’re absolutely free!
                You can do a lot with them. You can modify them. You can use them to design websites
                for clients, so long as you agree with the Terms of Use.
              </p>
              <RouterLink to="/projects/1" class="more">Read More</RouterLink>
            </div>
          </li>
          <li>
            <RouterLink to="/projects/1"
              ><img src="@/assets/images/space-station.jpg" alt=""
            /></RouterLink>
            <div>
              <h1>INTERTERNATIONAL SPACE STATION</h1>
              <p>
                Looking for more templates? Just browse through all our Free Website Templates and
                find what you're looking for. But if you don't find any website template you can
                use, you can try our Free Web Design service and tell us all about it. Maybe you're
                looking for something different, something special.
              </p>
              <RouterLink to="/projects/1" class="more">Read More</RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView'
}
</script>

