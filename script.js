const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const lastBtn = document.getElementById("lastBtn");
const restartBtn = document.getElementById("restartBtn");

const typing = document.getElementById("typing");

const message = `Happy Birthday Sayang ❤️

Hari ini adalah hari yang spesial.

Semoga semua impianmu tercapai.

Semoga kamu selalu sehat,
selalu bahagia,
dan selalu dikelilingi orang-orang yang menyayangimu.

Terima kasih sudah hadir di hidupku.

Aku bersyukur bisa mengenalmu.

I Love You Forever ❤️`;

function showPage(page){

    document.querySelectorAll(".page").forEach(item=>{
        item.classList.remove("active");
    });

    page.classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

function typeWriter(){

    typing.innerHTML="";

    let i=0;

    function typingEffect(){

        if(i<message.length){

            typing.innerHTML += message.charAt(i);

            i++;

            setTimeout(typingEffect,35);

        }

    }

    typingEffect();

}

openBtn.addEventListener("click",()=>{

    showPage(page2);

    setTimeout(typeWriter,500);

});

nextBtn.addEventListener("click",()=>{

    showPage(page3);

});

lastBtn.addEventListener("click",()=>{

    showPage(page4);

});

restartBtn.addEventListener("click",()=>{

    showPage(page1);

});
