import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col text-center bg-white rounded-lg shadow-xl py-8 gap-5 -mt-16">
        <h1 className=" font-bold text-5xl tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl text-slate-500">
          Food is just a click away!
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className=" flex flex-col items-center justify-center text-center gap-4">
          <span className=" text-3xl font-bold tracking-tighter">
            Order takeaway even faster!
          </span>
          <span className="text-slate-500">
            Download the MearnEats app for faster ordering and personalized
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
