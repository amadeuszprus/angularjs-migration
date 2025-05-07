(function () {
  "use strict";

  angular.module("productCatalog").factory("ProductService", ProductService);

  ProductService.$inject = ["$q", "$http"];

  function ProductService($q, $http) {
    var products = generateProducts();

    // Service interface
    var service = {
      getProducts: getProducts,
      getProductById: getProductById,
    };

    return service;

    // Implementation
    function getProducts() {
      return $q(function (resolve) {
        // In a real application, this would be an HTTP request
        // For this demo, we'll use a local data set of 100+ products
        resolve(products);
      });
    }

    function getProductById(productId) {
      return getProducts().then(function (products) {
        for (var i = 0; i < products.length; i++) {
          if (products[i].id === productId) {
            return products[i];
          }
        }
        return null;
      });
    }

    // Helper function to generate sample products
    function generateProducts() {
      var products = [];
      var categories = [
        "Electronics",
        "Clothing",
        "Books",
        "Home & Kitchen",
        "Sports & Outdoors",
        "Beauty",
        "Toys & Games",
        "Health",
        "Automotive",
        "Office Supplies",
      ];

      // Placeholder image URLs for product categories
      var categoryImages = {
        Electronics:
          "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
        Clothing:
          "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg",
        Books:
          "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
        "Home & Kitchen":
          "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
        "Sports & Outdoors":
          "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg",
        Beauty:
          "https://images.pexels.com/photos/2253834/pexels-photo-2253834.jpeg",
        "Toys & Games":
          "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg",
        Health:
          "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg",
        Automotive:
          "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
        "Office Supplies":
          "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg",
      };

      // Product name parts for generating unique names
      var productTypes = {
        Electronics: [
          "Laptop",
          "Smartphone",
          "Tablet",
          "Headphones",
          "Speaker",
          "Camera",
          "TV",
          "Monitor",
          "Smartwatch",
          "Console",
        ],
        Clothing: [
          "T-Shirt",
          "Jeans",
          "Dress",
          "Jacket",
          "Sweater",
          "Shorts",
          "Skirt",
          "Coat",
          "Socks",
          "Hat",
        ],
        Books: [
          "Novel",
          "Cookbook",
          "Biography",
          "History Book",
          "Science Book",
          "Fantasy Book",
          "Self-Help Book",
          "Art Book",
          "Comic Book",
          "Children's Book",
        ],
        "Home & Kitchen": [
          "Blender",
          "Coffee Maker",
          "Toaster",
          "Microwave",
          "Knife Set",
          "Cookware Set",
          "Dinnerware Set",
          "Vacuum Cleaner",
          "Air Purifier",
          "Lamp",
        ],
        "Sports & Outdoors": [
          "Tennis Racket",
          "Basketball",
          "Running Shoes",
          "Yoga Mat",
          "Dumbbells",
          "Bicycle",
          "Hiking Backpack",
          "Tent",
          "Golf Club Set",
          "Fitness Tracker",
        ],
        Beauty: [
          "Lipstick",
          "Face Mask",
          "Moisturizer",
          "Perfume",
          "Makeup Palette",
          "Shampoo",
          "Conditioner",
          "Face Wash",
          "Mascara",
          "Nail Polish",
        ],
        "Toys & Games": [
          "Board Game",
          "Action Figure",
          "Doll",
          "Building Blocks",
          "Puzzle",
          "Remote Control Car",
          "Plush Toy",
          "Educational Toy",
          "Card Game",
          "Video Game",
        ],
        Health: [
          "Vitamins",
          "Protein Powder",
          "First Aid Kit",
          "Digital Thermometer",
          "Blood Pressure Monitor",
          "Massage Gun",
          "Essential Oils",
          "Fitness Bands",
          "Yoga Block",
          "Medicine Ball",
        ],
        Automotive: [
          "Car Cover",
          "Floor Mats",
          "Dash Cam",
          "Car Charger",
          "Air Freshener",
          "Tool Kit",
          "Tire Inflator",
          "Car Wax",
          "Steering Wheel Cover",
          "Jump Starter",
        ],
        "Office Supplies": [
          "Notebook",
          "Pen Set",
          "Desk Organizer",
          "Stapler",
          "Desk Lamp",
          "Whiteboard",
          "File Cabinet",
          "Paper Shredder",
          "Printer",
          "Calculator",
        ],
      };

      var brands = [
        "TechStar",
        "EliteStyle",
        "ReadMore",
        "HomeComfort",
        "ActiveLife",
        "BeautyGlow",
        "PlayTime",
        "WellnessPlus",
        "DriveSmart",
        "WorkEssentials",
        "InnoTech",
        "UrbanWear",
        "BookWorm",
        "CookMaster",
        "SportElite",
        "GlamBeauty",
        "FunZone",
        "VitalHealth",
        "AutoPro",
        "OfficePrime",
      ];

      var adjectives = [
        "Premium",
        "Deluxe",
        "Advanced",
        "Classic",
        "Ultra",
        "Professional",
        "Essential",
        "Compact",
        "Luxury",
        "Modern",
        "Smart",
        "Eco-Friendly",
        "Portable",
        "Wireless",
        "Digital",
        "Ergonomic",
        "Stylish",
        "Durable",
        "Lightweight",
        "Versatile",
      ];

      // Create 100+ products
      for (var i = 1; i <= 120; i++) {
        var categoryIndex = Math.floor(Math.random() * categories.length);
        var category = categories[categoryIndex];

        var productTypeIndex = Math.floor(
          Math.random() * productTypes[category].length
        );
        var productType = productTypes[category][productTypeIndex];

        var brandIndex = Math.floor(Math.random() * brands.length);
        var brand = brands[brandIndex];

        var adjectiveIndex = Math.floor(Math.random() * adjectives.length);
        var adjective = adjectives[adjectiveIndex];

        var price = (Math.random() * 500 + 10).toFixed(2);

        var product = {
          id: i.toString(),
          name: brand + " " + adjective + " " + productType,
          category: category,
          price: parseFloat(price),
          image: categoryImages[category],
          rating: Math.floor(Math.random() * 5) + 1,
          description: generateDescription(
            category,
            adjective,
            productType,
            brand
          ),
          specs: generateSpecs(category, productType),
        };

        products.push(product);
      }

      return products;
    }

    function generateDescription(category, adjective, productType, brand) {
      var descriptions = {
        Electronics:
          "This " +
          adjective.toLowerCase() +
          " " +
          productType.toLowerCase() +
          " from " +
          brand +
          " offers cutting-edge technology and exceptional performance. Featuring the latest advancements in electronics, it delivers a seamless user experience with its intuitive interface and responsive controls. Designed with both functionality and aesthetics in mind, this device boasts a sleek profile and premium build quality that sets it apart from competitors. Whether for work, entertainment, or everyday use, this " +
          productType.toLowerCase() +
          " is engineered to exceed expectations with its reliability and innovative features.",

        Clothing:
          "Elevate your wardrobe with this " +
          adjective.toLowerCase() +
          " " +
          productType.toLowerCase() +
          " from " +
          brand +
          ". Crafted from high-quality materials for maximum comfort and durability, this versatile piece features impeccable stitching and attention to detail. The contemporary design offers a flattering fit that complements various body types, while the thoughtful construction ensures long-lasting wear. Perfect for multiple occasions, this " +
          productType.toLowerCase() +
          " effortlessly combines style and functionality, making it an essential addition to any fashion-conscious individual's collection.",

        Books:
          "Immerse yourself in this " +
          adjective.toLowerCase() +
          " " +
          productType.toLowerCase() +
          " from renowned publisher " +
          brand +
          ". This compelling read offers an engaging narrative that captivates readers from the first page to the last. With expertly crafted storytelling and rich character development, this book provides an exceptional reading experience that resonates long after completion. The author's distinctive voice and insightful perspectives shine through in this carefully curated work. Whether you're an avid reader or occasional book enthusiast, this " +
          productType.toLowerCase() +
          " promises to be a worthwhile addition to your personal library.",

        "Home & Kitchen":
          "Transform your home with this " +
          adjective.toLowerCase() +
          " " +
          productType.toLowerCase() +
          " from " +
          brand +
          ". Designed to enhance your kitchen experience, this product combines functionality with elegant design. Constructed from premium materials that ensure longevity, it features intuitive controls and efficient performance for everyday use. The thoughtful engineering addresses common pain points, making kitchen tasks simpler and more enjoyable. This " +
          productType.toLowerCase() +
          " not only performs exceptionally well but also adds a touch of sophistication to your home décor with its contemporary aesthetic.",

        "Sports & Outdoors":
          "Elevate your athletic performance with this " +
          adjective.toLowerCase() +
          " " +
          productType.toLowerCase() +
          " from " +
          brand +
          ". Engineered for sports enthusiasts, this high-performance equipment combines innovative design with durable construction to enhance your outdoor activities. The ergonomic features provide optimal comfort during extended use, while the premium materials ensure resilience against the elements. Perfect for both beginners and seasoned athletes, this " +
          productType.toLowerCase() +
          " delivers reliable performance that adapts to your evolving skills and challenges, making it an essential companion for your active lifestyle.",

        Beauty:
          "Enhance your beauty routine with this " +
          adjective.toLowerCase() +
          " " +
          productType.toLowerCase() +
          " from " +
          brand +
          ". Formulated with carefully selected ingredients, this product delivers exceptional results while caring for your skin. The innovative formula works harmoniously with your natural features to create a flawless finish that lasts throughout the day. Free from harsh chemicals and never tested on animals, this beauty essential reflects a commitment to ethical practices. Whether for everyday use or special occasions, this " +
          productType.toLowerCase() +
          " provides the perfect balance of quality and performance for discerning beauty enthusiasts.",

        "Toys & Games":
          "Spark imagination and endless fun with this " +
          adjective.toLowerCase() +
          " " +
          productType.toLowerCase() +
          " from " +
          brand +
          ". Thoughtfully designed to engage young minds, this entertaining product encourages creativity, problem-solving, and social interaction. The durable construction withstands enthusiastic play, while the intuitive design ensures an accessible experience for various age groups. Educational elements are seamlessly integrated into the play experience, providing developmental benefits alongside entertainment value. This " +
          productType.toLowerCase() +
          " promises hours of engaging activity that creates lasting memories for children and families alike.",

        Health:
          "Prioritize your wellbeing with this " +
          adjective.toLowerCase() +
          " " +
          productType.toLowerCase() +
          " from " +
          brand +
          ". Developed with a focus on holistic health, this product supports your wellness journey with its thoughtful design and effective functionality. The user-friendly features make it accessible for daily use, while the quality materials ensure accuracy and reliability when it matters most. Backed by extensive research and development, this health essential provides peace of mind through consistent performance. Whether addressing specific concerns or maintaining overall wellness, this " +
          productType.toLowerCase() +
          " serves as a valuable ally in your personal health management.",

        Automotive:
          "Enhance your driving experience with this " +
          adjective.toLowerCase() +
          " " +
          productType.toLowerCase() +
          " from " +
          brand +
          ". Designed specifically for automotive enthusiasts, this product combines practicality with innovation to address common vehicle needs. The robust construction ensures durability against road conditions and regular use, while the thoughtful design provides easy installation and operation. Compatible with multiple vehicle makes and models, this automotive accessory offers versatile functionality that improves your time behind the wheel. For both practical necessities and creature comforts, this " +
          productType.toLowerCase() +
          " represents a smart investment in your vehicle's performance and your driving satisfaction.",

        "Office Supplies":
          "Optimize your workspace with this " +
          adjective.toLowerCase() +
          " " +
          productType.toLowerCase() +
          " from " +
          brand +
          ". Engineered for professional environments, this office essential combines sleek design with practical functionality to enhance productivity. The premium construction ensures reliable performance during crucial business tasks, while the user-friendly features minimize disruptions to your workflow. Thoughtfully designed to complement modern office aesthetics, this product maintains a professional appearance while delivering exceptional utility. Whether in corporate settings or home offices, this " +
          productType.toLowerCase() +
          " provides the dependable performance that busy professionals require.",
      };

      return descriptions[category];
    }

    function generateSpecs(category, productType) {
      var specs = {};

      // Generic specs for all products
      specs.Manufacturer = "Various premium manufacturers";
      specs.Model = "Latest model (2025)";
      specs.Warranty = "1-Year Limited Warranty";

      // Category-specific specs
      switch (category) {
        case "Electronics":
          specs["Battery Life"] = "Up to 12 hours";
          specs.Connectivity = "Bluetooth 5.2, Wi-Fi 6";
          specs.Dimensions = "12.3 x 8.5 x 0.7 inches";
          specs.Weight = "2.5 pounds";
          break;

        case "Clothing":
          specs.Material = "Premium cotton blend";
          specs["Care Instructions"] = "Machine wash cold, tumble dry low";
          specs["Available Sizes"] = "S, M, L, XL, XXL";
          specs["Country of Origin"] = "Ethically manufactured";
          break;

        case "Books":
          specs.Format = "Hardcover, Paperback, eBook";
          specs["Page Count"] = "320 pages";
          specs.Language = "English";
          specs.ISBN = "978-3-16-148410-0";
          break;

        case "Home & Kitchen":
          specs.Power = "1200 Watts";
          specs.Capacity = "2.5 Liters";
          specs.Material = "Stainless Steel";
          specs["Cleaning"] = "Dishwasher Safe Components";
          break;

        case "Sports & Outdoors":
          specs.Material = "High-grade performance materials";
          specs["Recommended Use"] = "Professional and recreational use";
          specs.Durability = "Weather-resistant construction";
          specs["Included Accessories"] =
            "Carrying case and instruction manual";
          break;

        case "Beauty":
          specs.Volume = "50ml / 1.7 fl oz";
          specs.Ingredients = "Naturally derived, hypoallergenic";
          specs["Skin Type"] = "All skin types";
          specs.Usage = "Apply daily for best results";
          break;

        case "Toys & Games":
          specs["Age Recommendation"] = "6+ years";
          specs["Number of Players"] = "2-4 players";
          specs["Playing Time"] = "30-60 minutes";
          specs["Components"] = "High-quality, child-safe materials";
          break;

        case "Health":
          specs.Certification = "FDA Approved";
          specs.Accuracy = "±2% measurement tolerance";
          specs.Display = "Digital LCD screen";
          specs["Power Source"] = "Rechargeable lithium-ion battery";
          break;

        case "Automotive":
          specs.Compatibility = "Universal fit for most vehicles";
          specs.Installation = "Simple DIY installation";
          specs.Material = "Durable automotive-grade components";
          specs["Weather Resistance"] = "All-weather performance";
          break;

        case "Office Supplies":
          specs.Capacity = "Large capacity design";
          specs.Material = "High-quality, durable construction";
          specs.Features = "Ergonomic design for daily use";
          specs.Dimensions = "Compact, space-saving dimensions";
          break;
      }

      return specs;
    }
  }
})();
