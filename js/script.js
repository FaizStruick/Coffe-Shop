//Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di tempat lain
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// Contact Pesanan
    document.getElementById("form-wa").addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil nilai input dari form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const produk = document.getElementById("produk").value;
    const jumlah = document.getElementById("jumlah").value;
    const catatan = document.getElementById("catatan").value;

    const pesan = `Halo, saya ingin melakukan pemesanan kopi.

  Nama: ${nama}
  Email: ${email}
  Produk: ${produk}
  Jumlah: ${jumlah}
  Catatan: ${catatan || '-'}

  Mohon tunggu informasi lebih lanjut. Terima kasih!`;

    const noTujuan = "6281382770650";

    const urlWa = `https://wa.me/${noTujuan}?text=${encodeURIComponent(pesan)}`;
    window.open(urlWa, '_blank');
  });

// Pilih pesanan
  const checkboxes = document.querySelectorAll('.product-selection input[type="checkbox"]');

  checkboxes.forEach(cb => {
    cb.addEventListener('change', function() {
      const qtyInput = this.nextElementSibling;
      qtyInput.disabled = !this.checked;
      if (!this.checked) qtyInput.value = '';
    });
  });


// Stats
  const counters = document.querySelectorAll('.count');
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute('data-count');
      const current = +counter.innerText;
      const increment = target / 100;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });

// Pesanan
console.log(pesan);
window.open(urlWa, '_blank');


