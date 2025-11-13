# Merchandise Modular System

## Overview
This system implements a modular approach for displaying merchandise items with dynamic card rendering and individual detail pages.

## File Structure

```
├── pages/
│   ├── merch.html              # Main merchandise listing page
│   └── merch-detail.html       # Individual product detail page
├── components/
│   └── merch-card.html         # Card component template (reference)
├── js/
│   └── merch-data.js           # Centralized merchandise data & rendering functions
└── css/
    └── style.css               # Additional styles for cards and detail page
```

## How It Works

### 1. Data Management (`merch-data.js`)

All merchandise data is stored in a central JavaScript file. Each product has:
- Basic info: id, name, description, price
- Detailed info: detailedDescription, features, stock
- Optional fields: colors, roastLevels, includes, specifications

**Functions:**
- `getMerchandiseById(id)` - Get single product by ID
- `getAllMerchandise()` - Get all products
- `renderMerchandiseCards(containerId)` - Dynamically render all cards

### 2. Merchandise Listing Page (`merch.html`)

- Uses a container div: `<div id="merchandise-container">`
- Cards are rendered dynamically via `renderMerchandiseCards()`
- Each card links to detail page with product ID: `merch-detail.html?id=1`

### 3. Product Detail Page (`merch-detail.html`)

- Reads product ID from URL query parameter
- Fetches product data using `getMerchandiseById()`
- Dynamically renders:
  - Product image and info
  - Features list
  - Package contents (if applicable)
  - Action buttons (WhatsApp order)
  - Related products

### 4. Card Component (`merch-card.html`)

Template reference showing the structure of a merchandise card. The actual rendering is done via JavaScript for better performance and maintainability.

## Adding New Products

Simply add a new object to the `merchandiseItems` array in `merch-data.js`:

```javascript
{
    id: 7,
    name: "Your Product Name",
    description: "Short description",
    price: "IDR 100K",
    priceNum: 100000,
    image: "image-url",
    category: "Category",
    detailedDescription: "Detailed description for product page",
    features: [
        "Feature 1",
        "Feature 2"
    ],
    stock: 25
}
```

The new product will automatically appear on the listing page and have its own detail page.

## Customization

### Changing Card Layout
Edit the template string in the `renderMerchandiseCards()` function in `merch-data.js`.

### Modifying Detail Page
Edit the template string in the `renderProductDetail()` function in `merch-detail.html`.

### Styling
Update classes in the template strings or add custom CSS in `style.css`.

## Benefits of This Approach

1. **Single Source of Truth**: All product data in one place
2. **Easy Maintenance**: Add/edit products by changing data only
3. **Consistent Design**: All cards use the same template
4. **SEO Friendly**: Each product has its own URL
5. **Scalable**: Easy to add filtering, search, or pagination later

## Future Enhancements

- Add category filtering
- Implement search functionality
- Add shopping cart
- Include product image gallery
- Add customer reviews section
- Implement inventory management
