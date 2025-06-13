import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import App from '@/App.vue';
import { useInstrumentStore } from '@/stores/instrument';

describe('App Integration', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('updates components when instrument is selected', async () => {
    const wrapper = mount(App);
    const store = useInstrumentStore();
    const instrument = {
      codeInstrument: 'AGUAS-A',
      name: 'AGUAS ANDINAS S.A., SERIE A',
      shortName: 'AGUAS-A',
      lastPrice: 272,
      pctDay: 0,
      tend: 'same',
      volumeMoney: 778464,
      accumulatedVolumeMoney: 158922209,
      datetimeLastPrice: '06-11-2024 12:20:25'
    };

    store.selectInstrument(instrument);
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.bg-gray-800').text()).toContain('AGUAS ANDINAS S.A., SERIE A');
    expect(wrapper.find('.bg-gray-100').text()).toContain('Code: AGUAS-A');
    expect(wrapper.find('.bg-gray-100').text()).toContain('Volume: 778464');
  });
});