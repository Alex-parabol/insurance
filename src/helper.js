export function obtainGapYears(year){
    return new Date().getFullYear() - year
}
// total to pay based on brand
export function obtainBrandPrice(brand){
   let increasedPrice;
   switch(brand){
       case 'american':
        increasedPrice = 1.15
           break;
        case 'european':
        increasedPrice = 1.30
            break;
        case 'asian':
        increasedPrice = 1.05
            break;
           default:
               break;
   }
   return increasedPrice;
}

// payment based on type of plan

export function planPrice(plan){
    let increasedPrice;
    switch(plan){
        case 'basic':
            increasedPrice = 1.20
            break;
        case 'complete':
            increasedPrice = 1.50
            break;
        default:
            break;
    }
    return increasedPrice
}

//First letter of a word capitalized

export function firstLetterMayus (word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}