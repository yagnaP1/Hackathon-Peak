import { useState } from "react";
import "./ExploreContainer.css";

interface ContainerProps {}

export const cities = [
  {
    id: 1,
    name: "Amsterdam",
    url: " https://www.youtube.com/embed/_nS2FvZ0h2g?controls=0",
  },
  {
    id: 2,
    name: " Barcelona",
    url: "https://www.youtube.com/embed/dWB5_MJmZ-U?controls=0&amp;start=20",
  },
  {
    id: 3,
    name: "Basel",
    url: "https://www.youtube.com/embed/rwRRrjXxnc8?controls=0&amp;start=120",
  },
  {
    id: 4,
    name: "Beijing",
    url: "https://www.youtube.com/embed/gxh_-M4pkko?controls=0&amp;start=20",
  },
  {
    id: 5,
    name: "Berlin",
    url: "https://www.youtube.com/embed/r4I_4aP2Xd0?controls=0&amp;start=20",
  },
  {
    id: 6,
    name: "Budapest",
    url: "https://www.youtube.com/embed/dHbLCfbdUVo?controls=0&amp;start=20",
  },
  {
    id: 7,
    name: "Chicago",
    url: "https://www.youtube.com/embed/3ma3yXXc3V8?controls=0&amp;start=30",
  },
  {
    id: 8,
    name: "Dublin",
    url: "https://www.youtube.com/embed/kFZQT7obIeU?controls=0&amp;start=20",
  },
  {
    id: 9,
    name: "Dunedin",
    url: "https://www.youtube.com/embed/yJ5fyvDOy_Q?controls=0&amp;start=2656",
  },
  {
    id: 10,
    name: "Guadalajara",
    url: "https://www.youtube.com/embed/6t3XkVX7dVk?controls=0&amp;start=12",
  },
  {
    id: 11,
    name: "Hawaii",
    url: "https://www.youtube.com/embed/T3nzPsDfazA?controls=0",
  },
  {
    id: 12,
    name: "Havana",
    url: "https://www.youtube.com/embed/BIyfybP2ep8?controls=0&amp;start=11",
  },
  {
    id: 13,
    name: "Istanbul",
    url: "https://www.youtube.com/embed/hljZphKH7e0?controls=0&amp;start=30",
  },
  {
    id: 14,
    name: "Johannesburg",
    url: "https://www.youtube.com/embed/nvHJChVEC58?controls=0&amp;start=40",
  },
  {
    id: 15,
    name: "Kerala",
    url: "https://www.youtube.com/embed/qYxXKneX8g4?controls=0",
  },
  {
    id: 16,
    name: "Kyiv",
    url: "https://www.youtube.com/embed/hUGIJYWFmcw?controls=0&amp;start=77",
  },
  {
    id: 17,
    name: "Lauterbrunnen",
    url: "https://www.youtube.com/embed/CJzjLNXZrRA?controls=0&amp;start=26",
  },
  {
    id: 18,
    name: "Lisbon",
    url: "https://www.youtube.com/embed/MXlFDpaQ1ec?controls=0&amp;start=31",
  },
  {
    id: 19,
    name: "London",
    url: "https://www.youtube.com/embed/QI4_dGvZ5yE?controls=0&amp;start=35",
  },
  {
    id: 20,
    name: "Madrid",
    url: "https://www.youtube.com/embed/2RakvEQhTTA?controls=0&amp;start=303",
  },
  {
    id: 21,
    name: "Moscow",
    url: "https://www.youtube.com/embed/Q2z-QnqXgyE?controls=0&amp;start=17",
  },
  {
    id: 22,
    name: "New York City",
    url: "https://www.youtube.com/embed/F8MN0o6RS9o?controls=0&amp;start=105",
  },
  {
    id: 23,
    name: "Nice",
    url: "https://www.youtube.com/embed/5KWEjn839lc?controls=0&amp;start=80",
  },
  {
    id: 24,
    name: "Oslo",
    url: "https://www.youtube.com/embed/dC6g_Pt-3vI?controls=0&amp;start=39",
  },
  {
    id: 25,
    name: "Paris",
    url: "https://www.youtube.com/embed/1_XzrxXnwMM?controls=0&amp;start=13",
  },
  {
    id: 26,
    name: "Prague",
    url: "https://www.youtube.com/embed/tNJTWOUH8JE?controls=0&amp;start=72",
  },
  {
    id: 27,
    name: "Postiano",
    url: "https://www.youtube.com/embed/gao2K_RfK8E?controls=0&amp;start=183",
  },
  {
    id: 28,
    name: "Rio De Janeiro",
    url: "https://www.youtube.com/embed/NunTGtYM598?controls=0&amp;start=101",
  },
  {
    id: 29,
    name: "Rome",
    url: "https://www.youtube.com/embed/seOSZlVPdgM?controls=0&amp;start=77",
  },
  {
    id: 30,
    name: "Singapore",
    url: "https://www.youtube.com/embed/SYpRb2Pxl6o?controls=0&amp;start=99",
  },
  {
    id: 31,
    name: "Tel Aviv",
    url: "https://www.youtube.com/embed/dilk4IB_tBk?controls=0&amp;start=5",
  },
  {
    id: 32,
    name: "Tokoyo",
    url: "https://www.youtube.com/embed/IWNa18KXmmg?controls=0&amp;start=79",
  },
  {
    id: 33,
    name: "Toronto",
    url: "https://www.youtube.com/embed/Zbm0Z6nw5sE?controls=0&amp;start=54",
  },
  {
    id: 34,
    name: "Zurich",
    url: "https://www.youtube.com/embed/fGxbtg1ytJo?controls=0&amp;start=5",
  },
];

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      {/* <div className="videoContainer">
        {cities.map((city) => (
          <iframe
            key={city.id}
            title={city.name}
            src={city.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
          ></iframe>
        ))}
      </div> */}
    </div>
  );
};

export default ExploreContainer;
