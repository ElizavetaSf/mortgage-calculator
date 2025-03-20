export default function offerSatisfiesMortgageTerm(offer, mortgageTermValue) {
	return (
		mortgageTermValue * 12 > offer.minTerm && mortgageTermValue * 12 < offer.maxTerm
	)
}