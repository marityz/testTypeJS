<script setup>
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip
} from 'chart.js'
import { Bar, Line, Pie } from 'vue-chartjs';
import { data, dataBar, dataLine, options, optionsBar, optionsLine } from './ChartsConfig';

ChartJS.register(
  ArcElement,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
)
</script>

<template>
  <div class="chart-container">
    <div class="chart-pie">
      <Pie
        :data="data"
        :options="options"
        aria-label="Pie Chart"
      />
    </div>
    <div class="chart-line">
      <Line
        :data="dataLine"
        :options="optionsLine" />
    </div>
    <div class="chart-bar">
      <Bar
        :data="dataBar"
        :options="optionsBar" />
    </div>
  </div>
</template>

<style scoped>
.chart-container {
  margin: 30px;
}

.chart-pie {
  height: 300px;
  background-color: #bdbdbd;
  margin-bottom: 20px;
}

.chart-bar {
  background-color: #bdbdbd;
  width: 800px;
  margin: auto;
}
</style>