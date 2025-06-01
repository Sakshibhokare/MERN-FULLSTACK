import { useEffect, useState } from "react";

//hook to understand you are online or offline 
function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener("online", () => {
            setIsOnline(true)
        })
        window.addEventListener("offline", () => {
            setIsOnline(false)
        })
    }, [])

    return isOnline;
}

function App() {
    const isOnline = useIsOnline();

    if (isOnline) {
        return "You are Online";

    }
    else {
        <>
            You are offline get connected to your network
        </>
    }
}