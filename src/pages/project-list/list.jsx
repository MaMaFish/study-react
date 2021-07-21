import React from 'react'

function List({list}) {
    return (
        <table>
            <thead>
                <tr>
                    <td>名称</td>
                    <td>负责人</td>
                </tr>
            </thead>
            <tbody>
            {
                list.map(project =>
                    <tr>
                        <td>{project.name}</td>
                        <td>{project.personName}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}

export default List
