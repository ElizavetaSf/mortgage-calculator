export default function findFormOfWord(value, type) {
	if(type !== 'year') {
		return value
	}
  const one = ' год'
  const many = ' лет'
  const few = ' года'
  const isTenLike = value > 10 && value < 20
		if (value % 10 === 1 && !isTenLike) {
			return one
		}
		if (value % 10 > 1 && value % 10 < 5 && !isTenLike) {
			return few
		}
		return many
}