import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ContactPage } from './pages/ContactPage';
import { CoursePage } from './pages/CoursePage';
import { GraduationPage } from './pages/GraduationPage';
import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PeoplePage } from './pages/PeoplePage';
import { ResearchPage } from './pages/ResearchPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/curso" element={<CoursePage />} />
        <Route path="/graduacao" element={<GraduationPage />} />
        <Route path="/pesquisa" element={<ResearchPage />} />
        <Route path="/pessoas" element={<PeoplePage />} />
        <Route path="/informativos" element={<NewsPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
