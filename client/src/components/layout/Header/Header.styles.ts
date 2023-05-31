import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    height: "100%",
    maxWidth: "1440px",
  },
  link: {
    display: "block",
    lineHeight: 1.2,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.gray[7],
    fontSize: 16,
    fontWeight: 500,
    cursor: "pointer",
  },

  linkActive: {
    "&, &:hover": {
      color: theme.fn.variant({
        variant: "light",
        color: theme.colors.MyApp[1],
      }).color,
      cursor: "pointer",
    },
  },

  logo: {
    marginLeft: 150,
    [theme.fn.smallerThan("xl")]: {
      marginLeft: 10,
    },
  },

  group: {
    marginLeft: 268,
    [theme.fn.smallerThan("xl")]: {
      marginLeft: 10,
    },
  },
}));
