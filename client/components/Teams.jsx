import request from 'superagent'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function Teams() {

const [bio, setBio] = useState({})
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
const { id } = useParams()
const [ teams, setTeams ] = useState()
const Type = 'domestic'

console.log(bio.teams)
// console.log(id)
useEffect(() => {
		setLoading(true)
		request
		.get(`/Teams/${Type}`)
		.then((response) => {
            // console.log(response.body.teamData)
			// console.log(JSON.parse(response.player)
            setTeams(response.body.teamData)
			// setTeams(response.body.teams)
			// console.log(response.body)
		})
		.then(() => {

		// const team = response.body.teamData
		// const result = team.find(({teamName}) => teamName === 'Otago')
			// console.log(teams) 

		})
        .finally(() => {
			setLoading(false)
		})
		.catch((err) => {
			setError(true)
			console.log(err)
		})
	}, [])

        if (loading) return <div>loading</div>
	    if (error) return <div>error</div>
	    return (
            <>
		
		    {/* <ul>
				{teams.find((teamName === 'Otago')=> {
						return (
							<li key={teamId}>
								Team:{team} ID:{teamID}
							</li>

						)
					}
				)}

			</ul>  */}


            </>
        )

}



export default Teams