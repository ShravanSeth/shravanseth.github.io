import React from 'react'
import './footer.css'

export const footer = () => {
    return (
        <>
            <footer>
                <div class="container">
                    <h2 class="text-center title">Let's Grab a Coffee.</h2>
                    <div class="row contact">
                        <div class="col-md-6">
                            <div class="contacts-data">
                                <h2>Address:<span><p>Kolkata, India</p></span></h2>
                            </div>
                            <div class="contacts-data">
                                <i class="fa fa-phone fa-2x"></i>
                                <span class="contact-text">+91 98311 00765</span>
                            </div>
                            <ul class="_links-list ">
                                <li class="_social-link">
                                    <a href="https://twitter.com/shhh_ravan"><i class="fa fa-twitter"></i></a>
                                    <a href="https://github.com/ShravanSeth" ><i class="fa fa-github"></i></a>
                                    <a href="https://www.instagram.com/shravanseth_/"><i class="fa fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/shravan-seth-0ab01a193/"><i class="fa fa-linkedin"></i></a>
                                    <a href="mailto:shravanseth59@gmail.com"><i class="fa fa-at"></i></a></li>
                        </ul>

                    </div>
                </div>
                <p class="text-center">
                    ALL RIGHTS RESERVED. 2022
                </p>
            </div>
        </footer>
</>
  )
}
