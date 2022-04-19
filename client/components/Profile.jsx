import request from 'superagent'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function Profile() {

const [bio, setBio] = useState({})
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
const { id } = useParams()

// console.log(id)
useEffect(() => {
		setLoading(true)
		request
		.get(`/Profile/${id}`)
		.then((response) => {
            console.log(response.body)
			// console.log(JSON.parse(response.player)
            setBio(response.body)
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
           <div>{bio.name}</div> 
            </>
        )

}



export default Profile