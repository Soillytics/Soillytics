import  type  { NextApiRequest, NextApiResponse  } from "next";
import { mockNews } from "../../../const";

export default function handler(req: NextApiRequest, res:NextApiResponse) {
    if(req.method === 'GET') {
        const sortedNews = mockNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        res.status(200).json(sortedNews);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}


