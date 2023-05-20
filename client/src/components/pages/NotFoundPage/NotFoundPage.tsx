import { Button, Container, createStyles } from "@mantine/core";
import { Image,Text, } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../data/routing";

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
           fontSize: 24,
           whiteSpace:'nowrap',
           
           
          
          
    
  },
  btn:{
    backgroundColor:theme.colors.MyApp[6],
    width:164,
    borderRadius: 8,
    height:42,
    color:theme.colors.MyApp[7],
    '&:hover': {
      backgroundColor: theme.colors.MyApp[6],
  },
    

  
    
},
  
  
}));

export const NotFoundPage =() => {
  const { classes,theme } = useStyles();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    localStorage.setItem('headerLink',JSON.stringify(PATHS.welcome))
    navigate(PATHS.welcome);
    
  }
   

    return (
      <Container maw={1440}>
        <Container p={5} maw={327} mt={115} mx={'auto'}>
      <Image mx={'auto'}  maw={240}  src="https://i.ibb.co/LkvkhVF/Frame-4.png" alt="not found" />
      <Text mt={30} className={classes.title}>Упс, здесь еще ничего нет!</Text>
      <Button ml={80} mt={27}  className={classes.btn} onClick={handleButtonClick}>Поиск Вакансий</Button>
     </Container>

      </Container>
     
     
    );
  }