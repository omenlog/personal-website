import { Me } from "contracts";

type SkillsProps = {
    skills: Me["skills"]
}

const levelStyles = {
    1: "bg-gray-400 text-lg h-7 px-4 w-24",
    2: "bg-pink-400 text-xl px-4 py-0.5 h-8 w-32",
    3: "bg-indigo-600 text-2xl px-8 py-2 h-13 w-52",
}

const rowStyles = {
    0: "ml-16",
    2: "ml-24 items-end",
    3: "ml-4",
    4: "ml-12",
    6: "ml-24"
} as Record<number, string>

type Skill = Me["skills"][0];

const Skill: React.FC<Skill> = (s) => {
    return (
        <div className={`${levelStyles[s.level]} ml-3 text-center text-white rounded-3xl font-light`}>
            <span>
                {s.name}
            </span>
        </div>
    );
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const skillsContent = [] as Array<Array<Skill>>;

    skills.forEach(s => {
        if (skillsContent[s.position.row] === undefined) {
            skillsContent[s.position.row] = [];
        }

        skillsContent[s.position.row][s.position.column] = s;
    });

    return (
            <div className="basis-1/2 grow-0 flex justify-center">
                <div>
                    {skillsContent.map((row, index) => {
                        return (
                            <div className={`flex mb-3 ${rowStyles[index]}`} key={index}>
                                {row.map(s => <Skill key={s.name} {...s} />)}
                            </div>
                        );
                    })}
                </div>
            </div>
    );
};

export default Skills;
