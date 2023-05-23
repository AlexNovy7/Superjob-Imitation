import { Group, Container, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Filter } from '../../Filter/Filter';
import { Search } from '../../Search/Search';
import { ShortVacancyPagination } from '../../ShortVacancyPagination/ShortVacancyPagination';


export const WelcomePage = () => {
  const theme = useMantineTheme();
  const largeScreen = useMediaQuery('(min-width: 90em)');

  return (
    <Container bg={theme.colors.MyApp[5]} size={1440}>
      <Group w={largeScreen?1162:320} mx={'auto'} pt={largeScreen?38:20} align="top" spacing={12}>
        <Filter />
        <Container m={0}>
          <Search />
          <ShortVacancyPagination queryUsage={true} mtPagination={0} />
        </Container>
      </Group>
    </Container>

  );
}