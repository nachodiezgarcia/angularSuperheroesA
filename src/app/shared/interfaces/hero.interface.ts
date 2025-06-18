export interface Hero {
    id: number;
    name: string;
    img: string;
    alignment: "good" | "bad",
    stats: Stats;
}

export interface Stats {
    intelligence: number,
    strength: number,
    agility: number,
    speed: number,
    durability: number,
    power: number,
    combat: number
}

//Una de las llaves de Stats, para poder ir cambiando estas :)
export type keyStats = keyof Stats;