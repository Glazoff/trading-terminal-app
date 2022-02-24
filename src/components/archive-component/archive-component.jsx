import { useSelector } from "react-redux";


function ArchiveComponent () {
    const transactions = useSelector(state => state.transactions);

    return transactions.length !== 0 ?(
        <div className="block-archive">
            <table className="tbale-archive">
            <thead>
                <tr className="table-header">
                    <th className="table-header-item">Side</th>
                    <th className="table-header-item">Price</th>
                    <th className="table-header-item">Instrument</th>
                    <th className="table-header-item">Volume</th>
                    <th className="table-header-item">TimeStamp</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((item) => {
                    return (
                        <tr className="table-body" key={item.id + 1}>
                            <td className="table-body-item">{item.typeDeal}</td>
                            <td className="table-body-item">{item.price}</td>
                            <td className="table-body-item">{item.dealCurrency}</td>
                            <td className="table-body-item">{item.volume}</td>
                            <td className="table-body-item">{item.dateTime}</td>
                        </tr>
                    );
                })}
            </tbody>      
            </table>
        </div>):
        <p className="not-transaction">Транзакции отсуствуют</p>
}

export default ArchiveComponent;