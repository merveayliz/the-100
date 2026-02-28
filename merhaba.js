
window.onload = function() {
    let mesaj = document.getElementById("mesaj");
    let konteynir = document.getElementById("ana-konteynir");
    let formAlani = document.getElementById("form-alani");

    setTimeout(() => {
        mesaj.innerHTML = "We’re back, bitches.";
        mesaj.style.color = "#007bff";
    }, 2000);

    
    setTimeout(() => {
        konteynir.classList.add("yukari-kay");
        formAlani.classList.remove("gizli");
        formAlani.classList.add("gorunur");
    }, 2000);
}

let kaydedilenIsim = ""; 

function kaydet() {
    let input = document.getElementById("kullanici-ad");
    kaydedilenIsim = input.value;

    if(kaydedilenIsim === "") {
        alert("Bir isim yazmalısın Skaikru!");
    } else {
       
        document.getElementById("kayit-formu").classList.add("gizli");
        document.getElementById("giris-formu").classList.remove("gizli");
        document.getElementById("giris-formu").classList.add("gorunur");
        document.getElementById("selamlama").innerHTML = "Hoş geldin, " + kaydedilenIsim + ". Dünya seni bekliyor.";
    }
}
function dunyayaIn() {
    console.log("Sistem: İniş başlatıldı...");

    let hedef = "anasayfa.html";
    
    document.body.style.backgroundColor = "white";
    
    document.body.style.transition = "2s";
    
    setTimeout(function() {
        console.log("Işınlanılıyor: " + hedef);
        window.location.href = hedef; 
    }, 1000);
}

setInterval(() => {
    const saatAlani = document.getElementById("canli-saat");
    if(saatAlani) {
        saatAlani.innerText = new Date().toLocaleTimeString();
    }
}, 1000);

function mesajGonder() {
    const input = document.getElementById("mesaj-input");
    const alan = document.getElementById("mesaj-alani");

    if (input.value.trim() !== "") {
        const div = document.createElement("div");
        div.className = "mesaj-balonu";
        div.innerHTML = `<span style="font-size: 0.75rem; opacity: 0.6;">Skaikru:</span><br>${input.value}`;
        alan.appendChild(div);
        input.value = ""; 
        alan.scrollTop = alan.scrollHeight; 
    }
}

document.getElementById("mesaj-input")?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") mesajGonder();

});
