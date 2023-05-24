import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  welcome_page: {
    maxWidth: 1162,
    paddingTop: 38,
    [theme.fn.smallerThan("xl")]: {
      maxWidth: 320,
      paddingTop: 20,
    },
  },
}));
