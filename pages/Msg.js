import React from 'react'
import { getToken } from "firebase/messaging";
import messaging from '../firebase/clientapp'
export default function Msg() {
    const fcmtoken = getToken(messaging, {vapidKey: "BKMVkPQZtjekLsw0bevQlnoTgPPYVl1xArB44BN6HO3wZxa7GEKeoOA1ybxEJoGwiyE7bVNvnrD588YauBfdljk"});
    if(fcmtoken){
        console.log('Got fcm Token: ',fcmtoken)
    }
  return (
    <div>Msg</div>
  )
}
