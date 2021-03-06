import request from 'superagent'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function Profile() {

const [bio, setBio] = useState({})
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
const { id } = useParams()
const [ teams, setTeams ] = useState()

useEffect(() => {
		setLoading(true)
		request
		.get(`/Profile/${id}`)
		.then((response) => {
         
            setBio(response.body)
			console.log(response.body.teams)
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
           <div><h1>{bio.name}</h1></div> 
		   <div>{bio.DoB}</div>
		   <ul>
				{bio.teams?.map((team) => {
						return (
							<li key={team}>
								{team}
							</li>

						)
					}
				)}

			</ul>


            </>
        )

}



export default Profile