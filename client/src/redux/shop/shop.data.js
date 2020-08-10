const SHOP_DATA = [
  {
    id: 1,
    title: 'Jackets',
    routetitle: 'jackets',
    items: [
      {
        id: 1,
        title: 'Dynamic Friends',
        imageUrl: 'https://images.unsplash.com/photo-1542482378-4e3530c8e525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      },
      {
        id: 2,
        title: 'Rainy Black',
        imageUrl: 'https://images.unsplash.com/photo-1509539662397-116cb90542f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 18
      },
      {
        id: 3,
        title: 'Corona Blue',
        imageUrl: 'https://images.unsplash.com/photo-1515614466515-e512e497a047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 35
      },
      {
        id: 4,
        title: 'Cozy Gray',
        imageUrl: 'https://images.unsplash.com/photo-1524150224918-8a8eded72c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        price: 25
      },
      {
        id: 5,
        title: 'Comfy Blue',
        imageUrl: 'https://images.unsplash.com/photo-1520975408777-d189f6edc46d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 18
      },
      {
        id: 6,
        title: 'Biker Brown',
        imageUrl: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 14
      },
      {
        id: 7,
        title: 'Snowy Red and Blue',
        imageUrl: 'https://images.unsplash.com/photo-1577489374664-6d36aa473024?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 18
      },
      {
        id: 8,
        title: 'Cold Black',
        imageUrl: 'https://images.unsplash.com/photo-1536278078870-6a4402cb2c8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 14
      }
    ]
  },
  {
    id: 2,
    title: 'Art Work',
    routetitle: 'artwork',
    items: [
      {
        id: 9,
        title: 'Michael Angelo',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 220
      },
      {
        id: 10,
        title: 'Illuminati',
        imageUrl: 'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 280
      },
      {
        id: 11,
        title: 'Pencil Shading',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 110
      },
      {
        id: 12,
        title: 'Human Chain',
        imageUrl: 'https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 160
      },
      {
        id: 13,
        title: 'Perspective Playground',
        imageUrl: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 160
      },
      {
        id: 14,
        title: 'Space on Crack',
        imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 160
      },
      {
        id: 15,
        title: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 16,
        title: 'Not A Pineapple',
        imageUrl: 'https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Accessories',
    routetitle: 'accessories',
    items: [
      {
        id: 17,
        title: 'Flower Purse',
        imageUrl: 'https://images.unsplash.com/photo-1564139615082-01535600057f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 125
      },
      {
        id: 18,
        title: 'Chanel',
        imageUrl: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 90
      },
      {
        id: 19,
        title: 'Moriarty Bag',
        imageUrl: 'https://images.unsplash.com/photo-1546938576-04917ec516ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        price: 90
      },
      {
        id: 20,
        title: 'Infinite Purse',
        imageUrl: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 165
      },
      {
        id: 21,
        title: 'Jewellery',
        imageUrl: 'https://images.unsplash.com/photo-1519431458145-1ca3d5ccd68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 185
      },
      {
        id: 22,
        title: 'Lipstick and Purse',
        imageUrl: 'https://images.unsplash.com/photo-1535556261192-f718879e7f2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 185
      },
      {
        id: 23,
        title: 'Red Purse',
        imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 185
      },
      {
        id: 24,
        title: 'Paper Bag',
        imageUrl: 'https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'T-Shirts',
    routetitle: 'tshirts',
    items: [
      {
        id: 25,
        title: 'Black and White',
        imageUrl: 'https://images.unsplash.com/photo-1506274512-56255c252865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      },
      {
        id: 26,
        title: 'Black Wind',
        imageUrl: 'https://images.unsplash.com/photo-1582259161965-663b6e55dfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      },
      {
        id: 27,
        title: 'Plain White',
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 80
      },
      {
        id: 28,
        title: 'Forever Reckless',
        imageUrl: 'https://images.unsplash.com/photo-1568641470259-3a3253bf8739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 80
      },
      {
        id: 29,
        title: 'Leave The Road',
        imageUrl: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 45
      },
      {
        id: 30,
        title: 'Champion',
        imageUrl: 'https://images.unsplash.com/photo-1584678898939-33b688db30b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=327&q=80',
        price: 135
      },
      {
        id: 31,
        title: 'Wiz Khalifa Thrasher',
        imageUrl: 'https://images.unsplash.com/photo-1569130460303-7995e469b7c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      },
      {
        id: 32,
        title: 'Bayern Munich',
        imageUrl: 'https://images.unsplash.com/photo-1554703869-8bb432598cf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Hoodies',
    routetitle: 'hoodies',
    items: [
      {
        id: 33,
        title: 'Parkour White',
        imageUrl: 'https://images.unsplash.com/photo-1487528001669-63c47a53fd39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 325
      },
      {
        id: 34,
        title: 'Rebel Musician',
        imageUrl: 'https://images.unsplash.com/photo-1485102068545-7286b0d199d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 20
      },
      {
        id: 35,
        title: 'Millenial Black and Gray',
        imageUrl: 'https://images.unsplash.com/photo-1593655364090-9ff8334de627?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      },
      {
        id: 36,
        title: 'kaleidoscope Black',
        imageUrl: 'https://images.unsplash.com/photo-1520115623698-7a16e69f4864?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 25
      },
      {
        id: 37,
        title: 'Smoky Orange',
        imageUrl: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 40
      },
      {
        id: 38,
        title: 'Depressed Green',
        imageUrl: 'https://images.unsplash.com/photo-1518042349813-f0bdac4ab129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 40
      },
      {
        id: 39,
        title: 'Vanilla White',
        imageUrl: 'https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 40
      },
      {
        id: 40,
        title: 'Joyfull Gray',
        imageUrl: 'https://images.unsplash.com/photo-1506135385820-d15107bf8e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        price: 40
      }
    ]
  }
];

export default SHOP_DATA;