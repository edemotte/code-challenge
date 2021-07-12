<template>
  <v-container>
    <v-row v-if="loading" class="text-center">
      <v-col cols="12">
          <v-skeleton-loader
            v-bind:loading="loading"
            type="table-heading, table-thead, table-tbody, table-tfoot"
          ></v-skeleton-loader>        
      </v-col>
    </v-row>
    <v-row v-else class="text-center">
      <v-col cols="12">
        <v-data-table
            :headers="headers"
            :items="devicesList"
            :items-per-page="10"
            class="elevation-1"
        ></v-data-table>
      </v-col>

    </v-row>
  </v-container>

</template>

<script>
// eslint-disable-next-line
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'DeviceTable',

  data() {
    return {
      loading: false,
      headers: [
        {
          text: 'Time',
          align: 'start',
          value: 'time',
        },
        { text: 'Temperature', value: 'temperature' },
        { text: 'Message Counter', value: 'messageCounter' },
      ],
       devicesList: [],
    }

  },
  async created(){
    this.loading = true
    const { data } = await axios.get(`https://nnnco-code-challenge.herokuapp.com/api/devices`);
    
    data.forEach(device => {
      const time = moment(device.time, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("dddd, MMMM Do YYYY, h:mm:ss a");
      const {
        temperature,
        messageCounter
      } = device;

      this.devicesList.push({time, temperature, messageCounter })

    });
    this.loading = false
      // .then(response => {
      //   this.devicesList = response.data
      // })
      // .catch(error => {
      //   console.log('Seems like there was an error fetching the data ', error)
      // })
      // .finally(() => (this.loading = false))
  }
};
</script>
