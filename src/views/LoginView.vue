<template>
  <div id="body">
    <div class="header">
      <div class="contact">
        <h1>Login</h1>
        <form @submit.prevent="loginUser">
          <CustomInput
            type="text"
            name="Email"
            placeholder="Email"
            v-model="email"
            :errorMessage="emailError"
          />
          <CustomInput
            type="password"
            name="Password"
            placeholder="Password"
            v-model="password"
            :errorMessage="passwordError"
          />
          <input type="submit" value="Send" id="submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '../components/form/CustomInput.vue'
import { mapActions } from 'pinia'
import { useUsersStore, LOGIN_USER } from '@/stores/users'
export default {
  name: 'LoginView',
  components: {
    CustomInput
  },
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    }
  },
  methods: {
    ...mapActions(useUsersStore, [LOGIN_USER]),
    loginUser() {
      this.emailError = ''
      this.passwordError = ''
      let error = this.LOGIN_USER({ email: this.email, password: this.password })
      if (error === 'emailError') {
        this.emailError = 'This user does not exist'
        return
      }
      if (error === 'passwordError') {
        this.passwordError = 'Incorrect password'
        return
      }
      // this.$forceUpdate()
      this.$router.push({ name: 'Home' })
    }
  },
  watch: {
    email: function () {
      this.emailError = ''
    }
  }
}
</script>
