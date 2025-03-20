export default function offerSatisfiesChosenBanks(offer, chosenBanks) {
	return chosenBanks.includes(offer.bankId)
}