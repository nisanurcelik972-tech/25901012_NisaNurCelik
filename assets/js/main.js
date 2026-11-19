// Sayfadaki öğeleri seçiyoruz
const form = document.querySelector("#iletisim-formu"); // iletişim formunu bulur
const mesajAlani = document.querySelector("#mesaj-alani"); // uyarı ve teşekkür yazısının yazılacağı p etiketini bulur
const adAlani = document.querySelector("#adsoyad"); // ad soyad giriş alanını bulur
const epostaAlani = document.querySelector("#eposta"); // e-posta giriş alanını bulur
const metinAlani = document.querySelector("#mesaj"); // mesaj kutusunu bulur
const temaDugmesi = document.querySelector("#tema-dugmesi"); // tema düğmesini bulur
const govde = document.body; // body etiketini değişkene koyar

// Form gönderilince çalışacak kontrol fonksiyonu
function formuKontrolEt(olay) { // olay: gönderim olayının bilgilerini taşır
  olay.preventDefault(); // formun gönderilmesini ve sayfanın yenilenmesini engeller
  const ad = adAlani.value.trim(); // ad soyadı alır ve baştaki sondaki boşlukları siler
  const eposta = epostaAlani.value.trim(); // e-postayı alır ve boşlukları siler
  const metin = metinAlani.value.trim(); // mesajı alır ve boşlukları siler

  if (ad === "" || eposta === "" || metin === "") { // alanlardan biri boşsa
    mesajAlani.textContent = "Lütfen tüm alanları doldurun."; // uyarıyı sayfadaki p etiketine yazar
    mesajAlani.className = "hata"; // yazıyı kırmızı (hata) görünümüne getirir
    return; // fonksiyonu burada bitirir, aşağıdakiler çalışmaz
  }

  if (!eposta.includes("@")) { // e-postada @ işareti yoksa
    mesajAlani.textContent = "Geçerli bir e-posta yazın."; // e-posta uyarısını p etiketine yazar
    mesajAlani.className = "hata"; // yazıyı hata görünümüne getirir
    return; // fonksiyonu burada bitirir
  }

  mesajAlani.textContent = "Teşekkürler, " + ad + ", mesajınız alındı."; // ad soyadı içeren teşekkür mesajını yazar
  mesajAlani.className = "basari"; // yazıyı başarı (yeşil) görünümüne getirir
  form.reset(); // form alanlarını temizler
}

// Tema düğmesine basılınca çalışacak fonksiyon
function temaDegistir() { // koyu ve açık tema arasında geçiş yapar
  govde.classList.toggle("koyu-tema"); // koyu-tema sınıfını varsa kaldırır, yoksa ekler

  if (govde.classList.contains("koyu-tema")) { // koyu tema şu an açıksa
    temaDugmesi.textContent = "Açık tema"; // düğme yazısını Açık tema yapar
  } else { // koyu tema kapalıysa
    temaDugmesi.textContent = "Koyu tema"; // düğme yazısını Koyu tema yapar
  }
}

// Olayları fonksiyonlara bağlıyoruz
form.addEventListener("submit", formuKontrolEt); // form gönderilince formuKontrolEt çalışır
temaDugmesi.addEventListener("click", temaDegistir); // düğmeye tıklanınca temaDegistir çalışır
