export default function offerSatisfiesDownPayment(offer, downPaymentValue) {
  return (
		downPaymentValue / 100 >= offer.minInitialPayment &&
		downPaymentValue / 100 <= offer.maxInitialPayment
	)
}