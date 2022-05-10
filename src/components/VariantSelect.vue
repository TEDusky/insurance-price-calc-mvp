<template>
  <div class="q-py-sm">
    <q-card>
      <q-card-section>    
        <div class="text-h6">Variant poistenia</div>
      </q-card-section>
      <q-separator inset></q-separator>      
      <q-card-section>
        <q-select 
          v-model="selectedVariant" 
          :options="possible_variants" 
          :error="selectedVariant == null"
          label="Vybrať"
        ></q-select>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import store, { setVariant } from '../store/store';
import { INSURANCE_VARIANT } from './models/models';
import { INSURANCE_VARIANT_SHOR_TERM, INSURANCE_VARIANT_YEAR_ROUND } from './../const';

export default Vue.extend({
  name: 'VariantSelect',
  data(): { possible_variants: INSURANCE_VARIANT[]} {
    return {
      possible_variants: [INSURANCE_VARIANT_SHOR_TERM, INSURANCE_VARIANT_YEAR_ROUND],
    };
  },
  computed: {
    selectedVariant: {
      get: () => store.insurance.variant,
      set: (variant: INSURANCE_VARIANT) => setVariant(variant),
    },
  },  
});

</script>