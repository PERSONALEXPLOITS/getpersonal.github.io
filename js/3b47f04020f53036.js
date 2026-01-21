(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,a)=>{t.exports=e.r(76562)},52683,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(18566),i=e.i(49721),r=e.i(68757);let n=({delay:e,duration:a,size:s,left:i,top:r})=>(0,t.jsx)("div",{className:"absolute rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur-sm animate-float pointer-events-none",style:{width:s,height:s,left:i,top:r,animationDelay:`${e}s`,animationDuration:`${a}s`}}),o=({className:e,color:a})=>(0,t.jsx)("div",{className:`absolute rounded-full blur-3xl animate-pulse-slow pointer-events-none ${e}`,style:{background:`radial-gradient(circle, ${a} 0%, transparent 70%)`}});function l(){let[e,l]=(0,a.useState)("email"),[d,c]=(0,a.useState)(""),[m,x]=(0,a.useState)(""),[u,p]=(0,a.useState)(!1),[h,g]=(0,a.useState)(!1),[b,f]=(0,a.useState)(!1),[v,w]=(0,a.useState)(null),[y,j]=(0,a.useState)(!1),[N,k]=(0,a.useState)(null),[C,S]=(0,a.useState)(["","","","","",""]),[F,I]=(0,a.useState)(!0),[z,$]=(0,a.useState)(!1),[A,O]=(0,a.useState)(!1),T=(0,s.useRouter)(),D=(0,s.useSearchParams)(),E=D.get("link"),R=D.get("redirect"),B=R?E&&R.includes("loader-auth")?`${R}?link=${encodeURIComponent(E)}`:R:E?`/loader-auth?link=${encodeURIComponent(E)}`:"/dashboard";(0,a.useEffect)(()=>{j(!0),(async()=>{try{(await fetch("/api/user/key-info")).ok&&($(!0),setTimeout(()=>{O(!0)},1500),setTimeout(()=>{T.push(B)},2500))}catch{}finally{I(!1)}})()},[T,B]);let P=async()=>{if(d.trim()){p(!0),w(null),g(!1);try{let e=await fetch("/api/auth/request-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d})}),t=await e.json();if(!t.success)throw Error(t.error||"Failed to send code");l("code"),w({type:"success",text:"Check your inbox for the verification code"})}catch(e){w({type:"error",text:e.message||"Something went wrong"}),g(!0),setTimeout(()=>g(!1),500)}finally{p(!1)}}},W=async()=>{if(m.trim()){p(!0),w(null),g(!1);try{let e=await fetch("/api/auth/verify-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,code:m})}),t=await e.json();if(!t.success)throw Error(t.error||"Invalid code");let a=R||(E?`/loader-auth?link=${encodeURIComponent(E)}`:"/dashboard");f(!0),setTimeout(()=>{T.push(a)},1200)}catch(e){w({type:"error",text:e.message||"Something went wrong"}),g(!0),setTimeout(()=>g(!1),500)}finally{p(!1)}}},H=d.trim().length>3&&d.includes("@"),L=m.trim().length>=6,X="code"===e||u||b,Y=!L||u||b;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-25px) rotate(180deg); opacity: 0.6; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.25), 0 0 40px rgba(139, 92, 246, 0.1); }
          50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.15); }
        }

        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes success-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        @keyframes success-check {
          0% { transform: scale(0) rotate(-45deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(0deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes loading-progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .animate-float { animation: float 12s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s linear infinite; background-size: 200% 100%; }
        .animate-gradient-shift { animation: gradient-shift 6s ease infinite; background-size: 200% 200%; }
        .animate-glow-pulse { animation: glow-pulse 4s ease-in-out infinite; }
        .animate-border-flow { animation: border-flow 6s ease infinite; background-size: 300% 300%; }
        .animate-slide-up { animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-down { animation: slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scale-in { animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-success-ring { animation: success-ring 1s ease-out forwards; }
        .animate-success-check { animation: success-check 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards; }

        .horizon-bg {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(145deg, #030014 0%, #0a0520 40%, #0f0728 60%, #0a0520 80%, #030014 100%);
        }

        .horizon-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(34, 211, 238, 0.04) 0%, transparent 50%);
        }

        .noise-overlay {
          position: fixed;
          inset: 0;
          opacity: 0.012;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .grid-overlay {
          position: fixed;
          inset: 0;
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.015) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
          pointer-events: none;
        }

        .card-glow {
          position: absolute;
          inset: -1px;
          border-radius: 26px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(34, 211, 238, 0.15), rgba(139, 92, 246, 0.3));
          animation: border-flow 6s ease infinite;
          opacity: 0.4;
          filter: blur(1px);
        }

        .card-inner {
          position: relative;
          border-radius: 24px;
          background: rgba(10, 5, 32, 0.85);
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .input-glow {
          position: absolute;
          inset: -1px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.25), rgba(34, 211, 238, 0.4));
          opacity: 0;
          transition: opacity 0.3s ease;
          filter: blur(2px);
        }

        .input-wrapper:focus-within .input-glow {
          opacity: 1;
        }

        .btn-primary {
          position: relative;
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #8b5cf6 100%);
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .btn-primary:hover::before {
          transform: translateX(100%);
        }

        .btn-success {
          background: linear-gradient(135deg, #059669 0%, #0891b2 50%, #10b981 100%);
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }

        .code-input {
          font-family: 'JetBrains Mono', monospace;
          caret-color: #8b5cf6;
        }

        .feature-badge {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(34, 211, 238, 0.08));
          border: 1px solid rgba(139, 92, 246, 0.15);
        }

        .shake-animation {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }

        @keyframes shake {
          10%, 90% { transform: translateX(-2px); }
          20%, 80% { transform: translateX(4px); }
          30%, 50%, 70% { transform: translateX(-6px); }
          40%, 60% { transform: translateX(6px); }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.15s; }
        .stagger-3 { animation-delay: 0.2s; }
        .stagger-4 { animation-delay: 0.25s; }
        .stagger-5 { animation-delay: 0.3s; }
      `}}),(0,t.jsxs)("main",{className:"horizon-bg text-white",children:[(0,t.jsx)("div",{className:"noise-overlay"}),(0,t.jsx)("div",{className:"grid-overlay"}),y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{delay:0,duration:15,size:4,left:"20%",top:"25%"}),(0,t.jsx)(n,{delay:3,duration:18,size:5,left:"75%",top:"70%"}),(0,t.jsx)(n,{delay:6,duration:20,size:4,left:"85%",top:"20%"})]}),(0,t.jsx)(o,{className:"w-[500px] h-[500px] -top-64 -left-64 opacity-60",color:"rgba(139, 92, 246, 0.08)"}),(0,t.jsx)(o,{className:"w-[400px] h-[400px] -bottom-48 -right-48 opacity-50",color:"rgba(34, 211, 238, 0.06)"}),F&&(0,t.jsxs)("section",{className:`relative z-10 w-full max-w-[440px] px-6 py-8 ${y?"animate-scale-in":"opacity-0"}`,children:[(0,t.jsx)("div",{className:"flex justify-center mb-10",children:(0,t.jsxs)("div",{className:"group flex items-center gap-4",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 blur-xl opacity-50"}),(0,t.jsxs)("div",{className:"relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-500 shadow-2xl shadow-violet-500/30 animate-glow-pulse",children:[(0,t.jsx)("div",{className:"absolute inset-[2px] rounded-[14px] bg-gradient-to-br from-violet-600/80 to-indigo-600/80 backdrop-blur-sm"}),(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faWaveSquare,className:"relative text-lg text-white"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-lg font-medium tracking-[0.2em] text-white/90",children:"HORIZON"}),(0,t.jsx)("span",{className:"text-[10px] font-light tracking-[0.3em] text-white/30",children:"LOGIN"})]})]})}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"card-glow"}),(0,t.jsx)("div",{className:"card-inner p-8 md:p-10",children:(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center py-8",children:[(0,t.jsx)("div",{className:"w-12 h-12 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin mb-4"}),(0,t.jsx)("p",{className:"text-sm text-white/40",children:"Checking session..."})]})})]})]}),!F&&z&&(0,t.jsxs)("section",{className:`relative z-10 w-full max-w-[440px] px-6 py-8 transition-all duration-700 ${A?"scale-110 opacity-0 blur-sm":"scale-100 opacity-100"} ${y?"animate-scale-in":"opacity-0"}`,children:[(0,t.jsx)("div",{className:"flex justify-center mb-10 animate-slide-down",children:(0,t.jsxs)("div",{className:"group flex items-center gap-4",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 blur-xl opacity-50"}),(0,t.jsxs)("div",{className:"relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-500 shadow-2xl shadow-violet-500/30 animate-glow-pulse",children:[(0,t.jsx)("div",{className:"absolute inset-[2px] rounded-[14px] bg-gradient-to-br from-violet-600/80 to-indigo-600/80 backdrop-blur-sm"}),(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faWaveSquare,className:"relative text-lg text-white"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-lg font-medium tracking-[0.2em] text-white/90",children:"HORIZON"}),(0,t.jsx)("span",{className:"text-[10px] font-light tracking-[0.3em] text-white/30",children:"LOGIN"})]})]})}),(0,t.jsxs)("div",{className:"relative animate-slide-up",style:{animationDelay:"0.15s"},children:[(0,t.jsx)("div",{className:"card-glow"}),(0,t.jsxs)("div",{className:"card-inner p-8 md:p-10",children:[(0,t.jsx)("div",{className:"absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-violet-500/30 rounded-tl-lg"}),(0,t.jsx)("div",{className:"absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-500/30 rounded-tr-lg"}),(0,t.jsx)("div",{className:"absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-500/30 rounded-bl-lg"}),(0,t.jsx)("div",{className:"absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-violet-500/30 rounded-br-lg"}),(0,t.jsxs)("div",{className:"relative text-center",children:[(0,t.jsxs)("div",{className:"relative mx-auto mb-6 w-fit",children:[(0,t.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,t.jsx)("div",{className:"w-24 h-24 rounded-full border-2 border-emerald-400/20 animate-ping",style:{animationDuration:"2s"}})}),(0,t.jsx)("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 blur-xl opacity-50"}),(0,t.jsx)("div",{className:"relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-teal-400 shadow-2xl shadow-emerald-500/40",children:(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faCircleCheck,className:"text-3xl text-white"})})]}),(0,t.jsxs)("h1",{className:"text-2xl font-light tracking-tight text-white mb-3",children:["Already"," ",(0,t.jsx)("span",{className:"bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent",children:"signed in"})]}),(0,t.jsx)("p",{className:"text-sm text-white/40 leading-relaxed mb-6",children:"Welcome back! Taking you to your dashboard..."}),(0,t.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,t.jsx)("div",{className:"h-1.5 w-48 overflow-hidden rounded-full bg-white/10",children:(0,t.jsx)("div",{className:"h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400",style:{animation:"loading-progress 2s ease-out forwards"}})}),(0,t.jsx)("p",{className:"text-xs text-white/30",children:"Redirecting to dashboard..."})]}),(0,t.jsxs)("button",{onClick:()=>T.push("/dashboard"),className:"mt-6 group inline-flex items-center gap-2 text-xs text-white/40 transition-all duration-300 hover:text-white/80",children:["Go now",(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faArrowRight,className:"text-[10px] transition-transform duration-300 group-hover:translate-x-1"})]})]})]})]}),(0,t.jsx)("p",{className:"mt-6 text-center text-xs text-white/20 animate-slide-up",style:{animationDelay:"0.3s"},children:"© 2025 Horizon. Official Provider."})]}),!F&&!z&&(0,t.jsxs)("section",{className:`relative z-10 w-full max-w-[440px] px-6 py-8 ${y?"animate-scale-in":"opacity-0"}`,children:[(0,t.jsx)("div",{className:`flex justify-center mb-10 ${y?"animate-slide-down":"opacity-0"}`,children:(0,t.jsxs)("div",{className:"group flex items-center gap-4 cursor-pointer",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"}),(0,t.jsxs)("div",{className:"relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-500 shadow-2xl shadow-violet-500/30 animate-glow-pulse",children:[(0,t.jsx)("div",{className:"absolute inset-[2px] rounded-[14px] bg-gradient-to-br from-violet-600/80 to-indigo-600/80 backdrop-blur-sm"}),(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faWaveSquare,className:"relative text-lg text-white"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-lg font-medium tracking-[0.2em] text-white/90 group-hover:text-white transition-colors",children:"HORIZON"}),(0,t.jsx)("span",{className:"text-[10px] font-light tracking-[0.3em] text-white/30",children:"LOGIN"})]})]})}),(0,t.jsxs)("div",{className:`relative ${h?"shake-animation":""} ${y?"animate-slide-up stagger-2":"opacity-0"}`,children:[(0,t.jsx)("div",{className:"card-glow"}),(0,t.jsxs)("div",{className:"card-inner p-8 md:p-10",children:[(0,t.jsx)("div",{className:"absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-violet-500/30 rounded-tl-lg"}),(0,t.jsx)("div",{className:"absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-500/30 rounded-tr-lg"}),(0,t.jsx)("div",{className:"absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-500/30 rounded-bl-lg"}),(0,t.jsx)("div",{className:"absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-violet-500/30 rounded-br-lg"}),b&&(0,t.jsxs)("div",{className:"absolute inset-0 z-30 flex flex-col items-center justify-center rounded-3xl bg-[#0a0520]/98 backdrop-blur-xl",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("div",{className:"absolute inset-0 flex items-center justify-center",children:[(0,t.jsx)("div",{className:"absolute w-24 h-24 rounded-full border-2 border-emerald-400/50 animate-success-ring"}),(0,t.jsx)("div",{className:"absolute w-24 h-24 rounded-full border-2 border-emerald-400/30 animate-success-ring",style:{animationDelay:"0.2s"}}),(0,t.jsx)("div",{className:"absolute w-24 h-24 rounded-full border-2 border-emerald-400/20 animate-success-ring",style:{animationDelay:"0.4s"}})]}),(0,t.jsx)("div",{className:"relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-teal-400 shadow-2xl shadow-emerald-500/40 animate-success-check opacity-0",children:(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faCircleCheck,className:"text-3xl text-white"})})]}),(0,t.jsxs)("div",{className:"mt-6 text-center opacity-0 animate-slide-up",style:{animationDelay:"0.5s"},children:[(0,t.jsx)("p",{className:"text-xl font-medium text-white",children:"Welcome back!"}),(0,t.jsx)("p",{className:"mt-2 text-sm text-white/50",children:"Redirecting to your dashboard..."})]}),(0,t.jsx)("div",{className:"mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/10 opacity-0 animate-slide-up",style:{animationDelay:"0.7s"},children:(0,t.jsx)("div",{className:"h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-shimmer",style:{animation:"shimmer 1s linear infinite, loading 1.2s ease-out forwards"}})})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("div",{className:"mb-8 text-center",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full feature-badge mb-4",children:[(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faShieldHalved,className:"text-[10px] text-violet-400"}),(0,t.jsx)("span",{className:"text-[11px] font-medium text-white/60 tracking-wide",children:"Official Provider"})]}),(0,t.jsx)("h1",{className:"text-3xl font-light tracking-tight text-white",children:"email"===e?(0,t.jsxs)(t.Fragment,{children:["Welcome"," ",(0,t.jsx)("span",{className:"bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent",children:"back"})]}):(0,t.jsxs)(t.Fragment,{children:["Enter"," ",(0,t.jsx)("span",{className:"bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent",children:"code"})]})}),(0,t.jsx)("p",{className:"mt-3 text-sm text-white/40 leading-relaxed",children:"email"===e?"Sign in to access your personalized dashboard":(0,t.jsxs)(t.Fragment,{children:["We sent a 6-digit code to"," ",(0,t.jsx)("span",{className:"text-violet-400 font-medium",children:d})]})})]}),(0,t.jsxs)("div",{className:"space-y-5",children:[(0,t.jsxs)("div",{className:`transition-all duration-500 ${"code"===e?"opacity-40 scale-[0.98] pointer-events-none":""}`,children:[(0,t.jsxs)("label",{className:"mb-3 flex items-center gap-2 text-xs font-medium text-white/50 uppercase tracking-wider",children:[(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faEnvelope,className:"text-violet-400/70"}),"Email address"]}),(0,t.jsxs)("div",{className:"input-wrapper relative group",children:[(0,t.jsx)("div",{className:"input-glow"}),(0,t.jsx)("input",{type:"email",className:"relative w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 text-[15px] text-white placeholder-white/25 outline-none transition-all duration-300 focus:border-transparent focus:bg-white/[0.04]",placeholder:"you@example.com",value:d,onChange:e=>c(e.target.value),onFocus:()=>k("email"),onBlur:()=>k(null),disabled:X}),H&&"email"===e&&(0,t.jsx)("div",{className:"absolute right-4 top-1/2 -translate-y-1/2",children:(0,t.jsx)("div",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"})})]})]}),"code"===e&&(0,t.jsxs)("div",{className:"animate-slide-up",children:[(0,t.jsxs)("label",{className:"mb-3 flex items-center gap-2 text-xs font-medium text-white/50 uppercase tracking-wider",children:[(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faKey,className:"text-cyan-400/70"}),"Verification code"]}),(0,t.jsx)("div",{className:"flex gap-2 justify-center",onPaste:e=>{e.preventDefault();let t=e.clipboardData.getData("text").replace(/\D/g,"").slice(0,6),a=[...C];for(let e=0;e<6;e++)a[e]=t[e]||"";S(a),x(a.join(""))},children:C.map((e,a)=>(0,t.jsxs)("div",{className:"input-wrapper relative",children:[(0,t.jsx)("div",{className:"input-glow"}),(0,t.jsx)("input",{id:`code-input-${a}`,type:"text",inputMode:"numeric",maxLength:1,className:"code-input relative w-12 h-14 rounded-xl border border-white/[0.08] bg-white/[0.02] text-center text-xl font-medium text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-transparent focus:bg-white/[0.05]",value:e,onChange:e=>((e,t)=>{if(!/^\d*$/.test(t))return;let a=[...C];if(a[e]=t.slice(-1),S(a),x(a.join("")),t&&e<5){let t=document.getElementById(`code-input-${e+1}`);t?.focus()}})(a,e.target.value),onKeyDown:e=>((e,t)=>{if("Backspace"===t.key&&!C[e]&&e>0){let t=document.getElementById(`code-input-${e-1}`);t?.focus()}})(a,e),disabled:u||b,autoFocus:0===a})]},a))}),(0,t.jsxs)("p",{className:"mt-3 text-center text-xs text-white/30",children:["Code expires in ",(0,t.jsx)("span",{className:"text-violet-400",children:"4:59"})]})]}),v&&(0,t.jsxs)("div",{className:`animate-slide-up rounded-xl px-5 py-4 text-sm flex items-center gap-3 ${"success"===v.type?"border border-emerald-500/20 bg-emerald-500/10 text-emerald-300":"border border-rose-500/20 bg-rose-500/10 text-rose-300"}`,children:[(0,t.jsx)(i.FontAwesomeIcon,{icon:"success"===v.type?r.faCircleCheck:r.faCircleQuestion,className:"success"===v.type?"text-emerald-400":"text-rose-400"}),v.text]}),"email"===e?(0,t.jsx)("button",{className:"btn-primary group relative w-full rounded-xl px-5 py-4 text-sm font-medium text-white shadow-xl shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100",disabled:!H||X,onClick:P,children:(0,t.jsx)("span",{className:"relative flex items-center justify-center gap-3",children:u?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Sending code..."]}):(0,t.jsxs)(t.Fragment,{children:["Continue",(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faArrowRight,className:"text-xs transition-transform duration-300 group-hover:translate-x-1"})]})})}):(0,t.jsx)("button",{className:"btn-success group relative w-full rounded-xl px-5 py-4 text-sm font-medium text-white shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100",disabled:Y,onClick:W,children:(0,t.jsx)("span",{className:"relative flex items-center justify-center gap-3",children:u?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Verifying..."]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faFingerprint,className:"text-sm"}),"Sign in",(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faArrowRight,className:"text-xs transition-transform duration-300 group-hover:translate-x-1"})]})})})]}),(0,t.jsxs)("div",{className:"mt-8 flex items-center justify-between",children:["code"===e?(0,t.jsxs)("button",{onClick:()=>{l("email"),x(""),S(["","","","","",""]),w(null)},className:"group flex items-center gap-2 text-xs text-white/40 transition-all duration-300 hover:text-white/80",disabled:b,children:[(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faChevronLeft,className:"text-xs transition-transform duration-300 group-hover:-translate-x-1"}),"Change email"]}):(0,t.jsx)("div",{}),(0,t.jsxs)("button",{className:"group flex items-center gap-2 text-xs text-white/40 transition-all duration-300 hover:text-white/80",disabled:b,children:[(0,t.jsx)(i.FontAwesomeIcon,{icon:r.faCircleQuestion,className:"text-xs"}),"Need help?"]})]})]})]})]}),(0,t.jsxs)("p",{className:`mt-6 text-center text-xs text-white/20 ${y?"animate-slide-up stagger-5":"opacity-0"}`,children:["By continuing, you agree to our"," ",(0,t.jsx)("span",{className:"text-violet-400/60 hover:text-violet-400 cursor-pointer transition-colors",children:"Terms"})," ","and"," ",(0,t.jsx)("span",{className:"text-violet-400/60 hover:text-violet-400 cursor-pointer transition-colors",children:"Privacy Policy"})]})]})]})]})}function d(){return(0,t.jsx)("div",{className:"horizon-bg text-white",children:(0,t.jsx)("div",{className:"flex min-h-screen items-center justify-center",children:(0,t.jsx)("div",{className:"w-12 h-12 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin"})})})}function c(){return(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)(d,{}),children:(0,t.jsx)(l,{})})}e.s(["default",()=>c])}]);