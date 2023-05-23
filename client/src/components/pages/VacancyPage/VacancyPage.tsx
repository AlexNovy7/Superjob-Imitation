import { Card, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ShortVacancyCard } from "../../ShortVacancyCard/ShortVacancyCard";
import { useStyles } from "./VacancyPage.styles";


export const VacancyPage = () => {
    const { classes, theme } = useStyles();
    const largeScreen = useMediaQuery('(min-width: 90em)');
    const vacancy = JSON.parse(localStorage.clickedVacancy)
    
    return (
        <>
            <Container bg={theme.colors.MyApp[5]} pt={40} pb={50} size={1440}>
                <Container mx="auto">
                    <ShortVacancyCard
                        card_minHeight={157}
                        profession_text_fontWeight={700}
                        profession_text_fontSize={28}
                        profession_text_color={theme.colors.MyApp[4]}
                        typeOfWork_text_fontWeight={400}
                        typeOfWork_text_fontSize={20}
                        payment_text_fontSize={20}
                        data={vacancy}
                    />
                    {vacancy &&
                        <Card withBorder radius="md" p="md" mx="auto" w={largeScreen ? 773 : 280} className={classes.card}>
                            <Card.Section mt="md" className={classes.section}>
                                <div dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
                            </Card.Section>
                        </Card>}
                </Container>
            </Container>
        </>
    );
}
