import { useEffect } from 'react';
import img1 from '../assets/p1.png';
import img2 from '../assets/p2.png';
import img3 from '../assets/p3.png';
import img4 from '../assets/p4.png';
import Aos from 'aos';
const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])
    return (
        <div className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
                <img data-aos="fade-up" height={250} width={250} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img1} alt="" />
                <img data-aos="fade-down" height={250} width={250} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img2} alt="" />
                <img data-aos="fade-up" height={250} width={250} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img3} alt="" />
                <img data-aos="fade-down" height={250} width={250} className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img4} alt="" />
            </div>
        </div>
    );
};

export default Projects;