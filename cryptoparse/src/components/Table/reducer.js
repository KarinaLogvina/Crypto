import { SET_CRYPTO_DATA, SET_CRYPTO_ERROR } from "./actions";

export const initState = {
    data: {
        id: "",
        rank: "",
        symbol: "",
        name: "",
        supply: "",
        maxSupply: "",
        marketCapUsd: "",
        volumeUsd24Hr: "",
        priceUsd: "",
        changePercent24Hr: "",
        vwap24Hr: ""
    },
    timestamp: ''
}

const cryptos = (state = initState, action) => {
    switch (action.type) {
        case SET_CRYPTO_DATA: { return { ...state, data: action.data, error: null }; }
        case SET_CRYPTO_ERROR: { return { ...state, error: action.error }; }
        default: return state;
    }
}

export default cryptos;