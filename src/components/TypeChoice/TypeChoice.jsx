export default function TypeChoice({ typeOf, types, name, chosenType, setChosenType }) {
	return (
		<fieldset>
			<h3 className='formTitle'>Тип {typeOf}</h3>
			{types.map(type => {
				return (
					<label className='typeRadiobutton'>
						<input
							className='typeChoice'
							type='radio'
							name={name}
							id={type.id}
							value={type.id}
							onChange={() => setChosenType(type.id)}
							checked={chosenType === type.id}
						></input>
						{type.name}
					</label>
				)
			})}
		</fieldset>
	)
}