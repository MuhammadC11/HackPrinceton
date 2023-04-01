import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAwJ7Z4U0SSU7WwmblOftkDuA07N_F1j10",
  authDomain: "hackprinceton-3b27c.firebaseapp.com",
  projectId: "hackprinceton-3b27c",
  storageBucket: "hackprinceton-3b27c.appspot.com",
  messagingSenderId: "727714078806",
  appId: "1:727714078806:web:bf226a3ca90aeabae55bf7",
};

initializeApp(firebaseConfig);
const app = createApp(App);
//const auth = getAuth(app);
createApp(App).use(router).mount("#app");
