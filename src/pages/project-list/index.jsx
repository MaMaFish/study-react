import React, {useEffect, useState} from 'react'
import List from './list'
import SearchPanel from './search-panel'
import qs from 'qs'
import { cleanObject  } from '../../utils'

const apiUrl = process.env.REACT_APP_API_URL

function ProjectListPage() {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [param])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    }, [])

    return (
        <div>
            <SearchPanel param={param} setParam={setParam} users={users}/>
            <List users={users} list={list} />
        </div>
    )
}

export default ProjectListPage
