const simpleCache = (func) => {
    const cache = {}
    const wrapperFunction = async (input) => {
        if (input in cache) {
            return cache[input]
        }
        const result = await func(input)
        cache[input] = result
        return result
    }
    return wrapperFunction
}

export default simpleCache