const initToasty = () => {
  const style = document.createElement('style');
  style.innerHTML = '.toasty-08041995{position:fixed;right:20px;bottom:-50px;' +
    'background-color:black;padding:12px 24px 17px 24px;vertical-align:midd' +
    'le;color:#fff;box-shadow:0 7px 18px rgba(0,0,0,.2);border-radius:3px;fon' +
    't-family:"Trebuchet MS",Helvetica,sans-serif;opacity:.8}.show-toasty-080' +
    '41995-0{-webkit-animation:peek 5s forwards;-webkit-animation-delay:.5s;a' +
    'nimation:show-toasty-08041995-0 5s forwards;animation-delay:.5s}@keyfram' +
    'es show-toasty-08041995-0{10%{bottom:20px}90%{bottom:20px}100%{bottom:-1' +
    '00px}}.show-toasty-08041995-1{-webkit-animation:peek 5s forwards;-webkit' +
    '-animation-delay:.5s;animation:show-toasty-08041995-1 5s forwards;animat' +
    'ion-delay:.5s}@keyframes show-toasty-08041995-1{10%{bottom:80px}90%{bott' +
    'om:80px}100%{bottom:-100px}}.show-toasty-08041995-2{-webkit-animation:pe' +
    'ek 5s forwards;-webkit-animation-delay:.5s;animation:show-toasty-0804199' +
    '5-2 5s forwards;animation-delay:.5s}@keyframes show-toasty-08041995-2{10' +
    '%{bottom:140px}90%{bottom:140px}100%{bottom:-100px}}.show-toasty-0804199' +
    '5-3{-webkit-animation:peek 5s forwards;-webkit-animation-delay:.5s;anima' +
    'tion:show-toasty-08041995-3 5s forwards;animation-delay:.5s}@keyframes s' +
    'how-toasty-08041995-3{10%{bottom:200px}90%{bottom:200px}100%{bottom:-100' +
    'px}}.show-toasty-08041995-4{-webkit-animation:peek 5s forwards;-webkit-a' +
    'nimation-delay:.5s;animation:show-toasty-08041995-4 5s forwards;animatio' +
    'n-delay:.5s}@keyframes show-toasty-08041995-4{10%{bottom:260px}90%{botto' +
    'm:260px}100%{bottom:-100px}}';
  document.head.appendChild(style);
}

initToasty();
