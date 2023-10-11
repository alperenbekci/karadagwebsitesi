import { pngegg } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          En Güncel
          <span className="text-coral-red"> Uygun </span> Ve
          <span className="text-coral-red"> Kaliteli </span> Çözümler
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Teknolojik çözümlerimiz ile sizlere en uygun çözümleri sunuyoruz.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Yenilikçi ve kaliteli çözümlerimiz ile sizlere en iyi hizmeti
          sunuyoruz.
        </p>
        <div className="mt-11">
          <Button label="Detayları gör" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={pngegg}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
