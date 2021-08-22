const getCryptoList = async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const url = `https://api.coincap.io/v2/assets`;
    const res = await fetch(url, requestOptions);
    const json = await res.json();
    return json;
}

export default getCryptoList;
