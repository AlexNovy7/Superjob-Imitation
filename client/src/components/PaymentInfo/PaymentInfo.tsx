import { Text } from '@mantine/core';
import { PaymentInfoAllProps } from '../../interfaces';
import { useStyles } from './PaymentInfo.styles';


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