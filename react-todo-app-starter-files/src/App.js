import React from 'react';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

function App() {
  return (
    <div className="container">
      <PageTitle>TODO LIST</PageTitle>
      <AppHeader className={styles.app__wrapper} />
      <AppContent />
    </div>
  );
}

export default App;
