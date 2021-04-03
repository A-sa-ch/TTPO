import React from 'react'

import bar from "../static/img/bar.svg"
import accaunt from "../static/img/accaunt.svg"
import search from "../static/img/search.svg"
import like from "../static/img/like.svg"
import dlasporta from "../static/img/дляспорта.png"
import nakazdyjden from "../static/img/накаждыйдень.png"
import dladoma from "../static/img/длядома.png"
import plyaz from "../static/img/напляж.png"
import a1 from "../static/img/1.png"
import a2 from "../static/img/2.png"
import a3 from "../static/img/3.png"
import a4 from "../static/img/4.png"
import a5 from "../static/img/5.png"
import inst1 from "../static/img/inst1.png"
import inst2 from "../static/img/inst2.png"
import inst3 from "../static/img/inst3.png"
import feis from "../static/img/фейсб.png"
import vk from "../static/img/вк.png"

import "../static/styles/Main.css"
const Home = () => {
    return (
        <div class="wrapper">
        <div class="container">
            <div>
                <div class="menu" >
                    <div>
                    <img src={bar} width="30" height="8" id="menuImg"/>
                    <div class="dropMenu" id="menu">
                        <ul>
                            <li>Lol</li>
                            <li>Lol</li>
                            <li>Lol</li>
                            <li>Lol</li>
                            <li>Lol</li>
                        </ul>
                        <ul>
                            <li>Lol</li>
                            <li>Lol</li>
                            <li>Lol</li>
                            <li>Lol</li>
                        </ul>
                    </div>
                </div>
                        <div class="navbar">
                            <img src={accaunt} width="13" height="15"/>
                            <img src={search} width="15" height="15"/>
                            <img src={like} width="16" height="15"/>
                            <img src={bar} width="12" height="14"/>
                        </div>
                </div>  
                <div class="offer">
                    <p>Собери свой базовый гардероб по вкусу</p>
                    <span>Преимущественно натуральные ткани</span>
                    <button>Купить сейчас</button>     
                </div>        
            </div>
            <div class="stylist">
                <div class="style">
                    <h2>Консультация стилиста</h2>
                    <p>
                        Стиль - это индивидуальное творчество на каждый день 
                        и на всю жизнь. И только от Тебя зависит, насколько интересен Твой 
                        стиль окружающим, насколько он завораживает, заставляет
                        восхищаться или подражать.
                    </p>
                    <button>Записаться к стилисту</button> 
                </div>
                <div id="rectangle"></div>
            </div>
            <div class="bestproducts">
                <h2>Лучшие товары категории</h2>
                <div class="categories">
                    <div>
                        <img src={dlasporta} alt="photo"/>
                        <p>Для спорта</p>
                    </div>
                    <div>
                        <img src={nakazdyjden} alt="photo"/>
                        <p>На каждый день</p>
                    </div>
                    <div>
                        <img src={dladoma} alt="photo"/>
                        <p>Для дома</p>
                    </div>
                    <div>
                        <img src={plyaz} alt="photo"/>
                        <p>На пляж</p>
                    </div>
                </div>
            </div>
            <div class="new">
                <h2>Новинки</h2>
                    <div class="firstline">
                        <a><img src={a1}/></a>
                        <img src={a2}/>
                        <img src={a3}/>
                    </div>
                    <div class="secondline">
                        <img src={a4}/>
                        <img src={a5}/>
                    </div>
            </div>
            <div class="club">
                <div class="clubcontent">
                    <h2>Клуб</h2>
                    <p>
                        Зарегистрированные пользователи нашего сайта становятся 
                        членами клуба STILVARI, что дает следующие преимущества 
                        и возможности:
                    </p>
                    <div class="oportunities">
                        <p>01</p>
                        <span>Получать и накапливать бонусные баллы.</span>
                    </div>
                    <div class="oportunities">
                        <p>02</p>
                        <span>Участвовать в мероприятиях и конкурсах нашего клуба.</span>
                    </div>
                    <div class="oportunities">
                        <p>03</p>
                        <p>Получать консультацию у наших стилистов.</p>
                    </div>
                    <div class="oportunities">
                        <p>04</p>
                        <span>Общаться в чате клуба.</span>
                    </div>
                    <div class="oportunities">
                        <p>05</p>
                        <span>Оставлять комментарии и отзывы.</span>
                    </div>
                    <button>Присоедениться </button> 
                </div>
                <div id="rectangle"></div>
            </div>
            <div class="inst">
                <h2>Наш инстаграм</h2>
                <div class="instcontent">
                    <img src={inst1}/>
                    <img src={inst2}/>
                    <img src={inst3}/>
                </div>
            </div>
            <div class="footer">
                <div class="fotermenu">
                    <ul>
                        <li>Каталог</li>
                        <li>Оплата</li>
                        <li>Доставка</li>
                        <li>Таблица размеров</li>
                        <li>Возврат</li>
                        <li>Опт</li>
                    </ul>
                    <ul>
                        <li>Аккаунт</li>
                        <li>Контакты</li>
                        <li>К стилисту</li>
                        <li>Клуб</li>
                        <li>Форум</li>
                    </ul>   
                </div>
                <div class="footercontent">
                    <div class="socialnetw">
                        <div class="f">
                            <button><a href="#"><img src={feis}/></a></button>
                        </div>
                        <div class="vk">
                            <button><a href="#"><img src={vk}/></a></button>
                        </div>
                    </div>
                    <p>
                        ИП Надиров Алексей Викторович. Свидетельство о регистраци №690162347 
                        от 20.02.2002 Выдано Мингорисполкомом Магазин зарегистрирован в торговом
                        реестре РБ 31.12.2015 №299850 Юридический адрес: 
                        2223414, Смолевичский р-н,тел +375(17)2532775
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home
