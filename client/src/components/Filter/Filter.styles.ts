import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

   card: {

        width: 315,
        height: 360,
        backgroundColor: theme.colors.MyApp[0],
    },

    title: {
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize: 20,
    },
    reset: {
        fontWeight: 500,
        lineHeight: 1.2,
        fontSize: 14,
        color: theme.colors.MyApp[3],
        '&:hover': {
            cursor: 'pointer',
        },
    },
    filter_btn:{
        backgroundColor:theme.colors.MyApp[1],
        width:275,
        borderRadius: 8,
        height:40,
        marginTop:20,
    }
}));