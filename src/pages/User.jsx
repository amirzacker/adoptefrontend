import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import UserProfile from '../components/UserProfile'

function User () {
  const { id } = useParams()
  const [user, setUser] = useState({})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then(result => setUser(result.data))
  }, [id])

  return (
    <UserProfile complete user={user}/>
  )
}

export default User
