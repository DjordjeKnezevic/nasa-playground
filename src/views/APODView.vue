<template>
  <div id="body" class="about">
    <LoadingIndicator loadingText="Fetching results..." v-if="fetchingData" />
    <div class="apod-container" v-if="!fetchingData">
      <h1>{{ apod.title }}</h1>
      <LoadingIndicator loadingText="Loading image..." v-if="!imageLoaded" />
      <img
        v-if="apod.media_type === 'image'"
        :src="url"
        :alt="apod.title"
        v-show="imageLoaded"
        @load="imageLoaded = true"
      />
      <iframe
        v-else
        :src="apod.url"
        frameborder="0"
        width="1080"
        height="720"
        allowfullscreen
        v-show="imageLoaded"
        @load="imageLoaded = true"
      ></iframe>
      <div class="pagination">
        <button v-if="currentPage > 1" @click="prevPage">Previous</button>
        <button v-if="currentPage < apods.length" @click="nextPage">Next</button>
      </div>
      <div id="explanation">
        <div class="p-wrapper">
          <p class="d-inline-block">Date: {{ apod.date }}</p>
          <p class="d-inline-block">&copy; {{ apod.copyright }}</p>
        </div>
        <h3>Description:</h3>
        <p>{{ apod.explanation }}</p>
      </div>
    </div>
    <div class="img-quality-picker">
      <h4>Choose image quality</h4>
      <div class="img-quality-choices">
        <CustomInput
          type="radio"
          v-model="resolution"
          class="img-quality-choice"
          id="SD"
          label="SD"
          name="img-choice"
          :isChecked="true"
          :value="'SD'"
        />
        <CustomInput
          type="radio"
          v-model="resolution"
          class="img-quality-choice"
          id="HD"
          label="HD"
          name="img-choice"
          :value="'HD'"
        />
      </div>
    </div>
    <div class="container-wrapper">
      <div class="search-container">
        <h3>Search APOD for specific date:</h3>
        <CustomInput type="date" v-model="searchDate" :errorMessage="errorMessageDate" />
        <button @click="fetchAPODForSpecificDate" :disabled="fetchingData">Search by date</button>
      </div>
      <div class="search-container">
        <h3>Grab a number of random APOD's</h3>
        <CustomInput type="number" v-model="numberToGrab" :errorMessage="errorMessageNumber" />
        <button @click="fetchApods" :disabled="fetchingData || !checkInputedNumber()">
          Grab {{ numberToGrab }} APOD {{ numberToGrab != 1 ? "'S" : '' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '../components/form/CustomInput.vue'
import LoadingIndicator from '../components/LoadingIndicator.vue'
import { mapActions, mapState } from 'pinia'
import { useAPODStore, FETCH_APOD, FETCH_APODS, CHANGE_CURRENT_APOD } from '@/stores/apod'
export default {
  name: 'APODView',
  components: {
    CustomInput,
    LoadingIndicator
  },
  data() {
    return {
      searchDate: undefined,
      errorMessageDate: '',
      fetchingData: false,
      numberToGrab: '1',
      errorMessageNumber: '',
      currentPage: 1,
      imageLoaded: false,
      url: '',
      resolution: 'SD'
    }
  },
  computed: {
    ...mapState(useAPODStore, ['apod', 'apods'])
  },
  methods: {
    ...mapActions(useAPODStore, [FETCH_APOD, FETCH_APODS, CHANGE_CURRENT_APOD]),
    async fetchAPODForSpecificDate() {
      if (this.checkSelectedDate()) {
        this.fetchingData = true
        try {
          await this.FETCH_APOD(this.searchDate)
        } catch (e) {
          this.errorMessageDate = 'Something went wrong, please try again'
          console.log(e.message)
        }
        this.url = this.resolution === 'SD' ? this.apod.url : this.apod.hdurl
        this.fetchingData = false
        this.imageLoaded = false
      }
    },
    async fetchApods() {
      if (this.checkInputedNumber()) {
        this.currentPage = 1
        this.fetchingData = true
        try {
          await this.FETCH_APODS(this.numberToGrab)
        } catch (e) {
          this.errorMessageNumber = 'Something went wrong, please try again'
          console.log(e.message)
        }
        this.url = this.resolution === 'SD' ? this.apod.url : this.apod.hdurl
        this.fetchingData = false
        this.imageLoaded = false
      }
    },
    checkSelectedDate() {
      if (!this.searchDate) {
        this.errorMessageDate = 'You must select a date before searching'
        return false
      }
      let currentTimeStamp = new Date().getTime()
      let selectedTimeStamp = new Date(this.searchDate).getTime()
      if (selectedTimeStamp > currentTimeStamp) {
        this.errorMessageDate = 'You cannot pick a date in the future'
        return false
      }
      return true
    },
    checkInputedNumber() {
      if (this.numberToGrab < 1) {
        this.errorMessageNumber = 'You cannot grab less than one APOD'
        return false
      }
      if (this.numberToGrab > 10) {
        this.errorMessageNumber = "You cannot grab more than ten APOD's"
        return false
      }
      return true
    },
    nextPage() {
      if (this.currentPage < this.apods.length) {
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0)
        this.imageLoaded = false
        this.currentPage++
        this.CHANGE_CURRENT_APOD(this.currentPage - 1)
        this.url = this.resolution === 'SD' ? this.apod.url : this.apod.hdurl
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0)
        this.imageLoaded = false
        this.currentPage--
        this.CHANGE_CURRENT_APOD(this.currentPage - 1)
        this.url = this.resolution === 'SD' ? this.apod.url : this.apod.hdurl
      }
    }
  },
  async mounted() {
    this.fetchingData = true
    const currentDate = new Date().toISOString().slice(0, 10)
    if (this.apod.date !== currentDate) {
      await this.FETCH_APOD()
    }
    this.url = this.resolution === 'SD' ? this.apod.url : this.apod.hdurl
    this.fetchingData = false
    this.imageLoaded = false
  },
  watch: {
    searchDate: function () {
      this.errorMessageDate = ''
      this.checkSelectedDate()
    },
    numberToGrab: function () {
      this.errorMessageNumber = ''
      this.checkInputedNumber()
    },
    resolution: function () {
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0)
      this.imageLoaded = false
      this.url = this.resolution === 'SD' ? this.apod.url : this.apod.hdurl
    }
  }
}
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
}

.apod-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.apod-container img {
  max-width: 100%;
  height: auto;
}

.apod-container p {
  line-height: 27px;
}
#explanation {
  width: 70%;
}
#explanation p {
  margin-top: 10px;
}
.search-container {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 40px;
  padding: 15px;
  border: 2px solid white;
}
.search-container h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.search-container button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  width: 150px;
}

.search-container button:hover {
  background-color: #0056b3;
}
.search-container button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.6;
}
.container-wrapper {
  display: flex;
  justify-content: space-around;
  width: 70%;
}
.d-inline-block {
  display: inline-block;
}
.p-wrapper {
  display: flex;
  justify-content: space-between;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #620031;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  width: 100px;
}
.pagination button:hover {
  background-color: #620031;
}
.img-quality-picker {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-quality-picker h4 {
  margin-bottom: 0px;
}
.img-quality-choices {
  display: flex;
  align-items: baseline;
}
.img-quality-choices label,
.img-quality-choice {
  margin: 10px 10px !important;
}
</style>
