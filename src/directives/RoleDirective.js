import { useUsersStore } from '../stores/users'

export default {
  mounted(el, binding) {
    const updateDisplay = () => {
      const userStore = useUsersStore()
      const role = userStore.loggedUser.role

      if (!binding.value.includes(role)) {
        el.style.setProperty('display', 'none', 'important')
      } else {
        el.style.display = 'block'
      }
      // if (!binding.value.includes(role)) {
      //   el.parentElement.removeChild(el)
      // }
    }

    updateDisplay()
    binding.instance.$watch(() => useUsersStore().loggedUser, updateDisplay)
  }
}
