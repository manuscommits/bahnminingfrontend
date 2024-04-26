const simpleCache = (func) => {
    const cache = {}
    const wrapperFunction = async (input) => {
        if (input in cache) {
            return await cache[input]
        }
        cache[input] = func(input)
        return await cache[input]
    }
    return wrapperFunction
}

export default simpleCache