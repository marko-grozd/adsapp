import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import adservice from "../../services/adservice";
import NavBar from "../navbar/navbar";
import AdTile from "./adtile/adtile";
import "./home.css";

interface Ad {
  name: string,
  imageUrl: string,
  date: Date,
  grade: number,
  id: string
}

const Home: React.FC = () => {

  const [page, setPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>();
  const [allAds, setAllAds] = useState<Ad[]>();

  useEffect(() => {
    adservice.pageCount().then((resp: number) => setPageCount(resp));
    adservice.getAll(page).then((resp: []) => setAllAds(resp));
  }, [page]);


  return (
    <div className="home">
      <NavBar />
      <div className="ads-container">
      { allAds ?
        allAds.map(ad => {
          return <AdTile name={ad.name} imageUrl={ad.imageUrl} date={ad.date} grade={ad.grade} id={ad.id}/>
        }) : <p>Loading</p>
      }
      </div>
      <Pagination count={pageCount} variant="outlined" color="primary" page={page} onChange={(e, p) => setPage(--p)}/>
      
    </div>
  );
};

export default Home;
