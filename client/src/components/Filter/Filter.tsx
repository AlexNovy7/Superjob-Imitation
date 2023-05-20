import { IconChevronDown } from '@tabler/icons-react';
import { useStyles } from './Filter.styles';
import { Card, Text, Group, CloseButton, MultiSelect, NumberInput, Button, Loader } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setFilterData } from '../../redux/slices';
import { useAppDispatch, useFetchIndustries } from '../../hooks';


export function Filter() {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const [industry, setIndustry] = useState([] as string[]);
    const [paymentFrom, setPaymentFrom] = useState('' as number | string);
    const [paymentTo, setPaymentTo] = useState('' as number | string);
    const { data, isLoading } = useFetchIndustries();
    const industryData = data?.map((item: { key: number; title_rus: string; }) => {
        return { value: item.key, label: item.title_rus }
    })
    const handleButtonClick = () => {
        dispatch(setFilterData({ industry, paymentFrom, paymentTo }))
    }
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (<Card withBorder radius="md" className={classes.card}>
                <Group spacing={70} >
                    <Text className={classes.title}>Фильтры</Text>
                    <Group spacing={1}>
                        <Text className={classes.reset}>Cбросить все</Text>
                        <CloseButton title="Settings" iconSize={14} />
                    </Group>
                </Group>
                <MultiSelect
                    maxSelectedValues={2}
                    mt={27}
                    data={industryData}
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
                    onChange={setPaymentFrom}
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
                    onChange={setPaymentTo}
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
            </Card>)}</>
    );
}