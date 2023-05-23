import { Button, Container, Image, Text, useMantineTheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../data/routing";
import { useAppDispatch } from "../../../hooks";
import { setFilterData, setSearchData } from "../../../redux/slices";
import { useStyles } from "./NotFoundPage.styles";



export const NotFoundPage = () => {
  const dispatch = useAppDispatch();
  const { classes } = useStyles();
  const navigate = useNavigate();
  const theme = useMantineTheme();
  
  const handleButtonClick = () => {
    dispatch(setFilterData({ industry: [], paymentFrom: '', paymentTo: '' }))
    dispatch(setSearchData(''))
    navigate(PATHS.welcome);
  }

  return (
    <Container bg={theme.colors.MyApp[5]} size={1440} mih={820}>
      <Container p={5} maw={327}  mx={'auto'}>
        <Image mt={115} mx={'auto'} maw={240} src="https://i.ibb.co/LkvkhVF/Frame-4.png" alt="not found" />
        <Text mt={30} className={classes.title}>Упс, здесь еще ничего нет!</Text>
        <Button ml={80} mt={27} className={classes.btn} onClick={handleButtonClick}>Поиск Вакансий</Button>
      </Container>
    </Container>
  );
}