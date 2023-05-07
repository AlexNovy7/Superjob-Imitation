import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    search_btn:{
           backgroundColor:theme.colors.MyApp[1],
           width:83,
           borderRadius: 8,
           height:32,
           marginRight:62,
       },
       search_input:{
           fontWeight: 400,
           fontSize: 14,
          maxWidth:773,
          
           
       },
       placeholder:{
           fontWeight: 400,
           fontSize: 14,
       },
       icon:{
           paddingLeft:0,
       }
   
   }));