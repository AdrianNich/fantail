import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
// import { useParams } from 'react-router-dom'



// I want to see a list of team names, their logo and whether they're an international or franchise team
// I want to be able to search a team name and see it's details

function Search() {
	const [player, setPlayer] = useState({ player: [] })
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [input, setInput] = useState('')
	const type = "domestic"



	function handleChange(evt) {
		// console.log(input)
		setInput(evt.target.value)

	}

	function handleSubmit(evt) {
		evt.preventDefault()
		request
			.get(`/find-a-player/${input}`)
			.then((response) => {
				// console.log(JSON.parse(response.text))
				setPlayer(JSON.parse(response.text))
			})
			.finally(() => {
				setLoading(false)
			})
			.catch((err) => {
				setError(true)
				console.log(err)
			})

	}


	if (loading) return <div>loading</div>
	if (error) return <div>error</div>
	return (
		<>
			<main>
				<h1>Player Search</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" name="input" id="input" onChange={handleChange} />
					<button type="submit">Search</button>
					<p><Link to={`/Teams/${type}`} >Teams</Link></p>
					

				</form>
				<ul>
					{player.player.map(({ id, name }) => {
						return (
							<li key={id}>
								name: <Link to={`/Profile/${id}`} >{name}</Link>
								

							</li>

						)
					}
					)}

				</ul>
			</main>
		</>
	)
}


export default Search