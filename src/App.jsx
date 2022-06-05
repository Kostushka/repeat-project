import HeaderContainer from './components/HeaderContainer';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <HeaderContainer />
            <Navigation />
            <div className={styles.main}>
                <AppRouter />
            </div>
            <Footer />
        </div>
    );
};

export default App;
