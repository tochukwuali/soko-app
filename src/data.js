const PRODUCTS = [
  {
    id: 1,
    category: "Electronics",
    active: true,
    count: 12,
    items: [
      {
        item_id: 1,
        name: "Kids 2pk Cloth Face Masks",
        description:
          "1This mask is supposed to protect your nose form external bodies and also give you a good experience while using them. They are also affordable and give your children the adequate protection that they need. Great for outdoor events with its classy look and feel",
        price: 185000,
        image: "/images/face_mask.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 2,
        name: "Norbury Scandinavian Wood Leg Ottoman",
        description:
          "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 148000,
        image: "/images/stool.jpg",
        discount: 20,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 3,
        name: "Baby-Cut Carrots-1lb-Good & Gather",
        description:
          "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 4000,
        image: "/images/protein.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 4,
        name: "Metal Country Chalet and Wood Bench - Saracina Home",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 34000,
        image: "/images/bench.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 5,
        name: "Alternative Ground Protein - 160oz - Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 8000,
        image: "/images/beans.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
    ],
  },
  {
    id: 2,
    category: "Face Masks",
    count: 3,
    items: [
      {
        item_id: 1,
        name: "Kids 2pk Cloth Face Masks",
        details:
          "This mask is supposed to protect your nose form external bodies and also give you a good experience while using them. They are also affordable and give your children the adequate protection that they need. Great for outdoor events with its classy look and feel",
        price: 185000,
        image: "/images/face_mask.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 2,
        name: "Norbury Scandinavian Wood Leg Ottoman",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 148000,
        image: "/images/stool.jpg",
        discount: 20,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 3,
        name: "Baby-Cut Carrots-1lb-Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 4000,
        image: "/images/protein.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 4,
        name: "Metal Country Chalet and Wood Bench - Saracina Home",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 34000,
        image: "/images/bench.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 5,
        name: "Alternative Ground Protein - 160oz - Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 8000,
        image: "/images/beans.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
    ],
    active: false,
  },
  {
    id: 3,
    category: "Fresh Food",
    count: 8,
    items: [
      {
        item_id: 1,
        name: "Kids 2pk Cloth Face Masks",
        details:
          "This mask is supposed to protect your nose form external bodies and also give you a good experience while using them. They are also affordable and give your children the adequate protection that they need. Great for outdoor events with its classy look and feel",
        price: 185000,
        image: "/images/face_mask.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 2,
        name: "Norbury Scandinavian Wood Leg Ottoman",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 148000,
        image: "/images/stool.jpg",
        discount: 20,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 3,
        name: "Baby-Cut Carrots-1lb-Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 4000,
        image: "/images/protein.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 4,
        name: "Metal Country Chalet and Wood Bench - Saracina Home",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 34000,
        image: "/images/bench.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 5,
        name: "Alternative Ground Protein - 160oz - Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 8000,
        image: "/images/beans.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
    ],
    active: false,
  },
  {
    id: 4,
    category: "Grocery",
    count: 6,
    items: [
      {
        item_id: 1,
        name: "Kids 2pk Cloth Face Masks",
        details:
          "This mask is supposed to protect your nose form external bodies and also give you a good experience while using them. They are also affordable and give your children the adequate protection that they need. Great for outdoor events with its classy look and feel",
        price: 185000,
        image: "/images/face_mask.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 2,
        name: "Norbury Scandinavian Wood Leg Ottoman",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 148000,
        image: "/images/stool.jpg",
        discount: 20,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 3,
        name: "Baby-Cut Carrots-1lb-Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 4000,
        image: "/images/protein.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 4,
        name: "Metal Country Chalet and Wood Bench - Saracina Home",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 34000,
        image: "/images/bench.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 5,
        name: "Alternative Ground Protein - 160oz - Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 8000,
        image: "/images/beans.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
    ],
    active: false,
  },
  {
    id: 5,
    category: "Home",
    count: 24,
    items: [
      {
        item_id: 1,
        name: "Kids 2pk Cloth Face Masks",
        details:
          "This mask is supposed to protect your nose form external bodies and also give you a good experience while using them. They are also affordable and give your children the adequate protection that they need. Great for outdoor events with its classy look and feel",
        price: 185000,
        image: "/images/face_mask.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 2,
        name: "Norbury Scandinavian Wood Leg Ottoman",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 148000,
        image: "/images/stool.jpg",
        discount: 20,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 3,
        name: "Baby-Cut Carrots-1lb-Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 4000,
        image: "/images/protein.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 4,
        name: "Metal Country Chalet and Wood Bench - Saracina Home",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 34000,
        image: "/images/bench.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 5,
        name: "Alternative Ground Protein - 160oz - Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 8000,
        image: "/images/beans.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
    ],
    active: false,
  },
  {
    id: 6,
    category: "Kids",
    count: 9,
    items: [
      {
        item_id: 1,
        name: "Kids 2pk Cloth Face Masks",
        details:
          "This mask is supposed to protect your nose form external bodies and also give you a good experience while using them. They are also affordable and give your children the adequate protection that they need. Great for outdoor events with its classy look and feel",
        price: 185000,
        image: "/images/face_mask.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 2,
        name: "Norbury Scandinavian Wood Leg Ottoman",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 148000,
        image: "/images/stool.jpg",
        discount: 20,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 3,
        name: "Baby-Cut Carrots-1lb-Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 4000,
        image: "/images/protein.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 4,
        name: "Metal Country Chalet and Wood Bench - Saracina Home",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 34000,
        image: "/images/bench.jpg",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
      {
        item_id: 5,
        name: "Alternative Ground Protein - 160oz - Good & Gather",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        price: 8000,
        image: "/images/beans.jfif",
        discount: 0,
        countInStock: 30,
        cartQuantity: 0,
      },
    ],
    active: false,
  },
];

export default PRODUCTS;

export const Users = [
  {
    name: "Shrey Karah",
    country: "Uganda",
    street: "Plot 12 Nkrumah Road",
    city: "Kampala",
  },
];
