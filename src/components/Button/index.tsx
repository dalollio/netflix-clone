import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './style.css'


// import { Container } from './styles';

export interface iButton {
  label:string;
  callback():void;
}

const Button: React.FC<iButton> = props => {
  const {label,callback} = props;

  return (
      <div className='button' onClick={callback}>
          <FaPlay style={{flex:1,marginRight:10}}/>
          <span>{label}</span>
      </div>
  )
}

export default Button;