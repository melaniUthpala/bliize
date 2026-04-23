// ── Image URLs ──
// Using Unsplash for hero/landscape images (our uploaded files are portrait/full-page screenshots)
// For portrait images (team, about detail) we use local files

export const IMAGES = {
  // Hero slides — needs landscape architecture photos
  slide1: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85',
  slide2: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85',

  // Slider pill — small building thumbnail
  sliderShape: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=85',

  // About — two architecture images
  about1: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85',
  about2: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=85',

  // CTA background — forest house like screenshot
  ctaBg: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1920&q=85',

  // Team photos — using local portrait images
  team1: '/images/construction-profile.jpg',
  team2: '/images/freelancer-architect.jpg',
  team3: '/images/construction-s2.jpg',

  // Projects — 4 different buildings
  project1: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85',
  project2: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=85',
  project3: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85',
  project4: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85',

  // Blog
  blog1: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=85',
  blog2: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=85',
  blog3: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85',

  // Avatars
  avatar1: 'https://i.pravatar.cc/100?img=44',
  avatar2: 'https://i.pravatar.cc/100?img=32',
  avatar3: 'https://i.pravatar.cc/100?img=68',

  // Hero team avatars
  heroAv1: 'https://i.pravatar.cc/96?img=44',
  heroAv2: 'https://i.pravatar.cc/96?img=47',
  heroAv3: 'https://i.pravatar.cc/96?img=49',
  heroAv4: 'https://i.pravatar.cc/96?img=52',
};

export const NAV_LINKS = [
{ label: 'Home', href: '#', page: 'gallery' },
  {
    label: 'Pages',
    href: '#about',
    dropdown: [
      { label: 'About Us', href: '#', page: 'about' },
      { label: 'Services', href: '#services', children: [
        { label: 'Services', href: '#services' },
        { label: 'Service single', href: '#services' },
      ]},
      { label: 'Team', href: '#team', children: [
        { label: 'Team', href: '#team' },
        { label: 'Team single', href: '#team' },
      ]},
      { label: 'Pricing', href: '#' },
      { label: 'Login', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: '404 Error', href: '#' },
    ],
  },
  {
    label: 'Projects',
    href: '#works',
    dropdown: [
      { label: 'Projects', href: '#works' },
      { label: 'Projects Single', href: '#works' },
    ],
  },
  {
    label: 'Shop',
    href: '#services',
    dropdown: [
      { label: 'Shop', href: '#' },
      { label: 'Shop Single', href: '#' },
      { label: 'Cart', href: '#' },
      { label: 'Checkout', href: '#' },
      { label: 'Wishlist', href: '#' },
    ],
  },
  {
    label: 'Blog',
    href: '#blog',
    dropdown: [
      { label: 'Blog right sidebar', href: '#blog' },
      { label: 'Blog left sidebar', href: '#blog' },
      { label: 'Blog fullwidth', href: '#blog' },
      { label: 'Blog details', href: '#blog', children: [
        { label: 'Blog details right sidebar', href: '#blog' },
        { label: 'Blog details left sidebar', href: '#blog' },
        { label: 'Blog details fullwidth', href: '#blog' },
      ]},
    ],
  },
];

export const PROJECTS = [
  { id:1, title:'Modern House In UK',  cat:'Building, Apartment', img: IMAGES.project1 },
  { id:2, title:'Art Museum In Dubai', cat:'Building, Apartment', img: IMAGES.project2 },
  { id:3, title:'Alexa Complex',       cat:'Building, Apartment', img: IMAGES.project3 },
  { id:4, title:'Bentila Palace',      cat:'Building, Apartment', img: IMAGES.project4 },
];

export const SERVICES = [
  { icon:'fa-city',             title:'Custom Solutions',  desc:'Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus.' },
  { icon:'fa-couch',            title:'Furniture & Decor', desc:'Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus.' },
  { icon:'fa-drafting-compass', title:'Interior Design',   desc:'Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus.' },
  { icon:'fa-pencil-ruler',     title:'Design & Planning', desc:'Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus.' },
];

export const STATS = [
  { num:215, label:'CURRENT CLIENTS' },
  { num:550, label:'PROJECTS COMPLETE' },
  { num:21,  label:'YEARS OF EXPERIENCE' },
  { num:25,  label:'OFFICES WORLDWIDE' },
];

export const TESTIMONIALS = [
  { quote:'Ac sollicitudin euismod ut luctus felis lacus sed pellentesque. Purus eget consectur massa amet. Hac diam suspendisse faucibus posuere dignissim magna condimentum tristique.', name:'Leslie Alexander', role:'Marketing Coordinator', img: IMAGES.avatar1 },
  { quote:'Blize next level flexitarian yr bicycle rights waistcoat bit austin tofu-das glossier whatever scenester snack wave literally can shaman grained.', name:'John Abraham', role:'Web Developer', img: IMAGES.avatar2 },
  { quote:'Architecture is not just about buildings. It\'s about creating experiences that transform how people live, work, and interact with their environment.', name:'Sarah Williams', role:'Creative Director', img: IMAGES.avatar3 },
];

export const TEAM = [
  { name:'Robert Fox',     role:'Senior Architect',  img: IMAGES.team1, bw: false },
  { name:'Harvard Bunion', role:'Partner & CEO',     img: IMAGES.team2, bw: true  },
  { name:'Benzamin Simon', role:'Interior Designer', img: IMAGES.team3, bw: false },
];

export const BLOGS = [
  { cat:'Architecture',    date:'March 15, 2025', title:'The Future of Sustainable Architecture in Urban Design',    desc:'Exploring how modern architects are integrating eco-conscious practices into city planning.',   img: IMAGES.blog1 },
  { cat:'Interior Design', date:'Feb 28, 2025',   title:'Minimalist Interiors: Less Is More in Contemporary Homes', desc:'How the minimalist philosophy is reshaping modern home interiors worldwide.',                  img: IMAGES.blog2 },
  { cat:'Construction',    date:'Jan 10, 2025',   title:'Smart Buildings: Integrating Technology Into Architecture', desc:'The rise of smart technology in building design and what it means for future construction.', img: IMAGES.blog3 },
];

export const PARTNERS = [
  { icon:'fa-home',       name:'Interior Design' },
  { icon:'fa-building',   name:'Simple House' },
  { icon:'fa-house-user', name:'HouseLux' },
  { icon:'fa-building',   name:'Simple House' },
  { icon:'fa-couch',      name:'Furniture Minimalist' },
];
