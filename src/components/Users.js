import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Card } from './Card'
import { getUsers } from '../redux/actions/users'
import users from '../redux/reducers/users'

export const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.loading)
    const error = useSelector(state => state.users.error)
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <>
            {users.loading && <p>LOADING</p>}

            {users.length > 0 && users.map((user) => (
                <Card user={user} key={user.id} />
            ))}
            {users.lenght === 0 && !loading && <p> No users to show!</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

