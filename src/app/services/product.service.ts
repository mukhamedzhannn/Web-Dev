import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb',
      description: 'Флагманский смартфон Apple с инновационными функциями, мощным процессором A16 Bionic и улучшенной камерой.',
      price: 399890,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/hcf/84963463249950.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/hcf/84963463249950.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h37/84963463839838.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h74/84963464495134.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-113137517/'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13',
      description: 'Тонкий и легкий ноутбук с процессором M2, Retina дисплеем и временем автономной работы до 18 часов.',
      price: 499890,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h0e/85019138015262.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h0e/85019138015262.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h37/85019138539550.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h74/85019139131422.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-102198517/'
    },
    {
      id: 3,
      name: 'Смарт-часы Apple Watch Series 9',
      description: 'Умные часы с ярким дисплеем, расширенными функциями здоровья и фитнеса, двойным касанием.',
      price: 159890,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h28/h5d/86239064735774.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h28/h5d/86239064735774.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h37/86239065227294.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h74/86239065718814.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45mm-113137517/'
    },
    {
      id: 4,
      name: 'Наушники Apple AirPods Pro 2',
      description: 'Беспроводные наушники с активным шумоподавлением, пространственным аудио и улучшенным качеством звука.',
      price: 98990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h0a/84594002329630.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h0a/84594002329630.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h37/84594002919454.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h74/84594003509278.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-113677582/'
    },
    {
      id: 5,
      name: 'Планшет Samsung Galaxy Tab S9',
      description: 'Мощный планшет с Dynamic AMOLED 2X дисплеем, процессором Snapdragon 8 Gen 2 и поддержкой S Pen.',
      price: 299890,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/hb6/84935425458206.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd1/hb6/84935425458206.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h37/84935426048030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h74/84935426637854.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-5g-113137517/'
    },
    {
      id: 6,
      name: 'Кофемашина DeLonghi Magnifica S',
      description: 'Автоматическая кофемашина для приготовления эспрессо и капучино с встроенной кофемолкой.',
      price: 249890,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/hb7/64349611196446.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h57/hb7/64349611196446.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h37/64349611819038.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h74/64349612441630.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/delonghi-magnifica-s-ecam-22-110-sb-113137517/'
    },
    {
      id: 7,
      name: 'Пылесос Dyson V15 Detect',
      description: 'Беспроводной пылесос с лазерной подсветкой, аккумулятором до 60 минут работы и системой фильтрации.',
      price: 399890,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/hb7/64349611196446.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h57/hb7/64349611196446.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h37/64349611819038.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h74/64349612441630.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-113137517/'
    },
    {
      id: 8,
      name: 'Телевизор LG OLED C3 65"',
      description: '4K OLED телевизор с процессором α9 Gen6, поддержкой Dolby Vision и игровыми функциями.',
      price: 699890,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h28/h5d/86239064735774.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h28/h5d/86239064735774.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h37/86239065227294.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h74/86239065718814.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lg-oled65c3rla-165-1-sm-113137517/'
    },
    {
      id: 9,
      name: 'Фотоаппарат Sony Alpha A7 III',
      description: 'Полнокадровая беззеркальная камера с 24.2 МП сенсором, 4K видео и быстрой автофокусировкой.',
      price: 599890,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/hcf/84963463249950.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/hcf/84963463249950.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h37/84963463839838.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h74/84963464495134.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-alpha-a7-iii-kit-28-70-mm-113137517/'
    }

  ];

  getProducts(): Product[] {
    return this.products;
  }
}
