import express from "express";
import cors  from "cors";

const app = express();
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  const products = [
    {
        id: 1,
        name: "wooden table",
        price: 10.99,
        image: "https://i.pinimg.com/originals/04/d2/27/04d2271f6f68efddbacfdce299e7c8e8.jpg"
    },
    {
        id: 2,
        name: "metal table",
        price: 12.99,
        image: "https://png.pngtree.com/background/20230616/original/pngtree-nature-framed-wooden-table-in-stunning-3d-render-picture-image_3651732.jpg"
    },
    {
        id: 3,
        name: "wooden tabel 2",
        price: 15.99,
        image: "https://as1.ftcdn.net/v2/jpg/02/48/68/68/1000_F_248686800_kw5K7s1PIYdTYke5BnzkWfVAe8HfKJru.jpg"
    },
    {
        id: 4,
        name: "glass table",
        price: 18.99,
        image: "https://i.pinimg.com/originals/04/d2/27/04d2271f6f68efddbacfdce299e7c8e8.jpg"
    },
    {
        id: 5,
        name: "plastic tabel",
        price: 9.99,
        image: "https://png.pngtree.com/background/20230616/original/pngtree-nature-framed-wooden-table-in-stunning-3d-render-picture-image_3651732.jpg"
    },
    {
        id: 6,
        name: "steel table",
        price: 14.99,
        image: "https://i.pinimg.com/originals/04/d2/27/04d2271f6f68efddbacfdce299e7c8e8.jpg"
    },
    {
        id: 7,
        name: "foldable wooden table",
        price: 19.99,
        image: "https://as1.ftcdn.net/v2/jpg/02/48/68/68/1000_F_248686800_kw5K7s1PIYdTYke5BnzkWfVAe8HfKJru.jpg"
    },
    {
        id: 8,
        name: "round metal tabel",
        price: 25.99,
        image: "https://i.pinimg.com/originals/04/d2/27/04d2271f6f68efddbacfdce299e7c8e8.jpg"
    },
    {
        id: 9,
        name: "marble table",
        price: 29.99,
        image: "https://png.pngtree.com/background/20230616/original/pngtree-nature-framed-wooden-table-in-stunning-3d-render-picture-image_3651732.jpg"
    },
    {
        id: 10,
        name: "oak wooden tabel",
        price: 35.99,
        image: "https://as1.ftcdn.net/v2/jpg/02/48/68/68/1000_F_248686800_kw5K7s1PIYdTYke5BnzkWfVAe8HfKJru.jpg"
    },
    {
        id: 11,
        name: "adjustable metal table",
        price: 24.99,
        image: "https://i.pinimg.com/originals/04/d2/27/04d2271f6f68efddbacfdce299e7c8e8.jpg"
    },
    {
        id: 12,
        name: "vintage wooden table",
        price: 45.99,
        image: "https://png.pngtree.com/background/20230616/original/pngtree-nature-framed-wooden-table-in-stunning-3d-render-picture-image_3651732.jpg"
    },
    {
        id: 13,
        name: "glass top metal tabel",
        price: 49.99,
        image: "https://as1.ftcdn.net/v2/jpg/02/48/68/68/1000_F_248686800_kw5K7s1PIYdTYke5BnzkWfVAe8HfKJru.jpg"
    },
    {
        id: 14,
        name: "plastic folding table",
        price: 8.99,
        image: "https://i.pinimg.com/originals/04/d2/27/04d2271f6f68efddbacfdce299e7c8e8.jpg"
    },
    {
        id: 15,
        name: "wooden dining table",
        price: 99.99,
        image: "https://png.pngtree.com/background/20230616/original/pngtree-nature-framed-wooden-table-in-stunning-3d-render-picture-image_3651732.jpg"
    },
    {
        id: 16,
        name: "small wooden tabel",
        price: 5.99,
        image: "https://as1.ftcdn.net/v2/jpg/02/48/68/68/1000_F_248686800_kw5K7s1PIYdTYke5BnzkWfVAe8HfKJru.jpg"
    },
    {
        id: 17,
        name: "metal bar table",
        price: 19.99,
        image: "https://i.pinimg.com/originals/04/d2/27/04d2271f6f68efddbacfdce299e7c8e8.jpg"
    },
    {
        id: 18,
        name: "round wooden tabel",
        price: 17.99,
        image: "https://png.pngtree.com/background/20230616/original/pngtree-nature-framed-wooden-table-in-stunning-3d-render-picture-image_3651732.jpg"
    },
    {
        id: 19,
        name: "large metal table",
        price: 39.99,
        image: "https://as1.ftcdn.net/v2/jpg/02/48/68/68/1000_F_248686800_kw5K7s1PIYdTYke5BnzkWfVAe8HfKJru.jpg"
    },
    {
        id: 20,
        name: "folding camping tabel",
        price: 11.99,
        image: "https://i.pinimg.com/originals/04/d2/27/04d2271f6f68efddbacfdce299e7c8e8.jpg"
    }
];

  // http://localhost:3000/api/products?serach=wodden

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(req.query.search)
    );
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
