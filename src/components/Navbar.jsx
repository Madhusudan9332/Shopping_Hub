
const Navbar = ({links}) => {
    
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">ShopHub 🛒</div>
          <div>
            {links.map((link, index) => (
              <a key={index} href="#" className="mx-2 hover:text-gray-300">{link}</a>
            ))}
          </div>
        </div>
      </nav>
    );
  };
  
  
  export default Navbar