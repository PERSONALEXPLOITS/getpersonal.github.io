import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxqeShEgmj2YToX6b1nvzskecS-oM7jv0",
  authDomain: "personal-62439.firebaseapp.com",
  projectId: "personal-62439",
  storageBucket: "personal-62439.firebasestorage.app",
  messagingSenderId: "730850092864",
  appId: "1:730850092864:web:a0a00939f8a4949c9dfca5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function validEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function page(){
  return window.location.pathname.split("/").pop();
}

window.checkEmail = () => {
  const email = document.getElementById("auth-email").value;
  const msg = document.getElementById("auth-msg");
  if(!validEmail(email)){
    msg.textContent = "Enter a valid email";
    msg.style.color = "red";
    return;
  }
  document.getElementById("password-box").style.display = "block";
};

window.login = async () => {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;
  const msg = document.getElementById("auth-msg");
  try{
    await signInWithEmailAndPassword(auth,email,password);
    window.location.href = "home.html";
  }catch{
    msg.textContent = "Invalid email or password";
    msg.style.color = "red";
  }
};

window.signup = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");
  try{
    await createUserWithEmailAndPassword(auth,email,password);
    window.location.href = "index.html";
  }catch(e){
    msg.textContent = e.message;
    msg.style.color = "red";
  }
};

window.logout = async () => {
  await signOut(auth);
  window.location.href = "index.html";
};

onAuthStateChanged(auth, user => {
  const p = page();
  if(!user && p === "home.html"){
    window.location.href = "index.html";
  }
});
