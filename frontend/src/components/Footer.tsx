const Footer = () => {
  return (
    <div className=" bg-orange-600 p-7">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl font-bold text-white tracking-tight">
          MearnEats.com
        </span>
        <span className="text-white tracking-tight font-bold flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};
export default Footer;
