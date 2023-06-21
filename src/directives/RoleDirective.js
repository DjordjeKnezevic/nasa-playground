import { useUsersStore } from '../stores/users'

export default {
  mounted(el, binding) {
    const updateDisplay = () => {
      const userStore = useUsersStore()
      const role = userStore.loggedUser.role

      if (!binding.value.includes(role)) {
        el.style.display = 'none'
      } else {
        el.style.display = 'block'
      }
    }

    updateDisplay()
    binding.instance.$watch(() => useUsersStore().loggedUser, updateDisplay)
  }
}
