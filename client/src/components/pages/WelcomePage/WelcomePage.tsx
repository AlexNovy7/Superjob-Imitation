import { Group, Container } from '@mantine/core';
import { Filter } from '../../Filter/Filter';
import { Search } from '../../Search/Search';
import { ShortVacancyPagination } from '../../ShortVacancyPagination/ShortVacancyPagination';
import { useStyles } from './WelcomePage.styles';


export const WelcomePage = () => {
  const { classes, theme } = useStyles();

  return (
    <Container bg={theme.colors.MyApp[5]} size={1440}>
      <Group className={classes.welcome_page} mx={'auto'} align="top" spacing={12}>
        <Filter />
        <Container className={classes.wrapper_container}>
          <Search />
          <ShortVacancyPagination queryUsage={true} mtPagination={0} />
        </Container>
      </Group>
    </Container>

  );
}