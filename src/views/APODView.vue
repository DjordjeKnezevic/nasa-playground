<template>
  <div id="body" class="about">
    <div class="apod-container" v-if="!loadingData">
      <h2>{{ apod.title }}</h2>
      <img v-if="apod.media_type === 'image'" :src="apod.hdurl" :alt="apod.title" />
      <iframe
        v-else
        :src="apod.url"
        frameborder="0"
        width="1080"
        height="720"
        allow="accelerometer; encrypted-media; gyroscope"
        allowfullscreen
      ></iframe>
      <div id="explanation">
        <p>Date: {{ apod.date }}</p>
        <h3>Description:</h3>
        <p>{{ apod.explanation }}</p>
      </div>
    </div>
    <div class="search-container">
      <h3>Search APOD for specific date:</h3>
      <CustomInput type="date" v-model="searchDate" :errorMessage="errorMessage" />
      <button @click="fetchAPODForSpecificDate" :disabled="loadingData">Search by date</button>
      <div class="row" v-if="loadingData">
        <p class="w-25 my-3 inline-block text-lg text-white">Fetching results...</p>
        <img
          src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_medium.gif"
          width="50"
          height="50"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '../components/form/CustomInput.vue'
import { mapActions, mapState } from 'pinia'
import { useAPODStore, FETCH_APOD, FETCH_APODS } from '@/stores/apod'
export default {
  name: 'APODView',
  components: {
    CustomInput
  },
  data() {
    return {
      searchDate: undefined,
      errorMessage: '',
      loadingData: false
    }
  },
  computed: {
    ...mapState(useAPODStore, ['apod', 'apods'])
  },
  methods: {
    ...mapActions(useAPODStore, [FETCH_APOD, FETCH_APODS]),
    async fetchAPODForSpecificDate() {
      if (this.checkSelectedDate()) {
        // console.log(this.searchDate)
        this.loadingData = true
        await this.FETCH_APOD(this.searchDate)
        setTimeout(() => {
          this.loadingData = false
        }, 3000)
      }
    },
    checkSelectedDate() {
      if (!this.searchDate) {
        this.errorMessage = 'You must select a date before searching'
        return false
      }
      let currentTimeStamp = new Date().getTime()
      let selectedTimeStamp = new Date(this.searchDate).getTime()
      if (selectedTimeStamp > currentTimeStamp) {
        this.errorMessage = 'You cannot pick a date in the future'
        return false
      }
      return true
    }
  },
  async mounted() {
    this.loadingData = true
    const currentDate = new Date().toISOString().slice(0, 10)
    if (this.apod === {} || this.apod.date !== currentDate) {
      await this.FETCH_APOD()
    }
    this.loadingData = false
  },
  watch: {
    searchDate: function () {
      this.errorMessage = ''
      this.checkSelectedDate()
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
}

.search-container button:hover {
  background-color: #0056b3;
}
.search-container button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.row {
  display: flex;
  margin-bottom: -10px;
}
</style>
