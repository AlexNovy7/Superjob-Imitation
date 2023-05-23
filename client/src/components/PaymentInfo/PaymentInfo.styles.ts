import { createStyles } from "@mantine/core";
import { PaymentInfoStylesProps } from "../../interfaces";

export const useStyles = createStyles(
  (theme, { payment_text_fontSize }: PaymentInfoStylesProps) => ({
    payment_text: {
      fontWeight: 700,
      fontSize: payment_text_fontSize,
      color: theme.colors.MyApp[4],
      marginTop: 7,
    },
  })
);
