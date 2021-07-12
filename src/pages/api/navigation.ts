import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json([
        {
            id: 1,
            title: "Home",
            url: "/catalog",
            children: [
                {
                    id: 8,
                    parent_id: 1,
                    title: "Home 1",
                    url: "/catalog"
                },
                {
                    id: 9,
                    parent_id: 1,
                    title: "Home 2",
                    url: "/catalog"
                },
                {
                    id: 10,
                    parent_id: 1,
                    title: "Home 3",
                    url: "/catalog"
                },
                {
                    id: 11,
                    parent_id: 1,
                    title: "Home 4",
                    url: "/catalog"
                }
            ]
        },
        {
            id: 2,
            title: "Menu",
            url: "/catalog",
            children: [
                {
                    id: 12,
                    parent_id: 2,
                    title: "Menu 1",
                    url: "/catalog"
                },
                {
                    id: 13,
                    parent_id: 2,
                    title: "Menu 2",
                    url: "/catalog"
                },
                {
                    id: 14,
                    parent_id: 2,
                    title: "Menu 3",
                    url: "/catalog"
                },
                {
                    id: 15,
                    parent_id: 2,
                    title: "Menu 4",
                    url: "/catalog"
                }
            ]
        },
        {
            id: 3,
            title: "About",
            url: "/catalog"
        },
        {
            id: 4,
            title: "Shop",
            url: "/catalog"
        },
        {
            id: 5,
            title: "Blog",
            url: "/catalog"
        },
        {
            id: 6,
            title: "Page",
            url: "/catalog"
        },
        {
            id: 7,
            title: "Contact",
            url: "/catalog"
        },
    ]);
}