
const CardSection = ({cards})=> {
    
  
    return (
      <div className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto grid grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <>
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <i className={`${card.icon} text-4xl mb-4`}></i>
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-center">{card.content}</p>
            </div>
            </>
          ))}
        </div>
      </div>
    );
  }
  
  export default CardSection