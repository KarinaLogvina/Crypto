import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCryptoList } from './actions';

const Table = () => {
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])
    const crypros = useSelector(state => state.data);
    console.log(crypros);

    // const [data, setData] = useState({});

    // useEffect(() => {

    //     const fetchData = async () => {
    //         let res = await getCryptoList();
    //         setData(res);
    //     }
    //     fetchData();
    // }, [])

    // console.log(data);
    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Select</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;