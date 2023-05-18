import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Image } from '@mantine/core';
import { useNavigate } from "react-router-dom";

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

 

  link: {
    display: 'block',
    lineHeight: 1.2,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: 16,
    fontWeight: 500,
    cursor:'pointer'

    
  },

  linkActive: {
    '&, &:hover': {
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor[1] }).color,
      cursor:'pointer'
    },
  },
}));

interface HeaderProps {
  links: { link: string; label: string }[];
}

export function AppHeader({ links }: HeaderProps) {
 
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const link = localStorage.headerLink?
  JSON.parse(localStorage.headerLink): links[0].link;
  const [active, setActive] = useState(link);
  const items = links.map((link) => (
    <div
      key={link.label}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
        localStorage.setItem('headerLink',JSON.stringify(link.link))
      }}
    >
      {link.label}
    </div>
  ));

  return (
    <Header  height={84} sx={{ border: 'none' }}>
      <Container className={classes.header}>
      <Image  maw={140} ml={150}  src="https://i.ibb.co/F7jSt0X/Frame-116046626.png" alt="logo" />
        <Group ml={268} spacing={38} className={classes.links}>
          {items}
        </Group>

       
      </Container>
    </Header>
  );
}