import React, { useState } from "react";
import munnaImage from "../assets/munna.jpg";
import mumbaiImage from "../assets/munna1.jpeg";
import officeImage from "../assets/munna2.jpeg";
import resImage from "../assets/munna3.jpeg";
import collegeImages from "../assets/munna4.jpeg";
import friendsImage from "../assets/munna5.jpeg";
import stationImages from "../assets/munna6.jpeg";
import ColllegeImages from "../assets/munna9.jpeg";
import gauravfriends from "../assets/munna7.jpeg";
import rajabhoj from "../assets/rajabhoj.jpeg";
import rajabhoj1 from "../assets/rajabhoj1.jpeg";
import mahakal from "../assets/mahakal.jpeg";
import juhubeach from "../assets/juhubeach.jpeg";
import juhubeach1 from "../assets/juhubeach1.jpeg";
import sky from "../assets/sky.jpeg";
import swimming from "../assets/swimming.jpeg";
import swimming11 from "../assets/swimming11.jpeg"
import vipinfriends from "../assets/vipinfriends.jpeg"
import vipinfriends1 from "../assets/vipinfriends1.jpeg"
import pratikfriends from "../assets/pratikfriends.jpeg"
import collegefriendsv from "../assets/collegefriendsv.jpeg"
import rakeshfriends from "../assets/rakeshfriends.jpeg"

// import { info } from "autoprefixer";

const images = [
    { src: munnaImage, info: "DB City Mall Bhopal" },
    { src: mumbaiImage, info: "Juhu Beach Mumbai"},
    { src: officeImage, info: "In Office" },
    { src: resImage, info: "In Restaurant" },
    { src: collegeImages, info: "Raja Bhoj Setu in Bhopal" },
    { src: stationImages, info: "Ranikamlapti Railway Station" },
    { src: sky, info: "Juhu Beach Mumbai" },
    { src: juhubeach, info: "Juhu Beach Mumbai" },
    { src: juhubeach1, info: "Juhu Beach Mumbai" },
    { src: ColllegeImages, info: "College Friends" },
    { src: gauravfriends, info: "Friends Gaurav" },
    { src: rajabhoj, info: "Friends Vansh" },
    { src: rajabhoj1, info: "Raja Bhoj Setu in Bhopal" },
    { src: mahakal, info: "Ujjain Mahakal Mandir" },
    { src: friendsImage, info: "Friends Gaurav and Pratik" },
    { src: swimming, info: "With Village friends" },
    { src: swimming11, info: "with village friends"},
    { src: vipinfriends, info: "friends Mishra ji and Rahul"},
    { src: vipinfriends1, info: "friends Mishra ji"},
    { src: pratikfriends, info: "With friends pratik and gaurav"},
    { src: collegefriendsv, info: "With college friends"},
    { src: rakeshfriends, info: "With friends Rakesh"},

];

const Memories = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        setModalOpen(false);
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-3xl md:text-5xl text-center mb-20">My Memories</h1>
                <div className="flex flex-wrap justify-between">
                    {images.map((image, index) => (
                        <figure
                            key={index}
                            className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4"
                            onClick={() => openModal(index)}
                        >
                            <img src={image.src} alt="memories" className="w-full h-full object-cover filter drop-shadow-lg py-3" />
                        </figure>
                    ))}
                </div>
            </div>
            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="max-w-xl w-full relative">
                        <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-white text-2xl">&#10006;</button>
                        <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold" style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '8px 16px', borderRadius: '4px' }}>&#8249;</button>
                        <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold" style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '8px 16px', borderRadius: '4px' }}>&#8250;</button>
                        <div className="text-white absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            {images[selectedImageIndex].info}
                        </div>
                        <img src={images[selectedImageIndex].src} alt="memories" className="w-full h-auto" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Memories;
