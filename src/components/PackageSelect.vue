<template>
  <div class="q-py-sm">
    <q-card>
      <q-card-section>    
        <div class="text-h6">Balík poistenia</div>
      </q-card-section>
      <q-separator inset></q-separator>       
      <q-card-section>    
        <div>
          <q-select 
            v-model="selectedPackage" 
            :error="selectedPackage == null"
            :options="possible_packages" 
            label="Vybrať">
          </q-select>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import store, { setPackage } from '../store/store';
import { INSURANCE_PACKAGE } from './models/models';
import { INSURANCE_BASIC, INSURANCE_EXTENDED, INSURANCE_EXTRA } from './../const';

export default Vue.extend({
  name: 'PackageSelect',
  data(): { possible_packages: INSURANCE_PACKAGE[]} {
    return {
      possible_packages: [INSURANCE_BASIC, INSURANCE_EXTENDED, INSURANCE_EXTRA],
    };
  },
  computed: {
    selectedPackage: {
      get: () => store.insurance.insurance_pacakge,
      set: (newPackage: INSURANCE_PACKAGE) => setPackage(newPackage),
    },
  },  
});

</script>