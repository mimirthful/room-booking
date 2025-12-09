import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import { LanguageProvider } from './LanguageProvider';


function App() {
  return (
    <>
    <LanguageProvider>
        <Header/>
        <MainBody/>
        <Footer/>
    </LanguageProvider>
    </>
  )
}

export default App;
