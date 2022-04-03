import Image from 'next/image';

const About: React.FC = () => (
    <div className="mb-20">
        <div className="text-black mb-14 text-5xl">About me</div>
        <div className="flex">
            <div className="basis-1/2 grow-0" >
                <Image className="rounded-full" src={"/face.png"} width={250} height={250} />
                <div className="text-indigo-700 font-medium text-3xl mt-10 mb-6">Who am I</div>
                <p className="text-lg text-gray-600">I’m a <span className="text-black font-semibold">full stack developer</span> from Cuba living in Sofia, Bulgaria.
        I have <span className="text-black font-semibold">6 years of experience</span> and currently I work as <span className="text-black font-semibold">Senior Software Engineer</span> at Draftkings, Inc. Passionated about functional and type level programming.</p>
            </div>
        </div>
    </div>
);

export default About;
