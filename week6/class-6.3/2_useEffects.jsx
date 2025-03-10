// real world example
// your getting income from different sources
// have all docs ready and send to your CA
// your will not go to bank again again for same docs
// that preventing is done by useEffect 

const { useState } = require("react");

function App() {
    const [exchangeData, setExchangeData] = useState({});
    const [bankData, setBankData] = useState({});

    fetch("https://www.google.com", async (res) => {
        const json = await res.json();
        setBankData(json);
    })

    setTimeout(() => {
        setExchangeData({
            returns: 100
        });
    }, 1000);

    const incomeTax = (bankData.income + exchangeData) * 0.3;

    return (
        <div>
            hi there, your income tax returns are {incomeTax}
        </div>
    )
}

export default App;