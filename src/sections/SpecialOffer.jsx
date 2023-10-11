import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Png Promotion"
          width={500}
          height={400}
          className="object-contain "
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Özel </span>
          Teklifler
        </h2>
        <p className="mt-4 info-text">
          Hemen bizden bir teklif alın ve fırsatları kaçırmayın.
        </p>
        <p className="mt-6 info-text">
          En güncel ürünlerimizi inceleyin ve ürünlerimizi inceleyin.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Şimdi Başla" iconURL={arrowRight} />
          <Button
            label="Daha Fazla Bilgi Al"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
