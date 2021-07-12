<template>
  <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <apexchart ref="devchart" width="500" type="bar" :options="options" :series="options.series"></apexchart>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {

      days: [],
      daysTotal: [],
      total: [],

      options: {
        chart: {
          id: 'chart'
        },
        series: [],
        noData: {
          text: 'Loading...'
        }
      },

    }
  },
    async mounted(){

   

    const { data } = await axios.get(`https://nnnco-code-challenge.herokuapp.com/api/devices`);
    
    let allDays = [];

    console.log("data.length", data.length)

    //this logic should probably being done on the backend. 
    data.forEach(device => {
      const time = moment(device.time, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("DD, MMM");
      
      // const {
      //   temperature,
      //   messageCounter
      // } = device;

      allDays.push(time);
      
      // this.devicesList.push({time, temperature, messageCounter })

    });

    this.days = [...new Set(allDays)];

    console.log(this.days)

    this.days.forEach(day=>{

      let lengthofthethingineed = data.filter(function(item){
        return moment(item.time, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("DD, MMM") === day;
      }).length;
      console.log(lengthofthethingineed);
      this.daysTotal.push(lengthofthethingineed)
    });
    
    console.log("check", this.days, this.daysTotal)


    // this.$refs.devchart.updateOptions({
    //   xaxis: {
    //     categories: this.days
    //   }
    // })

    this.$refs.devchart.updateOptions( {
      xaxis: {
        categories: this.days
      }
    });
    this.$refs.devchart.updateSeries([
      {
        data: this.daysTotal
      }
    ]);
 
  }
}
</script>