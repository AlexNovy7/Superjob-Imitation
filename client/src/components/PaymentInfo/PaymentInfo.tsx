import { createStyles, Text } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  
  payment_text:{
    fontWeight: 700,
    fontSize: 16,
    color:theme.colors.MyApp[4],
    marginTop:7,
    
  },

  
}));







interface PaymentInfoProps {

  paymentFrom: number | string;
  paymentTo: number | string;
  currency: string;

}


export const PaymentInfo = ({ paymentFrom, paymentTo, currency }: PaymentInfoProps) => {
  const { classes } = useStyles();
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