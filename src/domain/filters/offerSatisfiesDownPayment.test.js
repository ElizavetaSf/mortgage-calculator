import { describe, expect, test } from 'vitest'

import offerSatisfiesDownPayment from "./offerSatisfiesDownPayment";

describe('offerSatisfiesDownPayment', () => {
	test('Первоначальный взнос меньше нужного', () => {
		expect(
			offerSatisfiesDownPayment({
				bankId: 'bank-sovcom',
				offerId: '2',
				type: 'MORTGAGE',
				product: 'NEW',
				creditProgram: 'Ипотека для ИТ',
				rate: 0.06,
				minRate: 0.05996,
				maxRate: 0.08191,
				minInitialPayment: 0.2,
				maxInitialPayment: 1,
				maxPayment: 555556,
				minAmount: 300000,
				maxAmount: 18000000,
				minTerm: 36,
				maxTerm: 360,
				requirements: [
					{ key: 'INSURANCE', value: true },
					{ key: 'PROPERTY_TYPE', value: 'FLAT' },
				],
				features: [],
				category: 'pricing',
			}, 10)
		).toBe(false)
	})

	test('Первоначальный взнос больше нужного', () => {
		expect(
			offerSatisfiesDownPayment(
				{
					bankId: 'bank-sovcom',
					offerId: '2',
					type: 'MORTGAGE',
					product: 'NEW',
					creditProgram: 'Ипотека для ИТ',
					rate: 0.06,
					minRate: 0.05996,
					maxRate: 0.08191,
					minInitialPayment: 0.2,
					maxInitialPayment: 0.8,
					maxPayment: 555556,
					minAmount: 300000,
					maxAmount: 18000000,
					minTerm: 36,
					maxTerm: 360,
					requirements: [
						{ key: 'INSURANCE', value: true },
						{ key: 'PROPERTY_TYPE', value: 'FLAT' },
					],
					features: [],
					category: 'pricing',
				},
				90
			)
		).toBe(false)
	})

	test('Первоначальный взнос соответствует', () => {
		expect(
			offerSatisfiesDownPayment(
				{
					bankId: 'bank-sovcom',
					offerId: '2',
					type: 'MORTGAGE',
					product: 'NEW',
					creditProgram: 'Ипотека для ИТ',
					rate: 0.06,
					minRate: 0.05996,
					maxRate: 0.08191,
					minInitialPayment: 0.2,
					maxInitialPayment: 0.8,
					maxPayment: 555556,
					minAmount: 300000,
					maxAmount: 18000000,
					minTerm: 36,
					maxTerm: 360,
					requirements: [
						{ key: 'INSURANCE', value: true },
						{ key: 'PROPERTY_TYPE', value: 'FLAT' },
					],
					features: [],
					category: 'pricing',
				},
				60
			)
		).toBe(true)
	})
})