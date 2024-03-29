import { defineStore } from 'pinia'

const defaultUser = {
  id: -1,
  name: 'guest',
  role: 'unauthorized'
}

export const CHANGE_ROLE = 'CHANGE_ROLE'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const REGISTER_USER = 'REGISTER_USER'
export const CONTACT_ADMIN = 'CONTACT_ADMIN'
export const DELETE_REQUEST = 'DELETE_REQUEST'

export const useUsersStore = defineStore('user', {
  state: () => ({
    loggedUser: localStorage.getItem('loggedUser')
      ? JSON.parse(localStorage.getItem('loggedUser'))
      : defaultUser,
    users: localStorage.getItem('users')
      ? JSON.parse(localStorage.getItem('users'))
      : [
          {
            id: 0,
            name: 'admin',
            email: 'admin@gmail.com',
            password: 'admin',
            role: 'admin',
            requests: []
          }
        ]
  }),
  actions: {
    [LOGIN_USER](passedCredentials) {
      let searchedUser = this.users.find((u) => u.email === passedCredentials.email)
      if (!searchedUser) {
        return 'emailError'
      }
      if (searchedUser.password !== passedCredentials.password) return 'passwordError'
      this.loggedUser = searchedUser
      localStorage.setItem('loggedUser', JSON.stringify(searchedUser))
      return false
    },
    [LOGOUT_USER]() {
      this.loggedUser = defaultUser
      localStorage.removeItem('loggedUser')
    },
    [REGISTER_USER](newUser) {
      let userExists = this.users.find((u) => u.email === newUser.email)
      if (userExists) return false
      let previousId = 0
      if (!(this.users.length === 0)) {
        previousId = this.users.reduce((prev, current) => {
          return current.id > prev.id ? current : prev
        }).id
      }
      console.log(previousId)
      newUser.id = previousId + 1
      this.users.push(newUser)
      localStorage.setItem('users', JSON.stringify(this.users))
      this.LOGIN_USER(newUser)
      return true
    },
    [CHANGE_ROLE](user, role) {
      user.role = role
    },
    [CONTACT_ADMIN](requestObj) {
      const admin = this.users.find((user) => user.role === 'admin')
      requestObj.id = admin.requests.length + 1
      admin.requests.push(requestObj)
      localStorage.setItem('users', JSON.stringify(this.users))
    },
    [DELETE_REQUEST](requestId) {
      const admin = this.users.find((user) => user.role === 'admin')
      const updatedRequests = admin.requests.filter((request) => request.id !== requestId)
      admin.requests = updatedRequests
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  }
})
