export enum VARIANT {
    'SHORT_TERM',
    'YEAR_ROUND',
  }
  
  export interface INSURANCE_VARIANT { 
    label: string,
    variant: VARIANT,
  }