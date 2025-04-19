document.addEventListener('DOMContentLoaded', function () {
    function updateJumlahKeranjang() {
        const keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
        const badge = document.getElementById('jumlahKeranjang');
        if (badge) {
            badge.textContent = keranjang.length;
        }
    }

    // Fungsi tambah ke keranjang
    window.masukkanKeranjang = function(namaProduk, harga) {
        const produk = { nama: namaProduk, harga: harga };
        let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

        keranjang.push(produk);
        localStorage.setItem('keranjang', JSON.stringify(keranjang));

        alert(`${namaProduk} telah ditambahkan ke keranjang!`);
        updateJumlahKeranjang();
    }

    // Fungsi pesan sekarang
    window.pesanSekarang = function(namaProduk, harga) {
        const produk = { nama: namaProduk, harga: harga };
        let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

        keranjang.push(produk);
        localStorage.setItem('keranjang', JSON.stringify(keranjang));

        sessionStorage.setItem('produkTerakhir', JSON.stringify(produk));
        updateJumlahKeranjang();

        window.location.href = "pesan.html";
    }

    // Inisialisasi jumlah keranjang
    updateJumlahKeranjang();
});
