import React, { useContext } from 'react';
import ColorContext from '../context/ColorContext';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../components/Login/Login';
import styled from 'styled-components';
import LanguageContext from '../context/LanguageContext';
import circles from '../assets/circles.svg';
import SmallHead from '../components/SmallHead';
import blockchain from '../assets/bchain.png';
import '../App.css';

type Props = {};

const Home = (props: Props) => {
  const lang = useContext(LanguageContext);
  const col = useContext(ColorContext);

  const navigate = useNavigate();
  const navigateToLoginPage = () => {
      navigate("/login")
  }

  return (
    <MainAreaStyled>
    <img src={circles} alt="" className="overlay" />
    <ContentStyle>
            <div className="content">
                <div className="left" style={{color:"black"}}>
                    <SmallHead title={"The Hassle Free Bank"} identifier={'Before'}/>
                    <h1>
                        We offer the best services to our customers from the convenience of their homes.
                        An one stop website for everything banking
                    </h1>
                    <a className="bm-cta__cta" href="#" onClick={navigateToLoginPage}>
                        <span>Start your online portfolio</span>
                    </a>
                </div>
                <div className="right">
                    <img src={blockchain} alt="" />
                </div>
            </div>
        </ContentStyle>
    
</MainAreaStyled>
  );
};

const MainAreaStyled = styled.div`
    width: 100%;
    height: 85vh;
    position: relative;
    overflow: hidden;
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        right: -400px;
        top: -200px;
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
    }
`;

const ContentStyle = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .left{
        text-align: left;
    }
    
    
    .content{
        color: white;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
                font-size: 1.5em;
            }
        }
        .right{
            position: absolute;
            right: -11%;
            bottom: -1%;
            width: 60%;
        }
    }
`;

export default Home;
