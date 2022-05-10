export enum ADDITIONAL_INSURANCE_TYPE { 
    'RETURN',
    'SPORT'
  }
  
  export interface ADDITIONAL_INSURANCE { 
    label: string,
    type: ADDITIONAL_INSURANCE_TYPE,
    price_short_term_percent: number,
    price_year_percent: number,
  }