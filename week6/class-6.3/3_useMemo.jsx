// lets say you have stored your crypto in 3 different exchanges (coinDCX/ WazirX / Binance)
// you got the return from all three places
// you added them and gave it to the CA
// Now you got your income report
// Will you recalculate the sum of all crypto returns ? No
// 1500+1500+1000=4000 given this sum to CA
// then no need the calculate again 

const { useState, useEffect, useMemo } = require("react");

function App() {
    const [exchange1Data, setExchange1Data] = useState({});
    const [exchange2Data, setExchange2Data] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(() => {
        setExchange1Data({
            returns: 100
        })
    }, [])

    useEffect(() => {
        setExchange2Data({
            returns: 100
        })
    }, [])

    useEffect(() => {
        setBankData({
            income: 100
        }, 5000)
    }, [])

    //after setting the bank data this line should not rerender 
    const cryptoReturns = useMemo(() => {
        return exchange1Data.returns + exchange2Data.returns;
    }, [exchange1Data, exchange2Data])

    const incomeTax = (cryptoReturns + bankData.income) * 0.3

    return (
        <div>
            hi there, your income tax returns are {incomeTax}
        </div>
    )
}