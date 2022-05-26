import React from 'react';
import Button from '../Button';
import './style.css';
// import { Container } from './styles';

const FeatureMovie: React.FC = () => {
  return (
      <div className="container-detach">
          <div className='container-fade'>
          {/* <span>Efeito Borboleta</span> */}
            <div style={{width:'40%'}}>
                <div className='title'>Efeito Borboleta</div>
                <div className='description'>O estudante universitário Evan Treborn, que vive assombrado por memórias trágicas, descobre um jeito de mudar o passado</div>
                <div className='buttons'>
                    <Button label='Assistir' callback={()=>console.log("aqui")}/>
                    <Button label='Mais informações' callback={()=>console.log("aqui")}/>
                </div>
            </div>
          </div>
      </div>
  )
}

export default FeatureMovie;