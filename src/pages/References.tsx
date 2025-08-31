import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import TestimonialCard from '../components/ui/TestimonialCard';

const References: React.FC = () => {
  const testimonials = [
    {
      quote: "Fabrice has demonstrated exceptional aptitude in physics and computational methods. His ability to combine theoretical knowledge with practical implementation is remarkable.",
      name: "Dr. Ntahompagaze Joseph",
      title: "Senior Lecturer of Physics, University of Rwanda",
      image: "https://igihe.com/local/cache-vignettes/L1000xH666/4_dr_joseph_ntahompagaze_yavuze_ko_muri_paruwasi_zose_abagabo_bakwiye_kugendera_mu_cyerecyezo_kimwe_cyo_kubaka_ingo_zirambye_cyashyizweho_ku_bw_inyungu_za_bose-d011d.jpg?1723520011",
      email: "joseph.ntahompagaze@ur.ac.rw",
      phone: "+250788123456"
    },
    {
      quote: "As a youth leader in our church, Fabrice has shown remarkable dedication and vision. He has a natural ability to inspire and guide others, while maintaining a strong commitment to his own growth. 1 Timothy 6:12",
      name: "Senior Pastor Remero Murego Didacienne",
      title: "Faith Builders Church",
      image: "https://scontent.fkgl2-1.fna.fbcdn.net/v/t39.30808-6/308378492_132650522849437_9045673018675964835_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFiEk5_AdGRNTpePAZeWBqDYiRd684-gFliJF3rzj6AWZPTk9XQFUqM6s9Y57gf1k-hiMpRTuKNJgxZ0_oDS9YG&_nc_ohc=TqEPKXIrqKkQ7kNvwGBojU6&_nc_oc=Adk4qJq4WS12HPXmhLv-J9SYaCiUgEB9CPIs_ctw_SSFi40PVDrIAC7ytb1O5lbtclE&_nc_zt=23&_nc_ht=scontent.fkgl2-1.fna&_nc_gid=oUN3Q_3thQza8UXf1cmWbQ&oh=00_AfVxJR_t5bX4nxgy8lBBob0oF81Al9rjHnwRqOmpDuFp6A&oe=68BA2BC4",
      email: "remu.dida@faithbuilders.org",
      phone: "+250788987654"
    },
    {
      quote: "Working with Fabrice was a pleasure. His technical skills combined with his ability to clearly explain complex concepts made him an invaluable contributor onto most tasks.",
      name: "Hannah Spens-Black",
      title: "Consultant",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQGSK4nL54whgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1611931789983?e=1759363200&v=beta&t=1fCkSTATkOMIqAdAVA0DjHqfPvC2ZspufR3p5C-DePo",
      email: "hannah.spensblack@gmail.com",
      phone: "+447900123456"
    }
  ];

  return (
    <div id="references" className="py-16 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-20 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="References" 
          subtitle="Testimonials from mentors, colleagues, and collaborators" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              email={`mailto:${testimonial.email}`}
              phone={`tel:${testimonial.phone}`}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
