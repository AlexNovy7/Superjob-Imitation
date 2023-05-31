export interface ShortVacancyCardStylesProps {
  card_minHeight: number;
  profession_text_fontWeight: number;
  profession_text_fontSize: number;
  profession_text_color: string;
  typeOfWork_text_fontWeight: number;
  typeOfWork_text_fontSize: number;
}

export interface ApiVacancyData {
  profession: string;
  currency: string;
  id: number;
  payment_from: number;
  payment_to: number;
  type_of_work: {
    id: string;
    title: string;
  };
  vacancyRichText: string;
  town: {
    id: number;
    title: string;
  };
}
export interface ShortVacancyCardProps {
  data: ApiVacancyData;
  payment_text_fontSize: number;
}

export type ShortVacancyCardAllProps = ShortVacancyCardStylesProps &
  ShortVacancyCardProps;

export interface PaymentInfoStylesProps {
  payment_text_fontSize: number;
}

export interface PaymentInfoProps {
  paymentFrom: number | string;
  paymentTo: number | string;
  currency: string;
}

export type PaymentInfoAllProps = PaymentInfoProps & PaymentInfoStylesProps;

export interface queryUsageProps {
  queryUsage: boolean;
  mtPagination: number;
}

export interface HeaderProps {
  links: { link: string; label: string }[];
}
