import { shallowMount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import InstrumentListComponent from '@/components/InstrumentListComponent.vue';
import { useInstrumentStore } from '@/stores/instrument';

describe('InstrumentListComponent', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders instruments from store', () => {
    const store = useInstrumentStore();
    store.instruments = [
      { codeInstrument: 'AGUAS-A', shortName: 'AGUAS-A', lastPrice: 272, pctDay: 0, tend: 'same' }
    ];

    const wrapper = shallowMount(InstrumentListComponent);
    expect(wrapper.findAll('div.cursor-pointer')).toHaveLength(1);
    expect(wrapper.text()).toContain('AGUAS-A');
  });
});