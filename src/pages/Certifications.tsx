import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import CertificateCard from '../components/ui/CertificateCard';

const Certifications: React.FC = () => {
  const certificates = [
    {
      title: "Python for Scientific Computing",
      issuer: "Cisco",
      date: "October 2022",
      image: "https://scontent.fkgl2-1.fna.fbcdn.net/v/t39.30808-6/540965275_1865394077739172_2372280615229043023_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fCcZtrE4ur8Q7kNvwEpC2B0&_nc_oc=AdknmkT4iDExwcB_gZC9pjK2IPCg2R0r2Dc7i_FNjyamzK0ApXUzBdas7VGR9n89jGQ&_nc_zt=23&_nc_ht=scontent.fkgl2-1.fna&_nc_gid=x4__jMHnKKfLslnOcHn19g&oh=00_AfXhLY_ed_nBbUnURxkVrSlTASRIf9lN4QyjrmbzpUKuqw&oe=68B78115"
    },
    {
      title: "Networking Fundamentals",
      issuer: "Cisco",
      date: "July 2021",
      image: "https://scontent.fkgl2-2.fna.fbcdn.net/v/t39.30808-6/540938644_1865406047737975_554607667169756175_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eIspoOOo1LwQ7kNvwFUqKWw&_nc_oc=AdlYjEPBw_jFFXwQp6JilAYVxbnduRTdVapvgzKWPO8bAUlCd29_gRTIDJsoYvDiRdM&_nc_zt=23&_nc_ht=scontent.fkgl2-2.fna&_nc_gid=lnpVw4IdhzxuDNm7b6RQow&oh=00_AfVjVVcWIPz4BdiCcORs2ayR5Tu94IJXb4lmkrdlpsTHbA&oe=68B7A752"
    },
    {
      title: "AI Ethics",
      issuer: "World Health Organization",
      date: "January 2023",
      image: "https://scontent.fkgl2-2.fna.fbcdn.net/v/t39.30808-6/540965905_1865394057739174_4673681245087446084_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JWxZDl0PvG8Q7kNvwFv18cY&_nc_oc=Adl8tUz_f3WGVNMLvnNMTwJxFBZMpl9KFjIXc48cuuiK0x9kC9hAf1__0OuJlyO1UYQ&_nc_zt=23&_nc_ht=scontent.fkgl2-2.fna&_nc_gid=BaO4G0YdSg4NTwjzTrIr8w&oh=00_AfWAVgtX5UB4Dnn13Z32cNyr8TCqpX0dBf0PN59NDadYEg&oe=68B787C7"
    },
    {
      title: "ASESMA 2023",
      issuer: "ICTP EAIFR",
      date: "2023",
      image: "https://scontent.fkgl2-2.fna.fbcdn.net/v/t39.30808-6/540945532_1865392197739360_2007210336488400632_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YTD2DSUuMaEQ7kNvwFpicOQ&_nc_oc=AdmmDU1_wFibewt_Z0S4FvpbKv_x3S9KokNa7Gmf-kLsby4HXpTzQHJydRCsy3ipnBM&_nc_zt=23&_nc_ht=scontent.fkgl2-2.fna&_nc_gid=mXiTNBFXtqd7mTBOIRGtMw&oh=00_AfWZ24nOLUMwApkwdFze0Zjbhs8H-BuhN6lr7Z51jXzEmw&oe=68B784BE"
    },
    {
      title: "DevOps Advanced",
      issuer: "Digital Training Program",
      date: "March 2021",
      image: "https://scontent.fkgl2-2.fna.fbcdn.net/v/t39.30808-6/540954343_1865394034405843_1645425398476277371_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ttUJAbziwqcQ7kNvwEANz27&_nc_oc=AdkhBDtAG0jEnBDwa1SljFhmhCAvlQqHVOwF89CK4Z748CPxm9nJVfuGiHleufZ240w&_nc_zt=23&_nc_ht=scontent.fkgl2-2.fna&_nc_gid=8IGJYOOZLmZgT3BfJHV8ZQ&oh=00_AfXJ_a6CGy57iIhgSo32Kr-SKxxdevek8GQIa7ySRZQX9g&oe=68B78E6E"
    },
    {
      title: "Solidworks Associates",
      issuer: "Dassault Systems",
      date: "February 2024",
      image: "https://scontent.fkgl2-2.fna.fbcdn.net/v/t39.30808-6/542228082_1866987800913133_5899404529763028015_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5y4trwohDksQ7kNvwFU8oD2&_nc_oc=AdmduC2P0VKI8E5ueA2ZFjarhU65SB8Ki72ji38QtUn01F3PLz_BnBjF6t6Yb9WbTq8&_nc_zt=23&_nc_ht=scontent.fkgl2-2.fna&_nc_gid=Ijb8TirNT_QRsqEFnuGlxg&oh=00_AfUFW_bqhSfBO8F0aOMiQXwyJrRMZhYMX6V66nGZFLRkig&oe=68BA4206"
    },
    {
      title: "Electronics and physical computing",
      issuer: "Arduino",
      date: "October 2024",
      image: "https://scontent.fkgl2-1.fna.fbcdn.net/v/t39.30808-6/541148674_1866987830913130_7660496661254066644_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vbRBldnjwc8Q7kNvwEoG2Hc&_nc_oc=AdkgRB5Pags1TItWOv22RJqv6WLY32MIQyNYa9JVc1ztB0B3dn6F5_i9bpqncc2GNlY&_nc_zt=23&_nc_ht=scontent.fkgl2-1.fna&_nc_gid=o-ZL-nriHTE0qfLWvVdLSw&oh=00_AfVKgfhT7mEGR8uQ6hrQLIlCMzCVXkLpf9sT3KBfHYVh3w&oe=68BA48AC"
    },
    {
      title: "Quantum Computing Basics",
      issuer: "IBM Quantum",
      date: "February 2023",
      image: "https://scontent.fkgl2-2.fna.fbcdn.net/v/t39.30808-6/540882525_1865392231072690_5001661389126450615_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yCPAvVzyf38Q7kNvwGyOlMT&_nc_oc=Adnf8EajmHfylz3Ih4ZTzSYDh061Y6To8ZgFXXLYewYCGVlIgoHDO9C-A6TDVeo8aaI&_nc_zt=23&_nc_ht=scontent.fkgl2-2.fna&_nc_gid=8RB4gO9smRjUyqPoy29Z2A&oh=00_AfX0VWaIfZw1hveepKWQ3ifKFCoOxAisbPHrhS0ymomJJg&oe=68B793E7"
    }
  ];

  return (
    <div className="py-16 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-20 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional certifications and achievements"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={cert.title}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              image={cert.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
