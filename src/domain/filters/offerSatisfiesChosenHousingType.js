export default function offerSatisfiesChosenHousingType(offer, chosenHousingType) {
	return (
		chosenHousingType ===
		offer.requirements.find(el => el.key === 'PROPERTY_TYPE').value
	)
}