const PngCard = ({ imgURL, changeBigPngImage, bigPngImg }) => {
  const handleClick = () => {
    if (bigPngImg !== imgURL.bigPng) {
      changeBigPngImage(imgURL.bigPng);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigPngImg === imgURL.bigPng ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="Png colletion"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default PngCard;
