importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
apiKey: "AIzaSyAUxcVIH1VlP0fXFvYVo1RbypJz0173Fao",
  authDomain: "asosewebsite.firebaseapp.com",
  projectId: "asosewebsite",
  storageBucket: "asosewebsite.appspot.com",
  messagingSenderId: "977548250136",
  appId: "1:977548250136:web:25dd08c8ae8d4717e3c76d",
  measurementId: "G-5TR4WGS8TT"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});