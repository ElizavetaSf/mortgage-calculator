import './BankChoice.css'

export default function BankChoice({ banks, chosenBanks, setChosenBanks }) {
	function handleClick(bankId) {
		if(chosenBanks.includes(bankId)) {
			setChosenBanks(chosenBanks.filter(el => el !== bankId))
		} else {
			setChosenBanks([...chosenBanks, bankId]);
		}
	}

	return (
		<fieldset>
			<h3 className='formTitle'>Банк</h3>
			{banks.map(bank => {
				return (
					<label className='bankCheckbox'>
						<input
							className='bankChoice'
							type='checkbox'
							name='bank'
							id={bank.id}
							value={bank.id}
							onChange={() => handleClick(bank.id)}
							checked={chosenBanks.includes(bank.id)}
						></input>
						<img src={`./src/images/${bank.id}.png`}></img>
						<span>{bank.name}</span>
					</label>
				)
			})}
		</fieldset>
	)
}