import Header from './components/Header';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

import styles from './App.module.css';

const App = ({ state }) => {
    return (
        <div className={styles.container}>
            <Header />
            <Navigation />
            <div className={styles.main}>
                <AppRouter state={state} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
