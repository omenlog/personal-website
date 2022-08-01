type Skill = {
    name: string,
    level: 1 | 2 | 3,
    position: {
        row: number,
        column: number
    }
}

export type Me = {
    name: string,
    skills: Array<Skill>
}
