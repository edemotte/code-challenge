<template>
  <v-app>
    <v-app-bar app color="primary" dark>


      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <keep-alive>
        <component v-bind:is="component"></component>
      </keep-alive>

      <!-- <DeviceTable /> -->
      <!-- <DeviceChart /> -->
        <v-container>
            <v-row class="text-center">
              <v-col cols="12">
                <v-btn @click="component = 'device-chart'"
                  :disabled = "(component ==='device-chart') ? true : false"
                  class="ma-2"
                  outlined
                  color="indigo"
                >
                  View Chart
                </v-btn>
                <v-btn @click="component = 'device-table'"
                  :disabled = "(component ==='device-table') ? true : false"
                  class="ma-2"
                  outlined
                  color="indigo"
                >
                  View Table
                </v-btn>
              </v-col>

            </v-row>
          </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DeviceTable from "./components/DeviceTable";
import DeviceChart from "./components/DeviceChart.vue";

export default {
  name: "App",

  components: {
    'device-table': DeviceTable,
    'device-chart': DeviceChart,
  },

  data() {
    return {
      component: 'device-table'
    }
  },
};
</script>
