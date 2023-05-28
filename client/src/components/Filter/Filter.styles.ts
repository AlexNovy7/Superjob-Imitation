import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  reset_btn: {
    backgroundColor: "transparent",
    width: 115,
    height: 25,
    border: "none",
    color: theme.colors.MyApp[3],
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  card: {
    width: 315,
    height: 360,
    padding: 17,
    marginLeft: 27,
    backgroundColor: theme.colors.MyApp[0],

    [theme.fn.smallerThan("xl")]: {
      width: 290,
      padding: 5,
      margin: "0 auto",
    },
  },

  title: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: 20,
    [theme.fn.smallerThan("xl")]: {
      fontSize: 14,
    },
  },
  reset: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: 14,
    color: theme.colors.MyApp[3],
    border: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  apply_btn: {
    backgroundColor: theme.colors.MyApp[1],
    width: 275,
    borderRadius: 8,
    height: 40,
    marginTop: 20,
  },
  multi_select: {
    marginTop: 27,
    [theme.fn.smallerThan("xl")]: {
      marginTop: 10,
    },
  },
}));
