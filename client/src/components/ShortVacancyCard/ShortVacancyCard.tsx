import { IconHeart,IconMapPin,IconStarFilled } from '@tabler/icons-react';
import { SlStar} from 'react-icons/sl';
import { FaStar} from 'react-icons/fa';




import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  star: {
    border:theme.colors.dark[4],
   color:theme.colors.dark[4],
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
  currency: string;
  type_of_work: string;
  
}

export function ShortVacancyCard({  profession, currency, country,type_of_work }: ShortVacancyCardProps) {
  const { classes,theme } = useStyles();

  

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
        <Text fz="lg" fw={500}>
            {profession}
          </Text>
         
          <SlStar size="1.3rem" className={classes.star} fill={theme.colors.MyApp[3]}   />
         
          
      

        </Group>
      
        <Group>
        <Text fz="sm" mt="xs">
          {currency}
        </Text>
        <Text fz="sm" mt="xs">
          {type_of_work}
        </Text>
        </Group>
        <Group>
        <IconMapPin size="1.1rem"  stroke={1.5} />
        <Text fz="sm" mt="xs">
          {country}
        </Text>
        </Group>
      
      </Card.Section>
    </Card>
  );
}