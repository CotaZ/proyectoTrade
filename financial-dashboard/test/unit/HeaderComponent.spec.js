import { shallowMount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { useInstrumentStore } from '@/stores/instrument';

describe('HeaderComponent', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders selected instrument data', () => {
    const store = useInstrumentStore();
    store.selectedInstrument = {
      name: 'AGUAS ANDINAS S.A., SERIE A',
      lastPrice: 272,
      pctDay: 0,
      performanceAbsolute: 0,
      tend: 'same'
    };

    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.text()).toContain('AGUAS ANDINAS S.A., SERIE A');
    expect(wrapper.text()).toContain('Last Price: 272');
    expect(wrapper.text()).toContain('Change: 0% (0)');
  });

  it('displays default text when no instrument is selected', () => {
    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.text()).toContain('Select an Instrument');
    expect(wrapper.text()).toContain('Last Price: -');
  });
});