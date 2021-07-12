import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json([
        {
            id: 1,
            image: "https://via.placeholder.com/800x800",
            slug: "bbq-chicken-breast-1",
            title: "BBQ chicken breast 1",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique hic molestiae earum ex non quibusdam rem sunt nam, sequi excepturi perferendis culpa pariatur nobis inventore? Laboriosam cum at reiciendis!",
            price: 2000,
            oldPrice: 4000,
            countdown: {
                month: 1,
                day: 1,
                year: 2022,
                time: {
                    hour: 0,
                    minute: 0,
                    second: 0
                }
            }
        },
        {
            id: 2,
            image: "https://via.placeholder.com/800x800",
            slug: "bbq-chicken-breast-2",
            title: "BBQ chicken breast 2",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique hic molestiae earum ex non quibusdam rem sunt nam, sequi excepturi perferendis culpa pariatur nobis inventore? Laboriosam cum at reiciendis!",
            price: 2000,
            oldPrice: 4000,
            countdown: {
                month: 1,
                day: 1,
                year: 2023,
                time: {
                    hour: 0,
                    minute: 0,
                    second: 0
                }
            }
        },
        {
            id: 3,
            image: "https://via.placeholder.com/800x800",
            slug: "bbq-chicken-breast-3",
            title: "BBQ chicken breast 3",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique hic molestiae earum ex non quibusdam rem sunt nam, sequi excepturi perferendis culpa pariatur nobis inventore? Laboriosam cum at reiciendis!",
            price: 2000,
            oldPrice: 4000,
            countdown: {
                month: 1,
                day: 1,
                year: 2024,
                time: {
                    hour: 0,
                    minute: 0,
                    second: 0
                }
            }
        },
        {
            id: 4,
            image: "https://via.placeholder.com/800x800",
            slug: "bbq-chicken-breast-4",
            title: "BBQ chicken breast 4",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique hic molestiae earum ex non quibusdam rem sunt nam, sequi excepturi perferendis culpa pariatur nobis inventore? Laboriosam cum at reiciendis!",
            price: 2000,
            oldPrice: 4000,
            countdown: {
                month: 1,
                day: 1,
                year: 2025,
                time: {
                    hour: 0,
                    minute: 0,
                    second: 0
                }
            }
        },
        {
            id: 5,
            image: "https://via.placeholder.com/800x800",
            slug: "bbq-chicken-breast-5",
            title: "BBQ chicken breast 5",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique hic molestiae earum ex non quibusdam rem sunt nam, sequi excepturi perferendis culpa pariatur nobis inventore? Laboriosam cum at reiciendis!",
            price: 2000,
            oldPrice: 4000,
            countdown: {
                month: 1,
                day: 1,
                year: 2026,
                time: {
                    hour: 0,
                    minute: 0,
                    second: 0
                }
            }
        },
        {
            id: 6,
            image: "https://via.placeholder.com/800x800",
            slug: "bbq-chicken-breast-6",
            title: "BBQ chicken breast 6",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique hic molestiae earum ex non quibusdam rem sunt nam, sequi excepturi perferendis culpa pariatur nobis inventore? Laboriosam cum at reiciendis!",
            price: 2000,
            oldPrice: 4000,
            countdown: {
                month: 1,
                day: 1,
                year: 2027,
                time: {
                    hour: 0,
                    minute: 0,
                    second: 0
                }
            }
        },
        {
            id: 7,
            image: "https://via.placeholder.com/800x800",
            slug: "bbq-chicken-breast-7",
            title: "BBQ chicken breast 7",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique hic molestiae earum ex non quibusdam rem sunt nam, sequi excepturi perferendis culpa pariatur nobis inventore? Laboriosam cum at reiciendis!",
            price: 2000,
            oldPrice: 4000,
            countdown: {
                month: 1,
                day: 1,
                year: 2023,
                time: {
                    hour: 0,
                    minute: 0,
                    second: 0
                }
            }
        },
        {
            id: 8,
            image: "https://via.placeholder.com/800x800",
            slug: "bbq-chicken-breast-8",
            title: "BBQ chicken breast 8",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit similique hic molestiae earum ex non quibusdam rem sunt nam, sequi excepturi perferendis culpa pariatur nobis inventore? Laboriosam cum at reiciendis!",
            price: 2000,
            oldPrice: 4000,
            countdown: {
                month: 1,
                day: 1,
                year: 2023,
                time: {
                    hour: 0,
                    minute: 0,
                    second: 0
                }
            }
        }
    ]);
}