import { Container, useMantineTheme } from "@mantine/core";
import { ShortVacancyPagination } from "../../ShortVacancyPagination/ShortVacancyPagination";

export const SelectPage = () => {
  const theme = useMantineTheme();
  return (
    <Container bg={theme.colors.MyApp[5]} pt={40} pb={5} size={1440}>
      <ShortVacancyPagination queryUsage={false} mtPagination={65} />
    </Container>
  );
}