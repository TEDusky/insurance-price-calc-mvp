<template>
  <div class="q-py-sm">
    <q-card>
      <q-card-section>    
        <div class="text-h6">Dátum a trvanie poistenia</div>
      </q-card-section>
      <q-separator inset></q-separator>      
      <q-card-section>
        <span class="q-pb-sm q-px-md">
          <q-badge :color="dateNotSet || variantNotSet ? 'red' : 'teal'">
            {{ getReadableDate }}
          </q-badge>
        </span>        
        <q-btn icon="event" round color="primary" :disabled="variantNotSet">  
          <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
            <q-date 
              v-model="perservedDate" 
              v-bind:range="isDatePickerRange"
              :options="calendarOptions"
              mask="dddd, MMM D, YYYY"
            >
              <div class="row items-center justify-end q-gutter-sm">
                <q-btn label="Cancel" color="primary" flat v-close-popup></q-btn>
                <q-btn label="OK" color="primary" flat @click="saveDate" v-close-popup></q-btn>
              </div>
            </q-date>
          </q-popup-proxy>
        </q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { date } from 'quasar'
import store, { setDate } from '../store/store';
import { VARIANT } from './models/insurance_variant';

export default Vue.extend({
  name: 'DateSelect',
  data(): { perservedDate: { from: string | null, to: string | null } | string | null } {
    return {
      perservedDate: { from: store.insurance.startDate, to: store.insurance.endDate },      
    }
  },
  computed: {
    isDatePickerRange() {
      return store.insurance.variant?.variant === VARIANT.SHORT_TERM;
    },
    selectedDate: {
      get() {
        return store.insurance.variant?.variant === VARIANT.SHORT_TERM ? { from: store.insurance.startDate, to: store.insurance.endDate } : store.insurance.startDate;
      },
      set: (newDate: { from: string , to: string } | string) => setDate(newDate),
    },
    dateNotSet() { 
      return store.insurance.startDate == null;
    },
    variantNotSet() { 
      return store.insurance.variant == null;
    },
    getReadableDate() { 
      if(this.variantNotSet) { 
        return 'Variant poistenia nebol nastavený';
      }
      else if(this.dateNotSet) { 
        return 'Dátum nebol nastavený'
      }
      else if(typeof this.selectedDate == 'string') { 
        return this.selectedDate;
      } 
      
      return `Starts ${this.selectedDate?.from as string} - ${store.insurance.getInsuranceDays()} days`;
    },
  },
  methods: {
    calendarOptions (d: string) { 
      return  d >= date.formatDate(Date.now(), 'YYYY/MM/DD')
    }, 
    updateProxy () {
      this.perservedDate = this.selectedDate as { from: string, to: string } | string
    },
    saveDate () {
      this.selectedDate = this.perservedDate
    },
  }  
});

</script>