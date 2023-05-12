import { IconMapPin } from '@tabler/icons-react';
import { SlStar } from 'react-icons/sl';
import { FaStar } from 'react-icons/fa';
import { Card, Text, Group, createStyles, rem, } from '@mantine/core';
import { PaymentInfo } from '../PaymentInfo/PaymentInfo';



const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  star: {
    border: theme.colors.dark[4],
    color: theme.colors.dark[4],
    strokeWidth: "12"
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
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
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {profession}
          </Text>
          <SlStar size="1.3rem" className={classes.star} fill={theme.colors.MyApp[3]} />
        </Group>
        <Group>
          <PaymentInfo paymentFrom={paymentFrom} paymentTo={paymentTo} currency={currency} />
          <Text fz="sm" mt="xs">
            {typeOfWork}
          </Text>
        </Group>
        <Group>
          <IconMapPin size="1.1rem" stroke={1.5} />
          <Text fz="sm" mt="xs">
            {country}
          </Text>
        </Group>
      </Card.Section>
    </Card>
  );
}