import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div>
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://as2.ftcdn.net/v2/jpg/02/11/59/73/1000_F_211597360_OvTmwbOK25Fux93ug9cltVhszGoefxFt.jpg",
    "https://as1.ftcdn.net/v2/jpg/04/55/86/78/1000_F_455867820_kZprBo3MtTCHy0dqgS3fhwHkFkNi8xUl.jpg",
    "https://img.freepik.com/free-photo/caucasian-woman-s-portrait-isolated-blue-background-multicolored-neon-light_155003-32526.jpg?t=st=1712990705~exp=1712994305~hmac=d8e528d07a2787f7920832b51c1b6569966c966740fbbe292f8f2c11e45d82ec&w=1060",
    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    "https://img.freepik.com/free-photo/kids-having-fun-outdoors_1098-3977.jpg?t=st=1712990663~exp=1712994263~hmac=df7fb69b6a3eeceef15ea376f6d1d8b3d131cdc47579204a3583942c4106b483&w=1060",
    "https://img.freepik.com/free-photo/cinema-ticket-near-popcorns-against-blue-background_23-2148188111.jpg?t=st=1712990067~exp=1712993667~hmac=df50ec280560443d42d0871fd5d02317d72aca499d6125cde467a6d699d1eaae&w=1060",
    "https://img.freepik.com/free-photo/crazy-dancing-moving-having-fun-young-happy-man-woman-casual-clothes-pink-blue-bicolored-wall-concept-human-emotions-facial-expession-relations-ad-beautiful-couple_155003-40119.jpg?t=st=1712990153~exp=1712993753~hmac=7cdb2d93cf1afcad38217ded8d30a57d0faa45330707995d7558acdaa1c72326&w=1060",
    "https://img.freepik.com/free-photo/medium-shot-happy-young-people-partying_23-2149646121.jpg?t=st=1712990222~exp=1712993822~hmac=df5512283121c17356b8fe62a8e80ed7ea68d5a060ea277c9b500a5e1f70db0a&w=1060",
    "https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-cinema-tickets-wooden-desk_23-2148188189.jpg?t=st=1712989851~exp=1712993451~hmac=02d1531caf6828a4e04b423b7d6be3e096696ce656ebca42a68c15f9ad176d9e&w=1060",
  ];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image) => (
          <EntertainmentCard src={image} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
