import React from "react";

function Hero() {
    return (
        <section>
            <div className="mt-80">
                <div className="flex flex-col gap-5">
                    <h1 className="text-black/80 text-7xl font-medium text-center leading-tight">
                        Get{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-blue-300">
                            Near{" "}
                        </span>
                        Certified!
                    </h1>
                    <p className="text-center text-xl text-black/80 md:hidden">
                        We, in NEAR Balkans, know how important
                        <br /> it is to have regional and local support.
                        <br />
                        Now you can become NEAR certified in a<br /> regional language of
                        preference and
                        <br /> connect with our team to support your
                        <br /> further growth within the NEAR
                        <br /> ecosystem.
                    </p>

                    <p className="text-center text-xl text-black/80 hidden md:block">
                        We, in NEAR Balkans, know how important it is to have regional and
                        local support. Now
                        <br /> you can become NEAR certified in a regional language of
                        preference and connect with
                        <br />
                        our team to support your further growth within the NEAR ecosystem.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
