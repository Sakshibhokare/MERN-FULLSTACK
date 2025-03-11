// real world example
// your getting income from different sources
// have all docs ready and send to your CA
// your will not go to bank again again for same docs
// that preventing is done by useEffect 

const { useState, useEffect } = require("react");

function App() {
    const [exchangeData, setExchangeData] = useState({});
    const [bankData, setBankData] = useState({});

    //even the data is static it is rerendering again and again 
    //because after the set time out it is changing set value and therefore it is rerendering 

    //both code should run only when the state changes/ data is changing 
    useEffect(() => {
        fetch("https://www.google.com", async (res) => {
            const json = await res.json();
            setBankData({ income: 1000 });
        })
    }, [bankData]) //when back data changes only then this code will run 

    useEffect(() => {
        setTimeout(() => {
            setExchangeData({
                returns: 100
            });
        }, 1000);
    }, [exchangeData])


    const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

    return (
        <div>
            hi there, your income tax returns are {incomeTax}
        </div>
    )
}

export default App;