import logo from './logo.svg';
import { ProductCard } from './components/ProductCard';
import {Single} from './components/Single';
import {Property} from './components/Property';
import './App.css';

function App() {
    const product={
        ImageSrc:"",
        title:"imagine dragers",
        specification:[
           "manifest.json provides metadata",
           "manifest.json provides metadata",
        ],
        price:2010,
    }

  return (
    <div className="App">
      <Property>
      <ProductCard width="200px" height="100px" background="darkolivegreen" prod={product}/>
      <ProductCard prod={product}/>
      <ProductCard width="100px" height="100px"background="peru" prod={product}/>
      </Property>
      <Single/>
    </div>
  );
}

export default App;
