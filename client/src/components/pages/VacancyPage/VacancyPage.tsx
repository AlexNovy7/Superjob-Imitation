import { Card, Container, createStyles, rem } from "@mantine/core";
import { ShortVacancyCard } from "../../ShortVacancyCard/ShortVacancyCard";

const useStyles = createStyles((theme) => ({

    card: {
        backgroundColor: theme.colors.MyApp[0],
        width: 773,
        minHeight: 548,
        marginBottom: 16,
      },
 
     section: {
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
      }
 }));



export const VacancyPage = () => {
    const { classes } = useStyles();
    const vacancy = JSON.parse(localStorage.clickedVacancy)
    console.log(vacancy);
    //check it
    //const {  theme } = useStyles();


    return (
        <>
            <Container mt={40} size={1440}>
            <Container mx="auto">
           
                    <ShortVacancyCard
                        card_minHeight={157}
                        profession_text_fontWeight={700}
                        profession_text_fontSize={28}
                        profession_text_color={'#232134'}
                        typeOfWork_text_fontWeight={400}
                        typeOfWork_text_fontSize={20}
                        payment_text_fontSize={20}
                        profession={vacancy.profession}
                        paymentFrom={vacancy.payment_from}
                        paymentTo={vacancy.payment_to}
                        currency={vacancy.currency}
                        typeOfWork={vacancy.type_of_work.title}
                        country={vacancy.town.title} />
                    {vacancy && <Card withBorder radius="md" p="md" mx="auto" className={classes.card}>

<Card.Section  mt="md" className={classes.section}>
<div dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
</Card.Section>
</Card>}


          
                </Container>
            </Container>


        </>


    );
}
