import BeefLasagna from "../images/Beef-Lasagna.svg";
import BreakfastBundle from "../images/Breakfast-Bundle.svg";
import Cappuccino from "../images/Cappuccino.svg";
import ChickenBurritoBowl from "../images/Chicken-Burrito-Bowl.svg";
import ChickenCaesarSalad from "../images/Chicken-Caesar-Salad.svg";
import ChickenEscalope from "../images/Chicken-Escalope.svg";
import ChickenFajitasPlatter from "../images/Chicken-Fajitas-Platter.svg";
import ChickenPestoPasta from "../images/Chicken-Pesto-Pasta.svg";
import ChilliConCarne from "../images/Chilli-Con-Carne.svg";
import GranolaGreekYogurt from "../images/Granola-Greek-Yogurt.svg";
import GreekVillage from "../images/Greek-Village.svg";
import GrilledChicken from "../images/Grilled-Chicken.svg";
import KetoBox from "../images/Keto-Box.svg";
import Meatballs from "../images/Meat-balls.svg";
import OmelletePlatter from "../images/Omellete-Platter.svg";
import PaleoBreakfastPot from "../images/Paleo-Breakfast-Pot.svg";
import SeafoodChickenPaella from "../images/Seafood-Chicken-Paella.svg";
import ToastieProteinboiledEgg from "../images/Toastie-Protein-boiled-Egg.svg";
import TurkeyCheesecombo from "../images/Turkey&Cheese-combo.svg";

import { IFood } from "../types/foodOrder.interface";

// export function getData(): IFood[] {
//   return [
//     {
//       name: "Chilli Con Carne",
//       isAvailable: false,
//       category: "Meat",
//       price: 45,
//       srcImage: ChilliConCarne,
//       description:
//         "Spicy stew of chili peppers, meat, tomatoes and beans, seasoned with garlic, onions and cumin Deal Meal 2",
//       id: 1,
//     },
//     {
//       name: "Meat balls",
//       isAvailable: false,
//       category: "Meat",
//       price: 45,
//       srcImage: Meatballs,
//       description:
//         "Old favourite served with tomato sauce and mashed potatoes Deal meal 6",
//       id: 2,
//     },
//     {
//       name: "Beef Lasagna",
//       isAvailable: true,
//       category: "Meat",
//       price: 45,
//       srcImage: BeefLasagna,
//       description:
//         "Ultimate lasagna dish stuffed with Bolognese beef, melted mozzarella, parmesan cheese and bechamel sauce Deal meal 5",
//       id: 3,
//     },
//     {
//       name: "Granola Greek Yogurt",
//       isAvailable: true,
//       category: "Dessert",
//       price: 20,
//       srcImage: GranolaGreekYogurt,
//       description: "Greek Yogurt, Mix Granola, berries topped with honey",
//       id: 4,
//     },
//     {
//       name: "Seafood Chicken Paella",
//       isAvailable: false,
//       category: "Seafood",
//       price: 42,
//       srcImage: SeafoodChickenPaella,
//       description:
//         "Classic Spanish rice dish with shrimps, calamari, chicken, bell peppers, and green peas Deal meal 8",
//       id: 5,
//     },
//     {
//       name: "Chicken Escalope",
//       isAvailable: false,
//       category: "Chicken",
//       price: 42,
//       srcImage: ChickenEscalope,
//       description:
//         "2pcs Breaded chicken breast, served with mashed potato and steamed veggies, topped with honey mustard sauce Deal meal 7",
//       id: 6,
//     },
//     {
//       name: "Chicken Burrito Bowl",
//       isAvailable: true,
//       category: "Chicken",
//       price: 38,
//       srcImage: ChickenBurritoBowl,
//       description:
//         "200g Grilled chicken strips, rice, red beans, tomatoes, avocados, corn, onions and soya balsamic sauce and lemon Deal Meal 12",
//       id: 7,
//     },
//     {
//       name: "Chicken Caesar Salad",
//       isAvailable: true,
//       category: "Chicken",
//       price: 39,
//       srcImage: ChickenCaesarSalad,
//       description:
//         "Romaine lettuce and croutons dressed with homemade Caesar sauce, topped with fresh grilled chicken and Parmesan cheese Deal meal 3",
//       id: 8,
//     },
//     {
//       name: "Greek Village",
//       isAvailable: true,
//       category: "Breakfast",
//       price: 39,
//       srcImage: GreekVillage,
//       description:
//         "Lettuce, cucumbers, tomatoes, black olives, green pepper, feta cheese, onion ring, dried oregano with lemon olive oil sauce Deal Meal 11",
//       id: 9,
//     },
//     {
//       name: "Toastie Protein boiled Egg",
//       isAvailable: true,
//       category: "Breakfast",
//       price: 16,
//       srcImage: ToastieProteinboiledEgg,
//       description: "Protein Toast, boiled egg, avocado with light mayo",
//       id: 10,
//     },
//     {
//       name: "Cappuccino",
//       isAvailable: true,
//       category: "Coffee",
//       price: 16,
//       srcImage: Cappuccino,
//       description: "We are proudly serving illy coffee beans",
//       id: 11,
//     },
//     {
//       name: "Americano",
//       isAvailable: true,
//       category: "Coffee",
//       price: 16,
//       srcImage: Cappuccino,
//       description: "We are proudly serving illy coffee beans",
//       id: 12,
//     },
//     {
//       name: "Latte",
//       isAvailable: true,
//       category: "Coffee",
//       price: 16,
//       srcImage: Cappuccino,
//       description: "We are proudly serving illy coffee beans",
//       id: 13,
//     },
//     {
//       name: "Grilled Chicken",
//       isAvailable: true,
//       category: "Chicken",
//       price: 42,
//       srcImage: GrilledChicken,
//       description:
//         "Freshly grilled chicken breast topped with mushroom sauce and served with mixed white & brown rice, steamed veggies Deal meal 1",
//       id: 14,
//     },
//     {
//       name: "Chicken Fajitas Platter",
//       isAvailable: true,
//       category: "Chicken",
//       price: 42,
//       srcImage: ChickenFajitasPlatter,
//       description:
//         "Grilled Chicken strips, Bill peppers, Mushrooms, Onion, Olives, Guacamole Sauce Deal Meal 4",
//       id: 15,
//     },
//     {
//       name: "Chicken Pesto Pasta",
//       isAvailable: true,
//       category: "Chicken",
//       price: 40,
//       srcImage: ChickenPestoPasta,
//       description:
//         "Chicken strips, fossili brown pasta, cherry tomatoes, pine nuts, rocket leaves and pesto sauce Deal Meal 10",
//       id: 16,
//     },
//     {
//       name: "Omellete Platter",
//       isAvailable: true,
//       category: "Breakfast",
//       price: 33,
//       srcImage: OmelletePlatter,
//       description:
//         "Omellete 3pcs egg, slices of avocado, tomatoes and cucumber Deal Meal 13",
//       id: 17,
//     },
//     {
//       name: "Keto Box",
//       isAvailable: true,
//       category: "",
//       price: 28,
//       srcImage: KetoBox,
//       description:
//         "Grilled chicken breast, boiled eggs, avocado, steamed broccoli on bed of lettuce Deal meal 9",
//       id: 18,
//     },
//     {
//       name: "Paleo Breakfast Pot",
//       isAvailable: true,
//       category: "Breakfast",
//       price: 28,
//       srcImage: PaleoBreakfastPot,
//       description:
//         "Smoked salmon, fried egg, mashed avocado, grilled mushroom, roasted tomato & baby spinach, top with roasted seeds",
//       id: 19,
//     },
//     {
//       name: "Turkey & Cheese combo",
//       isAvailable: true,
//       category: "Breakfast",
//       price: 32,
//       srcImage: TurkeyCheesecombo,
//       description:
//         "Turkey & cheese (toasted sliced bread) Choice of Coffee (americano,latte,cappucino)",
//       id: 20,
//     },
//     {
//       name: "Breakfast Bundle",
//       isAvailable: true,
//       category: "Breakfast",
//       price: 30,
//       srcImage: BreakfastBundle,
//       description:
//         "Choice of Croissant(choco,plain, or cheese) Yoghurt granola Cup Choice of Coffee(americano, latte, cappucino)",
//       id: 21,
//     },
//   ];
// }
