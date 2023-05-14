import { IconMapPin } from '@tabler/icons-react';
import { SlStar } from 'react-icons/sl';
import { FaStar } from 'react-icons/fa';
import { Card, Text, Group, createStyles, rem, List, } from '@mantine/core';
import { PaymentInfo } from '../PaymentInfo/PaymentInfo';



const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.MyApp[0],
    width: 773,
    minHeight: 137,
    marginBottom:16,
  },
  profession_text: {
    fontWeight: 600,
    fontSize: 20,
    color: theme.colors.MyApp[1],
    marginTop: 20,
    maxWidth:650,
  },
  typeOfWork_text: {
    fontWeight: 400,
    fontSize: 16,
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
    marginTop: 20,

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
}));

interface ShortVacancyCardProps {

  profession: string;
  country: string;
  paymentFrom: string;
  paymentTo: string;
  typeOfWork: string;
  currency: string;

}

export function ShortVacancyCard({ profession, paymentFrom, paymentTo, currency, country, typeOfWork }: ShortVacancyCardProps) {
  const { classes, theme } = useStyles();
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>

      <Card.Section className={classes.section} mt="md">
        <Group className={classes.content_position} position="apart">
          <Text className={classes.profession_text}>
            {profession}
          </Text>
          <SlStar size="1.3rem" className={classes.star} fill={theme.colors.MyApp[3]} />
        </Group>
        <Group spacing={11} className={classes.content_position}>
          <PaymentInfo paymentFrom={paymentFrom} paymentTo={paymentTo} currency={currency} />
          <List>
            <List.Item className={classes.typeOfWork_text}>{typeOfWork}</List.Item>
          </List>

        </Group>
        <Group spacing={11} className={classes.content_position}>
          <IconMapPin className={classes.icon_map} size="1.1rem" stroke={1.5} />
          <Text className={classes.country_text}>
            {country}
          </Text>
        </Group>
      </Card.Section>
    </Card>
  );
}