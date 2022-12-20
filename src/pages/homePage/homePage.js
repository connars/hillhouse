import { Link } from 'react-router-dom'
import HomeCard from '../../components/homeCard'

import item1 from './../../assets/images/1.png'
import item2 from './../../assets/images/2.png'
import item3 from './../../assets/images/3.png'

import CardAva from './../../assets/images/icon1.svg'
import CardAva2 from './../../assets/images/icon2.svg'
import CardAva3 from './../../assets/images/icon3.svg'
import i1 from './../../assets/images/i1.png'
import i2 from './../../assets/images/i2.png'
import i3 from './../../assets/images/i3.png'
import i4 from './../../assets/images/i4.png'

import HeroWidget from "../../components/heroWidget";

import './homePage.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {
    useEffect(() => {
        document.querySelector(".header-wrapper").style.display = 'block'
        document.querySelector(".footer__wrapper").style.display = 'flex'
    }, []);
    let { t, i18n } = useTranslation();
    return (
        
        <div className='home__wrapper'>
            {/* <div className='home__top-wrapper'>
                <div className='home__top container'>
                    <h1 className='home__heading'>
                        {t("homePage.title")}
                    </h1>
                    <div className='home__top-btn-wrapper'>
                        <Link to={'/login'} className='home__top-contact'>
                            {t("homePage.but1")}
                            
                        </Link>
                        <Link to={'/reasons'} className='home__top-join'>
                            {t("homePage.but2")}
                        </Link>
                    </div>
                    <p className='home__top-text'>
                        {t("homePage.subt")}
                    </p>
                    <div className='home__top-eagle'></div>
                </div>
            </div> */}
        

          <div className='giv'>

            <div className='container z'>
                <div className='giv__wrapper'>
                    <div className='giv__left'>
                        <h1> Глобальный новогодний розыгрыш среди <span className='yellow'>действующих</span> клиентов</h1>
                        <div className='giv__left-bottom'>
                            <h3 className='giv__text'>
                                Присоеденяйся к компании HILLHOUSE сегодня и становись участником
                            </h3>

                            <button className='header__bottom-open'>Стать участником</button>
                        </div>
                       
                    </div>
                    <div className='giv__right'>
                        <div className='bg'>

                        </div>
                        <div className='giv__cards'>
                            <div className='giv__card'>
                                <img src={i1}></img>
                                <p className='orange'>2000</p>
                                <span>Iphone 14 pro</span>
                            </div>
                            <div className='giv__card'>
                                <img src={i2}></img>
                                <p className='orange'>2000</p>
                                <span>Iphone 14 pro</span>
                            </div>
                            <div className='giv__card'>
                                <img src={i3}></img>
                                <p className='orange'>2000</p>
                                <span>Iphone 14 pro</span>
                            </div>
                            <div className='giv__card'>
                                <img src={i4}></img>
                                <p>2000</p>
                                <span>Iphone 14 pro</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className='giv__left-bottom giv__left-bottom-m'>
                            <h3 className='giv__text'>
                                Присоеденяйся к компании HILLHOUSE сегодня и становись участником
                            </h3>

                            <button className='header__bottom-open'>Стать участником</button>
                        </div>
                </div>
            </div>
          </div>
         
             <div className='giv__bottom'>
                <div className='giv__bottom-wrapper container'>
                    <h3>Результаты <span className='orange'>30</span> декабря</h3>
                    <h3>победители будут оповещены на почту</h3>
                </div>
            </div>
            <HeroWidget />
            <div className='home__middle-wrapper'>
                <div className='home__middle container'>
                    <p className='home__middle-text'>
                        {t("homePage.text1")}
                    </p>
                    <Link to={'/login'} style={{textDecoration:'none'}} className='home__middle-btn'>
                        {t("homePage.text2")}
                    </Link>
                </div>
            </div>
            <div className='home__bottom-wrapper'>
                <div className='home__bottom container'>
                    <ul className='home__bottom-list'>
                        <HomeCard
                            key={1}
                            img={CardAva}
                            heading={t("homePage.headcard1")}
                            text={t("homePage.textcard1")}
                        />
                        <HomeCard
                            key={2}
                            img={CardAva2}
                            heading={t("homePage.headcard2")}
                            text={t("homePage.textcard2")}
                        />
                        <HomeCard
                            key={3}
                            img={CardAva3}
                            heading={t("homePage.headcard3")}
                            text={t("homePage.textcard3")}
                        />
                    </ul>
                </div>
            </div>

            <div className='home__info'>
                <Link to={'/compliance'} className='home__info-link'>{t("homePage.crs")}</Link>
            </div>

            <div className='container rev'>
                <img src={item1}></img>
                <img src={item2}></img>
                <img src={item3}></img>
            </div>
        </div>
    )
}

export default HomePage