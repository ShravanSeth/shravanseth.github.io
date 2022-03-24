import React from "react";
import './mainSlider.css'
import image from './images/final2.png'

const mainSlider = () => {
    return (
        <section id="section" class="light nopad-t nopad-b">
            <div class="row">

                <div class="col-12">

                    <div id="face" class="face">
                        <a href="portfolio.html">
                            <div id="designer" class="designer">
                                <div id="designer-desc" class="description">
                                    <h1>Designer</h1>
                                    <p>Product designer specialising in UI design and design systems.</p>
                                </div>
                            </div>
                        </a>

                        <a href="about.html">
                            <div id="coder" class="coder">
                                <div id="coder-desc" class="description">
                                    <h1><span class="chevron-left">&lt;</span>Coder<span class="chevron-right">&gt;</span></h1>
                                    <p>Front end developer who writes clean, elegant and efficient code.</p>
                                </div>
                            </div>
                        </a>

                        <img id="face-img" class="face-img" src={image} alt="Shravan Seth" />

                        <div id="designer-img" class="designer-img"></div>
                        <div id="coder-img" class="coder-img"></div>
                        <div id="designer-bg" class="designer-bg"></div>
                        <div id="coder-bg" class="coder-bg"></div>

                    </div>
                </div>

            </div>

        </section>
        
    );
}
export default mainSlider