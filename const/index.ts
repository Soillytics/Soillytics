import { NewsItem } from "@/app/type/newsdata";
import { FAQItem } from "@/app/type/FAQItems";

export const CARD_DETAILS = [
  {
    id: 1,
    img: "./Icon/ph_farm-light.png",
    details: "Get More From Every Field",
  },
  {
    id: 2,
    img: "./Icon/hugeicons_profit.png",
    details: "Keep Costs Down, Profits Up",
  },
  {
    id: 3,
    img: "./Icon/material-symbols-light_weather-mix-outline.png",
    details: "Lower Environmental Impact",
  },
  {
    id: 4,
    img: "./Icon/grommet-icons_resources.png",
    details: "Optimize Resource Use",
  },
  {
    id: 5,
    img: "./Icon/uil_data-sharing.png",
    details: "Bring All Your Farm Data Into One Place",
  },
];

export const mockNews: NewsItem[] = [
  {
    id: "1",
    image: "./News_img_01.jpg",
    title: "AI is Eating the World",
    summary:
      "OpenAI just dropped a game-changer in the dev world. Here’s why it matters.",
    date: "2025-05-03",
  },
  {
    id: "2",
    image: "./News_img_02.jpg",
    title: "Next.js Conf Recap",
    summary:
      "From Server Actions to RSCs – everything you missed from the latest conf.",
    date: "2025-04-29",
  },
  {
    id: "3",
    image: "./News_img_03.jpg",
    title: "Soillytics Launches in EU",
    summary:
      "Precision farming just leveled up. See how Soillytics is changing the game.",
    date: "2025-04-25",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What is Soillytics?",
    answer:
      "Soillytics is the next-generation soil intelligence and precision agriculture platform, built to empower farmers, agronomists, and agri-enterprises with real-time insights and data-driven decisions. Designed for simplicity and scalability, Soillytics integrates smart soil sensors, climate tools, and a powerful farm management suite to optimize every inch of farmland. From soil health and irrigation to crop nutrition, disease risk, and weather analytics, Soillytics puts actionable agronomy at your fingertips — unlocking smarter farming at scale.",
  },
  {
    question: "Who is it for?",
    answer:
      "Soillytics is your all-in-one soil intelligence platform, built for farmers, agronomists, and agri-businesses that demand more from their land.Unlike generic agtech tools, Soillytics blends powerful analytics with real-time sensor data to give you actionable insights—without the learning curve. Trusted by thousands across 60+ countries and optimized for 120+ crop types, it’s precision agronomy that actually works in the field. Built for performance. Designed for simplicity. Ready when you are.",
  },
  {
    question: "How exactly does it work?",
    answer: `<p>We continuously gather and analyze real-time data from a wide network of sources: in-field sensors (like soil moisture and evapotranspiration sensors), on-site weather stations (ours and third-party), satellites, and a full range of farm machinery — no matter the brand.</P> <br /> <p>Using proprietary, research-driven agronomic models powered by AI and advanced data science, Soillytics translates raw data into precise insights tailored to your crop, your field, and your climate. We help you understand what’s happening beneath the surface — and what’s coming next.</p> <br /> <ul>Track and forecast critical factors like:<li>Water usage and irrigation needs</li><li>Crop stress and disease risk</li><li>Nitrate leaching and salinity buildup</li><li>Vegetative growth and biomass</li><li>Root and canopy development</li><br /><p>We turn this complex data into clear, timely, and actionable recommendations. So you know exactly when to irrigate, how to optimize inputs, and how to keep your crops on track.</p><br/><p>Behind it all, Soillytics runs on secure, high-performance cloud infrastructure. Our platform is enterprise-grade, scalable, and backed by 24/7 expert support — from agronomists, data scientists, and real farmers who speak your language.</p>`,
  },
  {
    question: "What makes Soillytics unique?",
    answer: `
    <h5>Soillytics: A Smarter Way to Grow</h5>
    <p>Unlike fragmented tools with narrow use-cases, clunky legacy platforms stuck in the past, or undercooked concepts from fledgling startups — Soillytics delivers a fully integrated, globally scalable digital agronomy platform built for the real demands of modern agriculture.</p><br /><h5>Built-In Intelligence, From the Ground Up</h5>
    <p><b>Sensor</b>-Engineered by Soillytics, our research-backed sensor lineup is rugged, accurate, and farmer-friendly.</p>
    <ul>
    <li><b>SV-Series Soil Sensors</b> – Multi-depth soil probes tracking moisture, temperature, salinity, and electroconductivity in real time.</li>
    <li><b>ET-Series</b> Evapotranspiration Sensors – Monitor actual ET, canopy growth, and crop-level water stress.</li>
    <li><b>WS-Series Weather Stations + RG-Series Rain Gauges</b> Hyperlocal, in-field weather monitoring at scale.</li>
    <li><b>TD-Series Telemetry Hubs</b> -  Cloud-connected gateways with built-in cellular for effortless data flow from field to platform.</li>
    <li><b>Coming 2025/26:</b> Real-time In-Field Nitrate Sensors – Taking nutrient monitoring to the next level.</li>
    </ul>
    `,
  },
  {
    question: "What can I do with Soillytics",
    answer: `<p>Check out the "CropX Platform Overview" to understand all of the features and capabilities.</p>`
  }
];


export const icon = [
  {
    image: './overview_Icon/carbon_crop-growth.png',
    text: 'Crop information'
  }, {
    image: './overview_Icon/cbi_soil-moisture.png',
    text: 'Soil information'
  }, {
    image: './overview_Icon/tabler_growth.png',
    text: 'Crop growth'
  }, {
    image: './overview_Icon/mdi_weather-windy.png',
    text: 'Weather'
  }, {
    image: '/overview_Icon/hugeicons_satellite-03.png',
    text: 'Vegetation Health Indices'
  }, {
    image: './overview_Icon/soil-moisture-sensor.png',
    text: 'Soil sensor Data'
  },
]