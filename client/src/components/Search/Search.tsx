import { TextInput, TextInputProps,useMantineTheme, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSearchData } from '../../redux/slices';
import { useStyles } from './Search.styles';



export function Search(props: TextInputProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [search, setSearch] = useState(''as string);
  const dispatch = useDispatch();
console.log(search)
  const handleButtonClick=()=>{
    dispatch(setSearchData(search))
}
//const a = useSelector((state)=>state.appReducer)
//console.log(a)

  return (
    <TextInput
    className={classes.search_input}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="md"
      size="lg"
      iconWidth={33}
      onChange={(event) => setSearch(event.currentTarget.value)}
      rightSection={
        <Button
        className={classes.search_btn}
        onClick={handleButtonClick}
        >
            Поиск
        </Button>
      }
      styles={{
      input:{ fontWeight: 400,
        fontSize: 14},
        icon:{
            paddingLeft:0,
        }
    }}
      placeholder="Введите название вакансии"
      {...props}
    />
  );
}