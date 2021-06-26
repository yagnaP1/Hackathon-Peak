import "./ExploreContainer.css";

interface ContainerProps {}

export const cities = {
  amsterdam: {
    id: 1,
    name: "Amsterdam",
    url: " https://www.youtube-nocookie.com/embed/_nS2FvZ0h2g?autoplay=1&amp;controls=0;start=30;disablekb=0&amp;iv_load_policy=3;loop=1;modestbranding=1",
  },
  barcelona: {
    id: 2,
    name: " Barcelona",
    url: "https://www.youtube-nocookie.com/embed/dWB5_MJmZ-U?autoplay=1&amp;controls=0&amp;start=20;disablekb=0&amp;iv_load_policy=3",
  },
  basel: {
    id: 3,
    name: "Basel",
    url: "https://www.youtube-nocookie.com/embed/rwRRrjXxnc8?autoplay=1&amp;controls=0&amp;start=120;disablekb=0&amp;iv_load_policy=3",
  },
  beijing: {
    id: 4,
    name: "Beijing",
    url: "https://www.youtube-nocookie.com/embed/gxh_-M4pkko?autoplay=1&amp;controls=0&amp;start=20;disablekb=0&amp;iv_load_policy=3",
  },
  berlin: {
    id: 5,
    name: "Berlin",
    url: "https://www.youtube-nocookie.com/embed/r4I_4aP2Xd0?autoplay=1&amp;controls=0&amp;start=20;disablekb=0&amp;iv_load_policy=3",
  },
  budapest: {
    id: 6,
    name: "Budapest",
    url: "https://www.youtube-nocookie.com/embed/dHbLCfbdUVo?autoplay=1&amp;controls=0&amp;start=20;disablekb=0&amp;iv_load_policy=3",
  },
  chicago: {
    id: 7,
    name: "Chicago",
    url: "https://www.youtube-nocookie.com/embed/3ma3yXXc3V8?autoplay=1&amp;controls=0&amp;start=30;disablekb=0&amp;iv_load_policy=3",
  },
  dublin: {
    id: 8,
    name: "Dublin",
    url: "https://www.youtube-nocookie.com/embed/kFZQT7obIeU?autoplay=1&amp;controls=0&amp;start=20;disablekb=0&amp;iv_load_policy=3",
  },
  dunedin: {
    id: 9,
    name: "Dunedin",
    url: "https://www.youtube-nocookie.com/embed/yJ5fyvDOy_Q?autoplay=1&amp;controls=0&amp;start=2656;disablekb=0&amp;iv_load_policy=3",
  },
  guadalajara: {
    id: 10,
    name: "Guadalajara",
    url: "https://www.youtube-nocookie.com/embed/6t3XkVX7dVk?autoplay=1&amp;controls=0&amp;start=12;disablekb=0&amp;iv_load_policy=3",
  },
  hawaii: {
    id: 11,
    name: "Hawaii",
    url: "https://www.youtube-nocookie.com/embed/T3nzPsDfazA?autoplay=1&amp;controls=0;disablekb=0&amp;iv_load_policy=3",
  },
  havana: {
    id: 12,
    name: "Havana",
    url: "https://www.youtube-nocookie.com/embed/BIyfybP2ep8?autoplay=1&amp;controls=0&amp;start=11",
  },
  istanbul: {
    id: 13,
    name: "Istanbul",
    url: "https://www.youtube-nocookie.com/embed/hljZphKH7e0?autoplay=1&amp;controls=0&amp;start=30;disablekb=0&amp;iv_load_policy=3",
  },
  johannesburg: {
    id: 14,
    name: "Johannesburg",
    url: "https://www.youtube-nocookie.com/embed/nvHJChVEC58?autoplay=1&amp;controls=0&amp;start=40;disablekb=0&amp;iv_load_policy=3",
  },
  kerala: {
    id: 15,
    name: "Kerala",
    url: "https://www.youtube-nocookie.com/embed/qYxXKneX8g4?autoplay=1&amp;controls=0;disablekb=0&amp;iv_load_policy=3",
  },
  kyiv: {
    id: 16,
    name: "Kyiv",
    url: "https://www.youtube-nocookie.com/embed/hUGIJYWFmcw?autoplay=1&amp;controls=0&amp;start=77;disablekb=0&amp;iv_load_policy=3",
  },
  lauterbrunnen: {
    id: 17,
    name: "Lauterbrunnen",
    url: "https://www.youtube-nocookie.com/embed/CJzjLNXZrRA?autoplay=1&amp;controls=0&amp;start=26;disablekb=0&amp;iv_load_policy=3",
  },
  lisbon: {
    id: 18,
    name: "Lisbon",
    url: "https://www.youtube-nocookie.com/embed/MXlFDpaQ1ec?autoplay=1&amp;controls=0&amp;start=31;disablekb=0&amp;iv_load_policy=3",
  },
  london: {
    id: 19,
    name: "London",
    url: "https://www.youtube-nocookie.com/embed/QI4_dGvZ5yE?autoplay=1&amp;controls=0&amp;start=35;disablekb=0&amp;iv_load_policy=3",
  },
  madrid: {
    id: 20,
    name: "Madrid",
    url: "https://www.youtube-nocookie.com/embed/2RakvEQhTTA?autoplay=1&amp;controls=0&amp;start=303;disablekb=0&amp;iv_load_policy=3",
  },
  noscow: {
    id: 21,
    name: "Moscow",
    url: "https://www.youtube-nocookie.com/embed/Q2z-QnqXgyE?autoplay=1&amp;controls=0&amp;start=17;disablekb=0&amp;iv_load_policy=3",
  },
  newYork: {
    id: 22,
    name: "New York City",
    url: "https://www.youtube-nocookie.com/embed/F8MN0o6RS9o?autoplay=1&amp;controls=0&amp;start=105;disablekb=0&amp;iv_load_policy=3",
  },
  nice: {
    id: 23,
    name: "Nice",
    url: "https://www.youtube-nocookie.com/embed/5KWEjn839lc?autoplay=1&amp;controls=0&amp;start=80;disablekb=0&amp;iv_load_policy=3",
  },
  oslo: {
    id: 24,
    name: "Oslo",
    url: "https://www.youtube-nocookie.com/embed/dC6g_Pt-3vI?autoplay=1&amp;controls=0&amp;start=39;disablekb=0&amp;iv_load_policy=3",
  },
  paris: {
    id: 25,
    name: "Paris",
    url: "https://www.youtube-nocookie.com/embed/1_XzrxXnwMM?autoplay=1&amp;controls=0&amp;start=13;disablekb=0&amp;iv_load_policy=3",
  },
  prague: {
    id: 26,
    name: "Prague",
    url: "https://www.youtube-nocookie.com/embed/tNJTWOUH8JE?autoplay=1&amp;controls=0&amp;start=72;disablekb=0&amp;iv_load_policy=3",
  },
  postiano: {
    id: 27,
    name: "Postiano",
    url: "https://www.youtube-nocookie.com/embed/gao2K_RfK8E?autoplay=1&amp;controls=0&amp;start=183;disablekb=0&amp;iv_load_policy=3",
  },
  rioDeJaneiro: {
    id: 28,
    name: "Rio De Janeiro",
    url: "https://www.youtube.com/embed/NunTGtYM598?autoplay=1&amp;controls=0&amp;start=101;disablekb=0&amp;iv_load_policy=3",
  },
  rome: {
    id: 29,
    name: "Rome",
    url: "https://www.youtube.com/embed/seOSZlVPdgM?autoplay=1&amp;controls=0&amp;start=77;disablekb=0&amp;iv_load_policy=3",
  },
  singapore: {
    id: 30,
    name: "Singapore",
    url: "https://www.youtube.com/embed/SYpRb2Pxl6o?autoplay=1&amp;controls=0&amp;start=99;disablekb=0&amp;iv_load_policy=3",
  },
  telAviv: {
    id: 31,
    name: "Tel Aviv",
    url: "https://www.youtube.com/embed/dilk4IB_tBk?autoplay=1&amp;controls=0&amp;start=5;disablekb=0&amp;iv_load_policy=3",
  },
  tokoyo: {
    id: 32,
    name: "Tokoyo",
    url: "https://www.youtube.com/embed/IWNa18KXmmg?autoplay=1&amp;controls=0&amp;start=79;disablekb=0&amp;iv_load_policy=3",
  },
  toronto: {
    id: 33,
    name: "Toronto",
    url: "https://www.youtube.com/embed/Zbm0Z6nw5sE?autoplay=1&amp;controls=0&amp;start=54;disablekb=0&amp;iv_load_policy=3",
  },
  zurich: {
    id: 34,
    name: "Zurich",
    url: "https://www.youtube.com/embed/fGxbtg1ytJo?autoplay=1&amp;controls=0&amp;start=5;disablekb=0&amp;iv_load_policy=3",
  },
};

const ExploreContainer: React.FC<ContainerProps> = () => {
  return <div className="container"></div>;
};

export default ExploreContainer;
