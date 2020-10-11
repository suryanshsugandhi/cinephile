import React, { useEffect, useState } from "react";
import Grid from "../../components/Grid";
import { API } from "../../providers/Constants";
import { getMovies } from "../../api/http";

export default ({ location }) => {
	const [movies, setMovies] = useState([]);
	const { query } = location.state;
	const URI = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${query}`;
	useEffect(() => {
		const init = async () => setMovies((await getMovies(URI)) || []);
		init();
	}, [location]);

	return (
		<div className='section-container'>
			<Grid movies={movies} heading={`Search results for ${query}`} />
		</div>
	);
};
