import { useState } from "react";
import "./ExploreContainer.css";

interface ContainerProps {}

export const cities = [
  {
    id: 1,
    name: "Amsterdam",
    url: " https://www.youtube-nocookie.com/embed/_nS2FvZ0h2g?autoplay=1&amp;controls=0;start=30;disablekb=0&amp;iv_load_policy=3;autoplay=1&rel=0;loop=1;modestbranding=1",
  },
  {
    id: 2,
    name: " Barcelona",
    url: "https://www.youtube-nocookie.com/embed/dWB5_MJmZ-U?controls=0&amp;start=20;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 3,
    name: "Basel",
    url: "https://www.youtube-nocookie.com/embed/rwRRrjXxnc8?controls=0&amp;start=120;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 4,
    name: "Beijing",
    url: "https://www.youtube-nocookie.com/embed/gxh_-M4pkko?controls=0&amp;start=20;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 5,
    name: "Berlin",
    url: "https://www.youtube-nocookie.com/embed/r4I_4aP2Xd0?controls=0&amp;start=20;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 6,
    name: "Budapest",
    url: "https://www.youtube-nocookie.com/embed/dHbLCfbdUVo?controls=0&amp;start=20;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 7,
    name: "Chicago",
    url: "https://www.youtube-nocookie.com/embed/3ma3yXXc3V8?controls=0&amp;start=30;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 8,
    name: "Dublin",
    url: "https://www.youtube-nocookie.com/embed/kFZQT7obIeU?controls=0&amp;start=20;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 9,
    name: "Dunedin",
    url: "https://www.youtube-nocookie.com/embed/yJ5fyvDOy_Q?controls=0&amp;start=2656;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 10,
    name: "Guadalajara",
    url: "https://www.youtube-nocookie.com/embed/6t3XkVX7dVk?controls=0&amp;start=12;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 11,
    name: "Hawaii",
    url: "https://www.youtube-nocookie.com/embed/T3nzPsDfazA?controls=0;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 12,
    name: "Havana",
    url: "https://www.youtube-nocookie.com/embed/BIyfybP2ep8?controls=0&amp;start=11",
  },
  {
    id: 13,
    name: "Istanbul",
    url: "https://www.youtube-nocookie.com/embed/hljZphKH7e0?controls=0&amp;start=30;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 14,
    name: "Johannesburg",
    url: "https://www.youtube-nocookie.com/embed/nvHJChVEC58?controls=0&amp;start=40;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 15,
    name: "Kerala",
    url: "https://www.youtube-nocookie.com/embed/qYxXKneX8g4?controls=0;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 16,
    name: "Kyiv",
    url: "https://www.youtube-nocookie.com/embed/hUGIJYWFmcw?controls=0&amp;start=77;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 17,
    name: "Lauterbrunnen",
    url: "https://www.youtube-nocookie.com/embed/CJzjLNXZrRA?controls=0&amp;start=26;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 18,
    name: "Lisbon",
    url: "https://www.youtube-nocookie.com/embed/MXlFDpaQ1ec?controls=0&amp;start=31;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 19,
    name: "London",
    url: "https://www.youtube-nocookie.com/embed/QI4_dGvZ5yE?controls=0&amp;start=35;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 20,
    name: "Madrid",
    url: "https://www.youtube-nocookie.com/embed/2RakvEQhTTA?controls=0&amp;start=303;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 21,
    name: "Moscow",
    url: "https://www.youtube-nocookie.com/embed/Q2z-QnqXgyE?controls=0&amp;start=17;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 22,
    name: "New York City",
    url: "https://www.youtube-nocookie.com/embed/F8MN0o6RS9o?controls=0&amp;start=105;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 23,
    name: "Nice",
    url: "https://www.youtube-nocookie.com/embed/5KWEjn839lc?controls=0&amp;start=80;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 24,
    name: "Oslo",
    url: "https://www.youtube-nocookie.com/embed/dC6g_Pt-3vI?controls=0&amp;start=39;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 25,
    name: "Paris",
    url: "https://www.youtube-nocookie.com/embed/1_XzrxXnwMM?controls=0&amp;start=13;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 26,
    name: "Prague",
    url: "https://www.youtube-nocookie.com/embed/tNJTWOUH8JE?controls=0&amp;start=72;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 27,
    name: "Postiano",
    url: "https://www.youtube-nocookie.com/embed/gao2K_RfK8E?controls=0&amp;start=183;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 28,
    name: "Rio De Janeiro",
    url: "https://www.youtube.com/embed/NunTGtYM598?controls=0&amp;start=101;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 29,
    name: "Rome",
    url: "https://www.youtube.com/embed/seOSZlVPdgM?controls=0&amp;start=77;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 30,
    name: "Singapore",
    url: "https://www.youtube.com/embed/SYpRb2Pxl6o?controls=0&amp;start=99;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 31,
    name: "Tel Aviv",
    url: "https://www.youtube.com/embed/dilk4IB_tBk?controls=0&amp;start=5;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 32,
    name: "Tokoyo",
    url: "https://www.youtube.com/embed/IWNa18KXmmg?controls=0&amp;start=79;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 33,
    name: "Toronto",
    url: "https://www.youtube.com/embed/Zbm0Z6nw5sE?controls=0&amp;start=54;disablekb=0&amp;iv_load_policy=3",
  },
  {
    id: 34,
    name: "Zurich",
    url: "https://www.youtube.com/embed/fGxbtg1ytJo?controls=0&amp;start=5;disablekb=0&amp;iv_load_policy=3",
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
