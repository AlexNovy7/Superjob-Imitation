import { TextInput, TextInputProps, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { setSearchData } from '../../redux/slices';
import { useStyles } from './Search.styles';



export function Search(props: TextInputProps) {
  const largeScreen = useMediaQuery('(min-width: 90em)');
  const { classes } = useStyles();
  const [search, setSearch] = useState('' as string);
  const dispatch = useAppDispatch();
  const handleButtonClick = () => {
    dispatch(setSearchData(search))
  }
  return (
    <TextInput
      data-elem="search-input"
      className={classes.search_input}
      w={largeScreen ? 773 : 280}
      mb={15}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="md"
      size="lg"
      iconWidth={33}
      onChange={(event) => setSearch(event.currentTarget.value)}
      rightSection={
        <Button
          data-elem="search-button"
          w={largeScreen ? 83 : 60}
          mr={largeScreen ? 62 : 10}
          className={classes.search_btn}
          onClick={handleButtonClick}
        >
          Поиск
        </Button>
      }
      styles={{
        input: {
          fontWeight: 400,
          fontSize: 14
        },
        icon: {
          paddingLeft: 0,
        }
      }}
      placeholder="Введите название вакансии"
      {...props}
    />
  );
}