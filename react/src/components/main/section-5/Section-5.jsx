import React from "react";
import "./../../common.scss/Common.scss"   
import "../section-3/Section-3.scss";


export default function Section_5(){
   return (
       <>
     <section>
            <div class="container">
            <div class="widget-head">
                    <div class="boss-widget">
                        <div class="big-widget">
                            <h2>Bestsellers</h2>
                            <a class="dark" href="/">SHOP ALL</a>
                        </div>
                            <div class="card-1">
                                <img src="/card-3.png" alt="card-img" />
                            </div>
                            <div class="card-2">
                                <img src="/card-4.png" alt="card-img" />
                            </div>
                  
                            <ul class="ul-button">
                                <li><button class="pok"></button></li>
                                <li><button class="mil"></button></li>
                                <li><button class="mil"></button></li>
                            </ul>
                    </div>
                </div>
            </div>
        </section>
       </>
   )
}