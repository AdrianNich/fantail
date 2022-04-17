import React, {useEffect, useState} from 'react'
import request from 'superagent'
// import { fetchPlayer } from '../api'



// I want to see a list of team names, their logo and whether they're an international or franchise team
// I want to be able to search a team name and see it's details

function Cricket() {
    const [player, setPlayer] = useState(null)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)
	const [input, setInput] = useState('')
    // const [searchTeam, setSearchTeam] = useState('New Zealand')

useEffect(() => {
	setLoading(true)
    // eslint-disable-next-line promise/catch-or-return
    request
	.get('/find-a-player')
	.then((response) => {
		console.log(JSON.parse(response.text))
		setPlayer(JSON.parse(response.text))
	})
	.finally(() => {
		setLoading(false)
	})
	.catch((err) =>{
		setError(true)
		console.log(err)
	})
}, [])

function handleChange (evt) {
	console.log(input)
	setInput(evt.target.value) 

}

if (loading) return <div>loading</div>
if (error) return <div>error</div>
return ( 
<>
<form>
	<input type="text" name="playerName" id="input" onChange={handleChange} />
	<button type="submit">Search</button>
</form>
	<ul>
	{player.player.map(({id, name}) => {
		if (name === "Nick Kelly"){
		return (
			<li key={id}>
				id:{id}  name: {name}
			</li>

		)
	}
	}
	)}
	</ul>
</>
)
}


export default Cricket