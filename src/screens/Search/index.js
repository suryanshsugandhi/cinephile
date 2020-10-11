import React, { useEffect, useState } from "react";
import Grid from "../../components/Grid";
import { getMovies } from "../../api/http";
const { REACT_APP_API } = process.env;

export default ({ location }) => {
	const [movies, setMovies] = useState([]);
	const { query } = location.state;
	const URI = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API}&query=${query}`;
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
