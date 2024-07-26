import p1_img from "../../public/image/product_1.png";
import p2_img from "../../public/image/product_2.png";
import p3_img from "../../public/image/product_3.png";
import p4_img from "../../public/image/product_4.png";
import p37_img from "../../public/image/product_37.png";
import p38_img from "../../public/image/product_38.png";
import p39_img from "../../public/image/product_39.png";
import p40_img from "../../public/image/product_40.png";
import p41_img from "../../public/image/product_41.png";
import p42_img from "../../public/image/product_42.png";
import p43_img from "../../public/image/product_43.png";
import p44_img from "../../public/image/product_44.png";
import p45_img from "../../public/image/product_45.png";
import p46_img from "../../public/image/product_46.png";
import p47_img from "../../public/image/product_47.png";
import p48_img from "../../public/image/product_48.png";


let data_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "null",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "null",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "null",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "null",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 37,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "kid",
    image: p37_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 38,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "kid",
    image: p38_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 39,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "kid",
    image: p39_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 40,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "kid",
    image: p40_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 41,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "men",
    image: p41_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 42,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "men",
    image: p42_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 43,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "men",
    image: p43_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 44,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "men",
    image: p44_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 45,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "women",
    image: p45_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 46,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "women",
    image: p46_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 47,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "women",
    image: p47_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 48,
    name: "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter",
    category: "women",
    image: p48_img,
    new_price: 100.0,
    old_price: 150.0,
  },
];

const getProductsByCategory = (category) => {
  // Filtrar los productos por categoría
  const productsByCategory = data_product.filter(
    (product) => product.category === category
  );
  return productsByCategory;
};

export { getProductsByCategory };
export default data_product;
