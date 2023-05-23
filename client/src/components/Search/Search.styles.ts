import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  search_btn: {
    backgroundColor: theme.colors.MyApp[1],
    borderRadius: 8,
    height: 32,
    [theme.fn.smallerThan("xl")]: {
      fontSize: 7,
    },
  },
  search_input: {
    fontWeight: 400,
    fontSize: 14,
  },
  placeholder: {
    fontWeight: 400,
    fontSize: 14,
  },
  icon: {
    paddingLeft: 0,
  },
}));
