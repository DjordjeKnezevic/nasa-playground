<template>
  <div id="body">
    <div class="header">
      <div class="contact">
        <h1>Register</h1>
        <form @submit.prevent="onSubmit">
          <CustomInput
            type="text"
            name="Name"
            placeholder="Name"
            v-model="name"
            :errorMessage="nameError"
          />
          <CustomInput
            type="text"
            name="Email"
            placeholder="Email"
            v-model="email"
            :errorMessage="emailError || emailExistsError"
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
import { ref, watch } from 'vue'
import CustomInput from '../components/form/CustomInput.vue'
import { useUsersStore, REGISTER_USER } from '@/stores/users'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'

const schema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
    .matches(/[A-Z]/, 'Password must contain an uppercase letter')
    .matches(/\d/, 'Password must contain a number')
})

export default {
  name: 'RegisterView',
  components: {
    CustomInput
  },
  setup() {
    const { handleSubmit } = useForm({ validationSchema: schema })

    const { value: name, errorMessage: nameError } = useField('name')
    const { value: email, errorMessage: emailError } = useField('email')
    const { value: password, errorMessage: passwordError } = useField('password')

    const router = useRouter()

    const emailExistsError = ref('')
    const usersStore = useUsersStore()

    watch(email, (newEmail) => {
      const userExists = usersStore.users.find((u) => u.email === newEmail)
      if (userExists) {
        emailExistsError.value = 'A user with this email already exists.'
      } else {
        emailExistsError.value = ''
      }
    })

    const onSubmit = handleSubmit(async () => {
      const newUser = {
        name: name.value,
        email: email.value,
        password: password.value,
        role: 'user'
      }

      const usersStore = useUsersStore()
      const registrationResult = await usersStore[REGISTER_USER](newUser)

      if (!registrationResult) {
        emailExistsError.value = 'A user with this email already exists.'
      } else {
        emailExistsError.value = ''
        router.push({ name: 'Home' })
      }
    })

    return {
      name,
      email,
      password,
      nameError,
      emailError,
      passwordError,
      emailExistsError,
      onSubmit
    }
  }
}
</script>
