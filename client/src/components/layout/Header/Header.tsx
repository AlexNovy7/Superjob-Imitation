import { useEffect, useState } from 'react';
import { Header, Container, Group, rem } from '@mantine/core';
import { Image } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../../../hooks';
import { useMediaQuery } from '@mantine/hooks';
import { useStyles } from './Header.styles';
import { HeaderProps } from '../../../interfaces';
import { IMAGES } from '../../../data';


export function AppHeader({ links }: HeaderProps) {
  const largeScreen = useMediaQuery('(min-width: 90em)');
  const { classes, cx } = useStyles();
  const link = useAppSelector((state) => state.appReducer.headerLink)
  const navigate = useNavigate();

  useEffect(() => {
    setActive(link)
  }, [link]);

  const [active, setActive] = useState(link);
  const items = links.map((link) => (
    <div
      key={link.label}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
      }}
    >
      {link.label}
    </div>
  ));
  return (
    <Header height={84} sx={{ border: 'none' }}>
      <Container className={classes.header}>
        <Image maw={140} ml={largeScreen ? 150 : 10} src={IMAGES.logo} alt="logo" />
        <Group ml={largeScreen ? 268 : 10} spacing={largeScreen ? 38 : 10}>
          {items}
        </Group>
      </Container>
    </Header>
  );
}