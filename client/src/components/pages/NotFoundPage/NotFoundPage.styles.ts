import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontSize: 24,
    whiteSpace: "nowrap",
  },
  btn: {
    backgroundColor: theme.colors.MyApp[6],
    width: 164,
    borderRadius: 8,
    height: 42,
    color: theme.colors.MyApp[7],
    "&:hover": {
      backgroundColor: theme.colors.MyApp[6],
    },
  },
}));
