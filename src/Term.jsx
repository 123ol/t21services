
import img from "./assets/img1.jpg";
import img2 from "./assets/img4.jpg"
import img6 from "./assets/img4.jpg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"
import icon1 from './assets/pajamas_twitter.png'
import icon2 from './assets/ph_instagram-logo-fill.png'
import icon3 from './assets/bi_facebook.png'

const experts = [
  {
    name: 'Engr Tosin Owonifari',
    role: 'CEO & Founder',
    image: img,
    fbLink: '#',
    linkedinLink: '#',
  },
  {
    name: 'Oluwaseun Ajijola',
    role: 'Regional manager',
    image: img2,
    fbLink: '#',
    linkedinLink: '#',
  },

  {
    name: 'Fatoba Olumide',
    role: 'Frontend engineer',
    image: img4,
    fbLink: '#',
    linkedinLink: '#',
  },
  {
    name: 'emmanuel Bolarinwa',
    role: 'Backend engineer',
    image: img5,
    fbLink: '#',
    linkedinLink: '#',
  },
  {
    name: 'dotun',
    role: 'UI Designer',
    image: img6,
    fbLink: '#',
    linkedinLink: '#',
  },
 
];

const Term = () => {
  return (
    <div className="bg-white py-40 lg:px-32 px-5 genbg">
      <h2 className="text-2xl md:text-4xl font-semibold text-center bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text mb-6">
        Meet Our Experts
      </h2>
      <p className="text-center max-w-[40rem] mx-auto text-gray-600 mb-8">
        We're united by a passion for innovation and a shared commitment to transform Tech services and unlock the Tech potential of emerging the world.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
        {experts.map((expert, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={expert.image}
              alt={expert.name}
              className="rounded-full w-28 h-28 object-cover mb-2"
            />
            <h3 className="text-xl font-semibold">{expert.name}</h3>
            <p className="text-gray-500">{expert.role}</p>
            <div className="flex justify-center space-x-1 mt-2">
              <a href={expert.fbLink} className="w-4">
              <img src={icon1} alt="Twitter" />
              </a>
              <a href={expert.linkedinLink} className="w-4">
              <img src={icon2} alt="Facebook" />
              </a>
              <a href={expert.linkedinLink} className="w-4">
              <img src={icon3} alt="LinkedIn" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Term;
