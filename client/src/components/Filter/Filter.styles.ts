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
    backgroundColor: theme.colors.MyApp[0],
 
    [theme.fn.smallerThan("xl")]: {
      width: 300,
    },
  },

  title: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: 20,
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
}));
