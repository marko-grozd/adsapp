import { TextField } from '@material-ui/core';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import adservice from '../../services/adservice';
import './adForm.css';
import cats from './categories';
import cities from './cities';

const AdForm: React.FC = () => {

    const [name, setName] = useState<string>();
    const [details, setDetails] = useState<string>();
    const [imageUrl, setImageUrl] = useState<string>();
    const [categoryId, setCategoryId] = useState<string>();
    const [city, setCity] = useState<string>();
    const [errorMessage, setErrorMessage] = useState<string>();
    const history = useHistory();

    const submitForm = async () => {
        const token = localStorage.getItem("token");
        const userName = token ? jwtDecode<JwtPayload>(token).sub : " ";
        const sendObj = {
            name: name,
            details: details,
            imageUrl: imageUrl,
            categoryId: categoryId,
            city: city,
            userName: userName
        };
        console.log(JSON.stringify(sendObj));

        await adservice.addNewAd(sendObj, token)
        .then(resp => {
            if (resp.status === undefined) {
                history.push("/");
            } else {
                setErrorMessage("Error occured!");
            }
        }).catch(err => console.log(err));
    }

    return (
        <div className="ad-component">
            <TextField
                id="standard-basic"
                label="product name"
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                id="standard-basic"
                label="details"
                type="text"
                onChange={(e) => setDetails(e.target.value)}
            />
            <TextField
                id="standard-basic"
                label="image url"
                type="url"
                onChange={(e) => setImageUrl(e.target.value)}
            />
            <br/>
            <label htmlFor="category">Choose category: </label>
            <select name="category" onChange={e => setCategoryId(e.target.value)}>
                {cats.map((k, v) => <option value = {++v}>{k}</option>)}
            </select>
            <br/>
            <label htmlFor="city">Choose a city </label>
            <select name="city" onChange={e => setCity(e.target.value)}>
                {cities.map(name => <option value={name}>{name}</option>)}
            </select>
            <button id="submit-button" onClick={submitForm}>
                Submit
      </button>
      {errorMessage && <h4>{errorMessage} </h4>}

        </div>
    )
}

export default AdForm;