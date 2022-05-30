import Vue from 'vue'
import Vcalendar from '@komdech/v-calendar'
import '@komdech/v-calendar/src/styles/base.css';
Vue.use(Vcalendar, {             // second is optional
  datePickerTintColor: '#F00',
  datePickerShowDayPopover: false
})