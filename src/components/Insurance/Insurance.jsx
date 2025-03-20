export default function Insurance({ insuranceIsNeeded, setInsuranceIsNeeded }) {
	return (
		<fieldset>
			<h3 className='formTitle'>Страховка</h3>
			<label className='typeCheckbox'>
				<input
					className='insuranceChoice'
					type='checkbox'
					name='insurance'
					id='insurance'
					value='false'
					onChange={() => setInsuranceIsNeeded(prev => !prev)}
					checked={insuranceIsNeeded}
				></input>
        Страховать жилье
			</label>
		</fieldset>
	)
}