import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigPng1,
  bigPng2,
  bigPng3,
  customer1,
  customer2,
  Png4,
  Png5,
  Png6,
  Png7,
  thumbnailPng1,
  thumbnailPng2,
  thumbnailPng3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "Hakkımızda" },
  { href: "#products", label: "Çözümler" },
  { href: "#contact-us", label: "İletişim" },
];

export const Pngs = [
  {
    thumbnail: thumbnailPng1,
    bigPng: bigPng1,
  },
  {
    thumbnail: thumbnailPng2,
    bigPng: bigPng2,
  },
  {
    thumbnail: thumbnailPng3,
    bigPng: bigPng3,
  },
];

export const statistics = [
  { value: "150+", label: "Ekibimiz" },
  { value: "32+", label: "Bayi" },
  { value: "18+", label: "Ülke" },
];

export const products = [
  {
    imgURL: Png4,
    name: "Otomasyon Sistemleri",
    price: "$200.20",
  },
  {
    imgURL: Png5,
    name: "Seslendirme Sistemleri",
    price: "$210.20",
  },
  {
    imgURL: Png6,
    name: "Yangın Sistemleri",
    price: "$220.20",
  },
  {
    imgURL: Png7,
    name: "Tv Sistemleri",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Ücretsiz Teslimat",
    subtext:
      "Tüm siparişleriniz ücretsiz olarak kapınıza kadar teslim edilir ve kurulur",
  },
  {
    imgURL: shieldTick,
    label: "Güvenli Ödeme",
    subtext:
      "Güvenli ödeme yöntemleri ile ödeme yapabilirsiniz. Kredi kartı, havale, eft, kapıda ödeme seçenekleri mevcuttur.",
  },
  {
    imgURL: support,
    label: "Sürekli Destek",
    subtext: "7/24 destek hattımız ile her zaman yanınızdayız.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Ahmet Yılmaz",
    rating: 4.5,
    feedback:
      "Çözümleri ve hizmetleri ile Teknogroup, işletmemiz için en iyi seçim oldu, Bu yüzden onlara teşekkür ederiz.",
  },
  {
    imgURL: customer2,
    customerName: "Sıla Yıldırım",
    rating: 4.5,
    feedback:
      "Teknogroup ile çalışmaktan memmun kaldım.Yanlızca 1 hafta içerisinde tüm işlerimiz tamamlandı.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Yangın Sistemleri", link: "/" },
      { name: "Tv Sistemleri", link: "/" },
      { name: "CCTV Sistemleri", link: "/" },
      { name: "İletişim Sistemleri", link: "/" },
      { name: "Otomasyon Sistemleri", link: "/" },
      { name: "Seslendirme Sistemleri", link: "/" },
    ],
  },
  {
    title: "Çalışmalarımız",
    links: [
      { name: "Fenerbahçe Arena", link: "/" },
      { name: "Türk Telekom Arena", link: "/" },
      { name: "Ankara Şehir Hastanesi", link: "/" },
      { name: "Shahdag Complex", link: "/" },
      { name: "Zorlu Center & Psm", link: "/" },
    ],
  },
  {
    title: "İletişime geçin",
    links: [
      { name: "info@teknogroup.com", link: "mailto:info@teknogroup.com" },
      { name: "+90 212 280 27 81", link: "tel:+90 212 280 27 81" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
