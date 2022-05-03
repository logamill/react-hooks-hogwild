import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
	const [filterBy, setFilterBy] = useState(false)
	const [sortBy, setSortBy] = useState('all')

	console.log(hogs)

	const hogsToDisplay = hogs
		.filter((hog)=> (hog.greased !== filterBy ? hog.greased : true))
		.sort((hog1, hog2) => {
			if(sortBy === 'weight') {
				return hog1.weight - hog2.weight;
			}else {
				return hog1.name.localeCompare(hog2.name)
			}
		})

		console.log(hogsToDisplay)
	return (
		<div className="App">
			<Nav />
			<Filter filter={filterBy} setFilter={setFilterBy} sort={sortBy} setSort={setSortBy} />
			<Tile data={hogsToDisplay} />
		</div>
	);
}

export default App;
