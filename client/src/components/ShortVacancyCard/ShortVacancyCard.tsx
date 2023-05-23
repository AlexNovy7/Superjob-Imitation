import { IconMapPin } from '@tabler/icons-react';
import { SlStar } from 'react-icons/sl';
import { FaStar } from 'react-icons/fa';
import { Card, Text, Group,List, Button, } from '@mantine/core';
import { PaymentInfo } from '../PaymentInfo/PaymentInfo';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { ShortVacancyCardAllProps } from '../../interfaces';
import { useStyles } from './ShortVacancyCard.styles';
import { hasStar, manipulateStar } from './ShortVacancyCardUtils';



export function ShortVacancyCard(props: ShortVacancyCardAllProps) {
  const { classes, theme } = useStyles(props);
  const { payment_text_fontSize, data } = props;
  const largeScreen = useMediaQuery('(min-width: 90em)');
  const [switchStar, setSwitchStar] = useState(false);


  useEffect(() => {
    setSwitchStar(hasStar(data))
  }, [data]);

  const handleStarClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    switchStar === false ? setSwitchStar(true) : setSwitchStar(false);
    manipulateStar(switchStar, data);
  }
  return (
    <Card data-elem={`vacancy-${data.id}`} withBorder radius="md" p={largeScreen ? "md" : "xs"} mx="auto" w={largeScreen ? 773 : 280} className={classes.card}>
      <Card.Section className={classes.section} mt="md">
        <Group className={classes.content_position} position="apart">
          <Text mt={largeScreen ? 20 : 10} w={largeScreen ? 650 : 150} className={classes.profession_text}>
            {data.profession}
          </Text>
          <Button data-elem={`vacancy-${data.id}-shortlist-button`} className={classes.btn} onClick={handleStarClick}>
            {switchStar ? <FaStar size="1.3rem" className={classes.star} color={theme.colors.MyApp[1]} /> :
              <SlStar size="1.3rem" className={classes.star} fill={theme.colors.MyApp[3]} />}
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