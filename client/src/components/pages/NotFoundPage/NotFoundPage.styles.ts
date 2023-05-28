import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontSize: 24,
    whiteSpace: "nowrap",
    marginTop: 30,
    [theme.fn.smallerThan("xl")]: {
      fontSize: 20,
      textAlign:"center",
      marginBottom:20,
    },
  },
  btn: {
    backgroundColor: theme.colors.MyApp[6],
    marginLeft: 80,
    marginTop: 27,
    width: 164,
    borderRadius: 8,
    height: 42,
    color: theme.colors.MyApp[7],
    "&:hover": {
      backgroundColor: theme.colors.MyApp[6],
    },
    [theme.fn.smallerThan("xl")]: {
      display:"block",
      margin:"0 auto"
    },
  },
}));
