import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  welcome_page: {
    maxWidth: 1162,
    paddingTop: 38,
    [theme.fn.smallerThan("xl")]: {
      maxWidth: 320,
      paddingTop: 20,
      margin: "0 auto",
    },
  },
  wrapper_container: {
    margin: 0,
    [theme.fn.smallerThan("xl")]: {
      padding: 0,
      margin: "0 auto",
    },
  },
}));
