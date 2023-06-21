<template>
  <div id="body">
    <div class="header">
      <div class="contact">
        <h1>Contact</h1>
        <h2>DO NOT HESITATE TO CONTACT US</h2>
        <form>
          <input type="text" name="Name" placeholder="Name" />
          <input type="text" name="Email Address" placeholder="Email Address" />
          <input type="text" name="Subject" placeholder="Subject" />
          <textarea name="message" cols="50" rows="7" placeholder="message"></textarea>
          <input type="submit" value="Send" id="submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>
