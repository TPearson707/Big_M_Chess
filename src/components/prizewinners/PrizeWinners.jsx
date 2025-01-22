import "./prizewinners.scss";

const PrizeWinners = () => {

    return (
        <div className="prizewinners">

            <div className="Header">
                <h1>50th Dyfed Congress</h1>
            </div>

            <div className="tableContainer">
                <h1>Prize Winners</h1>

                <div className="openContainer">
                    <table>
                        <tr className="headerRow">
                            <th>OPEN</th>
                        </tr>
                    </table>
                </div>

                <div className="openContainer">
                    <table>
                        <tr className="headerRow">
                            <th>MAJOR</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Points</th>
                            <th>Prize</th>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default PrizeWinners