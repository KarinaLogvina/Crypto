import getCryptoList from "../../api/getCryptoList";

export const SET_CRYPTO_DATA = 'SetCryptoData';
export const SET_CRYPTO_ERROR = 'SetCryptoError';

export const setCryptoData = (data) => ({
    type: SET_CRYPTO_DATA,
    payload: { data }
});

export const setCryptoError = (error) => ({
    type: SET_CRYPTO_ERROR,
    payload: { error }
})

export const loadCryptoList = async (dispatch) => {
    const { data, error } = await getCryptoList();
    if (error) {
        dispatch(setCryptoError(error))
    }
    dispatch(setCryptoData(data));
}

