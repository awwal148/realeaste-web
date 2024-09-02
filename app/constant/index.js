import slide1 from '../assets/images/furniture.jpg'
import slide2 from '../assets/images/home.jpg'
import slide3 from '../assets/images/house.jpg'
import slide4 from '../assets/images/large-home.jpg'

export const createNavLinks = (userCredential) => [
  { href: "/", label: "Home" },
  { href: "/offers", label: "Offers" },
  userCredential ? { href: "/profile", label: "Profile" } : { href: "/sign-in", label: "Sign-in" },
];
 
export const slides = [
  {
    url: slide1
  },
  {
    url: slide2
  },
  {
    url: slide3
  },
  {
    url: slide4
  }
]