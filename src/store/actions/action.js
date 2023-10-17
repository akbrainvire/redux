export const increase = (payload) =>{
    return {
        type: "INC",
        payload : parseInt(payload)
    }
}

export const decrease = (payload) =>{
    return {
        type: "DEC",
        payload : parseInt(payload)
    }
}