import { defineStore } from 'pinia';
import instrumentsData from '../data/constituentsList.json';

export const useInstrumentStore = defineStore('instrument', {
  state: () => ({
    instruments: instrumentsData.data.constituents,
    selectedInstrument: null
  }),
  actions: {
    selectInstrument(instrument) {
      this.selectedInstrument = instrument;
    }
  }
});