const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white lg:px-48  px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">Logo</span>
                    <p className="text-[16px] my-4">But I must explain to you how all this mistaken idea </p>
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Services</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Web Design</li>
                        <li className="my-2">Web Development</li>
                        <li className="my-2">SEO</li>
                        <li className="my-2">E-commerce</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
                    <p className="text-[16px] my-4">Email: tbenedictjonathan@gmail.com</p>
                    <p className="text-[16px] my-4">Phone: +12 123456789</p>
                </div>
               <div>
                 
                </div>
            </div>
        </footer>
    );
};

export default Footer;
