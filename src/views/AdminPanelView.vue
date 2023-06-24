<template>
  <div id="admin-panel">
    <h1>Admin Panel</h1>
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Current Role</th>
          <th>Requested Role</th>
          <th>Time of request submition</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests" :key="request.id">
          <td>{{ request.userId }}</td>
          <td>{{ request.username }}</td>
          <td>{{ request.userEmail }}</td>
          <td>{{ request.userRole }}</td>
          <td>{{ request.requestedRole }}</td>
          <td>{{ request.timeSubbmited }}</td>
          <td>
            <button @click="approveUpgrade(request)">Approve</button>
            <button @click="deleteRequest(request)">Reject</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useUsersStore, CHANGE_ROLE, DELETE_REQUEST } from '@/stores/users'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'AdminPanelView',
  data() {
    return {
      requests: []
    }
  },
  computed: {
    ...mapState(useUsersStore, ['loggedUser', 'users'])
  },
  methods: {
    ...mapActions(useUsersStore, [DELETE_REQUEST, CHANGE_ROLE]),
    approveUpgrade(request) {
      const user = this.users.find((u) => u.id === request.userId)
      if (user) {
        this.CHANGE_ROLE(user, request.requestedRole)
      }
      this.deleteRequest(request)
    },
    deleteRequest(request) {
      this.DELETE_REQUEST(request.id)
      this.requests = this.loggedUser.requests
    }
  },
  created() {
    if (this.loggedUser.role != 'admin') this.$router.push({ name: 'Home' })
  },
  mounted() {
    this.requests = this.loggedUser.requests
  }
}
</script>

<style scoped>
#admin-panel {
  width: 80%;
  margin: 100px auto;
  padding: 50px 50px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

#admin-panel h1 {
  margin-top: 0px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  color: black;
}

button {
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
}
</style>
