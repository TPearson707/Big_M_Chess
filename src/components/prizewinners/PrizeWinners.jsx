import "./prizewinners.scss";

const PrizeWinners = () => {

    return (
        <div className="prizewinners">
        
            <div className="Header">
                <h1>50th Dyfed Congress</h1>
            </div>

            <div className="tableContainer">
                
                <h1 className="winHead">Prize Winners</h1>

                <table>
                    <tr>
                        <th colspan="4">OPEN</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Points</td>
                        <td>Prize</td>
                    </tr>

                    <tr>
                        <td>1<sup>st</sup>=</td>
                        <td>
                            Joe Fathallah<br/>
                            Kristian Stuvik Holm<br/>
                            Ifan Rathebone-Jones<br/>
                            Grzegorz Toczek<br/>
                        </td>
                        <td>4</td>
                        <td>£90 each</td>
                    </tr>
                    
                    <tr>
                        <td>
                            Under 1900<br/>
                            Rating Prize
                        </td>
                        <td>Emma Kong</td>
                        <td>3</td>
                        <td>£25</td>
                    </tr>

                </table>

                <table>
                    <tr>
                        <th colspan="4">MAJOR</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Points</td>
                        <td>Prize</td>
                    </tr>

                    <tr>
                        <td>1<sup>st</sup>=</td>
                        <td>Gwyn Havard</td>
                        <td>5</td>
                        <td>£160</td>
                    </tr>
                    
                    <tr>
                        <td>2<sup>st</sup>=</td>
                        <td>
                            Joseph Browse<br/>
                            Steve Jones<br/>
                            Chris Peters<br/>
                        </td>
                        <td>4</td>
                        <td>£35 each</td>
                    </tr>

                    <tr>
                        <td>
                            Under 1650<br/>
                            Rating Prize
                        </td>
                        <td>Govind Anandkumar</td>
                        <td>4</td>
                        <td>£35</td>
                    </tr>

                    <tr>
                        <td>
                            Under 1500<br/>
                            Rating Prize
                        </td>
                        <td>Naveen George</td>
                        <td>4</td>
                        <td>£35</td>
                    </tr>

                </table>

            </div>
        </div>
    )
}

export default PrizeWinners