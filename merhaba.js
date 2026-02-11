// 1. Senaryo: Açılış Animasyonu
window.onload = function() {
    let mesaj = document.getElementById("mesaj");
    let konteynir = document.getElementById("ana-konteynir");
    let formAlani = document.getElementById("form-alani");

    // 2. saniye: Yazı değişsin
    setTimeout(() => {
        mesaj.innerHTML = "We’re back, bitches.";
        mesaj.style.color = "#007bff";
    }, 2000);

    // 4. saniye: Yukarı kay ve Kayıt Formunu Göster
    setTimeout(() => {
        konteynir.classList.add("yukari-kay");
        formAlani.classList.remove("gizli");
        formAlani.classList.add("gorunur");
    }, 2000);
}

// 2. Mantık: Kayıt Olma (Veriyi JS ile tutma)
let kaydedilenIsim = ""; 

function kaydet() {
    let input = document.getElementById("kullanici-ad");
    kaydedilenIsim = input.value;

    if(kaydedilenIsim === "") {
        alert("Bir isim yazmalısın Skaikru!");
    } else {
        // Kayıt formunu gizle, giriş (selamlama) kısmını göster
        document.getElementById("kayit-formu").classList.add("gizli");
        document.getElementById("giris-formu").classList.remove("gizli");
        document.getElementById("giris-formu").classList.add("gorunur");
        document.getElementById("selamlama").innerHTML = "Hoş geldin, " + kaydedilenIsim + ". Dünya seni bekliyor.";
    }
}
function dunyayaIn() {
    // Sayfanın kendi kendine yenilenmesini durdurmak için
    console.log("Sistem: İniş başlatıldı...");

    // Hedef dosya ismini bir değişkene atayalım (Daha profesyonel)
    let hedef = "anasayfa.html";

    // Önce beyaz ekran efektini dene
    document.body.style.backgroundColor = "white";
    document.body.style.transition = "2s";

    // 1 saniye bekle ve git
    setTimeout(function() {
        console.log("Işınlanılıyor: " + hedef);
        window.location.href = hedef; 
    }, 1000);
}



// Saati sağ üstte canlı tutma
setInterval(() => {
    const saatAlani = document.getElementById("canli-saat");
    if(saatAlani) {
        saatAlani.innerText = new Date().toLocaleTimeString();
    }
}, 1000);

// Mesaj gönderme fonksiyonu
function mesajGonder() {
    const input = document.getElementById("mesaj-input");
    const alan = document.getElementById("mesaj-alani");

    if (input.value.trim() !== "") {
        const div = document.createElement("div");
        div.className = "mesaj-balonu";
        // Kullanıcı adını istersen localStorage'dan çekebiliriz
        div.innerHTML = `<span style="font-size: 0.75rem; opacity: 0.6;">Skaikru:</span><br>${input.value}`;
        
        alan.appendChild(div);
        input.value = ""; // Kutuyu temizle
        alan.scrollTop = alan.scrollHeight; // Son mesaja kaydır
    }
}

// Enter tuşu desteği
document.getElementById("mesaj-input")?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") mesajGonder();
});