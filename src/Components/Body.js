import Images from "../assets/munna.jpg";

const Body = () => {
    return (
        <div className="flex justify-start py-18 m-20">
            <div className="max-w-sm">
                <img src={Images} alt="munnaimage" className="w-full rounded-full" />
            </div>
            <div className="flex justify-end">
                <h1 className="nij-manrope-bold text-4xl">
                    Hey there ✌️ I'm Munna, an <span style={{ color: '#3182ce' }}>Software Engineer</span> based in India 🇮🇳
                </h1>
            </div>
        </div>
    );
}

export default Body;
