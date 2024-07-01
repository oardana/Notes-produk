import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
