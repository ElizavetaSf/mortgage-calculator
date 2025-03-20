import './MortgageCard.css'

export default function MortgageCard({
	name,
	objectType,
  info,
	icon,
}) {
	return (
		<li className='mortgageCard'>
			<div className="upperCardPart">
				<div>
					<h3>{name}</h3>
					<span>{objectType}</span>
				</div>
        <img src={`./src/images/${icon}.png`}></img>
			</div>

			<div className="cardInfo">
				{info.map(el => {
					return (
						<div>
							<h4>{el.name}</h4>
							<span>{el.value}{el.suffix}</span>
						</div>
					)
				})}
			</div>
		</li>
	)
}