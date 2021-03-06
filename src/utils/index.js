import { useEffect } from 'react'

export const isFalsy = (val) => val === 0 ? false : !val

export const cleanObject = (object) =>{
    const result = {...object}
    Object.keys(result).forEach( key => {
        const value = object[key]
        if (isFalsy(value)) {
            delete result[key]
        } 
    })
    return result
}

 export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
 }