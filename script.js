function pesan(namaProduk) {
  alert("Kamu memilih " + namaProduk);
}

document.getElementById("formKontak")?.addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let pesanan = document.getElementById("pesanan").value;

  alert("Terima kasih, " + nama + " pesanan: " + pesanan + " sudah diterima");
});
