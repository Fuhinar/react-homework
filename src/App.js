import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id: 0,
    name: "Satoru Gojo",
    price: 100,
    category: "Jujutsu Kaisen",
    image: "https://admin.sportshackster.com/WallPaperMedia/PlayerWallPaperImage/gojo-17_63862428492929.jpg"
  },
  {
    id: 1,
    name: "Sukuna Ryomen",
    price: 300,
    category: "Jujutsu Kaisen",
    image: "https://images7.alphacoders.com/131/thumb-1920-1318705.png"
  },
  {
    id: 1,
    name: "Monkey D. Luffy",
    price: 200,
    category: "One Piece",
    image: "https://images6.alphacoders.com/132/thumb-1920-1325915.png"
  },
  {
    id: 1,
    name: "Levi Ackerman",
    price: 200,
    category: "Attack on Titans",
    image: "https://images5.alphacoders.com/135/thumbbig-1353801.webp"
  },
  {
    id: 1,
    name: "Nanami",
    price: 600,
    category: "Jujutsu Kaisen",
    image: "https://images2.alphacoders.com/114/thumb-1920-1143213.jpg"
  }
]

function App() {
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
