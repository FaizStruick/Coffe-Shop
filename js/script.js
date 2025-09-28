// === Weather Widget Real-time & Interaktif ===
// Ganti 'YOUR_API_KEY' dengan API key OpenWeatherMap milik Anda
const WEATHER_API_KEY = 'YOUR_API_KEY';
const WEATHER_CITY = 'Bandung';
const weatherWidget = document.getElementById('weather-widget');
if (weatherWidget && WEATHER_API_KEY !== 'YOUR_API_KEY') {
  weatherWidget.style.opacity = '0.5';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${WEATHER_CITY}&appid=${WEATHER_API_KEY}&units=metric&lang=id`)
    .then(res => res.json())
    .then(data => {
      if (data && data.weather && data.weather[0]) {
        const icon = data.weather[0].icon;
        const desc = data.weather[0].description;
        const temp = Math.round(data.main.temp);
        weatherWidget.innerHTML = `
          <img src='https://openweathermap.org/img/wn/${icon}@2x.png' alt='${desc}' style='width:2.2rem;vertical-align:middle;'>
          <div><strong>${WEATHER_CITY}</strong><br>${desc.charAt(0).toUpperCase() + desc.slice(1)}, ${temp}°C</div>
        `;
        weatherWidget.classList.add('weather-fade-in');
        setTimeout(() => weatherWidget.style.opacity = '0.92', 300);
      }
    })
    .catch(() => {
      weatherWidget.innerHTML = `<span style='font-size:1.7rem;'>☁️</span><div><strong>${WEATHER_CITY}</strong><br>Cuaca tidak tersedia</div>`;
      weatherWidget.style.opacity = '0.92';
    });
  // Hover effect interaktif
  weatherWidget.addEventListener('mouseenter', () => {
    weatherWidget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.18)';
    weatherWidget.style.transform = 'scale(1.04)';
  });
  weatherWidget.addEventListener('mouseleave', () => {
    weatherWidget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.13)';
    weatherWidget.style.transform = 'scale(1)';
  });
}
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
      // Produk dan jumlah dari checkbox
      let produkList = [];
      document.querySelectorAll('.product-selection input[type="checkbox"]:checked').forEach(cb => {
        const prod = cb.value;
        const qty = cb.nextElementSibling.value || 1;
        produkList.push(`${prod} (${qty})`);
      });
      const produk = produkList.join(', ');
      const catatan = document.getElementById("catatan").value;

      const pesan = `Halo, saya ingin melakukan pemesanan kopi.\n\nNama: ${nama}\nEmail: ${email}\nProduk: ${produk}\nCatatan: ${catatan || '-'}\n\nMohon tunggu informasi lebih lanjut. Terima kasih!`;

      const noTujuan = "6281382770650";
      const urlWa = `https://wa.me/${noTujuan}?text=${encodeURIComponent(pesan)}`;
      window.open(urlWa, '_blank');
      if (typeof showToast === 'function') showToast('Pesanan berhasil dikirim ke WhatsApp!');
      // Reset form setelah submit
      e.target.reset();
      // Disable semua input jumlah
      document.querySelectorAll('.product-selection input[type="number"]').forEach(inp => {
        inp.disabled = true;
      });
    });

// Pilih pesanan
  const checkboxes = document.querySelectorAll('.product-selection input[type="checkbox"]');


  // Kalkulator harga otomatis
  function updateTotalHarga() {
    let total = 0;
    document.querySelectorAll('.product-selection label').forEach(label => {
      const cb = label.querySelector('input[type="checkbox"]');
      const qtyInput = label.querySelector('input[type="number"]');
      const harga = parseInt(cb.getAttribute('data-harga')) || 0;
      const qty = cb.checked ? (parseInt(qtyInput.value) || 1) : 0;
      if (cb.checked) total += harga * qty;
    });
    document.getElementById('total-harga').textContent = total > 0 ? 'Rp' + total.toLocaleString('id-ID') : 'Rp0';
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', function() {
      const qtyInput = this.nextElementSibling;
      qtyInput.disabled = !this.checked;
      if (!this.checked) qtyInput.value = '';
      updateTotalHarga();
    });
  });
  document.querySelectorAll('.product-selection input[type="number"]').forEach(inp => {
    inp.addEventListener('input', updateTotalHarga);
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




