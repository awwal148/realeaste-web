export const createNavLinks = (userCredential) => [
  { href: "/", label: "Home" },
  { href: "/offers", label: "Offers" },
  userCredential ? { href: "/profile", label: "Profile" } : { href: "/sign-in", label: "Sign-in" },
];
 
