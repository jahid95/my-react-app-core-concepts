import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name: 'laptop', price:50000},
    {name: 'iPhone', price:140000},
    {name: 'Television', price:18000},
  ]
  return (
    <div className="App">
      {
        products.map(product=><Product product={product}></Product>)
      }
    </div>
  );
}

function Product(props) {
  console.log(props.product);
  const {name,price} = props.product;
  return (
    <div>
      <h3>{name}</h3>
      <h6>Price: {price}</h6>
    </div>
  )
}

export default App;
