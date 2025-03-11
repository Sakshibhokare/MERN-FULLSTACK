// lets say you have stored your crypto in 3 different exchanges (coinDCX/ WazirX / Binance)
// you got the return from all three places
// you added them and gave it to the CA
// Now you got your income report
// Will you recalculate the sum of all crypto returns ? No
// 1500+1500+1000=4000 given this sum to CA
// then no need the calculate again 

const { useState, useEffect, useMemo, memo, useCallback } = require("react");

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

    //we do not really need callback, we can do with useMemo also 
    // RATHER THAN PUTTING IN TO THE VARIABLE WILL PUT IT INTO THE FUNCTION 
    //useCallback is about not rendering a child component, if the function doesnt need to change across renders 
    const cryptoReturns = useCallback(
        function () {
            return exchange1Data.returns + exchange2Data.returns;
        }, [exchange1Data]
    )

    const incomeTax = (cryptoReturns() + bankData.income) * 0.3

    return (
        <div>
            <Child cryptoReturns={cryptoReturns}></Child>
            <Dummy></Dummy>
        </div>
    )
}
//memo will allow to rerender only when its props are changed 
const Dummy = memo(() => {
    return <div>
        hi
    </div>
})

// if parent component changes his child renders even though there is not change in child 
//here even if we use memo this will rerender, because even though the functions are same, react will not understand that these function are same 
function Child({ cryptoReturns }) {
    return <div>
        your crypto returns are {cryptoReturns()}
    </div>
}

// in short the original function and that function we passed as a argument even though these are same, but react would treat them as both are different
// that why we need useCallback hook, whenever we have to pass a function as an argument 
