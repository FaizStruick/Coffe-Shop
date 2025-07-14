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

// Menu Section
document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', () => {
    alert("Detail: Matcha - Teh hijau Jepang dengan susu segar.");
  });
});

// Pesanan
console.log(pesan);
window.open(urlWa, '_blank');


