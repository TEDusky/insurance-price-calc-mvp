import { INSURANCE_VARIANT, INSURANCE_PACKAGE, ADDITIONAL_INSURANCE } from './models';
import { VARIANT } from './insurance_variant';

export class Insurance {
        constructor(
            public required_props: string[] = [],
            public variant: INSURANCE_VARIANT | null = null,
            public insurance_pacakge: INSURANCE_PACKAGE | null = null, 
            public additional: ADDITIONAL_INSURANCE[] = [],
            public people: 1|2|3|null = null,
            public startDate: string | null = null,
            public endDate: string | null = null,
      ) {
        this.required_props = required_props;
        this.variant = variant;
        this.insurance_pacakge = insurance_pacakge;
        this.additional = additional;
        this.people = people; 
        this.startDate = startDate;
        this.endDate = endDate;
        this.required_props = this.setReqiredProps();
    }

    getInsurancePrice(): number | null {
        if(this.insurance_pacakge != null && this.people != null) { 
            if(this.variant?.variant == VARIANT.YEAR_ROUND) {
                const base = this.insurance_pacakge.price_year * this.people;
                let final = base;
    
                this.additional?.forEach((additional) => { 
                    final += base / 100 * additional.price_year_percent;
                })
    
                return final;
            }
    
            const base = this.insurance_pacakge.price_day * this.getInsuranceDays() * this.people;
    
            let final = base;
    
            this.additional?.forEach((additional) => { 
                final += base / 100 * additional.price_short_term_percent;
            })        
    
            return final;
        }

        return null;
    }

    setReqiredProps() { 
        const required = ['variant', 'insurance_pacakge', 'additional', 'startDate', 'people']
        return this.variant?.variant == VARIANT.SHORT_TERM ? [...required, 'endDate'] : required;
    }

    validate() { 
        return this.required_props.every((req) => { 
            type ObjectKey = keyof typeof this;
            const prop = req as ObjectKey;
            if(this[prop] == null) {
                return false;
            }
    
            return true;
        })
    }

    getInsuranceDays() { 
        const dateStart: number = new Date(this.startDate as string).valueOf();
        const dateEnd: number = new Date(this.endDate as string).valueOf();
        const diffMS = Math.abs(dateStart - dateEnd);
        return Math.ceil(diffMS / (1000 * 3600 * 24)) + 1; 
    }
}