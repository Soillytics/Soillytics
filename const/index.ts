import { NewsItem } from "@/app/type/newsdata";

export const CARD_DETAILS = [
    {
        id:1,
        img: './Icon/ph_farm-light.png',
        details: 'Get More From Every Field'
    },
    {
        id:2,
        img: './Icon/hugeicons_profit.png',
        details: 'Keep Costs Down, Profits Up'
    },
    {
        id:3,
        img: './Icon/material-symbols-light_weather-mix-outline.png',
        details: 'Lower Environmental Impact'
    },
    {
        id:4,
        img: './Icon/grommet-icons_resources.png',
        details: 'Optimize Resource Use'
    },
    {
        id:5,
        img: './Icon/uil_data-sharing.png',
        details: 'Bring All Your Farm Data Into One Place'
    },
]


export const mockNews: NewsItem[] = [
    {
      id: '1',
      image:'./News_img_01.jpg',
      title: 'AI is Eating the World',
      summary: 'OpenAI just dropped a game-changer in the dev world. Here’s why it matters.',
      date: '2025-05-03',
    },
    {
      id: '2',
      image:'./News_img_02.jpg',
      title: 'Next.js Conf Recap',
      summary: 'From Server Actions to RSCs – everything you missed from the latest conf.',
      date: '2025-04-29',
    },
    {
      id: '3',
      image:'./News_img_03.jpg',
      title: 'Soillytics Launches in EU',
      summary: 'Precision farming just leveled up. See how Soillytics is changing the game.',
      date: '2025-04-25',
    }
  ];
  