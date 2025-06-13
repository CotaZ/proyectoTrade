<template>
  <div class="container mx-auto p-4">
    <SearchBarComponent />
    <HeaderComponent />
    <div class="flex">
      <div class="w-1/4">
        <TabComponent />
        <InstrumentListComponent />
      </div>
      <div class="w-3/4 pl-4">
        <ChartComponent />
        <SummaryComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBarComponent from './components/SearchBarComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import ChartComponent from './components/ChartComponent.vue';
import TabComponent from './components/TabComponent.vue';
import SummaryComponent from './components/SummaryComponent.vue';
import InstrumentListComponent from './components/InstrumentListComponent.vue';

export default {
  components: {
    SearchBarComponent,
    HeaderComponent,
    ChartComponent,
    TabComponent,
    SummaryComponent,
    InstrumentListComponent
  }
};
</script>