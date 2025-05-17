import './App.css'
import { Header } from  '../src/components/Header/Header'
import { AppDescription } from  '../src/components/AppDescription/AppDescription'
function App() {
    return (
    <>
      <div className='Wrapper'>
        <Header/>
        <AppDescription/>
     </div>
    </>
  )
}
export default App
