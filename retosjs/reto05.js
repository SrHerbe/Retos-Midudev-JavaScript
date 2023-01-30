function getMaxGifts(giftsCities, maxGifts, maxCities) {
	const g = giftsCities.sort((a, b) => {
			if (a > b) return -1;
			return 0;
		}).filter((element) => element < maxGifts);


	g.length = maxCities;
	const result = g.reduce((a, b) => a + b, 0);
	if (result > maxGifts) return maxGifts;

	return result;
}
