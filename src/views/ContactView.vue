<template>
  <div id="body">
    <div class="header">
      <div class="contact">
        <h1>Contact Admin</h1>
        <form @submit.prevent="handleSubmit">
          <CustomInput
            type="text"
            name="Name"
            placeholder="Name"
            v-model="form.name"
            :errorMessage="nameError"
          />
          <CustomInput
            type="text"
            name="Email Address"
            placeholder="Email Address"
            v-model="form.email"
            :errorMessage="emailError"
          />
          <div class="req-wrapper">
            <label for="req-type">Request type:</label
            ><select id="req-type" v-model="form.requestType">
              <option value="tier upgrade">Tier Upgrade</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="req-wrapper">
            <label for="req-type">Request role:</label
            ><select id="req-type" v-model="form.requestedRole">
              <option value="premium-user">Premium</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <textarea
            name="message"
            cols="50"
            rows="7"
            placeholder="message"
            v-model="form.message"
          ></textarea>
          <div v-if="messageError" class="error-text">
            {{ messageError }}
          </div>
          <div v-if="messageSuccess" class="success-text">
            {{ messageSuccess }}
          </div>
          <input type="submit" value="Send" id="submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '@/components/form/CustomInput.vue'
import { mapState, mapActions } from 'pinia'
import { useUsersStore, CONTACT_ADMIN } from '@/stores/users'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
    .max(200, 'Message cannot be more than 200 characters long')
})

export default {
  name: 'ContactView',
  components: {
    CustomInput
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        requestType: 'tier upgrade',
        requestedRole: 'premium-user',
        message: ''
      },
      nameError: '',
      emailError: '',
      messageError: '',
      messageSuccess: ''
    }
  },
  computed: {
    ...mapState(useUsersStore, ['users', 'loggedUser'])
  },
  methods: {
    ...mapActions(useUsersStore, [CONTACT_ADMIN]),
    async validateForm() {
      try {
        this.nameError = ''
        this.emailError = ''
        this.messageError = ''
        await schema.validate({
          name: this.form.name,
          email: this.form.email,
          message: this.form.message
        })
        return true
      } catch (error) {
        if (error.path === 'name') this.nameError = error.message
        if (error.path === 'email') this.emailError = error.message
        if (error.path === 'message') this.messageError = error.message
        return false
      }
    },
    async handleSubmit() {
      if (await this.validateForm()) {
        const request = {
          userId: this.loggedUser.id,
          username: this.form.name,
          userEmail: this.form.email,
          userRole: this.loggedUser.role,
          requestedRole: this.form.requestedRole,
          type: this.form.requestType,
          message: this.form.message,
          timeSubbmited: new Date().toISOString().replace('T', ' ').slice(0, 19)
        }
        this.CONTACT_ADMIN(request)
        this.messageSuccess = 'Successfully sent message, redirecting to home page...'
        setTimeout(() => {
          this.$router.push({ name: 'Home' })
        }, 3000)
      }
    }
  },
  created() {
    if (this.loggedUser.role === 'unauthorized') this.$router.push({ name: 'Login' })
  }
}
</script>

<style scoped>
.req-wrapper {
  margin-bottom: 20px !important;
  padding: 0 !important;
}
.req-wrapper select {
  margin-left: 10px;
  padding: 5px;
  background-color: #a3a3a3;
}
.success-text {
  color: green;
  padding: 5px !important;
  margin-bottom: 5px !important;
}
textarea {
  margin-bottom: 5px !important;
}
</style>
