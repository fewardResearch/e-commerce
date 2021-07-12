import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json([
        {
            id: 1,
            title: "iPhone X",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
            contentImage: "/iphoneX.png", 
            url: "/catalog",
            bgColor: "#FF4858",
            alt: "Slider"
        },
        {
            id: 2,
            title: "iPhone X",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
            contentImage: "/iphoneX.png", 
            url: "/catalog",
            bgColor: "#8F65FF",
            alt: "Slider"
        }
    ]);
}