const getCryptoHistory = async (crypto) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const url = `https://api.coincap.io/v2/assets/${crypto}/history?interval=d1`;
    const res = await fetch(url, requestOptions);
    const json = await res.json();
    return json;
}

export default getCryptoHistory;