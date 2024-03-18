import React,{useState} from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg , setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col xl:px-16 px-2 justify-center gap-10 max-container min-h-screen "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x mt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Colleection
        </p>
        <h1
          className="mt-10 text-8xl
        max-sm:text-[72px]
        font-bold "
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red  inline-block">Nike </span> Shoes
        </h1>
        <p className="font-montserrat mt-6 mb-14 text-slate-gray leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show me" imgUrl={arrowRight} />

        <div className="flex justify-start items-start w-full flex-wrap mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-5 ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={bigShoeImg}
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 sm:gap-6 gap-4">
          {shoes.map((item) => (
            <div key={item}>
              <ShoeCard
                imgUrl={item}
                changeBigShoeImg={(item) => setBigShoeImg(item)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
