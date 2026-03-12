import Tilt from 'react-parallax-tilt';
// import { motion } from "motion/react"
import { Link } from 'react-router';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contact from '../Pages/Contact'
import { CircleCheckBig, Grip, ScrollText, SquareStack, Palette, Blend, Ratio, LibraryBig, ArrowRight, ArrowDown } from 'lucide-react'
import videoBg from '../Assets/Flowers.mp4'
import { motion } from "motion/react"

function Home() {

    const cardData = [
        {
            title: <>What <br /> we offer</>,
            description:
                "Firefly empowers cultural preservation, nurtures creative talent, and reshapes African narratives through education, mentorship, and authentic storytelling.",
            icons: {
                main: Grip,
                background: CircleCheckBig,
            },
        },
        {
            title: <>Cultural <br /> education</>,
            description:
                "Engaging, culturally immersive programs that teach children vernacular languages and African heritage through creative visual arts.",
            icons: {
                main: Ratio,
                background: LibraryBig,
            },
        },
        {
            title: <>Artistic <br /> empowerment</>,
            description:
                "Empowering aspiring visual artists from diverse backgrounds with mentorship, skills training, and pathways to sustainable careers.",
            icons: {
                main: Blend,
                background: Palette,
            },
        },
        {
            title: <>Authentic <br />Storytelling</>,
            description:
                "Producing original animated films and media content that genuinely reflect African experiences and challenge stereotypes.",
            icons: {
                main: SquareStack,
                background: ScrollText,
            },
        },

    ]
    return (
        <>
            <Navbar />
            <section className='h-screen'>
                <div className="relative h-screen">
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Image for small screens */}
                        <img
                            src="/images/3.png"
                            alt="background"
                            className="w-auto h-full object-cover block sm:hidden"
                        />
                        {/* Video for larger screens */}
                        <video
                            src={videoBg}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover hidden sm:block"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="max-w-5xl mx-auto px-6 text-center transition-all duration-1000">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-10 font-delius ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, reprehenderit.
                            </h1>
                            <p className="text-2xl font-extralight text-white mb-8 leading-10 max-w-4xl mx-auto">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus est at, illum dolores odit ipsa laboriosam. At laboriosam dolorum, quia sed cumque eaque nostrum minus hic alias fugit ipsa iure.<br />
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 mt-12">
                                <a href="#about">
                                    <button
                                        className="flex items-center gap-3 py-3 px-7 font-light rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300 bg-custom-yellow text-white hover:bg-custom-yellow">
                                        Learn more
                                        <ArrowRight strokeWidth={1.5} />
                                    </button>
                                </a>
                                <a href="#contact">
                                    <button className="py-3 px-7 font-light rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300 bg-white/90 text-custom-gray hover:bg-custom-yellow hover:text-white">
                                        Get in touch
                                    </button>
                                </a>
                            </div>

                        </motion.div>
                        <div className="absolute bottom-8 transform -translate-x-1/2 z-10 animate-bounce mx-auto">
                            <div className="w-15 h-15 p-6 border-2 border-white rounded-full flex items-center justify-center mx-auto">
                                <a href='#gallery' aria-label="Scroll to gallery">
                                    <ArrowDown strokeWidth={1} size={42} absoluteStrokeWidth className='text-white' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Section */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                                <img
                                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Problem Illustration"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            {/* Decorative elements */}
                            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="absolute -top-4 -left-4 w-24 h-24 bg-custom-yellow rounded-full transition-all duration-1000"></motion.div>
                            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="absolute -bottom-6 -right-6 w-32 h-32 bg-custom-gray rounded-full transition-all duration-1000"></motion.div>
                        </div>

                        {/* Content Section */}
                        <div

                            className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true }}
                                className="space-y-4">
                                <div className="inline-block">
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-regular font-medium bg-custom-yellow text-custom-gray ">
                                        Problem
                                    </span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-bold  leading-tight">
                                    Lorem ipsum dolor sit amet.
                                </h2>
                            </motion.div>

                            <div className="prose prose-lg  max-w-none">
                                <motion.p
                                    initial={{ opacity: 0, x: 150 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.5 }}
                                    viewport={{ once: true }}

                                    className="text-base font-light leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, itaque tempora? Obcaecati,
                                    aut accusantium temporibus consequuntur ex ducimus nesciunt consequatur sunt necessitatibus! Asperiores, perferendis iure.
                                    Veritatis nobis saepe aliquam praesentium vel distinctio animi, quaerat aperiam minus fuga et voluptas tenetur!
                                </motion.p>
                            </div>

                            {/* Optional statistics or supporting points */}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                                <div>
                                    <div className="text-3xl font-bold text-custom-yellow mb-2">73%</div>
                                    <div className="text-base font-light">
                                        Lorem, ipsum dolor.
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-custom-yellow mb-2">2.5x</div>
                                    <div className="text-base font-light">
                                        Lorem ipsum dolor sit.
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='services' className='md:h-fit bg-custom-beige py-10'>
                <h1 className='text-5xl font-bold text-center mb-10'>Our <span className='text-custom-yellow'>solution</span></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-10 mx-auto'>
                    {cardData.map((card, index) => (
                        <motion.div
                            initial={{ y: 75 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.5 }}
                            viewport={{ once: true }}
                            key={index}
                            className="shadow-lg p-6 md:p-8 w-auto bg-custom-yellow rounded-3xl space-y-6 transition-transform transform hover:scale-[1.05] hover:cursor-pointer hover:shadow-2xl">
                            <div className="flex items-center justify-between relative lg:mb-12 hover:transform">
                                <card.icons.main strokeWidth={0.5} className="text-white w-16 h-16 md:w-16 md:h-16" />
                                <card.icons.background strokeWidth={0.5} className="text-white w-32 h-32 md:w-28 md:h-28 lg:h-32 lg:w-32 absolute top-0 right-2" />
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold  mb-2">
                                {card.title}
                            </h1>
                            <p className="text-base font-light leading-relaxed text-custom-gray">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section id='about' className='h-fit mb-10'>
                <h1 className='text-5xl font-bold text-center mb-10 text-custom-yellow my-4'>How we do it</h1>
                <div

                    className='flex flex-wrap gap-10 px-10 mx-auto max-w-6xl'>
                    <div className='bg-custom-beige rounded-3xl flex flex-col md:flex-row items-center'>
                        <img
                            src="/images/Firefly_Mzizi.jpg"
                            alt="Firefly_mizizi"
                            className='h-auto w-full md:w-1/3 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none hover:grayscale transition-all duration-1000 ease-in-out cursor-pointer'
                        />
                        <motion.div
                            initial={{ x: 75 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            className='w-full md:w-1/3'>
                            <h1 className='text-2xl md:text-3xl font-bold px-6 py-4 text-center md:text-left'>Firefly MIZIZI</h1>
                            <p className='text-lg font-light leading-relaxed text-custom-gray px-6 pb-6 text-center md:text-left'>
                                Cultural preservation and vernacular language education through visual arts
                            </p>
                        </motion.div>
                    </div>

                    <div className='bg-custom-beige rounded-3xl flex flex-col md:flex-row items-center'>
                        <motion.div

                            initial={{ x: 75 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }} className='w-full'>
                            <h1 className='text-2xl md:text-3xl font-bold px-6 py-4 text-center md:text-left'>Firefly TALANTA</h1>
                            <p className='text-lg font-light leading-relaxed text-custom-gray px-6 pb-6 text-center md:text-left'>Fellowship and mentorship programs for youth in visual arts</p>
                        </motion.div>
                        <img
                            src="/images/Firefly_Talanta.jpg"
                            alt="Firefly_talanta"
                            className='h-auto w-full md:w-1/3 object-cover rounded-r-3xl md:rounded-r-3xl hover:grayscale transition-all duration-1000 ease-in-out cursor-pointer' />
                    </div>

                    <div
                        className='bg-custom-beige rounded-3xl flex flex-col md:flex-row items-center'>
                        <img
                            src="/images/Firefly_Taswira.png"
                            alt="Firefly_taswira"
                            className='h-auto w-full md:w-1/3 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none hover:grayscale transition-all duration-1000 ease-in-out cursor-pointer' />
                        <motion.div
                            initial={{ x: 75 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}>
                            <h1 className='text-2xl md:text-3xl font-bold px-6 py-4 text-center md:text-left'>Firefly TASWIRA</h1>
                            <p className='text-lg font-light leading-relaxed text-custom-gray px-6 pb-6 text-center md:text-left'>Production of animated content that showcases authentic African stories.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id='team'
                className='h-fit py-4 relative'>
                <h1 className='text-center text-5xl font-bold text-custom-yellow my-3'>Meet our team</h1>
                <p className='font-light text-custom-gray mt-4 text-xl text-center my-6'>The professional team behind firefly</p>
                <div className='grid grid-cols-1 md:grid-cols-2 w-fit mx-auto gap-10'>
                    <motion.div
                        initial={{ y: 75 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }} className='text-center mx-auto'>
                        <Tilt>
                            <img src="/images/Sheryl.jpeg" alt="CEO"
                                className='h-72 w-56 object-cover mb-4 rounded-full mx-auto' />
                        </Tilt>

                        <h1 className='border-b-2 border-custom-yellow  w-fit mx-auto pb-2 text-2xl'>Sheryl Kambuni</h1>
                        <p className='font-light text-custom-gray mt-4 text-xl'>CEO & Visionary Leader</p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 75 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                        className='text-center mx-auto'>
                        <Tilt>
                            <img src="/images/Jean.jpeg" alt="CEO"
                                className='h-72 w-56 object-cover mb-4 rounded-full p-2 mx-auto' />
                        </Tilt>
                        <h1 className='border-b-2 border-custom-yellow  w-fit mx-auto pb-2 text-2xl'>Jean Kambuni</h1>
                        <p className='font-light text-custom-gray mt-4 text-xl'>Co-founder & director</p>
                    </motion.div>
                </div>
            </section>
            <Contact />

            <Footer />
        </>

    )
}

export default Home





//  <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-20">
//                 {/* Background shapes */}
//                 <div className="absolute top-10 left-10 
//                         w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-56 lg:w-48 lg:h-64 
//                     bg-custom-gray rounded-2xl -rotate-12 shadow-2xl">
//                 </div>

//                 <div className="absolute top-32 left-20 sm:left-40 
//                     w-28 h-40 sm:w-40 sm:h-56 md:w-52 md:h-72 lg:w-64 lg:h-80 
//                     bg-custom-yellow rounded-3xl rotate-6 shadow-2xl">
//                 </div>
//                 <div className="absolute top-10 right-10 
//                         w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-56 lg:w-48 lg:h-64 
//                     bg-custom-gray rounded-2xl -rotate-12 shadow-2xl hidden sm:block">
//                 </div>

//                 <div className="absolute top-32 right-20 sm:right-40 
//                     w-28 h-40 sm:w-40 sm:h-56 md:w-52 md:h-72 lg:w-64 lg:h-80 
//                     bg-custom-yellow rounded-3xl rotate-6 shadow-2xl hidden sm:block">
//                 </div>
//                 <div className="absolute bottom-10 right-10 
//                     w-32 h-24 sm:w-44 sm:h-36 md:w-56 md:h-44 lg:w-72 lg:h-56 
//                     bg-custom-yellow rounded-xl rotate-12 shadow-xl">
//                 </div>
//                 {/* Photos / drawings */}
//                 <img
//                     src="/images/1.png"
//                     alt="collage 1"
//                     className="absolute top-40 left-20 w-72 h-80 object-cover rounded-3xl rotate-2  hidden sm:block"
//                 />
//                 <img
//                     src="/images/2.png"
//                     alt="collage 2"
//                     className="absolute bottom-0 left-32 w-96 h-80 object-cover  -rotate-6 hidden sm:block"
//                 />
//                 <img
//                     src="/images/3.png"
//                     alt="collage 3"
//                     className="absolute top-24 right-20 w-72 h-80 object-cover rounded-2xl rotate-12 shadow-2xl hidden sm:block"
//                 />

//                 {/* Foreground content */}
//                 <div
//                     className="relative z-10 max-w-4xl mx-auto px-6">
//                     <h1 className="font-extrabold  font-delius text-3xl md:text-6xl leading-snug md:leading-tight tracking-wide drop-shadow-lg mb-10">
//                         Transforming Africa&apos;s Narrative Through the Power of Visual Arts <span className="italic text-custom-yellow">
//                             one story at a time.
//                         </span>
//                     </h1>
//                     <p className='font-extralight text-xl max-w-2xl mx-auto'>
//                         Firefly is a social enterprise dedicated to challenging stereotypes, celebrating Africa&apos;s cultural richness,
//                         and sharing authentic stories that inspire appreciation of its creative heritage.
//                     </p>

//                     {/* Buttons */}
//                     <div className="flex flex-wrap justify-center gap-6 mt-12">
//                         <a href="#about">
//                             <button
//                                 className="flex items-center gap-3 py-3 px-7 font-light rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300 bg-custom-yellow text-white hover:bg-custom-yellow">
//                                 Learn more
//                                 <ArrowRight strokeWidth={1.5} />
//                             </button>
//                         </a>
//                         <Link to="/contact">
//                             <button className="py-3 px-7 font-light rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300 bg-white/90 text-custom-gray hover:bg-custom-yellow hover:text-white">
//                                 Get in touch
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </section>