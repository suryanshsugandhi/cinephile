import React, { useEffect, useState } from "react";
import "./styles.css";
import Grid from "../../components/Grid";
import { TOP_RATED } from "../../providers/Constants";
import { getMovies } from "../../api/http";

export default () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const init = async () => setMovies((await getMovies(TOP_RATED)) || []);
		init();
	}, []);

	return (
		<div className='section-container'>
			<Grid movies={movies} />
		</div>
	);
};
