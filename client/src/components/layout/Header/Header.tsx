import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Image } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    height: '100%',
    maxWidth:'1440px',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1.2,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: 16,
    fontWeight: 500,

    
  },

  linkActive: {
    '&, &:hover': {
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor[1] }).color,
    },
  },
}));

interface HeaderProps {
  links: { link: string; label: string }[];
}

export function AppHeader({ links }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header  height={84} sx={{ border: 'none' }}>
      <Container className={classes.header}>
      <Image  maw={140} ml={150}  src="https://i.ibb.co/F7jSt0X/Frame-116046626.png" alt="logo" />
        <Group ml={268} spacing={38} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
}