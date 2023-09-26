import "./styles.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Products from "./Components/Products";


<<<<<<< HEAD



=======
let products = [
  {
    pID: 1,
    pName: 'Fresh Milk',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: 'images/fresh-milk.png',
    price: 12
  },
  {
    pID: 2,
    pName: 'Cottage Cheese',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,
    image: "images/cottage-cheese.png",
    price: 10
  },
  {
    pID: 3,
    pName: 'Brocoli',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: "images/brocoli.png",
    price: 15
  },
  {
    pID: 4,
    pName: 'oranges',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: true,
    image: "images/oranges.png",
    price: 20
  },
  {
    pID: 5,
    pName: 'Olive oil',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14
  }
]
>>>>>>> f19bbd7c47bb73928742947d52dec76a91161a23



export default function App() {



  return <div className="row">
    <div className="col-lg-8 mx-auto">
      <Products />

    </div>


  </div>
}
