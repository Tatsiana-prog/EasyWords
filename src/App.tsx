import './App.css'
import { Header } from  '../src/components/Header/Header'
import { AppDescription } from  '../src/components/AppDescription/AppDescription'
import { UniqueMethodology } from './components/UniqueMethodology/UniqueMethodology'
import { AppFeatures } from './components/AppFeatures/AppFeatures'
import { Tariffs } from './components/Tariffs/Tariffs'
function App() {
    return (
    <>
      <div className='Wrapper'>
        <Header/>
        <AppDescription/>
        <UniqueMethodology/>
      </div>
        <AppFeatures/>
       <div className='Wrapper'>
        <Tariffs/>
      </div>
    </>
  )
}
export default App
