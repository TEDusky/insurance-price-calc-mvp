import Vue from 'vue';
import { Insurance } from 'src/components/models/insurance';
import { INSURANCE_VARIANT, VARIANT } from 'src/components/models/insurance_variant';
import { StateInterface } from './store_types';
import { INSURANCE_PACKAGE } from 'src/components/models/insurance_package';
import { ADDITIONAL_INSURANCE } from 'src/components/models/additional_insurance';

const state = Vue.observable<StateInterface>({ 
    insurance: new Insurance(),
 }
);

export const setVariant = (selectedVariant: INSURANCE_VARIANT) => {
    state.insurance.variant = selectedVariant;
    state.insurance.startDate = null;
    state.insurance.endDate = null;
    state.insurance.required_props = state.insurance.setReqiredProps();
} 

export const setPackage = (selectedPackage: INSURANCE_PACKAGE) => state.insurance.insurance_pacakge = selectedPackage;

export const setAdditional = (selectedAdditionalInsurance: ADDITIONAL_INSURANCE) => { 
    const contains = state.insurance.additional.find((a) => a.type == selectedAdditionalInsurance.type);

    if(!contains) { 
        return state.insurance.additional.push(selectedAdditionalInsurance);
    }

    return state.insurance.additional = state.insurance.additional.filter((a) => a.type != selectedAdditionalInsurance.type);
}

export const setPeopleCount = (selectedPeopleCount: 1|2|3) => state.insurance.people = selectedPeopleCount;

export const setDate = (selectedDate: { from: string, to: string } | string) => {
    if(typeof(selectedDate) == 'string') {
        state.insurance.startDate = selectedDate;

        if(state.insurance.variant?.variant == VARIANT.SHORT_TERM) {
            state.insurance.endDate = selectedDate;
        }
    } else { 
        state.insurance.startDate = selectedDate.from;
        state.insurance.endDate = selectedDate.to;
    }
}

export default state;