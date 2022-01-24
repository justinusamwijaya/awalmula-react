import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Categories from './pages/Categories';
import Subcategories from './pages/Subcategories';
import Products from './pages/Products';

function App() {

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [step, setStep] = useState(1)

  useEffect(() => {
    axios.get('https://staging-cuan.awalmula.co/rest/default/V1/categories').then(res => {
      console.log({res})
      setCategories(res.data.children_data)
    })
    axios.get('https://staging-cuan.awalmula.co/rest/default/V1/categories/113/products').then(res => console.log(res))
    axios.get('https://staging-cuan.awalmula.co/rest/default/V1/products?searchCriteria[pageSize]=10').then(res => {
      console.log({res})
      setProducts(res.data.items)
    }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      setStep(2)
    }
  }, [selectedCategory])
  
  useEffect(() => {
    if (selectedSubcategory) {
      
      setStep(3)
    }
  }, [selectedSubcategory])

  return (
    <div className="App">
      {step !== 1 && <button style={{
        position: 'absolute',
        top: 30,
        left: 30,
        border: 0,
        background: 'none',
        color: 'white',
        cursor: 'pointer',
        fontSize: 16,
      }} onClick={() => {
        if (step - 1 === 1) {
          setSelectedCategory(null)
          setSelectedSubcategory(null)
        } else if (step - 1 === 2) {
          setSelectedSubcategory(null)
        }
        setStep(step - 1)
        }}>back</button>}
      {step === 1 && <Categories onPickedCategory={id => {
        setSelectedCategory(categories.filter(el => el.id === +id)[0])
        }} categories={categories}/>}
      {step === 2 && <Subcategories onPickedSubcategory={id => {
        setSelectedSubcategory(selectedCategory.children_data.filter(el => el.id === +id)[0])
      }} subcategories={selectedCategory.children_data}/>}
      {step === 3 && <Products products={products} onPickedProduct={() => setStep(4)} />}
    </div>
  );
}

export default App;
