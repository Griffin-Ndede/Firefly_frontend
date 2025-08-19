import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from "motion/react"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { CircleCheckBig, Grip, ScrollText, Users, SquareStack, Palette, Brush, Blend, Ratio, Library, LibraryBig, ArrowBigLeft, ArrowRight } from 'lucide-react'

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
            <section 
                className="relative h-screen flex flex-col justify-center items-center text-center px-6 md:px-12">

                {/* Content */}
                <div
 className="relative z-10 max-w-4xl mx-auto">
                    <p className="font-extrabold text-3xl md:text-5xl leading-snug md:leading-tight tracking-wide drop-shadow-lg">
                        Join us in preserving Africa&apos;s heritage, empowering the next
                        generation, and transforming the global narrative —
                        <span className="italic text-custom-yellow">
                            one story at a time.
                        </span>
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <button
                            className="flex items-center gap-3 py-3 px-7 font-light rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300 bg-custom-yellow text-white hover:bg-custom-yellow">
                            Join our mission
                            <ArrowRight strokeWidth={1.5} />
                        </button>

                        <button className="py-3 px-7 font-light rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300 bg-white/90 text-custom-gray hover:bg-custom-yellow hover:text-white">
                            Get in touch
                        </button>
                    </div>
                </div>
            </section>


            <section className='md:h-fit bg-custom-beige py-10'>
                <h1 className='text-5xl font-bold text-center mb-10'>Our <span className='text-custom-yellow'>solution</span></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-10 mx-auto'>
                    {cardData.map((card, index) => (
                        <div key={index} className="shadow-2xl p-6 md:p-8 w-auto bg-custom-yellow rounded-3xl space-y-6 transition-transform transform hover:scale-[1.05] hover:cursor-pointer">
                            <div
                                className="flex items-center justify-between relative lg:mb-12 hover:transform">
                                <card.icons.main strokeWidth={0.5} className="text-white w-16 h-16 md:w-16 md:h-16" />
                                <card.icons.background strokeWidth={0.5} className="text-white w-32 h-32 md:w-28 md:h-28 lg:h-32 lg:w-32 absolute top-0 right-2" />
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold  mb-2">
                                {card.title}
                            </h1>
                            <p className="text-base font-light leading-relaxed text-custom-gray">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            <section className='h-fit mb-10'>
                <h1 className='text-5xl font-bold text-center mb-10 text-custom-yellow my-4'>How we do it</h1>
                <div className='flex flex-wrap gap-10 px-10 mx-auto max-w-6xl'>
                    <div className='bg-custom-beige rounded-3xl flex flex-col md:flex-row items-center'>
                        <img
                            src="/images/Firefly_Mzizi.jpg"
                            alt="Firefly_mizizi"
                            className='h-auto w-full md:w-2/3 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none hover:grayscale transition-all duration-1000 ease-in-out cursor-pointer'
                        />
                        <div className='w-full md:w-1/3'>
                            <h1 className='text-2xl md:text-3xl font-bold px-6 py-4 text-center md:text-left'>Firefly MIZIZI</h1>
                            <p className='text-lg font-light leading-relaxed text-custom-gray px-6 pb-6 text-center md:text-left'>
                                Cultural preservation and vernacular language education through visual arts
                            </p>
                        </div>
                    </div>

                    <div className='bg-custom-beige rounded-3xl flex  flex-col md:flex-row items-center'>
                        <div>
                            <h1 className='text-2xl md:text-3xl font-bold px-6 py-4 text-center md:text-left'>Firefly TALANTA</h1>
                            <p className='text-lg font-light leading-relaxed text-custom-gray px-6 pb-6 text-center md:text-left'>Fellowship and mentorship programs for youth in visual arts</p>
                        </div>
                        <img
                            src="/images/Firefly_Talanta.jpg"
                            alt="Firefly_talanta"
                            className='h-auto w-full md:w-2/3 object-cover rounded-b-3xl md:rounded-r-3xl hover:grayscale transition-all duration-1000 ease-in-out cursor-pointer' />
                    </div>

                    <div
                        className='bg-custom-beige rounded-3xl flex flex-col md:flex-row items-center'>
                        <img
                            src="/images/Firefly_Taswira.png"
                            alt="Firefly_taswira"
                            className='h-auto w-full md:w-2/3 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none hover:grayscale transition-all duration-1000 ease-in-out cursor-pointer' />
                        <div>
                            <h1 className='text-2xl md:text-3xl font-bold px-6 py-4 text-center md:text-left'>Firefly TASWIRA</h1>
                            <p className='text-lg font-light leading-relaxed text-custom-gray px-6 pb-6 text-center md:text-left'>Production of animated content that showcases authentic African stories.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='team'
                className='h-fit py-4 relative'>

                <h1 className='text-center text-5xl font-bold text-custom-yellow my-3'>Meet our team</h1>
                <p className='font-light text-custom-gray mt-4 text-xl text-center my-6'>The professional team behind firefly</p>
                <div className='grid grid-cols-1 md:grid-cols-2 w-fit mx-auto gap-10'>
                    <div className='text-center mx-auto'>
                        <Tilt>
                            <img src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="CEO"
                                className='h-56 w-56 object-cover mb-4  rounded-full mx-auto' />
                        </Tilt>

                        <h1 className='border-b-2 border-custom-yellow  w-fit mx-auto pb-2 text-2xl'>Sheryl Kambuni</h1>
                        <p className='font-light text-custom-gray mt-4 text-xl'>CEO & Visionary Leader</p>
                    </div>
                    <div className='text-center mx-auto'>
                        <Tilt>
                            <img src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="CEO"
                                className='h-56 w-56 object-cover mb-4 rounded-full p-2 mx-auto' />
                        </Tilt>
                        <h1 className='border-b-2 border-custom-yellow  w-fit mx-auto pb-2 text-2xl'>Jean Kambuni</h1>
                        <p className='font-light text-custom-gray mt-4 text-xl'>Co-founder & director</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Home
