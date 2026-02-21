// Mengambil elemen hamburger dan menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Fungsi saat hamburger diklik
hamburger.addEventListener('click', () => {
    // Membuka/menutup menu
    navLinks.classList.toggle('active');

    // Menjalankan animasi menjadi "X"
    hamburger.classList.toggle('toggle-active');
});

// Menutup menu saat salah satu link diklik (opsional agar lebih user-friendly)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle-active');
    });
});