import React, { useState } from "react";
import MovieCard from "../MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import Preview from "./Preview";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 6,
		partialVisibilityGutter: 50,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
		partialVisibilityGutter: 40,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3,
		partialVisibilityGutter: 20,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
		partialVisibilityGutter: 10,
	},
};

export default ({ movies, heading = "Trending" }) => {
	const [selected, setSelected] = useState(0);

	return (
		<div>
			<Preview {...movies[selected]} />
			<h3>{heading}</h3>
			<Carousel
				responsive={responsive}
				swipeable
				draggable
				partialVisible
				slidesToSlide={2}
			>
				{movies &&
					movies.map((movie, index) => (
						<MovieCard
							key={movie.id}
							index={index}
							setSelected={setSelected}
							selected={index === selected}
							{...movie}
						/>
					))}
			</Carousel>
		</div>
	);
};
