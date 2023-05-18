import { IconMapPin } from '@tabler/icons-react';
import { SlStar } from 'react-icons/sl';
import { FaStar } from 'react-icons/fa';
import { Card, Text, Group, createStyles, rem, List, Button, } from '@mantine/core';
import { PaymentInfo } from '../PaymentInfo/PaymentInfo';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../data/routing';
import { useEffect, useState } from 'react';

interface ShortVacancyCardStylesProps {
  card_minHeight: number;
  profession_text_fontWeight: number;
  profession_text_fontSize: number;
  profession_text_color: string;
  typeOfWork_text_fontWeight: number;
  typeOfWork_text_fontSize: number;
}



const useStyles = createStyles((theme, { card_minHeight,
  profession_text_fontWeight,
  profession_text_fontSize,
  profession_text_color,
  typeOfWork_text_fontWeight,
  typeOfWork_text_fontSize,
}: ShortVacancyCardStylesProps) => ({
  card: {
    backgroundColor: theme.colors.MyApp[0],
    width: 773,
    minHeight: card_minHeight,
    marginBottom: 16,
    '&:hover': {
      cursor: 'pointer'
    },
  },
  profession_text: {
    fontWeight: profession_text_fontWeight,
    fontSize: profession_text_fontSize,
    color: profession_text_color,
    marginTop: 20,
    maxWidth: 650,
  },
  typeOfWork_text: {
    fontWeight: typeOfWork_text_fontWeight,
    fontSize: typeOfWork_text_fontSize,
    marginTop: 5,
  },
  payment_text: {
    fontWeight: 600,
    fontSize: 20,
    color: theme.colors.MyApp[1],
    marginTop: 20,
  },

  section: {
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  content_position: {
    marginRight: 8,
    marginLeft: 8,
  },

  star: {
    border: theme.colors.dark[4],
    color: theme.colors.dark[4],
    strokeWidth: 12,
    position:"relative",
    zIndex:100000000,

  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  country_text: {
    fontWeight: 400,
    fontSize: 16,
    color: theme.colors.MyApp[4],
    marginTop: 7,
  },
  icon_map: {
    marginTop: 7,
  },
  btn:{
    padding:0,
    border:"none",
    backgroundColor:"transparent",
    marginTop:10,
    '&:hover': {
      backgroundColor: "transparent",
    },
  }
}));

interface ShortVacancyCardProps {
data: any;
  payment_text_fontSize: number;
}
type ShortVacancyCardAllProps = ShortVacancyCardStylesProps & ShortVacancyCardProps
//solve question with any
const manipulateStar=(switchStar:boolean,data:any )=>{
  //refactor???
  let switchedVacancies = localStorage.SwitchedVacancies?
  JSON.parse(localStorage.SwitchedVacancies): [];
  const hasId=switchedVacancies.some((object:any)=>object.id===data.id)
  
  if(!switchStar){
    !hasId&&switchedVacancies.push(data)
  } else{ 
    switchedVacancies = switchedVacancies.filter((object:any)=>object.id!==data.id)

  }
  
  localStorage.setItem('SwitchedVacancies',JSON.stringify(switchedVacancies))
}
const hasStar=(data:any)=>{
 const switchedVacancies = localStorage.SwitchedVacancies?
  JSON.parse(localStorage.SwitchedVacancies): [];
console.log(switchedVacancies)
console.log(data.id);
  return switchedVacancies.some((object:any)=>object.id===data.id)

}


export function ShortVacancyCard(props: ShortVacancyCardAllProps) {
  const { classes, theme } = useStyles(props);
  const { payment_text_fontSize,data } = props;

  const [switchStar, setSwitchStar] = useState(false);
  useEffect(() => {
  
    setSwitchStar(hasStar(data)) 
  },[data]);

  console.log(switchStar)
  const handleStarClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    switchStar === false ? setSwitchStar(true) : setSwitchStar(false);
    manipulateStar(switchStar,data);
  }
  return (
    <Card withBorder radius="md" p="md" mx="auto" className={classes.card}>

      <Card.Section className={classes.section} mt="md">
        <Group className={classes.content_position} position="apart">
          <Text className={classes.profession_text}>
            {data.profession}
          </Text>
          <Button  className={classes.btn}  onClick={handleStarClick}>
          {switchStar ? <FaStar size="1.3rem" className={classes.star} color={theme.colors.MyApp[1]} /> :
            <SlStar   size="1.3rem" className={classes.star} fill={theme.colors.MyApp[3]} />}
          </Button>
       
        </Group>
        <Group spacing={11} className={classes.content_position}>
          <PaymentInfo payment_text_fontSize={payment_text_fontSize} paymentFrom={data.payment_from} paymentTo={data.payment_to} currency={data.currency} />
          <List>
            <List.Item className={classes.typeOfWork_text}>{data.type_of_work.title}</List.Item>
          </List>

        </Group>
        <Group spacing={11} className={classes.content_position}>
          <IconMapPin className={classes.icon_map} size="1.1rem" stroke={1.5} />
          <Text className={classes.country_text}>
            {data.town.title}
          </Text>
        </Group>
      </Card.Section>
    </Card>
  );
}