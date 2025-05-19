import './App.css'
import { Header } from  '../src/components/Header/Header'
import { AppDescription } from  '../src/components/AppDescription/AppDescription'
import { UniqueMethodology } from './components/UniqueMethodology/UniqueMethodology'
function App() {
    return (
    <>
      <div className='Wrapper'>
        <Header/>
        <AppDescription/>
        <UniqueMethodology/>
     </div>
    </>
  )
}
export default App
