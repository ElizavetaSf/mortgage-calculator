import './Range.css'
import findFormOfWord from '../../domain/ui/findFormOfWord'

export default function Range({ type, popularValues, value, setValue, measure, measureType, title, min, max }) {
	function enforceMinMax(el) {
		console.log(el)
		if (el.value != '') {
			if (parseInt(el.value) < parseInt(el.min)) {
				el.value = el.min
			}
			if (parseInt(el.value) > parseInt(el.max)) {
				el.value = el.max
			}
		}
	}
	return (
		<fieldset>
			<label className='rangeLabel' data-pseudo-content={measure}>
				{title}
				<input
					className='rangeTextInput'
					type='number'
					name={`text-${type}`}
					id={`text-${type}`}
					min={min}
					max={max}
					value={value}
					onChange={event => setValue(+event.target.value || '')}
					onKeyUp={e => enforceMinMax(e.target)}
				></input>
				<input
					className='rangeInput'
					type='range'
					min={min}
					max={max}
					name={`range-${type}`}
					id={`range-${type}`}
					value={value}
					onChange={event => setValue(+event.target.value || '')}
				></input>
			</label>
			<div className='buttonsWithValues'>
				{popularValues.map(num => {
					const valueLabel = `${num}${findFormOfWord(measure, measureType)}`
					return (
						<label className='buttonWithValue'>
							<input
								className='buttonWithValueInput'
								type='button'
								value={valueLabel}
								name={`button-${type}`}
								id={`button-${type}`}
								onClick={() => setValue(num)}
								disabled={num === value}
							></input>
						</label>
					)
				})}
			</div>
		</fieldset>
	)
}