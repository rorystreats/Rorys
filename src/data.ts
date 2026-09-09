export interface ProductVariant {
  id: string;
  name: string;
  price: number | string;
}

export interface MenuItem {
  slug: string;
  name: string;
  price: number | string;
  desc: string;
  image?: string;
  gallery?: string[];
  careTitle?: string;
  careInstructions?: string;
  shippingInfo?: string;
  variants?: ProductVariant[];
}

const cookieCare = "They're perfectly happy chilling on your counter for 5 days or in the fridge for 10, but let's be honest you're just going to microwave it for 10 seconds and devour the gooey goodness right now.";

const standardShipping = "Delivering across Pune & PCMC on weekends. Please pre-order 48 hours in advance. Pickups available from Baner or Prabhat Road.";

const chilledShipping = "Delivered perfectly chilled across Pune & PCMC on weekends. Please pre-order 48 hours in advance. Pickups available from Baner or Prabhat Road.";

export const menu: Record<string, MenuItem[]> = {
  cookies: [
    { 
      slug: "double-chocolate-chip", 
      name: "Grandma's Illegal Recipe", 
      price: 420, 
      desc: "A classic vanilla cookie dough loaded with dark chocolate chunks for a rich, deep chocolate flavor.",
      image: "/double.jpg",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/double.jpg", "/double2.jpg", "/double3.jpg"]
    },
    { 
      slug: "the-midnight-cocoa-chunk", 
      name: "The Black Sheep", 
      price: 420, 
      desc: "A rich cocoa cookie loaded with milk chocolate, white chocolate, and dark chocolate chunks for the ultimate triple chocolate cookie.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/triple.jpg", "/triple1.jpg", "/triple2.jpg", "/triple3.jpg"]
    },
    { 
      slug: "walnut-chocolate-chip", 
      name: "Family Legacy", 
      price: 420, 
      desc: "A classic cookie dough loaded with dark chocolate chips, dark chocolate chunks, and crunchy walnuts.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/walnut.jpg", "/walnut1.jpg", "/walnut2.jpg", "/walnut3.jpg"]
    },
    { 
      slug: "the-hazelnut-molten-core", 
      name: "The Godfather", 
      price: 470, 
      desc: "A hazelnut milk chocolate cookie filled with a creamy Nutella center and topped with a Hershey’s milk chocolate bar.",
      image: "/hazelnut.jpg",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/hazelnut.jpg", "/hazelnut2.jpg", "/hazelnut3.jpg"]
    },
    { 
      slug: "golden-macadamia-dream", 
      name: "Golden Boy Gone Rogue", 
      price: 470, 
      desc: "A buttery cookie loaded with Biscoff biscuit, macadamia nuts, and white chocolate chunks, filled with Biscoff spread and topped with a Biscoff biscuit.", 
      image: "/biscoff.jpg",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/biscoff.jpg", "/biscoff2.jpg", "/bisoff3.jpg"]
    },
    {
      slug: "trust-fund-behavior",
      name: "Trust Fund Behavior",
      price: 490,
      desc: "A rich cocoa cookie loaded with milk chocolate chunks and pistachios, filled with kunafa and pistachio paste, and topped with pistachios.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/dubai1.jpg.png", "/dubai2.jpg.png", "/dubai3.jpg.png", "/dubai4.jpg.png"]
    },
    {
      slug: "pistachio",
      name: "The Green Flag",
      price: 420,
      desc: "A soft vanilla cookie loaded with white chocolate chunks, milk chocolate chunks, and pistachios for a creamy, nutty flavor.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/pista.jpg", "/pista1.jpg", "/pista2.jpg", "/pista3.jpg"]
    },
    {
      slug: "ultimate-cookie-box",
      name: "Ultimate Box of 5",
      price: 1290,
      desc: "One box for all, has all our classic 5 flavours.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/double.jpg", "/triple.jpg", "/walnut.jpg", "/hazelnut.jpg", "/biscoff.jpg"]
    },
  ],
  tiramisu: [
    { slug: "classic-tiramisu", name: "Classic Affair", price: 499, desc: "Authentic ladyfingers dipped in rich Davidoff espresso with silky mascarpone dusted off with light cocoa powder is a melt in the mouth.", careInstructions: "Keep refrigerated. Consume within 2 days.", shippingInfo: chilledShipping, image: "/classict.jpg" },
    { slug: "biscoff-tiramisu", name: "After Hours", price: 599, desc: "Biscoff layered with espresso between the silky vanilla mascarpone is what you need.", careInstructions: "Keep refrigerated. Consume within 2 days.", shippingInfo: chilledShipping,image: "/biscofft.jpg" }
  ],
  tins: [
    { slug: "classic-tiramisu-tin", name: "Classic Tiramisu Tin", price: 1390, desc: "Family-sized classic tiramisu.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping, image: "/tiramisutin.jpg" },
    { slug: "classic-cheesecake-tin", name: "Classic Cheesecake Tin", price: 1390, desc: "Rich, creamy cheesecake for sharing.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping, image: "/cheesecaketin.jpg" }
  ],
  celebrations: [
      { 
        slug: "cashew-hazelnut-truffle", 
        name: "Old Money", 
        price: 999, 
        desc: "Thick cashew cocoa fudge, center filled with hazelnut milk , rolled in cashew bits, and topped with milk chocolate and a silver flake.",
        image: "/kaju1.JPG",
        variants: [
          { id: "box-of-6", name: "Box of 6", price: 999 },
          { id: "box-of-9", name: "Box of 9", price: 1299 }
        ]
      },
      { 
        slug: "pista-white-truffle", 
        name: "New Money", 
        price: 999, 
        desc: "Rich white chocolate fudge, center filled with kunafa pistachio cream, rolled in decadent pistachio bits and topped with milk chocolate and rose petals.",
        image: "/pistatruffle1.JPG",
        variants: [
          { id: "box-of-6", name: "Box of 6", price: 999 },
          { id: "box-of-9", name: "Box of 9", price: 1299 }
        ]
      }
    ]
}
export const WHATSAPP_NUMBER = "918208767902"; // Placeholder, user will update
