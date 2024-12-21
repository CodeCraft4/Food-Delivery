import {
  BrackFastImg1,
  BrackFastImg2,
  BurgerKingLogo,
  DinnerMenue,
  FoodsDealsImg1,
  FoodsDealsImg2,
  FoodsDealsImg3,
  FoodsDealsImg4,
  IngredeintImg1,
  IngredeintImg2,
  IngredeintImg3,
  KFCLogo,
  OnBoarding1Imag,
  OnBoarding2Imag,
  OnBoarding3Imag,
  PaymentMethod1,
  PaymentMethod2,
  PaymentMethod3,
  PaymentMethod4,
  PaymentMethod5,
  PaymentMethod6,
  PaymentMethod7,
  PaymentMethod8,
  PaymentMethod9,
  Performance1Img,
  Performance2Img,
  PerformanceLogo1,
} from '@assets';
import {
  BREAKFAST_TYPES,
  NUTRATES,
  ORDERS_TYPES,
  PERFORMENCE_CARDS,
  YOURS_ORDERS_TYPE,
} from '@types';

export const NUTRATION_DATA: NUTRATES[] = [
  {
    nutrat: 'Protien',
    value: 2.5,
  },
  {
    nutrat: 'Carbohydrate',
    value: 14,
  },
  {
    nutrat: 'Sodium',
    value: 19,
  },
  {
    nutrat: 'Potassuim',
    value: 5.2,
  },
];

export const INGREDIENTS = [
  <IngredeintImg1 />,
  <IngredeintImg2 />,
  <IngredeintImg3 />,
  <IngredeintImg2 />,
];

export const PERFORMANCE_CARDS: PERFORMENCE_CARDS[] = [
  {
    poster: <Performance1Img />,
    title: 'Select Prefarences',
    logo: <PerformanceLogo1 />,
    user: 'For multiple users',
    description:
      'You can now order from multiple restaurants at the same time!',
    btnText: 'SET THEM NOW',
  },
  {
    poster: <Performance2Img />,
    title: 'Select Prefarences',
    logo: <PerformanceLogo1 />,
    user: 'For multiple users',
    description:
      'You can now order from multiple restaurants at the same time!',
    btnText: 'SET ORDER NOW',
  },
  {
    poster: <Performance1Img />,
    title: 'Select Prefarences',
    logo: <PerformanceLogo1 />,
    user: 'For multiple users',
    description:
      'You can now order from multiple restaurants at the same time!',
    btnText: 'SET THEM NOW',
  },
  {
    poster: <Performance1Img />,
    title: 'Select Prefarences',
    logo: <PerformanceLogo1 />,
    user: 'For multiple users',
    description:
      'You can now order from multiple restaurants at the same time!',
    btnText: 'SET THEM NOW',
  },
];

export const RESTOURENT_LIST = [
  {
    id: 1,
    logo: <KFCLogo />,
    title: 'KFC Banani',
    menue: 'Home cook. Fat food. Buger. Home burger. Fast food',
    deliver: 'Free Delivery',
  },
  {
    id: 2,
    logo: <BurgerKingLogo />,
    title: 'Pizza Hut',
    menue: ' Buger. Home burger. Fast food',
    deliver: 'Rescued',
  },
  {
    id: 2,
    logo: <BurgerKingLogo />,
    title: 'Pizza Hut',
    menue: ' Buger. Home burger. Fast food',
    deliver: 'Rescued',
  },
  {
    id: 2,
    logo: <KFCLogo />,
    title: 'Pizza Hut',
    menue: ' Buger. Home burger. Fast food',
    deliver: 'Rescued',
  },
  {
    id: 3,
    logo: <BurgerKingLogo />,
    title: 'Burger King ',
    menue: 'Home cook. Fat food.',
    deliver: 'Offer',
  },
  {
    id: 3,
    logo: <BurgerKingLogo />,
    title: 'Burger King ',
    menue: 'Home cook. Fat food.',
    deliver: 'Offer',
  },
  {
    id: 1,
    logo: <KFCLogo />,
    title: 'Biryani',
    menue: 'Home cook.',
    deliver: 'Free Delivery',
  },
  {
    id: 1,
    logo: <KFCLogo />,
    title: 'Biryani',
    menue: 'Home cook.',
    deliver: 'Free Delivery',
  },
  {
    id: 1,
    logo: <BurgerKingLogo />,
    title: 'Biryani',
    menue: 'Home cook.',
    deliver: 'Offer',
  },
];

export const FOOD_DEALS = [
  {
    poster: <FoodsDealsImg1 />,
    title: 'Hot Deals',
  },
  {
    poster: <FoodsDealsImg2 />,
    title: 'Fast Foods',
  },
  {
    poster: <FoodsDealsImg3 />,
    title: 'Hunger',
  },
  {
    poster: <FoodsDealsImg4 />,
    title: 'Preferances',
  },
];

export const DINNER_FOOD_DEALS = [
  {
    poster: <DinnerMenue />,
    title: 'Daily',
  },
  {
    poster: <DinnerMenue />,
    title: 'Eartern',
  },
  {
    poster: <DinnerMenue />,
    title: 'Chainese',
  },
];

export const BREAKFAST_LUNCH: BREAKFAST_TYPES[] = [
  {
    poster: <BrackFastImg1 />,
    title: 'Cappuccino',
    price: 20,
  },
  {
    poster: <BrackFastImg2 />,
    title: 'Egg & Cheese',
    price: 40,
  },
  {
    poster: <BrackFastImg1 />,
    title: 'Fast Food',
    price: 50,
  },
  {
    poster: <BrackFastImg2 />,
    title: 'Some things',
    price: 60,
  },
];

export const ORDER_AGAIN: ORDERS_TYPES[] = [
  {
    logo: <KFCLogo />,
    title: 'KFC Combo',
    price: 25,
    day: 'Yestarday 3pm',
    related: '1 Kacchi biriyani. 1 chilli, onion, ',
  },
  {
    logo: <BurgerKingLogo />,
    title: 'Burger Combo',
    price: 35,
    day: 'today 4pm',
    related: '1 Kacchi biriyani. 1 chilli, onion,  ',
  },
  {
    logo: <BurgerKingLogo />,
    title: 'KFC Combo',
    price: 85,
    day: 'Yestarday 3pm',
    related: '1 Kacchi biriyani. 1 chilli, onion, ',
  },
  {
    logo: <KFCLogo />,
    title: 'Pizza Combo',
    price: 65,
    day: 'Yestarday 3pm',
    related: '1 Kacchi biriyani. 1 chilli, onion, ',
  },
];

export const ONBOARDING_SCREEN = [
  {
    id: 1,
    name: 'Save Food with our new Feature!',
    image: (width: number, height: number) => (
      <OnBoarding1Imag width={width} height={height} />
    ),
  },
  {
    id: 2,
    name: 'Set preferences for multiple Use.',
    image: (width: number, height: number) => (
      <OnBoarding2Imag width={width} height={height} />
    ),
  },
  {
    id: 3,
    name: 'Fast, rescued food your service.',
    image: (width: number, height: number) => (
      <OnBoarding3Imag width={width} height={height} />
    ),
  },
];

export const PAYMENT_METHODS = [
  {
    payLogo: <PaymentMethod1 />,
    payName: 'Credits,Debits & ATM Card',
  },
  {
    payLogo: <PaymentMethod2 />,
    payName: 'Sodexo Meal Pass',
  },
  {
    payLogo: <PaymentMethod3 />,
    payName: 'Sodexo Meal Pass',
  },
  {
    payLogo: <PaymentMethod5 />,
    payName: 'Sodexo Meal Pass',
  },
  {
    payLogo: <PaymentMethod4 />,
    payName: 'Sodexo Meal Pass',
  },
  {
    payLogo: <PaymentMethod6 />,
    payName: 'Sodexo Meal Pass',
  },
  {
    payLogo: <PaymentMethod7 />,
    payName: 'Sodexo Meal Pass',
  },
  {
    payLogo: <PaymentMethod8 />,
    payName: 'Sodexo Meal Pass',
  },
  {
    payLogo: <PaymentMethod9 />,
    payName: 'Sodexo Meal Pass',
  },
];

export const YOURS_ORDERS: YOURS_ORDERS_TYPE[] = [
  {
    poster: <IngredeintImg1 />,
    title: 'Vada Pav Station',
    address: 'hayatAbad',
    Item: '1 x Pav Bahi Gravy',
    orderOn: '2 Nov 2024 at 8:23 PM',
    price: 129,
  },
  {
    poster: <IngredeintImg2 />,
    title: 'Vada Pav Station',
    address: 'hayatAbad',
    Item: '1 x Pav Bahi Gravy',
    orderOn: '2 Nov 2024 at 8:23 PM',
    price: 149,
  },
  {
    poster: <IngredeintImg3 />,
    title: 'Vada Pav Station',
    address: 'hayatAbad',
    Item: '1 x Pav Bahi Gravy',
    orderOn: '2 Nov 2024 at 8:23 PM',
    price: 109,
  },
];
