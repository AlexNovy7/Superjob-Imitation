import { TextInput, TextInputProps,useMantineTheme, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useStyles } from './Search.styles';



export function Search(props: TextInputProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <TextInput
    className={classes.search_input}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="md"
      size="lg"
      iconWidth={33}
      rightSection={
        <Button
        className={classes.search_btn}
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