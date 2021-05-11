import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import adservice from '../../services/adservice';
import NavBar from '../navbar/navbar';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import CallIcon from '@material-ui/icons/Call';

import './addetails.css';

interface Ad {
    userName: string,
    phoneNumber: string,
    name: string,
    date: Date,
    details: string,
    imageUrl: string,
    grade: number,
    category: string,
    city: string
}
const AdDetails: React.FC = () => {

    const { id } = useParams<{ id: string }>();

    const [ad, setAd] = useState<Ad>();

    useEffect(() => {
        adservice.getById(Number(id)).then((resp: Ad) => setAd(resp));
    }, [id]);

    return (
        <div className="detailed-ad-view">
            <NavBar />
            <div className='user-details'>
                <div className='user-details-username'>
                    <RecordVoiceOverIcon /> {ad?.userName}
                </div>
                <div className='user-details-number'>
                    <CallIcon /> {ad?.phoneNumber}
                </div>
            </div>
            <div className='ad'>
                <div className="title">
                    {ad?.name}
                </div>
                <div className="imagedetail">
                    <div className="image">
                        <img src={ad?.imageUrl} alt="img details" />
                    </div>
                    <div className="details">
                        {ad?.details}
                    </div>
                    <div className='date'>
                        {ad?.date.toString}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdDetails;