import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.MyApp[0],
    width: 773,
    minHeight: 548,
    marginBottom: 16,
    [theme.fn.smallerThan("xl")]: {
      width: 280,
    },
  },

  section: {
    borderBottom: `${rem(1)} solid ${theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));
