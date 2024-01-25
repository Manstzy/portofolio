const Navbar = () => {
  return (
    <div className="font-robotoSlab absolute z-10 w-full">
      <div className="flex justify-between px-40 pt-5">
        <ul className="text-md font-[500]">
          <li><a href="#">Arif</a></li>
        </ul>

        <ul className="flex space-x-5 text-md font-[500]">
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Portofolio">Portofolio</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
