import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json([
        {
            title: "Footer Menu",
            url: "#",
            children: [
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                }
            ]
        },
        {
            title: "Footer Menu",
            url: "#",
            children: [
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                }
            ]
        },
        {
            title: "Footer Menu",
            url: "#",
            children: [
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                }
            ]
        },
        {
            title: "Footer Menu",
            url: "#",
            children: [
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                },
                {
                    title: "Footer Sub Menu",
                    url: "#"
                }
            ]
        }
    ]);
}