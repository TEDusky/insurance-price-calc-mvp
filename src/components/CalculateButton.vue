<template>
  <div class="q-py-sm">
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="fas fa-calculator" color="secondary" :disabled="!isValid" @click="showPriceModal"></q-btn>
    </q-page-sticky>


    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Cena</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            Cena Vášho poistenia je: {{ getPrice }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>    
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import store from '../store/store';

export default Vue.extend({
  name: 'CalculateButton',
  data() { 
      return {
        showDialog: false,
      }
  },  
  computed: {
    isValid() {
      return store.insurance.validate();
    },
    getPrice() { 
      return store.insurance.getInsurancePrice()?.toFixed(2);
    }    
  },  
  methods: { 
    showPriceModal() { 
      this.showDialog = true;
    }
  }  
});

</script>