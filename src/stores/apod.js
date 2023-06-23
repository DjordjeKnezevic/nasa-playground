import { defineStore } from 'pinia'
import getAPOD from '../api/getAPOD'

export const FETCH_APOD = 'FETCH_APOD'
export const FETCH_APODS = 'FETCH_APODS'
export const CHANGE_CURRENT_APOD = 'CHANGE_CURRENT_APOD'

export const useAPODStore = defineStore('apod', {
  state: () => ({
    apod: localStorage.getItem('apod') ? JSON.parse(localStorage.getItem('apod')) : {},
    apods: []
  }),
  actions: {
    async [FETCH_APOD](date = undefined) {
      this.apods = []
      this.apod = await getAPOD(date)
      let currentDate = new Date().toISOString().slice(0, 10)
      let dateFromStorage = localStorage.getItem('apod')
        ? JSON.parse(localStorage.getItem('apod')).date
        : ''
      if (currentDate !== dateFromStorage || dateFromStorage === '')
        localStorage.setItem('apod', JSON.stringify(this.apod))
    },
    async [FETCH_APODS](count) {
      this.apods = await getAPOD(undefined, count)
      this.CHANGE_CURRENT_APOD(0)
    },
    [CHANGE_CURRENT_APOD](index) {
      this.apod = this.apods[index]
    }
  }
})
