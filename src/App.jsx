import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import { LanguageProvider } from './shared/i18n/LanguageContext';


function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;

