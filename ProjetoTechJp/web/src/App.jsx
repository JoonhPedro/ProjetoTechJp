

//Style

// Header 
import Header from './assets/components/header/Header.jsx'
import HeaderMenu from './assets/components/header/HeaderMenu.jsx'
import Slidebar from './assets/components/slider/Slidebar.jsx'

// previ

//pagamentos

import Pags from './assets/components/pagamentos/Pags.jsx'


function App() {

  return (
    <> 
      <div>
        <Header /> 
        <HeaderMenu/>
      </div>  
      
      <div className="containerslide">
        <Slidebar/>
      </div>

      <div>
      <Pags />
      </div>
       
    

    </>
  )
}

export default App
