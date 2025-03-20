import Banner1 from '@/assets/banner1.svg';
import Lamo from '@/assets/lamo.svg';
import Blender from '@/assets/blender.svg';
import Coko from '@/assets/coko.svg';
import Kuler from '@/assets/kuler.svg';

import Mediapark from '@/assets/mediapark.svg';
import Uzum_Market from '@/assets/uzum_market.svg';
import Texnomart from '@/assets/texnomart.svg';
import Wilbers from '@/assets/wilbers.svg';
import Idea from '@/assets/idea.svg';
import Alif from '@/assets/alifshop.svg';
import Olcha from '@/assets/olcha.svg';
import Asaxiy from '@/assets/asaxiy.svg';
import Pop_Brand from '@/assets/pop_brand_img1.svg';

import News1 from '@/assets/news1.svg';
import News2 from '@/assets/news2.svg';
import News3 from '@/assets/news3.svg';

import Product_IMAGE from '@/assets/banner.svg';
import Product_IMAGE2 from '@/assets/cart.svg';

export const mockData = {
    bannerImages: [
      { src: Banner1, text: "Лучшие предложения для вас" },
      { src: Banner1, text: "Качество и стиль для вашего дома" },
      { src: Banner1, text: "Качес и стиль для вашего" },
      { src: Banner1, text: "Качество и стильвашего дома" },
    ],

    categoryItems: [
      { id: '1', imgSrc: Lamo, title: 'Соковыжималка LAMO LM-J618', price: "$120", status: 'top' },
      { id: '2', imgSrc: Blender, title: 'Блендер LAMO LM-B880', price: "$120", status: 'top' },
      { id: '3', imgSrc: Coko, title: 'Соковыжималка LAMO LM-J719', price: "$120", status: 'top' },
      { id: '4', imgSrc: Banner1, title: 'Cat', price: "$120", },
      { id: '5', imgSrc: Coko, title: 'Соковыжималка LAMO LM-J719', price: "$120", status: 'top' },
      { id: '6', imgSrc: Kuler, title: 'Кулер для воды LM-D340CTR', price: "$120", status: 'top' },
      { id: '7', imgSrc: Banner1, title: 'Category 7', price: "$120",},
      { id: '8', imgSrc: Banner1, title: 'Category 8', price: "$120", },
      { id: '9', imgSrc: Banner1, title: 'Category 9', price: "$120", },
      
    ],
    productItems: [
      { id: '1', imageSrc: Blender, title: "Tote Bags1", price: "$120", isPopular: true },
      { id: '2', imageSrc: Coko, title: "Tote Bags2", price: "$120", isPopular: false },
      { id: '3', imageSrc: Coko, title: "Tote Bags3", price: "$120", isPopular: false },
      { id: '4', imageSrc: Blender, title: "Tote Bags4", price: "$120", isPopular: false },
      { id: '5', imageSrc: Coko, title: "Tote Bags5", price: "$120", isPopular: false },
      { id: '6', imageSrc: Blender, title: "Tote Bags6", price: "$120", isPopular: false },
      { id: '7', imageSrc: Kuler, title: "Tote Bags7", price: "$120", isPopular: false },
      { id: '8', imageSrc: Coko, title: "Tote Bags8", price: "$120", isPopular: false },
    ],

    purchaseItems: [
      { id: "1", imageSrc: Mediapark },
      { id: "2", imageSrc: Uzum_Market },
      { id: "3", imageSrc: Texnomart },
      { id: "4", imageSrc: Wilbers },
      { id: "5", imageSrc: Idea },
      { id: "6", imageSrc: Alif },
      { id: "7", imageSrc: Olcha },
      { id: "8", imageSrc: Asaxiy }
    ],

    newsItems: [
      { id: "1", imageSrc: News1, title: "Классные приемы для создания образа на кухне" },
      { id: "2", imageSrc: News2, title: "Классные приемы для создания образа на кухне" },
      { id: "3", imageSrc: News3, title: "Классные приемы для создания образа на кухне" },
      { id: "4", imageSrc: News1, title: "Классные приемы для создания образа на кухне" },
      { id: "5", imageSrc: News2, title: "Классные приемы для создания образа на кухне" },
      { id: "6", imageSrc: News3, title: "Классные приемы для создания образа на кухне" },
      { id: "7", imageSrc: News1, title: "Классные приемы для создания образа на кухне" },
      { id: "8", imageSrc: News2, title: "Классные приемы для создания образа на кухне" }
    ],

    product: {
      id: "1",
      title: "HP ProBook 455 G9 R5-5625U /8GB 512GB SSD/ 15.6 FHD /D NOUTBUK",
      price: 8054000,
      condition: "Yangi",
      description: "продам ноутбук новый. только загрузили виндус и всё.на нем никто не работал.в идеальном состоянии",
      itemNumber: "37764829",
      publishedDate: "2024-12-15T20:59:00",
      images: [
        { id: "1", url: Product_IMAGE, alt: "HP ProBook front view" }, 
        { id: "2", url: Product_IMAGE, alt: "HP ProBook side view" },
        { id: "3", url: Product_IMAGE2, alt: "HP ProBook specs" },
        { id: "4", url: Product_IMAGE, alt: "HP ProBook box" },
      ],
      specifications: [
        { name: "Holat", value: "Yangi" },
        { name: "Protsessor", value: "AMD Ryzen 5 5625U" },
        { name: "Operativ xotira", value: "8GB" },
        { name: "Xotira", value: "512GB SSD" },
        { name: "Ekran", value: "15.6 FHD" },
      ],
      seller: {
        id: "seller1",
        name: "Наталья",
        joinDate: "2024-11-01",
        phone: "+998901234567",
        telegram: "https://t.me/username",
        location: {
          address: "Узбекистан, Ташкент, Сергелийский район, массив Куйлюк",
          district: "Сергелийский район",
          landmark: "47 школа",
          coordinates: [41.2995, 69.2401], // To'g'ri format
        },
      },  
      relatedProducts: [
        {
          id: "1", // Id string bo'lishi kerak
          title: "Hp omen 16 новый из Америки на 14-ом поколение",
          price: 1130,
          image: Product_IMAGE,
          location: "Toshkent",
          publishedDate: "2024-12-18T06:50:00",
        },
        {
          id: "2",
          title: "Noutbook sotiladi",
          price: 350,
          image: Product_IMAGE2,
          location: "Toshkent",
          publishedDate: "2024-12-18T06:24:00",
        },
        {
          id: "3",
          title: "Lenovo ноутбуки сотилади",
          price: 300,
          image: Product_IMAGE,
          location: "Toshkent",
          publishedDate: "2024-12-18T06:11:00",
        },
      ],
    },
    
    tabs: [
      {
        id: 'summer',
        label: 'Yozgi Hovuzlar',
        products: [
          { id: 'summer1', imageSrc: Pop_Brand, title: "Summer Bag1", price: "$100", isPopular: false },
        ],
      },
      {
        id: 'autumn',
        label: 'Kuzgi Hovuzlar',
        products: [
          { id: 'autumn1', imageSrc: Pop_Brand, title: "Autumn Bag1", price: "$110", isPopular: false },
        ],
      },
    ],
};