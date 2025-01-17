const data = [
    {
      "shopId": "shop001",
      "shopName": "TechGear",
      "location": { "latitude": 37.7749, "longitude": -122.4194 },
      "contact": "techgear@example.com",
      "profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHqfGsSoDQ5HT1zzfSCRkJejksCrZfi_0cA&s",
      "coverImage": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstockcake.com%2Fi%2Ftech-store-interior_124736_13599&psig=AOvVaw23Cy5aSN6JHNw3CjThJAi0&ust=1737231263197000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj79_TI_YoDFQAAAAAdAAAAABAE",
      "items": [
        { "itemId": "item001", "name": "Laptop", "price": 1200, "quantity": 20, "image": "https://example.com/images/products/laptop.jpg" },
        { "itemId": "item002", "name": "Smartphone", "price": 800, "quantity": 50, "image": "https://example.com/images/products/smartphone.jpg" }
      ]
    },
    {
      "shopId": "shop002",
      "shopName": "HomeEssentials",
      "location": { "latitude": 34.0522, "longitude": -118.2437 },
      "contact": "homeessentials@example.com",
      "profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHqfGsSoDQ5HT1zzfSCRkJejksCrZfi_0cA&s",
      "coverImage": "https://example.com/images/shops/homeessentials-cover.jpg",
      "items": [
        { "itemId": "item003", "name": "Blender", "price": 100, "quantity": 30, "image": "https://example.com/images/products/blender.jpg" },
        { "itemId": "item004", "name": "Vacuum Cleaner", "price": 200, "quantity": 15, "image": "https://example.com/images/products/vacuum-cleaner.jpg" }
      ]
    },
    {
      "shopId": "shop003",
      "shopName": "GroceryMart",
      "location": { "latitude": 40.7128, "longitude": -74.0060 },
      "contact": "grocerymart@example.com",
      "profileImage": "https://gourmetpakistan.com/gourmet/compressed/logos/g-foods.webp",
      "coverImage": "https://gourmetpakistan.com/gourmet/compressed/logos/g-foods.webp",
      "items": [
        { "itemId": "item005", "name": "Apples (1kg)", "price": 3, "quantity": 100, "image": "https://example.com/images/products/apples.jpg" },
        { "itemId": "item006", "name": "Milk (1L)", "price": 2, "quantity": 200, "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg" }
      ]
    },
    {
      "shopId": "shop004",
      "shopName": "FashionHub",
      "location": { "latitude": 51.5074, "longitude": -0.1278 },
      "contact": "fashionhub@example.com",
      "profileImage": "https://example.com/images/shops/fashionhub-profile.jpg",
      "coverImage": "https://example.com/images/shops/fashionhub-cover.jpg",
      "items": [
        { "itemId": "item007", "name": "T-shirt", "price": 20, "quantity": 300, "image": "https://example.com/images/products/tshirt.jpg" },
        { "itemId": "item008", "name": "Jeans", "price": 50, "quantity": 150, "image": "https://example.com/images/products/jeans.jpg" }
      ]
    },
    {
      "shopId": "shop005",
      "shopName": "BookBarn",
      "location": { "latitude": 48.8566, "longitude": 2.3522 },
      "contact": "bookbarn@example.com",
      "profileImage": "https://example.com/images/shops/bookbarn-profile.jpg",
      "coverImage": "https://example.com/images/shops/bookbarn-cover.jpg",
      "items": [
        { "itemId": "item009", "name": "Mystery Novel", "price": 15, "quantity": 100, "image": "https://example.com/images/products/novel.jpg" },
        { "itemId": "item010", "name": "Cookbook", "price": 25, "quantity": 60, "image": "https://example.com/images/products/cookbook.jpg" }
      ]
    },
    {
      "shopId": "shop006",
      "shopName": "FitnessPro",
      "location": { "latitude": 35.6895, "longitude": 139.6917 },
      "contact": "fitnesspro@example.com",
      "profileImage": "https://example.com/images/shops/fitnesspro-profile.jpg",
      "coverImage": "https://example.com/images/shops/fitnesspro-cover.jpg",
      "items": [
        { "itemId": "item011", "name": "Yoga Mat", "price": 30, "quantity": 50, "image": "https://example.com/images/products/yoga-mat.jpg" },
        { "itemId": "item012", "name": "Dumbbells", "price": 60, "quantity": 25, "image": "https://example.com/images/products/dumbbells.jpg" }
      ]
    },
    {
      "shopId": "shop007",
      "shopName": "PetWorld",
      "location": { "latitude": 41.9028, "longitude": 12.4964 },
      "contact": "petworld@example.com",
      "profileImage": "https://example.com/images/shops/petworld-profile.jpg",
      "coverImage": "https://example.com/images/shops/petworld-cover.jpg",
      "items": [
        { "itemId": "item013", "name": "Dog Food", "price": 20, "quantity": 200, "image": "https://example.com/images/products/dog-food.jpg" },
        { "itemId": "item014", "name": "Cat Toy", "price": 10, "quantity": 300, "image": "https://example.com/images/products/cat-toy.jpg" }
      ]
    },
    {
      "shopId": "shop008",
      "shopName": "BeautyBay",
      "location": { "latitude": 52.5200, "longitude": 13.4050 },
      "contact": "beautybay@example.com",
      "profileImage": "https://example.com/images/shops/beautybay-profile.jpg",
      "coverImage": "https://example.com/images/shops/beautybay-cover.jpg",
      "items": [
        { "itemId": "item015", "name": "Lipstick", "price": 15, "quantity": 100, "image": "https://example.com/images/products/lipstick.jpg" },
        { "itemId": "item016", "name": "Foundation", "price": 30, "quantity": 80, "image": "https://example.com/images/products/foundation.jpg" }
      ]
    },
    {
      "shopId": "shop009",
      "shopName": "GadgetZone",
      "location": { "latitude": 19.0760, "longitude": 72.8777 },
      "contact": "gadgetzone@example.com",
      "profileImage": "https://example.com/images/shops/gadgetzone-profile.jpg",
      "coverImage": "https://example.com/images/shops/gadgetzone-cover.jpg",
      "items": [
        { "itemId": "item017", "name": "Smartwatch", "price": 250, "quantity": 60, "image": "https://example.com/images/products/smartwatch.jpg" },
        { "itemId": "item018", "name": "Tablet", "price": 300, "quantity": 40, "image": "https://example.com/images/products/tablet.jpg" }
      ]
    },
    {
      "shopId": "shop010",
      "shopName": "OutdoorStore",
      "location": { "latitude": -33.8688, "longitude": 151.2093 },
      "contact": "outdoorstore@example.com",
      "profileImage": "https://example.com/images/shops/outdoorstore-profile.jpg",
      "coverImage": "https://example.com/images/shops/outdoorstore-cover.jpg",
      "items": [
        { "itemId": "item019", "name": "Tent", "price": 150, "quantity": 30, "image": "https://example.com/images/products/tent.jpg" },
        { "itemId": "item020", "name": "Sleeping Bag", "price": 80, "quantity": 50, "image": "https://example.com/images/products/sleeping-bag.jpg" }
      ]
    },
    {
      "shopId": "shop011",
      "shopName": "Toyland",
      "location": { "latitude": 55.7558, "longitude": 37.6173 },
      "contact": "toyland@example.com",
      "profileImage": "https://example.com/images/shops/toyland-profile.jpg",
      "coverImage": "https://example.com/images/shops/toyland-cover.jpg",
      "items": [
        { "itemId": "item021", "name": "Teddy Bear", "price": 25, "quantity": 100, "image": "https://example.com/images/products/teddy-bear.jpg" },
        { "itemId": "item022", "name": "Building Blocks", "price": 40, "quantity": 70, "image": "https://example.com/images/products/blocks.jpg" }
      ]
    },
    {
      "shopId": "shop012",
      "shopName": "EcoMart",
      "location": { "latitude": 59.3293, "longitude": 18.0686 },
      "contact": "ecomart@example.com",
      "profileImage": "https://example.com/images/shops/ecomart-profile.jpg",
      "coverImage": "https://example.com/images/shops/ecomart-cover.jpg",
      "items": [
        { "itemId": "item023", "name": "Reusable Water Bottle", "price": 15, "quantity": 150, "image": "https://example.com/images/products/water-bottle.jpg" },
        { "itemId": "item024", "name": "Bamboo Cutlery Set", "price": 12, "quantity": 200, "image": "https://example.com/images/products/cutlery-set.jpg" }
      ]
    }
  ]
  