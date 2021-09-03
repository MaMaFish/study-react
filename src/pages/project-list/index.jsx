import React, {useEffect, useState} from 'react'
import List from './list'
import SearchPanel from './search-panel'

const apiUrl = process.env.API_URL

function ProjectListPage() {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects`).then(async res => {
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
    }, [param])

    return (
        <div>
            <SearchPanel param={param} setParam={setParam} users={users}/>
            <List users={users} list={list} />
        </div>
    )
}

export default ProjectListPage
