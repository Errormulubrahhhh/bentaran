// Merchandise data
const merchandiseItems = [
    {
        id: 1,
        name: "Topi INDICAKOPI",
        description: "Topi eksklusif logo INDICAKOPI. 100% katun premium.",
        price: "IDR 150K",
        priceNum: 150000,
        image: "../img/merch/topi.jpg",
        images: ["../img/merch/topi.jpg", "../img/merch/topi.jpg", "../img/merch/topi.jpg"],
        category: "Apparel",
        detailedDescription: "Topi premium dengan bahan 100% katun combed 30s yang lembut dan nyaman. Desain minimalis dengan logo INDICAKOPI berkualitas tinggi menggunakan teknik sablon DTG (Direct to Garment) yang tahan lama. Tersedia dalam berbagai ukuran all size.",
        features: [
            "Bahan 100% katun combed 30s",
            "Sablon DTG tahan lama",
            "Jahitan rapi dan kuat",
            "Ukuran: all size",
            "Nyaman untuk aktivitas sehari-hari"
        ],
        stock: 50,
        colors: ["Hitam", "Putih", "Abu-abu"]
    },
    {
        id: 2,
        name: "Coffee Bean Mandailing",
        description: "Biji kopi pilihan INDICAKOPI, fresh roasted. Kemasan 250gr dengan valve degassing.",
        price: "IDR 200K",
        priceNum: 200000,
        image: "../img/merch/mandailing.jpg",
        images: ["../img/merch/mandailing.jpg", "../img/merch/mandailing.jpg", "../img/merch/mandailing.jpg"],
        category: "Accessories",
        detailedDescription: "masukkin deskripsinya bang.",
        features: [
            "100% Arabica beans",
            "Fresh roasted",
            "Kemasan 250gr",
            "One-way valve degassing",
            "Pilihan roast: Light, Medium, Dark",
            "Sourced dari petani lokal"
        ],
        stock: 30,
        roastLevels: ["Light Roast", "Medium Roast", "Dark Roast"]
    },
    {
        id: 3,
        name: "Coffee Bean Ijen Raung ",
        description: "Biji kopi pilihan INDICAKOPI, fresh roasted. Kemasan 250gr dengan valve degassing.",
        price: "IDR 125K",
        priceNum: 125000,
        image: "../img/merch/ijenraung.jpg",
        images: ["../img/merch/ijenraung.jpg", "../img/merch/ijenraung.jpg", "../img/merch/ijenraung.jpg"],
        category: "Coffee",
        detailedDescription: "Biji kopi arabica pilihan dari perkebunan terbaik Indonesia. Di-roast fresh sesuai pesanan untuk menjaga kesegaran dan aroma. Kemasan aluminium foil dengan valve degassing untuk menjaga kualitas biji kopi. Tersedia dalam berbagai tingkat roasting sesuai selera Anda.",
        features: [
            "100% Arabica beans",
            "Fresh roasted",
            "Kemasan 250gr",
            "One-way valve degassing",
            "Pilihan roast: Light, Medium, Dark",
            "Sourced dari petani lokal"
        ],
        stock: 100,
        roastLevels: ["Light Roast", "Medium Roast", "Dark Roast"]
    },
    {
        id: 4,
        name: "Coffee Dripper Set",
        description: "Set lengkap untuk manual brewing, termasuk dripper, filter, dan gelas ukur.",
        price: "IDR 350K",
        priceNum: 350000,
        image: "../img/merch/dripper.jpg",
        images: ["../img/merch/dripper.jpg", "../img/merch/dripper.jpg", "../img/merch/dripper.jpg"],
        category: "Equipment",
        detailedDescription: "Set lengkap untuk para pecinta manual brewing. Termasuk ceramic dripper V60 berkualitas tinggi, 100 lembar paper filter, gelas ukur heat-resistant, dan coffee scoop. Sempurna untuk mengekstrak cita rasa terbaik dari biji kopi pilihan Anda.",
        features: [
            "Ceramic V60 dripper",
            "100 paper filter included",
            "Heat-resistant glass server 600ml",
            "Stainless steel coffee scoop",
            "User guide manual brewing",
            "Gift box packaging"
        ],
        stock: 20,
        includes: ["V60 Dripper", "Paper Filter (100pcs)", "Glass Server", "Coffee Scoop", "Manual Guide"]
    },
    {
        id: 5,
        name: "Coffee Bean Bali Kintamani",
        description: "Timbangan digital presisi tinggi untuk brewing kopi. Akurasi 0.1g dengan timer.",
        price: "IDR 450K",
        priceNum: 450000,
        image: "../img/merch/kintamani.jpg",
        images: ["../img/merch/kintamani.jpg", "../img/merch/kintamani.jpg", "../img/merch/kintamani.jpg"],
        category: "Equipment",
        detailedDescription: "Timbangan digital presisi tinggi yang dirancang khusus untuk brewing kopi. Dilengkapi dengan timer terintegrasi untuk membantu Anda mendapatkan ekstraksi yang sempurna. Akurasi hingga 0.1 gram dengan kapasitas maksimal 2kg. LCD display yang mudah dibaca dan platform tahan air.",
        features: [
            "Akurasi 0.1g",
            "Kapasitas max 2000g",
            "Built-in timer",
            "LCD backlit display",
            "Water-resistant platform",
            "Auto-off function",
            "Rechargeable battery"
        ],
        stock: 15,
        specifications: {
            accuracy: "0.1g",
            maxWeight: "2000g",
            battery: "Rechargeable Li-ion",
            dimensions: "15cm x 13cm x 2cm"
        }
    },
    {
        id: 6,
        name: "Coffee Gift Set",
        description: "Paket hadiah eksklusif berisi biji kopi, tumbler, dan merchandise INDICAKOPI.",
        price: "IDR 500K",
        priceNum: 500000,
        image: "https://via.placeholder.com/400x300",
        images: ["https://via.placeholder.com/400x300", "https://via.placeholder.com/400x300", "https://via.placeholder.com/400x300"],
        category: "Bundle",
        detailedDescription: "Paket hadiah sempurna untuk para pecinta kopi. Berisi kombinasi produk terbaik INDICAKOPI dalam kemasan gift box premium. Cocok untuk hadiah special occasions atau untuk memanjakan diri sendiri dengan pengalaman kopi yang lengkap.",
        features: [
            "Premium gift box packaging",
            "Coffee Bean Pack 250gr",
            "Tumbler INDICAKOPI 500ml",
            "T-Shirt INDICAKOPI",
            "Coffee scoop & clip",
            "Kartu ucapan personal",
            "Hemat hingga 100K"
        ],
        stock: 25,
        includes: ["Coffee Beans 250gr", "Tumbler 500ml", "T-Shirt (pilih ukuran)", "Accessories", "Gift Card"]
    }
];

// Function to get merchandise by ID
function getMerchandiseById(id) {
    return merchandiseItems.find(item => item.id === parseInt(id));
}

// Function to get all merchandise
function getAllMerchandise() {
    return merchandiseItems;
}

// Function to render merchandise cards
function renderMerchandiseCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = merchandiseItems.map(item => `
        <div class="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <img src="${item.image}" alt="${item.name}" class="w-full h-64 object-cover">
            <div class="p-6">
                <h3 class="text-white text-xl font-semibold mb-2">${item.name}</h3>
                <p class="text-gray-400 mb-4">${item.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-[#5d5d5d] text-xl font-bold">${item.price}</span>
                    <a href="merch-detail.html?id=${item.id}" class="bg-[#5d5d5d] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#9a7349] transition duration-300">Lihat Detail</a>
                </div>
            </div>
        </div>
    `).join('');
}