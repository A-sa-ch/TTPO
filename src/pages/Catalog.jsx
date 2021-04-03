import React from 'react'
import Filter from '../components/Filter'

import bar from "../static/img/bar.svg"
import accaunt from "../static/img/accaunt.svg"
import search from "../static/img/search.svg"
import like from "../static/img/like.svg"
import strelka from "../static/img/стрелка_для_пути.svg"

import "../static/styles/Catalog.css"

const Catalog =() => {

    const arr =["коллеции", "cезон","назначение","размер","цвет"]

    return (
        <div class="wrapper">
        <div class="container">
            <div>
                <div class="menu_catalog">
                    <img src="./img/bar.svg" width="30" height="8"/>
                        <div class="nav">
                            <img src={bar} width="13" height="15"/>
                            <img  src={accaunt} width="15" height="15"/>
                            <img  src={search} width="16" height="15"/>
                            <img  src={like} width="12" height="14"/>
                        </div>
                </div>  
            </div>
            <div class="way">
                <a href="#">Главная</a>
                <img  src={strelka} />
                <a href="#">Каталог</a>
            </div>
            <div>
                <ul class="catalog">
                    <p>Каталог</p>
                    <li><a href="#">Все товары</a></li>
                    <li><a href="#">Куртки и бомберы</a></li>
                    <li><a href="#">Джемперы, жакеты</a></li>
                    <li><a href="#">Кардиганы и жилетки</a></li>
                    <li><a href="#">Костюмы для вечеринки</a></li>
                    <li><a href="#">Все для спорта</a></li>
                </ul>
            </div>
            <p>Фильтры</p>
            <div className="filters_wrapper">
            {arr.map((el)=>{
                return <Filter name={el}/>
            })}
            </div>
        </div>    
    </div>    
    )
}

export default Catalog
