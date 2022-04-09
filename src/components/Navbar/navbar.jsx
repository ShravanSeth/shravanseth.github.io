import React from "react";
import './navbar.css'

export default function Navbar(){
    
    return(
        <><nav className="nav">
        <div className="container">
            <div className="logo">
            <img src="/assets//logo.png"/></div>
            <div id="mainListDiv" className="main_list">
                {/* <ul className="navlinks">
                    <li><a href="/#">Contact</a></li>
                </ul> */}
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    <aside class="_social-links">
	<ul class="_links-list">
		<li class="_social-link"><a href="https://twitter.com/shhh_ravan"><i class="fa fa-twitter"></i></a></li>
		<li class="_social-link"><a href="https://github.com/ShravanSeth" ><i class="fa fa-github"></i></a></li>
		<li class="_social-link"><a href="https://www.instagram.com/shravanseth_/"><i class="fa fa-instagram"></i></a></li>
        <li class="_social-link"><a href="https://www.linkedin.com/in/shravan-seth-0ab01a193/"><i class="fa fa-linkedin"></i></a></li>
        <li class="_social-link"><a href="mailto:shravanseth59@gmail.com"><i class="fa fa-at"></i></a></li>
	</ul>
        </aside>
    </>
    );
};