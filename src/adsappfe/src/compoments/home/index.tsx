import React from "react";
import NavBar from "../navbar/navbar";
import AdTile from "./adtile/adtile";

import "./home.css";


const Home: React.FC = () => {
  const ads = [
    {
      id: "1",
      name: "Prvi oglas",
      date: new Date('2020-02-03'),
      ciry: 'Novi Sad',
      imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
      grade: 5.0
    },
    {
      id: "2",
      name: "Prvi oglas",
      date: new Date('2021-03-03'),
      ciry: 'Novi Sad',
      imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
      grade: 5.0
    },
    {
      id: "3",
      name: "Prvi oglas",
      date: new Date('2021-03-06'),
      ciry: 'Novi Sad',
      imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
      grade: 5.0
    },
    {
      id: "4",
      name: "Prvi oglas",
      date: new Date('2021-03-03'),
      ciry: 'Novi Sad',
      imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
      grade: 5.0
    },
    {
      id: "5",
      name: "Prvi oglas",
      date: new Date('2021-03-03'),
      ciry: 'Novi Sad',
      imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
      grade: 5.0
    },
    {
      id: "6",
      name: "Prvi oglas",
      date: new Date('2021-03-03'),
      ciry: 'Novi Sad',
      imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
      grade: 5.0
    },
    {
      id: "7",
      name: "Prvi oglas",
      date: new Date('2021-03-03'),
      ciry: 'Novi Sad',
      imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
      grade: 5.0
    },
    {
      id: "8",
      name: "Prvi oglas",
      date: new Date('2021-03-03'),
      ciry: 'Novi Sad',
      imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
      grade: 5.0
    },
    {
      id: "9",
      name: "Prvi oglas",
      date: new Date('2021-03-03'),
      ciry: 'Novi Sad',
      imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
      grade: 5.0
    },
    {
      id: "10",
      name: "Prvi oglas",
      date: new Date('2021-03-03'),
      ciry: 'Novi Sad',
      imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
      grade: 5.0
    }
  ]

  return (
    <div className="home">
      <NavBar />
      <div className="ads-container">
      { 
        ads.map(ad => {
          return <AdTile name={ad.name} imageUrl={ad.imageUrl} date={ad.date} grade={ad.grade} id={ad.id}/>
        })
      }
      </div>
      
    </div>
  );
};

export default Home;
