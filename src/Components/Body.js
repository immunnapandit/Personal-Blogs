import Images from "../assets/munna.jpg";

const Body = () => {
    return (
        <div className="flex items-center py-18 m-20">
            <div className="max-w-sm">
                <img src={Images} alt="munnaimage" className="w-full rounded-full" />
            </div>
            <div className="text-center p-44">
                <h1 className="nij-manrope-bold text-5xl inline-block px-8">
                    Hey there ✌️ I'm Munna,<br />
                    an <span style={{ color: '#3182ce' }}>Software Engineer</span>,<br />
                    based in India 🇮🇳
                </h1>
            </div>
        </div>
    );
}

export default Body;
