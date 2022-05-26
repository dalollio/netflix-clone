import React, { createRef, useEffect, useState } from 'react';
import MovieCard from '../MovieCard';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './style.css';
// import { Container } from './styles';

const Section: React.FC<any> = props => {

    const [stripWidth, setStripWidth] = useState<number>();
    const [wallSize,setWallSize] = useState<number>(0);
    const [offset,setOfficet] = useState<number>(0);
    const elementRef = createRef<any>();

    useEffect(()=>{
        setWallSize(elementRef.current.offsetWidth)
        function updateSize() {
            setStripWidth(filmes.length*(window.innerWidth/6.6));
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    },[stripWidth])

    const filmes = [
        {label:`teste`},
        {label:`teste`},
        {label:`teste`},
        {label:`teste`},
        {label:`teste`},
        {label:`teste`},
        {label:`teste`},
        {label:`teste`},
    ]

    const slideToRight = () => {
        console.log(stripWidth)
        console.log()
        for(let e = 0;e <600;e++) {
            const timer = setInterval(()=>{
                setOfficet(offset+e)
                clearInterval(timer)
            },400)
        }
    }

    const slideToLeft = () => {
        for(let e = 0;e <600;e++) {
            const timer = setInterval(()=>{
                setOfficet(offset-e)
                clearInterval(timer)
            },400)
        }
    }
  return (
    <div className='section-stripe' key={props.id}>
        <div className='title'>Titulo</div>
        <div className='stripe-container'>
            <div ref={elementRef} className='stripe-titles' style={{width:stripWidth,transform:`translate(-${offset}px, 0px)`}}>
                { filmes.map((filme,id)=> <MovieCard key={id} label='Teste'/>)}
            </div>
            <div onClick={()=> slideToLeft()} className='nav-btn left'>
                <FaAngleLeft />
            </div>
            <div onClick={()=> slideToRight()} className='nav-btn right'>
                <FaAngleRight />
            </div>
        </div>
    </div>
  )
}

export default Section;