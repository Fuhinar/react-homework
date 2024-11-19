import { ProductCard } from "./components/ProductCard";
import { useState } from "react";
import { useEffect } from "react";

const defaultValue = [
//   {
//     id: 0,
//     name: "Satoru Gojo",
//     price: 100,
//     category: "Jujutsu Kaisen",
//     image: "https://admin.sportshackster.com/WallPaperMedia/PlayerWallPaperImage/gojo-17_63862428492929.jpg"
//   },
//   {
//     id: 1,
//     name: "Sukuna Ryomen",
//     price: 300,
//     category: "Jujutsu Kaisen",
//     image: "https://images7.alphacoders.com/131/thumb-1920-1318705.png"
//   },
//   {
//     id: 1,
//     name: "Monkey D. Luffy",
//     price: 200,
//     category: "One Piece",
//     image: "https://images6.alphacoders.com/132/thumb-1920-1325915.png"
//   },
//   {
//     id: 1,
//     name: "Levi Ackerman",
//     price: 200,
//     category: "Attack on Titans",
//     image: "https://images5.alphacoders.com/135/thumbbig-1353801.webp"
//   },
//   {
//     id: 1,
//     name: "Nanami",
//     price: 600,
//     category: "Jujutsu Kaisen",
//     image: "https://images2.alphacoders.com/114/thumb-1920-1143213.jpg"
//   },
//   {
//     id: 1,
//     name: "Zoro",
//     price: 1000,
//     category: "One Piece",
//     image: "https://motionbgs.com/media/218/zoro-from-one-piece.jpg"
//   }
]

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(defaultValue);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <div><img src="https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif" alt="" /></div>}
      {products.map((product) => (
        <ProductCard data = {product}/>
      ))}
    </div>
  )

  return (
    <div> 
      { 
      products.map((product) => (
        <ProductCard data = {product}/>
      )
    )
  }
    </div>
  );
}

export default App;
