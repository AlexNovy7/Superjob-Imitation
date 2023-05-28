import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.MyApp[0],
    width: 773,
    minHeight: 548,
    marginBottom: 16,
    [theme.fn.smallerThan("xl")]: {
      width: 250,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  section: {
    borderBottom: `${rem(1)} solid ${theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    [theme.fn.smallerThan("xl")]: {
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
      margin: "0 auto",
    },
  },
}));
