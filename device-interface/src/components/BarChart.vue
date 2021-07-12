<script>
// eslint-disable-next-line
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object
    }
  },
  mounted(){
    const times = this.chartData.map(d => d.date);
    const totals = this.chartData.map(d => d.total);

    // const times = [1,2,3,4,5,6];
    // const totals = [10,23,43,22,32,9];

    this.renderChart(
      {
        labels: times,
        datasets: [
          {
            label: this.label,
            data: totals
          }
        ]
      }, this.options
    );
  }
}
</script>