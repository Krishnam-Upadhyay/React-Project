import "./styles.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Products from "./Components/Products";
<<<<<<< HEAD
console.log('projects');
=======
>>>>>>> 9b89d4eadb38faf26aa58b2b52b9ac439e23f76f



const products = [
  {
    pid: 1,
    name: 'fresh Milk',
    desc: 'Here we will show the details of teh product in order to solve the problem',
    isAvailable: true
  }
]

export default function App() {



  return <div className="row">
    <div className="col-lg-8 mx-auto">
      <Products />

    </div>


  </div>
}
