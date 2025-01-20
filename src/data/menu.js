import {cabbages, chicken, cow, fish} from '../../public/images/Images'
import {a_gyudon00, b_katsudon00, c_poke00, d_tofu00, e_tokyo00, f_ramen00, g_tilapia00, h_mushroom00, i_teriyaki00} from '../../public/images/Images'

export const menu = [
    {
        product: 'GYU DON', 
        info: 'Simmered beef and onion on rice',
        price: '145.00',
        time: '14',
        category: 'Beef',
        categoryImage: cow,
        image: a_gyudon00
    },
    {
        product: 'KATSU DON', 
        info: 'Char-grilled chicken on rice',
        price: '145.00',
        time: '30',
        category: 'Chicken',
        categoryImage: chicken,
        image: b_katsudon00
    },
    {
        product: 'POKE DON', 
        info: 'Salmon and veggies on rice',
        price: '300.00',
        time: '15',
        category: 'Seafood',
        categoryImage: fish,
        image: c_poke00
    },
    {
        product: 'MAPO TOFU', 
        info: 'Seasoned tofu on rice',
        price: '250.00',
        time: '15',
        category: 'Vegetarian',
        categoryImage: cabbages,
        image: d_tofu00
    },
    {
        product: 'TOKYO BEEF', 
        info: 'Roasted beef with veggies on rice',
        price: '320.00',
        time: '35',
        category: 'Beef',
        categoryImage: cow,
        image: e_tokyo00
    },
    {
        product: 'SOY-MISO RAMEN', 
        info: 'Soy-miso and mushroom ramen',
        price: '350.00',
        time: '25',
        category: 'Vegetarian',
        categoryImage: cabbages,
        image: f_ramen00
    },
    {
        product: 'TILAPIA', 
        info: 'Togarashi seasoned tilapia on rice',
        price: '320.00',
        time: '25',
        category: 'Seafood',
        categoryImage: fish,
        image: g_tilapia00
    },
    {
        product: 'SPRING PEA RAMEN', 
        info: 'Spring pea and mushroom ramen',
        price: '350.00',
        time: '30',
        category: 'Vegetarian',
        categoryImage: cabbages,
        image: h_mushroom00
    },
    {
        product: 'CHICKEN TERIYAKI', 
        info: 'Simmered beef and onion on rice',
        price: '280.00',
        time: '40',
        category: 'Chicken',
        categoryImage: chicken,
        image: i_teriyaki00
    }
];