import React from 'react';
import { useHistory } from 'react-router';
import './adtile.css';


interface AdTileProps {
    name: string,
    imageUrl: string,
    date: Date,
    grade: number,
    id: string;
}

const AdTile: React.FC<AdTileProps> = ({name, imageUrl, date, grade, id}) => {
    const history = useHistory();
    return (
        <div className="tile-component" onClick={() => history.push(`/ad/${id}`)}>
            <div className= "ad-name">
                {name}
            </div>
            <div className="tile-image">
                <img src={imageUrl} alt={`'loadingimg'${id}`} />
            </div>
            <div className="tile-details">
                <div className="tile-details-date">
                    {date.toDateString}
                </div>
                <div className="tile-details-grade">
                    {grade}
                </div>
            </div>
        </div>
    )
}
export default AdTile;