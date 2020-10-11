import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

export default () => {
	const history = useHistory();
	const handleSearch = (event) => {
		event.preventDefault();
		const { query } = event.target;
		if (query && query.value) history.push("/search", { query: query.value });
	};
	return (
		<header>
			<div className='nav'>
				<h3 className='brand'>
					<Link className='nav-link' to='/'>
						<img
							src={process.env.PUBLIC_URL + "/icon/cinephile.svg"}
							alt='cinephile-icon'
							height={30}
						/>
						Cinephile
					</Link>
				</h3>
				<ul>
					<li>
						<Link to='/' className='nav-link'>
							Explore
						</Link>
					</li>
					<li>
						<a
							target='_blank'
							href='https://github.com/suryanshsugandhi/cinephile'
							className='nav-link'
						>
							Github
						</a>
					</li>
					<li>
						<form onSubmit={handleSearch}>
							<input
								name='query'
								type='text'
								placeholder='Search 🔍'
								autoComplete={false}
								autoCapitalize={false}
							/>
						</form>
					</li>
				</ul>
			</div>
		</header>
	);
};
