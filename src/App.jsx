import Header from './components/Header';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

import styles from './App.module.css';

const App = ({
    state,
    addPost,
    addMessage,
    updatePostText,
    updateMessageText,
}) => {
    return (
        <div className={styles.container}>
            <Header />
            <Navigation friends={state.friendsPage.friends} />
            <div className={styles.main}>
                <AppRouter
                    state={state}
                    addPost={addPost}
                    addMessage={addMessage}
                    updatePostText={updatePostText}
                    updateMessageText={updateMessageText}
                />
            </div>
            <Footer />
        </div>
    );
};

export default App;
