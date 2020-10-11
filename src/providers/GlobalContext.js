import React, { createContext, useMemo, useReducer } from "react";
export const GlobalContext = createContext();

const API = "a01406bcdc81dbccf97874dc1daf4aa9";
const GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API}&language=en-US`;

export const GlobalContextProvider = (props) => {
	const [state, dispatch] = useReducer(
		(prevState, action) => {
			switch (action.type) {
				case "SET_GENRES":
					return {
						...prevState,
						genres: action.genres,
					};
			}
		},
		{
			genres: [],
		}
	);

	const stateActions = useMemo(
		() => ({
			getGenres: async () => {
				try {
					const response = await fetch(GENRES);
					if (response.status === 200) {
						const parsed = await response.json();
						dispatch({ action: "SET_GENRES", genres: parsed.genres });
					} else {
						console.error(response.statusText);
					}
				} catch (e) {
					console.error(e);
				}
			},
		}),
		[]
	);

	return (
		<GlobalContext.Provider value={{ stateActions, state }}>
			{props.children}
		</GlobalContext.Provider>
	);
};
