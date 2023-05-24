import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  search_btn: {
    width: 83,
    backgroundColor: theme.colors.MyApp[1],
    borderRadius: 8,
    height: 32,
    marginRight: 62,
    [theme.fn.smallerThan("xl")]: {
      fontSize: 7,
      maxWidth: 60,
      marginRight: 10,
    },
  },

  search_input: {
    fontWeight: 400,
    fontSize: 14,
    width: 773,
    marginBottom: 15,
    [theme.fn.smallerThan("xl")]: {
      maxWidth: 280,
      padding: "xs",
    },
  },
  placeholder: {
    fontWeight: 400,
    fontSize: 14,
  },
  icon: {
    paddingLeft: 0,
  },
}));
