import React, { useEffect } from 'react'
import { getToken } from "firebase/messaging";
import { notification } from '../firebase/clientapp'
export default function Msg() {
    async function requestPermission() {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
        //   Generate Token
          const token = await getToken(notification, {
            vapidKey:
              "BKMVkPQZtjekLsw0bevQlnoTgPPYVl1xArB44BN6HO3wZxa7GEKeoOA1ybxEJoGwiyE7bVNvnrD588YauBfdljk",
          });
          console.log("Token Gen", token);

          // Send this token  to server ( db)
        } else if (permission === "denied") {
          alert("You denied for the notification");
        }
      }
    
      useEffect(() => {
        // Req user for notification permission
        requestPermission();
      }, []);
    
  return (
    <div>Msg</div>
  )

}
