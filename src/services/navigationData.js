import Icons from "../images/icons";

const topNavbarLinks = [
  {
    label: "Contact Us",
    link: "/contact-us",
    icon: Icons.contactUs,
  },
  {
    label: "Track Order",
    link: "/track-order",
    icon: Icons.trackOrder,
  },
  {
    label: "Find A Store",
    link: "/find-a-Store",
    icon: Icons.findAStore,
  },
];

const bottomNavbarLinks = [
  {
    label: "Men",
    link: "/men",
  },
  {
    label: "Women",
    link: "/Women",
  },
  {
    label: "Unisex",
    link: "/Unisex",
  },
  {
    label: "Kids",
    link: "/kids",
  },
  {
    label: "Best Sellers",
    link: "/best-sellers",
  },
  {
    label: "New Arrivals",
    link: "/new-arrivals",
  },
  {
    label: "Offers",
    link: "/offers",
  },
];

const middleNavbarLinks = [
  {
    label: "Cart",
    link: "/cart",
    icon: Icons.cartIcon,
  },
  {
    label: "Wishlist",
    link: "/Wishlist",
    icon: Icons.wishListIcon,
  },
  {
    label: "Login",
    link: "/login",
    icon: Icons.loginIcon,
  },
];

const breadcrumbItems = [
  "Men",
  "Clothing",
  "Tops",
  "Adidas",
  "Adidas Black T-Shirt",
];
export const getNavigationLinks = () => {
  return {
    topNavbarLinks,
    middleNavbarLinks,
    bottomNavbarLinks,
    breadcrumbItems,
  };
};
