import { useState } from 'react'

import findFormOfWord from '../../domain/ui/findFormOfWord'
import BankChoice from '../BankChoice/BankChoice'
import TypeChoice from '../TypeChoice/TypeChoice'
import Range from '../Range/Range'
import MortgageCards from '../MortgageCards/MortgageCards'
import { response } from '../../mock/response'
import Insurance from '../Insurance/Insurance'
import findOffers from '../../domain/filters/findOffers'

import './MortgageWindow.css'

	const BANKS = [
		{ name: 'ВТБ', id: 'bank-vtb-new' },
		{ name: 'СовкомБанк', id: 'bank-sovcom' },
		{ name: 'Росбанк Дом', id: 'bank-domrf' },
		{ name: 'Газпромбанк', id: 'bank-gazprom' },
		{ name: 'Открытие', id: 'bank-otkritie' },
		{ name: 'ПСБ', id: 'bank-psb' },
		{ name: 'Райффайзенбанк', id: 'bank-raiffaizen' },
	]
	const OBJECT_TYPES = [
		{ name: 'Все', id: 'ALL' },
		{ name: 'Вторичка', id: 'USED' },
		{ name: 'Новостройка', id: 'NEW' },
	]
	const HOUSING_TYPES = [
		{ name: 'Дом', id: 'COTTAGE' },
		{ name: 'Квартира', id: 'FLAT' },
		{ name: 'Апартаменты', id: 'APARTMENTS' },
	]

function MortgageWindow() {
	const [chosenBanks, setChosenBanks] = useState([])
	const [chosenObjectType, setChosenObjectType] = useState('ALL')
	const [chosenHousingType, setChosenHousingType] = useState('COTTAGE')
	const [downPaymentValue, setDownPaymentValue] = useState(25)
	const [mortgageTermValue, setMortgageTermValue] = useState(20)
	const [insuranceIsNeeded, setInsuranceIsNeeded] = useState(false)
	const popularPercentages = [10, 15, 20, 25, 30]
	const popularAmountOfYears = [5, 10, 15, 20]

	const filters = {
		chosenBanks,
		downPaymentValue,
		mortgageTermValue,
		chosenObjectType,
		insuranceIsNeeded,
		chosenHousingType,
	}

	return (
		<div className='mortgage-window'>
			<form className='mortgage-window-form'>
				<h2 className='title'>Настройка ипотеки</h2>
				<Range
					type='downPayment'
					popularValues={popularPercentages}
					value={downPaymentValue}
					setValue={setDownPaymentValue}
					measure={'%'}
					measureType={'percent'}
					title={'Первоначальный взнос'}
					min={'0'}
					max={'100'}
				/>
				<Range
					type='mortgageTerm'
					popularValues={popularAmountOfYears}
					value={mortgageTermValue}
					setValue={setMortgageTermValue}
					measure={findFormOfWord(mortgageTermValue, 'year')}
					measureType={'year'}
					title={'Срок кредита'}
					min={'0'}
					max={'100'}
				/>

				<BankChoice
					banks={BANKS}
					chosenBanks={chosenBanks}
					setChosenBanks={setChosenBanks}
				/>
				<TypeChoice
					typeOf='объекта'
					types={OBJECT_TYPES}
					name='typeOfObject'
					chosenType={chosenObjectType}
					setChosenType={setChosenObjectType}
				/>
				<TypeChoice
					typeOf='жилья'
					types={HOUSING_TYPES}
					name='typeOfHousing'
					chosenType={chosenHousingType}
					setChosenType={setChosenHousingType}
				/>
				<Insurance
					insuranceIsNeeded={insuranceIsNeeded}
					setInsuranceIsNeeded={setInsuranceIsNeeded}
				/>
			</form>
			<MortgageCards
				offers={findOffers(response.offers, filters)}
				banks={BANKS}
				objectTypes={OBJECT_TYPES}
			/>
		</div>
	)
}

export default MortgageWindow
