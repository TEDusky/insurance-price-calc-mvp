export enum PACKAGE_TYPE { 
    'BASIC', 
    'EXTENDED',
    'EXTRA'
  }
  
  export interface INSURANCE_PACKAGE { 
    label: string,
    type: PACKAGE_TYPE,
    price_day: number,
    price_year: number,
  }