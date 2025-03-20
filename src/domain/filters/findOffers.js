import offerSatisfiesDownPayment from './offerSatisfiesDownPayment'
import offerSatisfiesChosenBanks from './offerSatisfiesChosenBanks'
import offerSatisfiesMortgageTerm from './offerSatisfiesMortgageTerm'
import offerSatisfiesChosenObjectType from './offerSatisfiesChosenObjectType'
import offerSatisfiesChosenHousingType from './offerSatisfiesChosenHousingType'
import offerSatisfiesInsuranceIsNeeded from './offerSatisfiesInsuranceIsNeeded'

const predicates = {
	chosenBanks: offerSatisfiesChosenBanks,
	downPaymentValue: offerSatisfiesDownPayment,
	mortgageTermValue: offerSatisfiesMortgageTerm,
	chosenObjectType: offerSatisfiesChosenObjectType,
	insuranceIsNeeded: offerSatisfiesInsuranceIsNeeded,
	chosenHousingType: offerSatisfiesChosenHousingType,
}

export default function findOffers(offers, filters) {
	return offers.filter(offer => {
    return Object.keys(filters).every(key => predicates[key](offer, filters[key]))
	})
}
