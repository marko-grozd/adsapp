import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import adservice from "../../services/adservice";
import NavBar from "../navbar/navbar";
import AdTile from "./adtile/adtile";
import Checkbox from '@material-ui/core/Checkbox';

import "./home.css";
import jwtDecode, {JwtPayload} from "jwt-decode";

interface Ad {
  name: string,
  imageUrl: string,
  date: Date,
  grade: number,
  id: string,
  price: number
}

const Home: React.FC = () => {

  const [page, setPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>();
  const [allAds, setAllAds] = useState<Ad[]>();
  const [loggedUser, setLoggedUser] = useState<boolean>();

  const getUsersAds = () => {
      const token = localStorage.getItem("token");
      const name = token && jwtDecode<JwtPayload>(token).sub;
      adservice.getAllUsersAd(name!!, token).then((resp: Ad[]) => setAllAds(resp)).then((err: any) => console.log(err));

  }

  useEffect(() => {
      const user = localStorage.getItem("token");
      setLoggedUser(!!user);
    adservice.pageCount().then((resp: number) => setPageCount(resp));
    adservice.getAll(page).then((resp: []) => setAllAds(resp));
  }, [page]);


  return (
    <div className="home">
      <NavBar />
        {
            loggedUser &&
            <div>
                Show only mine:
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={getUsersAds}
                />
            </div>
        }


      <div className="ads-container">
      { allAds ?
        allAds.map(ad => {
          return <AdTile name={ad.name} imageUrl={ad.imageUrl} date={ad.date} grade={ad.grade} id={ad.id} price={ad.price}/>
        }) : <p>Loading</p>
      }
      </div>
      <Pagination count={pageCount} variant="outlined" color="primary" page={page} onChange={(e, p) => setPage(--p)}/>
      
    </div>
  );
};

export default Home;
