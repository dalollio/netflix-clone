import React from 'react';
import './style.css';

export interface iMovieCard {
    label:string;
    thumbUrl?:string;
    previewUrl?:string;
    id?:number;
}

const MovieCard: React.FC<iMovieCard> = props => {
    const {label,thumbUrl,previewUrl} = props;
  return (
      <div className='card' id={String(props.id)}>
          
      </div>
  )
}

export default MovieCard;