import { Container } from "@mantine/core";
import { ShortVacancyPagination } from "../../ShortVacancyPagination/ShortVacancyPagination";

export const SelectPage = () => {
  return (
    <Container mt={40}>
      <ShortVacancyPagination queryUsage={false} mtPagination={105} />
    </Container>


  );
}