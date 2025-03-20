export default function offerSatisfiesChosenObjectType(offer, chosenObjectType) {
	return chosenObjectType === offer.product || chosenObjectType === 'ALL'
}