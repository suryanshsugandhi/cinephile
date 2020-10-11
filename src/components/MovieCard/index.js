import React from "react";
import "./styles.css";

const IMAGE = "https://image.tmdb.org/t/p/w300";

export default ({
	title,
	vote_average,
	poster_path,
	index,
	setSelected,
	selected = false,
}) => {
	return (
		<div
			onClick={() => setSelected(index)}
			className={`card ${selected ? "selected" : ""}`}
		>
			<img
				src={
					poster_path
						? IMAGE + poster_path
						: process.env.PUBLIC_URL + "/icon/cinephile.png"
				}
				className='poster'
				alt={title}
			/>
			<div className='body'>
				<div className='header'>
					<h5>{title}</h5>
				</div>
				<div className='details'>
					<p className='rating'>
						{vote_average}{" "}
						<img src={process.env.PUBLIC_URL + "/icon/cinephile.svg"} />
					</p>
				</div>
			</div>
		</div>
	);
};
