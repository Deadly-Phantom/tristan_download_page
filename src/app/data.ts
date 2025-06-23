export interface ITriscard {
    title: string
    description: string
    image: string
    link: string
    label: string
    backgroundSize?: string
    backgroundPosition?: string
    languages?: string[]
}

export const data: ITriscard[]=[
    {
        title: "Mario Game",
        description: "Welcome to the first release of the Mario Game! This is a simple, fun platformer inspired by classic Mario gameplay, built using Python and Pygame. Run, jump, and dodge Goombas as you explore a side-scrolling world. Collect coins and power-ups to boost your score and abilities.",
        image: "./mario.png",
        link: "https://github.com/Deadly-Phantom/Mario-Game/releases",
        label: "Downloads",
        languages: ["python"]
    },
        {
        title: "Snake Game",
        description: "Welcome to the first release of the Cyber Rainbow Snake Game! This is a modern, neon-themed twist on the classic Snake, built with Python and Pygame. Glide through a glowing grid, collect animated fruits, dodge obstacles, and chase your high score in a cyberpunk world.",
        image: "./snake.png",
        link: "https://github.com/Deadly-Phantom/Snake-Game/releases",
        label: "Downloads",
        backgroundSize: "125%",
        languages: ["python"]
    },
        {
        title: "Croatia Trip 2025",
        description: "Experience the beauty of Croatia in 2025! Join us for an unforgettable adventure exploring stunning coastlines, historic cities, and vibrant culture. From the crystal-clear Adriatic Sea to charming old towns, this trip promises breathtaking sights and lasting memories.",
        image: "./croatia.jpeg",
        link: "https://deadly-phantom.github.io/holiday-react/",
        label: "View",
        backgroundSize: "cover",
        languages: ["typescript"]
    }
]

