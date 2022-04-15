import Header from './components/Header';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

import styles from './App.module.css';

const App = ({ store }) => {
    return (
        <div className={styles.container}>
            <Header />
            <Navigation
                friends={store.getState.friendsPage.friends} // геттер getState вызывается без ()
                newFriendName={store.getState.friendsPage.newFriendName}
                dispatch={store.dispatch.bind(store)}
            />
            <div className={styles.main}>
                <AppRouter store={store} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
