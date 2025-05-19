import './App.css'
import { Header } from  '../src/components/Header/Header'
import { AppDescription } from  '../src/components/AppDescription/AppDescription'
import { UniqueMethodology } from './components/UniqueMethodology/UniqueMethodology'
import { AppFeatures } from './components/AppFeatures/AppFeatures'
function App() {
    return (
    <>
      <div className='Wrapper'>
        <Header/>
        <AppDescription/>
        <UniqueMethodology/>
      </div>
        <AppFeatures/>
     
    </>
  )
}
export default App
