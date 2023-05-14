import { MantineProvider } from '@mantine/core';
import { Filter } from './components/Filter/Filter';
import { AppHeader } from './components/layout/Header/Header';
import { WelcomePage } from './components/pages/WelcomePage/WelcomePage';
import { Search } from './components/Search/Search';
import { ShortVacancyPagination } from './components/ShortVacancyPagination/ShortVacancyPagination';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      fontFamily:"Inter",
      breakpoints: {
        xs: '30em',
        sm: '48em',
        md: '64em',
        lg: '74em',
        xl: '90em',
      },
      colors: {
        "MyApp": ['#FFFFFF', '#5E96FC', '#F5F5F5','#ACADB9','#232134','#F5F5F5'],
      },
      
    }}>
      <AppHeader links={[{ link: "string", label: "Поиск Вакансий" },{ link: "string1", label: " Избранное" }]} />
      <WelcomePage/>
    </MantineProvider>
  );
}
