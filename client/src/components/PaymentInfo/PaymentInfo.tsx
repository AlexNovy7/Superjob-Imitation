import { createStyles, Text } from '@mantine/core';
interface PaymentInfoStylesProps {

  payment_text_fontSize: number;

}

const useStyles = createStyles((theme,{payment_text_fontSize}:PaymentInfoStylesProps) => ({
  
  payment_text:{
    fontWeight: 700,
    fontSize: payment_text_fontSize,
    color:theme.colors.MyApp[4],
    marginTop:7,
    
  },

  
}));


type PaymentInfoAllProps = PaymentInfoProps&PaymentInfoStylesProps




interface PaymentInfoProps {

  paymentFrom: number | string;
  paymentTo: number | string;
  currency: string;

}


export const PaymentInfo = ({ payment_text_fontSize,paymentFrom, paymentTo, currency }: PaymentInfoAllProps) => {
  const { classes } = useStyles({payment_text_fontSize});
  if (paymentFrom === 0 && paymentTo === 0) {
    
    return <Text className={classes.payment_text}>з/п по договоренности</Text>
 } else if (paymentFrom === 0 && paymentTo !== 0) {
   
    return <Text className={classes.payment_text}>з/п {paymentTo}  {currency}</Text>
  } else if (paymentFrom !== 0 && paymentTo === 0) {
   
    return <Text className={classes.payment_text}>з/п от {paymentFrom}  {currency}</Text>
  } else {
   
    return <Text className={classes.payment_text}>з/п {paymentFrom} - {paymentTo}  {currency}</Text>
 }

}