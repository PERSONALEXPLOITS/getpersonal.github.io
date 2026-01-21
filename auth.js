
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxqeShEgmj2YToX6b1nvzskecS-oM7jv0",
  authDomain: "personal-62439.firebaseapp.com",
  projectId: "personal-62439",
  appId: "1:730850092864:web:a0a00939f8a4949c9dfca5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function validEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

window.checkEmail = () => {
  const email=document.getElementById("auth-email").value;
  const msg=document.getElementById("auth-msg");

  if(!validEmail(email)){
    msg.textContent="Enter a valid email first";
    msg.style.color="red";
    return;
  }
  document.getElementById("password-box").style.display="block";
};

window.login = async () => {
  const email=document.getElementById("auth-email").value;
  const password=document.getElementById("auth-password").value;
  const msg=document.getElementById("auth-msg");

  try{
    await signInWithEmailAndPassword(auth,email,password);
  }catch{
    msg.textContent="Invalid password";
    msg.style.color="red";
  }
};

window.signup = async () => {
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  const msg=document.getElementById("msg");

  try{
    await createUserWithEmailAndPassword(auth,email,password);
    msg.textContent="Account created. You can log in.";
    msg.style.color="lime";
  }catch(e){
    msg.textContent=e.message;
    msg.style.color="red";
  }
};

onAuthStateChanged(auth, user => {
  const path = window.location.pathname;

  // If logged in and on login page → go to home
  if (user && path.endsWith("index.html")) {
    window.location.href = "home.html";
  }

  // If NOT logged in and trying to access home → go to login
  if (!user && path.endsWith("home.html")) {
    window.location.href = "index.html";
  }
});
