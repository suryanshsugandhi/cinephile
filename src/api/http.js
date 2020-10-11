export const getMovies = async (URL) => {
	try {
		const data = await fetch(URL, {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		});
		const parsed = await data.json();
		return parsed.results;
	} catch (e) {
		console.log("Unable to fetch movies");
		return [];
	}
};
