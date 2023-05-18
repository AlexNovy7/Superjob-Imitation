import { Group, Button, Container, createStyles } from '@mantine/core';
import { Filter } from '../../Filter/Filter';
import { Search } from '../../Search/Search';
import { ShortVacancyPagination } from '../../ShortVacancyPagination/ShortVacancyPagination';

const useStyles = createStyles((theme) => ({
    group: {
        maxWidth:1162,
        margin:'0 auto',
        paddingTop:42,
        backgroundColor:theme.colors.MyApp[5],
    },
    container:{
        margin:0,
        
    }
  }));

export const WelcomePage =() => {
    const { classes } = useStyles();
   

  return (
    <Container size={1440}>
    <Group align="top" spacing={12} className={classes.group}>
      <Filter />
     <Container className={classes.container}>
     <Search/>
      <ShortVacancyPagination queryUsage={true} mtPagination={38}/>
      </Container>
    </Group>
    </Container>
   
  );
}