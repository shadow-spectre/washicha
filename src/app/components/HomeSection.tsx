import { IfHomepageSection } from '../types/interfaces';
import Cards from './Cards';
// import goimage from "../assets/images/Genmaicha.jpg"
// import { teas } from "../contexts/contexts";

const HomepageSection:React.FC<IfHomepageSection> = ({className, cardsData}) => {
    console.log(cardsData)
    // const [className, heading, subheading, imgage, currency, price, button1, button2, stock] = cards 

    return (
        <>
            <div className={className}>
                <div className="cards-container flex">
                    {cardsData.map(({id, heading, subheading, button1, button2, price, currency, imgage, stock}) => (
                        <Cards
                            key={id}
                            id={id}
                            className="p-3"
                            heading={heading}
                            subheading={subheading}
                            imgage={imgage}
                            currency={currency}
                            price={price}
                            button1={button1}
                            button2={button2}
                            stock={stock}
                        />
                    ))}
                    {/* <Cards
                        className="p-3"
                        heading="Wakoucha"
                        subheading="Smooth Japanese black tea with subtle sweetness and delicate flavor notes."
                        imgage={goimage}
                        currency="$"
                        price={150}
                        button1="Buy Now"
                        button2="Discover"
                        stock={"60"}
                    /> */}
                </div>
            </div>
        </>
    )
}

export default HomepageSection