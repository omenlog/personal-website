const Experience: React.FC = () => (
    <div>
        <div className="section-header">Experience</div>
        <div className="w-4/5">
            <p className="info-paragraph">Previously I have worked with different companies on interesting topics such as online games, IoT platforms, UX research etc. having responsabilities like increase <span className="experience-topics">test coverage</span>, to ensure bussiness rules, migrate large code bases from <span className="experience-topics">JavaScript to Typescript</span>, actively be part of the <span className="experience-topics">code review</span> process, <span className="experience-topics">mentored</span> junior team members, applied different <span className="experience-topics">optimization</span> techniques to improve product perfomace.</p>
        </div>
        <div className="flex justify-center items-center mt-10">
            <div className="flex flex-row justify-around items-center w-4/5 text-center">
                <div>
                    <img className="w-32 h-16" src='/companies/SoftDev_logo.svg' alt="SoftDev"/>
                </div>
                <div>
                    <img className="w-56 h-20" src='/companies/DK_logo.svg' alt="DkLogo"/>
                </div>
                <div>
                    <img className="w-40 h-20" src='/companies/Sorbotics_logo.svg' alt="SorboticsLogo"/>
                </div>
                <div>
                    <img className="w-20 h-20" src='/companies/Musala_logo.svg' alt="MusalaLogo"/>
                </div>
            </div>
        </div>
    </div>
);

export default Experience
