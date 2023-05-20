import { MantineProvider } from '@mantine/core';
import { Filter } from './components/Filter/Filter';
import { AppHeader } from './components/layout/Header/Header';
import { WelcomePage } from './components/pages/WelcomePage/WelcomePage';
import { Search } from './components/Search/Search';
import { ShortVacancyPagination } from './components/ShortVacancyPagination/ShortVacancyPagination';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATHS } from './data/routing';
import { VacancyPage } from './components/pages/VacancyPage/VacancyPage';
import { SelectPage } from './components/pages/SelectPage/SelectPage';
import { NotFoundPage } from './components/pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      fontFamily: "Inter",
      breakpoints: {
        xs: '30em',
        sm: '48em',
        md: '64em',
        lg: '74em',
        xl: '90em',
      },
      colors: {
        "MyApp": ['#FFFFFF', '#5E96FC', '#F5F5F5', '#ACADB9', '#232134', '#F5F5F5','#DEECFF','#3B7CD3'],
      },

    }}>
      <BrowserRouter>
        <AppHeader links={[{ link: PATHS.welcome, label: "Поиск Вакансий" }, { link: PATHS.select, label: " Избранное" }]} />
        <Routes>
          <Route path={PATHS.welcome} element={<WelcomePage />} />
          <Route path={PATHS.vacancy} element={<VacancyPage />} />
          <Route path={PATHS.select} element={<SelectPage />} />
          <Route path={PATHS.notFound} element={<NotFoundPage />} />
        </Routes>


      </BrowserRouter>

    </MantineProvider>
  );
}

