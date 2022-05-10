<template>
  <div class="q-py-sm">
    <q-card>
      <q-card-section>    
        <div class="text-h6">Pripoistenia</div>
      </q-card-section>
      <q-separator inset></q-separator>        
      <q-card-section>
        <div v-for="additional in possible_additional_insuranses" :key="additional.type">
          <q-checkbox  
            @input="setAdditional(additional)" 
            :value="selectedAdditionalInsurances.some((a) => a.type == additional.type)" 
            :label="additional.label"
          ></q-checkbox>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import store, { setAdditional } from '../store/store';
import { ADDITIONAL_INSURANCE } from './models/models';
import { ADDITIONAL_INSURANCE_RETURN, ADDITIONAL_INSURANCE_SPORT } from './../const';

export default Vue.extend({
  name: 'AdditionalInsuranceSelect',
  data(): { possible_additional_insuranses: ADDITIONAL_INSURANCE[]} {
    return {
      possible_additional_insuranses: [ADDITIONAL_INSURANCE_RETURN, ADDITIONAL_INSURANCE_SPORT],
    };
  },
  computed: {
    selectedAdditionalInsurances() {
      return store.insurance.additional;
    },
  }, 
  methods: {
    setAdditional,
  } 
});

</script>