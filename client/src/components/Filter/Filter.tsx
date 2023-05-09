import { IconChevronDown } from '@tabler/icons-react';
import { useStyles } from './Filter.styles';
import { Card, Text, Group, CloseButton, MultiSelect, NumberInput, Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setFilterData } from '../../redux/slices';





export function Filter() {
    const { classes } = useStyles();
    const dispatch = useDispatch();
    const [industry, setIndustry] = useState(null as string[]|null);
    const [currencyFrom, setCurrencyFrom] = useState('' as number|string);
    const [currencyTo, setCurrencyTo] = useState('' as number|string);
    const handleButtonClick=()=>{
        dispatch(setFilterData({industry,currencyFrom,currencyTo}))
    }
    return (
        <Card withBorder radius="md" className={classes.card}>
            <Group spacing={70} >
                <Text className={classes.title}>Фильтры</Text>
                <Group spacing={1}>
                    <Text className={classes.reset}>Cбросить все</Text>
                    <CloseButton title="Settings" iconSize={14} />
                </Group>
            </Group>
            <MultiSelect
                mt={27}
                data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
                label=" Отрасль"
                radius="md"
                size="md"
                placeholder="Выберете отрасль"
                onChange={setIndustry}
                rightSection={<IconChevronDown size="1.3rem" />}
                maxDropdownHeight={200}
                styles={{
                    rightSection: { pointerEvents: 'none' },
                    searchInput: { fontSize: 14, width: 14, marginLeft: 3 },
                    input: { width: 275, marginTop: 5 },
                    label: { fontSize: 16, fontWeight: 700 }
                }}
                rightSectionWidth={60}
            />

            <NumberInput
                mt={18}
                label="Оклад"
                radius="md"
                size="md"
                placeholder="от"
                onChange={setCurrencyFrom}
                min={0}
                styles={{
                    control: { borderStyle: 'none' },
                    input: { width: 275, marginTop: 5 },
                    label: { fontSize: 16, fontWeight: 700 },
                    rightSection: { height: 30, marginTop: 5 }
                }}
                rightSectionWidth={45}
            />
            <NumberInput
                mt={8}
                placeholder="до"
                onChange={setCurrencyTo}
                radius="md"
                size="md"
                min={0}
                styles={{
                    control: { borderStyle: 'none' },
                    input: { width: 275, marginTop: 5 },
                    label: { fontSize: 16, fontWeight: 700 },
                    rightSection: { height: 30, marginTop: 5 }
                }}
                rightSectionWidth={45}
            />
            <Button
            onClick={handleButtonClick}
                className={classes.filter_btn}>
                Применить
            </Button>
        </Card>
    );
}