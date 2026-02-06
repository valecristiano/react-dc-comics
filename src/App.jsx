import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Main from "./components/main/Main";

const navbarLinks = [
  {
    url: "#",
    text: "CHARACTERS",
    isActive: false,
  },
  {
    url: "#",
    text: "COMICS",
    isActive: true,
  },
  {
    url: "#",
    text: "MOVIES",
    isActive: false,
  },
  {
    url: "#",
    text: "TV",
    isActive: false,
  },
  {
    url: "#",
    text: "GAMES",
    isActive: false,
  },
  {
    url: "#",
    text: "COLLECTIBLES",
    isActive: false,
  },
  {
    url: "#",
    text: "VIDEOS",
    isActive: false,
  },
  {
    url: "#",
    text: "FANS",
    isActive: false,
  },
  {
    url: "#",
    text: "NEWS",
    isActive: false,
  },
  {
    url: "#",
    text: "SHOP",
    isActive: false,
  },
];

const footerLinks = [
  {
    title: "CD COMICS",
    menuLinks: [
      { url: "#", text: "Characters" },
      { url: "#", text: "Comics" },
      { url: "#", text: "Movies" },
      { url: "#", text: "TV" },
      { url: "#", text: "Games" },
      { url: "#", text: "Videos" },
      { url: "#", text: "News" },
    ],
  },
  {
    title: "SHOP",
    menuLinks: [
      { url: "#", text: "Shop DC" },
      { url: "#", text: "Shop DC Collectibles" },
    ],
  },
  {
    title: "DC",
    menuLinks: [
      { url: "#", text: "Terms of Use" },
      { url: "#", text: "Privacy policy" },
      { url: "#", text: "Ad Choices" },
      { url: "#", text: "Advertising" },
      { url: "#", text: "Jobs" },
      { url: "#", text: "Subscriptions" },
      { url: "#", text: "Talent Workshops" },
      { url: "#", text: "CPSC Certificates" },
      { url: "#", text: "Ratings" },
      { url: "#", text: "Shop Help" },
      { url: "#", text: "Contact Us" },
    ],
  },
  {
    title: "SITES",
    menuLinks: [
      { url: "#", text: "DC" },
      { url: "#", text: "MAD Magazine" },
      { url: "#", text: "DC Kids" },
      { url: "#", text: "DC Universe" },
      { url: "#", text: "DC Power Visa" },
    ],
  },
];

export default function App() {
  return (
    <>
      <Header links={navbarLinks} />
      <Main />
      <Footer links={footerLinks} />
    </>
  );
}
