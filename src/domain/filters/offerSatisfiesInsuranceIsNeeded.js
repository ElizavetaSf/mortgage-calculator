export default function offerSatisfiesInsuranceIsNeeded(offer, insuranceIsNeeded) {
	return (
		!insuranceIsNeeded ||
		insuranceIsNeeded ===
			offer.requirements.find(el => el.key === 'INSURANCE')?.value
	)
}