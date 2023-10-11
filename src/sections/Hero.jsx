import { useState } from "react";

import { Pngs, statistics } from "../constants";
import { Button, PngCard } from "../components";
import { bigPng1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigPngImg, setBigPngImg] = useState(bigPng1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Akıllı Bina ve Zayıf Akım Sistemleri çözüm ortağınız
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">
            Sektörün Önde Gelen
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Teknolojileri
          </span>{" "}
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Teknolojik sistemlerde güven önemlidir
        </p>

        <Button label="Şimdi başla" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigPngImg}
          alt="Png colletion"
          width={610}
          height={502}
          className="object-contain relative z-0"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {Pngs.map((image, index) => (
            <div key={index}>
              <PngCard
                index={index}
                imgURL={image}
                changeBigPngImage={(Png) => setBigPngImg(Png)}
                bigPngImg={bigPngImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
