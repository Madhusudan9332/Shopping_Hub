import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar'
import CardSection from './components/CardSection'
import HeroicSection from './components/HeroicSection'
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

function App() {
  const links = ["Home", "About", "Services", "Contact"];
  const cards = [
    { icon: "fas fa-laptop", title: "Fashion Essentials", content: " T-shirts, Jeans, Sneakers, Dresses, Basic tops, Leggings" },
    { icon: "fas fa-chart-bar", title: "Home Decor Delights", content: "Cushions, Wall art, Candles, Throw blankets, Decorative vases, Picture frames" },
    { icon: "fas fa-paint-brush", title: "Gourmet Indulgences", content: "Chocolates, Specialty teas, Gourmet coffee, Artisanal jams, Fine wines, Imported cheeses." },
  ];
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
  ];
  const [FooterLinks] = useState([
    {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Brand Center", href: "#" },
        { label: "Blog", href: "#" }
      ]
    },
    {
      title: "Help center",
      items: [
        { label: "Discord Server", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Contact Us", href: "#" }
      ]
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Licensing", href: "#" },
        { label: "Terms & Conditions", href: "#" }
      ]
    },
    {
      title: "Download",
      items: [
        { label: "iOS", href: "#" },
        { label: "Android", href: "#" },
        { label: "Windows", href: "#" },
        { label: "MacOS", href: "#" }
      ]
    }
  ]);

  return (
    <>
    <Navbar links={links}/>
    <HeroicSection />
    <CardSection cards={cards}/>
    <Gallery />
    <Footer FooterLinks={FooterLinks} />
    {/* <ProductDetails /> */}
    </>
  )
}

export default App
