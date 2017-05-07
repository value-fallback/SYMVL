module.exports = function symvl(value, fallbackValue) {
	return (typeof value === 'symbol') ? value : fallbackValue;
};
