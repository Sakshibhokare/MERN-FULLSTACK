import { atom, selector } from "recoil";
import axios from "axios";
// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4,
//         jobs: 6,
//         messaging: 3,
//         notifications: 3
//     }
// });


// this is how we give async values to an atom using selector
//will hit the backend to get the values of these variables 
//we can write function inside the 
// if you know the default value of an atom is coming asynchronously 
// then we will use selector 
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notifications);
        return allNotifications.network +
            allNotifications.jobs +
            allNotifications.notifications +
            allNotifications.messaging
    }
})