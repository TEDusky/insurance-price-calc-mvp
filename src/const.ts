import {
  VARIANT,
  INSURANCE_VARIANT,
  PACKAGE_TYPE,
  INSURANCE_PACKAGE,
  ADDITIONAL_INSURANCE_TYPE,
  ADDITIONAL_INSURANCE,
} from './components/models/models';

export const INSURANCE_VARIANT_SHOR_TERM: INSURANCE_VARIANT = { 
  label: 'Krátkodobé positenie',
  variant: VARIANT.SHORT_TERM,
}

export const INSURANCE_VARIANT_YEAR_ROUND: INSURANCE_VARIANT = { 
  label: 'Celoročné poistenie',
  variant: VARIANT.YEAR_ROUND,
}

export const INSURANCE_BASIC: INSURANCE_PACKAGE = {
  label: 'Základný balík',
  type: PACKAGE_TYPE.BASIC,
  price_day: 1.2,
  price_year: 39,
}

export const INSURANCE_EXTENDED: INSURANCE_PACKAGE = {
  label: 'Rozšírený balík',
  type: PACKAGE_TYPE.EXTENDED,
  price_day: 1.8,
  price_year: 49,
}

export const INSURANCE_EXTRA: INSURANCE_PACKAGE = {
  label: 'Extra balík',
  type: PACKAGE_TYPE.EXTRA,
  price_day: 2.4,
  price_year: 59,
}

export const ADDITIONAL_INSURANCE_RETURN: ADDITIONAL_INSURANCE = { 
  label: 'Storno cesty',
  price_short_term_percent: 50,
  price_year_percent: 20,
  type: ADDITIONAL_INSURANCE_TYPE.RETURN
}

export const ADDITIONAL_INSURANCE_SPORT: ADDITIONAL_INSURANCE = { 
  label: 'Športové aktivity',
  price_short_term_percent: 30,
  price_year_percent: 10,
  type: ADDITIONAL_INSURANCE_TYPE.SPORT
}