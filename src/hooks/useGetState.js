import { useState } from "react"

const useGetState = (initialState) => {
    const [, setState] = useState(initialState)

    const getState = () => {
        var v;
        setState(value => {
            v = value
            return value
        })
        return v
    }

    return [getState, setState]
}

export default useGetState