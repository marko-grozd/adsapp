import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import NavBar from '../navbar/navbar';
import './addetails.css';

const AdDetails: React.FC = () => {

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        console.log('reeneeer')
    }, []);

    return(
    <div className="detailed-ad-view">
        <NavBar/>
        <div className="title">

        </div>
        <div className="imagedetail">
            <div className="image">
            </div>
            <div className="details">
                <p>Your parametar is: {id} </p>
            </div>
        </div>

    </div>
    );
}

export default AdDetails;