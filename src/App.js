import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import Main from './Components/Main/Main';

function App() {
    return (
        <>
            <Header />
            <Main saludo="Bienvenidos" numero={10} />
            <Footer />
        </>
    );
}

export default App;
