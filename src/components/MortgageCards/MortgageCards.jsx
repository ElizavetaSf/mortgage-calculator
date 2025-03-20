import MortgageCard from "../MortgageCard/MortgageCard"

export default function MortgageCards({ offers, banks, objectTypes }) {
	return (
		<ul>
			{offers.map(obj => {
				return (
					<MortgageCard
						name={banks.find(el => el.id == obj.bankId).name}
						objectType={
							objectTypes.find(el => el.id === obj.product)?.name || 'build'
						}
						info={[
							{
								name: 'Ставка',
								value: Math.round(obj.rate * 100 * 100) / 100,
								suffix: '%',
							},
							{
								name: 'Макс. кредит',
								value: Math.round((obj.maxAmount / 1_000_000) * 10) / 10,
								suffix: ' млн ₽',
							},
							{
								name: 'Взнос от',
								value: Math.round(obj.minInitialPayment * 100 * 10) / 10,
								suffix: '%',
							},
						]}
						icon={obj.bankId}
					/>
				)
			})}
		</ul>
	)
}