import { Text } from '@mantine/core';




interface PaymentInfoProps {

  paymentFrom: number | string;
  paymentTo: number | string;
  currency: string;

}


export const PaymentInfo = ({ paymentFrom, paymentTo, currency }: PaymentInfoProps) => {
 
  if (paymentFrom === 0 && paymentTo === 0) {
    
    return <Text fz="sm" mt="xs">з/п по договоренности</Text>
 } else if (paymentFrom === 0 && paymentTo !== 0) {
   
    return <Text fz="sm" mt="xs">з/п {paymentTo} {currency}</Text>
  } else if (paymentFrom !== 0 && paymentTo === 0) {
   
    return <Text fz="sm" mt="xs">з/п от {paymentFrom} {currency}</Text>
  } else {
   
    return <Text fz="sm" mt="xs">з/п {paymentFrom}-{paymentTo} {currency}</Text>
 }

}