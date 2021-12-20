import Home from './pages/home'
import { useState } from 'react';
import Details from './pages/details'
import { useFetch } from './hooks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  const [brandName, setBrandName] = useState("annabelle");
  const { data, setData} = useFetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`);

 
  return (
    <>
      {data !== null ?
        <Router>
          < Routes>
            <Route path="details/:id" element={<Details />} />
            <Route path="/" element={<Home productsList={data} 
         
            setBrandName={setBrandName}/>}>

            </Route>

          </Routes>
        </Router> :
        <>

          <div className="spinner">
            <span className="spinner-inner-1"></span>
            <span className="spinner-inner-2"></span>
            <span className="spinner-inner-3"></span>
          </div>

        </>}
    </>
  );
}

export default App;
