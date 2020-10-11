import React, { useEffect, useState } from "react";
const { REACT_APP_API } = process.env;
const IMAGE = "https://image.tmdb.org/t/p/original";

const Preview = ({
	id,
	title,
	adult,
	overview,
	vote_average,
	backdrop_path,
	release_date,
}) => {
	const [genres, setGenres] = useState([]);

	const getDetails = async () => {
		const URI = `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_API}&language=en-US`;
		const res = await fetch(URI, {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		});
		const details = await res.json();
		setGenres(details.genres || []);
	};

	useEffect(() => {
		getDetails();
	}, [id]);

	return (
		<div className='preview-container'>
			<div className='details'>
				<div className='header'>
					<div className='title'>
						<h1>{title}</h1>
					</div>
					<p className='rating'>
						{vote_average}
						<img src={process.env.PUBLIC_URL + "/icon/cinephile.svg"} />
					</p>
					<p>
						{new Date(release_date).getUTCFullYear()} |{" "}
						{genres.length > 0 && genres[0]["name"]}
					</p>
					<p>{adult ? "18+" : "U/A"}</p>
					<p className='overview'>{overview}</p>
				</div>
			</div>
			<div className='backdrop'>
				<div className='bottom-gradient' />
				<img
					src={
						backdrop_path
							? IMAGE + backdrop_path
							: process.env.PUBLIC_URL + "/icon/cinephile.png"
					}
					alt={title}
				/>
			</div>
		</div>
	);
};

export default Preview;
