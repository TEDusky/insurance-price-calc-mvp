<template>
  <div class="q-py-sm">
    <q-card>
      <q-card-section>    
        <div class="text-h6">Počet osôb</div>
      </q-card-section>      
      <q-card-section>    
        <q-select 
          v-model="selectedPeople" 
          :error="selectedPeople == null"
          :options="possible_people_counts" 
          label="Vybrať">
        </q-select>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import store, { setPeopleCount } from '../store/store';

export default Vue.extend({
  name: 'PeopleSelect',
  data(): { possible_people_counts: number[]} {
    return {
      possible_people_counts: [1, 2, 3],
    };
  },
  computed: {
    selectedPeople: {
      get: () => store.insurance.people,
      set: (peopleCount: 1|2|3) => setPeopleCount(peopleCount),
    },
  },  
});

</script>