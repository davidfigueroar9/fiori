import React from 'react';
import Navbar from 'components/Navbar';
import Categories from 'components/Categories';
import './styles.css';

const categories = [
  {
    id: 1,
    name: 'Blouse Red',
    image: 'https://www.rosewe.com/images/201811/source_img/214639_G_15423504593130.jpg',
    price: '200$',
  },
  {
    id: 2,
    name: 'Blouse Moderm',
    image: 'https://studiofco.vteximg.com.br/arquivos/ids/1125850-1000-1071/camisasyblusas-militar-s170669-1.jpg?v=637012218118930000',
    price: '230$',
  },
  {
    id: 3,
    name: 'Blouse Beach',
    image: 'http://www.tecnosoporte.es/images//pic/F4821D00H-A11-390685.jpg',
    price: '190$',
  },
  {
    id: 4,
    name: 'Casual Blouse',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhdeuABa3Z4EFeH9smgxnTQLnDxwoTHlfucOAZ8StboMTVN2F2Q',
    price: '130$',
  },
  {
    id: 5,
    name: 'Blue Man Casual',
    image: 'https://i.pinimg.com/originals/78/f5/3d/78f53d1a1a9aba5baca29f1fd52a306c.jpg',
    price: '134$',
  },
  {
    id: 6,
    name: 'Bronw Man Casual',
    image: 'https://i.pinimg.com/originals/bc/d0/63/bcd0639ed03af715e98f0b82d7edac4f.jpg',
    price: '114$',
  },
  {
    id: 7,
    name: 'Black Man Casual',
    image: 'https://lukshop.vteximg.com.br/arquivos/ids/226148-414-515/36_1108002_050000_0.jpg?v=636582850524100000',
    price: '110$',
  },
  {
    id: 8,
    name: 'Short Casual Up',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYL0clzaLSLkcOdVn_4mmB1Tl6BWwB7R0gqetrGS4poCKo4yA4CA',
    price: '120$',
  },
];

const Cart = () => (
  <div className="Cart">
    <Categories categories={categories} />
    <Navbar title="Cart" />
  </div>
);

export default Cart;
