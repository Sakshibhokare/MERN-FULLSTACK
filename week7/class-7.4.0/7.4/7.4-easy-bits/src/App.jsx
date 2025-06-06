
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState, } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

//RecoilRoot

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}


function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  //this variable can not be used outside 
  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
  // }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount]) 

  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      {/* will use selector to get the sum of all notifications 
      the value which is not coming from bc, which is the sum of other values  */}
      <button>Me ({totalNotificationCount})</button>

      <ButtonUpdater></ButtonUpdater>
    </>
  )
}

function ButtonUpdater() {
  const setMessageAtomCount = useSetRecoilState(messagingAtom);
  return <button onClick={() => {
    setMessageAtomCount(c => c + 1);
  }}>
    Update message
  </button>
}
export default App
