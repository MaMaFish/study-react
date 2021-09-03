import React, {useEffect, useState} from 'react'
import List from './list'
import SearchPanel from './search-panel'

const apiUrl = process.env.API_URL

function Index() {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [param])

    return (
        <div>
            <List list={list}/>
            <SearchPanel param={param} setParam={setParam}/>
        </div>
    )
}

export default Index
