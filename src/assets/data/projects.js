import veychiApiImg from '../img/veychi-api.jpg';
import decorentalImg from '../img/decorental.jpg';
import vipCleaningCorpImg from '../img/vipcleaningcorp.jpg';
import veychiImg from '../img/veychi.jpg';
import masAudienciasImg from '../img/masaudiencias.jpg';
import masPlantillasImg from '../img/masplantillas.jpg';

export const projects = [
  {
    name: 'REST API for Veychi',
    slug: 'rest-api-veychi',
    image: veychiApiImg,
    description:
      'REST API developed with node.js which was used to manage the data of a Chilean multivendor e-commerce website.',
    position: 'Back End Developer',
    responsibilities:
      'Develop a REST API which was able to manage the data of the new version of Veychi.',
    skills: [
      'JavaScript',
      'node.js',
      'REST',
      'MongoDB',
      'HTTP requests',
      'Express'
    ]
  },
  {
    name: 'Decorental',
    slug: 'decorental',
    image: decorentalImg,
    description:
      "Website developed using Laravel. It allows its users to see a list of available products, add them to a shopping cart and create budgets. The system doesn't allow purchasing products.",
    position: 'Full Stack Developer',
    responsibilities:
      'Modelling the database, implement the basic project structure, and build the shopping cart module as a Vue.js application.',
    skills: [
      'PHP',
      'Laravel',
      'Vue',
      'HTML',
      'CSS',
      'JavaScript',
      'sessionStorage'
    ]
  },
  {
    name: 'VIP Cleaning Corp',
    slug: 'vip-cleaning-corp',
    image: vipCleaningCorpImg,
    description:
      'A simple static webpage developed using PHP, CSS, jQuery, and HTML.',
    position: 'Full Stack Developer',
    responsibilities:
      'Create the contact form used in the website, as well as its logic in PHP.',
    skills: ['HTML', 'CSS', 'Email handling', 'PHP']
  },
  {
    name: 'Veychi',
    slug: 'veychi',
    image: veychiImg,
    description:
      'A WordPress website which was built for a Chilean multivendor e-commerce. It includes WooCommerce and many other plugins that heavily modify how the website behaves.',
    position: 'Front End Developer',
    responsibilities:
      'Write CSS code to give the website the appearance the client wished for. Additionally, some plugins and PHP scripts were managed, installed, and/or edited by me.',
    skills: ['CSS', 'HTML', 'JavaScript', 'PHP', 'WordPress', 'WooCommerce']
  },
  {
    name: 'MAS Audiencias',
    slug: 'mas-audiencias',
    image: masAudienciasImg,
    description:
      'A React web app which allows the users to fetch more related interests than Facebook normally shows through its audiences interface. I did not build this project from the ground up. I rather extended it, specifically by adding the "Audiences" section, which gives the user the possibility to load a collection of interests to its current selection.',
    position: 'Front End Developer',
    responsibilities:
      'Add a new section that allows users to load a set of interests to their current search.',
    skills: [
      'JavaScript',
      'React',
      'React Hooks',
      'Redux',
      'State Management',
      'Reactstrap',
      'HTML',
      'Bootstrap',
      'Sass'
    ]
  },
  {
    name: 'MAS Plantillas',
    slug: 'mas-plantillas',
    image: masPlantillasImg,
    description:
      'A React web app which gives the user the ability to fill forms and generate PDF documents that are ready to be used.',
    position: 'Front End Developer',
    responsibilities:
      'I created the logic that allows to load the template data, share information in the router via URL parameters and wrote the markup and logic for many of the available templates.',
    skills: [
      'JavaScript',
      'React',
      'React Hooks',
      'Elastic UI',
      'HTML',
      'State Management',
      'Sass'
    ]
  }
];
