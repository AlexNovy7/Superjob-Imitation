import { createStyles, rem } from '@mantine/core';
import { ShortVacancyCardStylesProps } from '../../interfaces';

export const useStyles = createStyles((theme, { card_minHeight,
    profession_text_fontWeight,
    profession_text_fontSize,
    profession_text_color,
    typeOfWork_text_fontWeight,
    typeOfWork_text_fontSize,
}: ShortVacancyCardStylesProps) => ({
    card: {
        backgroundColor: theme.colors.MyApp[0],
        minHeight: card_minHeight,
        marginBottom: 16,
        '&:hover': {
            cursor: 'pointer'
        },
    },
    profession_text: {
        fontWeight: profession_text_fontWeight,
        fontSize: profession_text_fontSize,
        color: profession_text_color,
        [theme.fn.smallerThan("xl")]: {
            fontSize: 12,
        },
    },
    typeOfWork_text: {
        fontWeight: typeOfWork_text_fontWeight,
        fontSize: typeOfWork_text_fontSize,
        marginTop: 5,
        [theme.fn.smallerThan("xl")]: {
            fontSize: 10,
        },
    },


    section: {
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },
    content_position: {
        marginRight: 8,
        marginLeft: 8,
    },

    star: {
        border: theme.colors.dark[4],
        color: theme.colors.dark[4],
        strokeWidth: 12,
        position: "relative",
        zIndex: 100000000,

    },

    label: {
        textTransform: 'uppercase',
        fontSize: theme.fontSizes.xs,
        fontWeight: 700,
    },
    country_text: {
        fontWeight: 400,
        fontSize: 16,
        color: theme.colors.MyApp[4],
        marginTop: 7,
        [theme.fn.smallerThan("xl")]: {
            fontSize: 10,
        },
    },
    icon_map: {
        marginTop: 7,
    },
    btn: {
        padding: 0,
        border: "none",
        backgroundColor: "transparent",
        marginTop: 15,
        '&:hover': {
            backgroundColor: "transparent",
        },
    }
}));