import img from '../assets/profile.jpg';

const About = () => {
    return (
        <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
                <img data-aos="fade-down" src={img} width={290} height={290} className='rounded border-2 p-1 border-fuchsia-500 img_glow' alt="" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">About me</h1>
                <p data-aos="fade-left">I am a student in the field of Computer Science, specializing in Information Systems. Throughout my academic journey, I have gained a profound understanding of critical concepts in computer science and information system development.

Hailing from Indonesia, my dedication to advancing information technology in my home country has been a primary driver in my educational pursuits. I believe that innovation in information systems plays a crucial role in advancing various sectors, and I am committed to contributing to positive transformation through the knowledge and skills I acquire.

Within my curriculum, I have studied business requirements analysis, system design, programming, and project management. This blend of knowledge forms a solid foundation for addressing real-world challenges in information system development.

Furthermore, I actively participate in extracurricular activities and software development projects. My involvement in various initiatives has enriched my experience and helped me develop interpersonal, leadership, and problem-solving skills.

With a high level of enthusiasm and the skills I possess, I aspire to continue growing and making meaningful contributions to the information technology industry in the future. I am eager to apply my knowledge and engage in projects that push the boundaries of innovation in the world of information systems.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button className="neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button>
                        </div>
                    </div>
                </div>
            
        </div>
        </div>
    );
};

export default About;