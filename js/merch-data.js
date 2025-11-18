// Merchandise data
const merchandiseItems = [
    {
        id: 1,
        name: "Topi INDICAKOPI",
        description: "Topi premium dengan bahan Rafel daimaru Tersedia dalam ukuran all size.",
        price: "IDR 150K",
        priceNum: 150000,
        image: "../img/merch/topi.jpg",
        category: "Apparel",
        detailedDescription: "",
        features: [
            "Material: Rafel daimaru",
            "Unisex",
            "Ukuran: all size"
        ],
        stock: 50,
        colors: ["Hitam"]
    },
    {
        id: 2,
        name: "Coffee Bean Mandailing",
        description: "Biji kopi pilihan INDICAKOPI, Kemasan 250gr.",
        price: "IDR 200K",
        priceNum: 200000,
        image: "../img/merch/mandailing.jpg",
        category: "Accessories",
        detailedDescription: "",
        features: [
            "Origin: Mandailing, North Sumatra",
            "Processing Methods: Semi Wash",
            "Roast Level: Medium to Dark",
            "Flavor Notes: Chocolate, Spicy with subtle floral hints"
        ],
        stock: 30,
        roastLevels: ["Medium to dark"]
    },
    {
        id: 3,
        name: "Coffee Bean Ijen Raung ",
        description: "Biji kopi pilihan INDICAKOPI, Kemasan 250gr.",
        price: "IDR 125K",
        priceNum: 125000,
        image: "../img/merch/ijenraung.jpg",
        category: "Coffee",
        detailedDescription: "",
        features: [
            "Origin: Ijen Raung, East Java",
            "Processing Methods: Natural",
            "Roast Level: Light to Medium",
            "Flavor Notes: Jack Fruit, Brown sugar, Caramel, Overall sweetness"
        ],
        stock: 100,
        roastLevels: ["Natural"]
    },
    {
        id: 4,
        name: "Coffee Dripper Set",
        description: "Set lengkap untuk manual brewing, termasuk dripper, filter, dan gelas ukur.",
        price: "IDR 350K",
        priceNum: 350000,
        image: "../img/merch/dripper.jpg",
        category: "Equipment",
        detailedDescription: "",
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
        description: "Biji kopi pilihan INDICAKOPI, Kemasan 250gr.",
        price: "IDR 450K",
        priceNum: 450000,
        image: "../img/merch/kintamani.jpg",
        category: "Coffee",
        detailedDescription: "",
        features: [
            "Origin: Kintamani Highland, Bali",
            "Processing Methods: Full Wash",
            "Roast Level: Medium to Dark",
            "Flavor Notes Fruity (Citrus, Orange, Tropical), Floral, Caramel, Chocolate, Honey, Clean Cup"
        ],
        stock: 15,
        roastLevels: ["Natural"]
    },
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