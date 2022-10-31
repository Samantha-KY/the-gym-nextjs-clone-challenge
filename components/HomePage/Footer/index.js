/* eslint-disable @next/next/no-img-element */
import React from "react";
import Discord from "../../modules/Discord";
import Facebook from "../../modules/Facebook";
import Instagram from "../../modules/Instagram";
import LinkedIn from "../../modules/LinkedIn";
import Medium from "../../modules/Medium";
import Telegram from "../../modules/Telegram";
import Twitter from "../../modules/Twitter";

function Footer() {
    return (
        <section className="flex flex-col justify-center items-center mt-20 text-black/80">
            <p className="font-normal text-black/80 text-center text-xl w-full md:hidden">
                Visit <span className="font-bold">nearbalkans.org</span> and make sure to
                <br />
                follow us on our social and community <br /> channels!
            </p>
            <p className="font-normal text-black/80 text-center text-xl w-full hidden md:block">
                Visit <span className="font-bold">nearbalkans.org</span> and make sure to
                follow us on our social and community channels!
            </p>
            <div className="flex gap-8 mt-20 md:hidden">
                <Twitter />
                <Discord />
                <Telegram />
                <Facebook />
                <LinkedIn />
                <Instagram />
                <Medium />
            </div>
            <div className="md:flex gap-8 mt-20 justify-center hidden">
                <div className="flex gap-8">
                    <img src='/headerLogoDt.svg' alt='header logo' className='h-10 w-40 hidden md:block' />
                    <div className='border-r-2 h-10'></div>
                </div>
                <div className="flex gap-8">
                    <Twitter />
                    <Discord />
                    <Telegram />
                    <Facebook />
                    <LinkedIn />
                    <Instagram />
                    <Medium />
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-10 text-center md:flex-row md:gap-8">
                <p className="font-normal text-xl">NEAR Balkans<br className="hidden md:block" /> 2022</p>
                <p className="font-normal text-xl">info@nearbalkans.org</p>
                <p className="font-normal text-xl">Privacy<br className="hidden md:block" /> Policy</p>
                <p className="font-normal text-xl">Cookie<br className="hidden md:block" /> Policy</p>
                <p className="font-normal text-xl">Terms &<br className="hidden md:block" /> Conditions</p>
            </div>

            <h6 className="font-normal text-xl text-center mt-10 mb-[6rem] md:hidden">NEAR Balkans Hub: Bosnia & Herzegovina,<br />
                Bulgaria, Croatia, Montenegro, North<br />
                Macedonia, Serbia, and Slovenia</h6>
                <h6 className="font-normal text-xl text-center mt-10 mb-[6rem] hidden md:block">NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro, North
                Macedonia,<br/> Serbia, and Slovenia</h6>
        </section>
    );
}

export default Footer;
