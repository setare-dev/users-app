import { useContext } from 'react'
import { UsersDispatchContext } from '../contexts/users'

export function useUsersDispatch() {
    const context = useContext(UsersDispatchContext)

    if (!context) {
        throw Error('useUsersDispatch must be used with UsersProvider')
    }

    return context
}