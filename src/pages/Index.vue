<template>
<div>
  <q-page class="absolute">
    <div>
      <variant-select />
      <package-select />
      <date-select />
      <additional-insurance-select />  
      <people-select />
      <span class="small text-grey">{{ getPrice }}</span>
    </div>
  </q-page>
  <calculate-button />
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import VariantSelect from 'src/components/VariantSelect.vue';
import PackageSelect from 'src/components/PackageSelect.vue';
import AdditionalInsuranceSelect from 'src/components/AdditionalInsuranceSelect.vue';
import PeopleSelect from 'src/components/PeopleSelect.vue';
import DateSelect from 'src/components/DateSelect.vue';
import CalculateButton from 'src/components/CalculateButton.vue';
import state from 'src/store/store';

export default Vue.extend({
  name: 'PageIndex',
  components: { VariantSelect, PackageSelect, AdditionalInsuranceSelect, PeopleSelect, DateSelect, CalculateButton },
  computed: {
    getPrice() { 
      return state.insurance.getInsurancePrice()?.toFixed(2);
    }
  }
});

</script>