import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FloatingIconsBackground from '../Components/FloatingIconsBackground'
import { CircleCheckBig, Grip, ScrollText, Users, SquareStack, Palette, Brush, Blend, Ratio, Library, LibraryBig } from 'lucide-react'

function Home() {
    return (
        <>
            <Navbar />
            <section className='h-fit py-10'>
                <p className='md:mt-32 mt-16 mx-auto items-center font-bold text-3xl px-6 md:px-0 md:text-5xl max-w-5xl text-center leading-snug tracking-wide'>
                    Join us in preserving Africa&apos;s heritage, empowering the next
                    generation, and transforming the global narrative —
                    <span className='italic text-custom-yellow'>
                        one story at a time.
                    </span>
                </p>
                <div className='flex justify-center gap-10 mt-24'>
                    <button className='py-2 px-5 rounded-3xl shadow-lg transition-all duration-200 text-custom-gray hover:bg-custom-yellow hover:text-white'>Learn more</button>
                    <button className='py-2 px-5 rounded-3xl shadow-lg transition-all duration-200 text-custom-gray hover:bg-custom-yellow hover:text-white'>Get in touch</button>
                </div>
            </section>
            <section className='md:h-fit bg-custom-beige py-10'>
                <h1 className='text-5xl font-bold text-center mb-10'>Our <span className='text-custom-yellow'>solution</span></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-10 mx-auto'>
                    <div className="shadow-2xl p-6 md:p-8 w-auto bg-custom-yellow rounded-3xl space-y-6 transition-transform transform hover:scale-[1.05] hover:cursor-pointer">
                        {/* Icons Row */}
                        <div className="flex items-center justify-between relative">
                            <Grip strokeWidth={0.5} className="text-white w-16 h-16 md:w-16 md:h-16" />
                            <CircleCheckBig strokeWidth={0.5} className="text-white w-32 h-32 md:w-28 md:h-28 lg:h-32 lg:w-32 absolute top-0 right-2" />
                        </div>

                        {/* Text Content */}
                        <h1 className="text-2xl md:text-3xl font-bold  mb-2">
                            What <br /> we offer
                        </h1>
                        <p className="text-base font-light leading-relaxed text-custom-gray">
                            Firefly empowers cultural preservation, nurtures creative talent, and reshapes African narratives through education, mentorship, and authentic storytelling.
                        </p>
                    </div>

                    <div className='shadow-2xl p-6 md:p-8 w-auto bg-custom-yellow rounded-3xl space-y-6 transition-transform transform hover:scale-[1.05] hover:cursor-pointer'>
                        <div className="flex items-center justify-between relative hover:tranform">
                            <Ratio strokeWidth={0.5} className="text-white w-16 h-16 md:w-16 md:h-16" />
                            <LibraryBig strokeWidth={0.5} className="text-white w-32 h-32 md:w-28 md:h-28  lg:h-32 lg:w-32 absolute top-0 right-2" />
                        </div>
                        <h1 className='text-2xl md:text-3xl font-bold  mb-2'>
                            Cultural <br />education
                        </h1>
                        <p className='text-base font-light leading-relaxed text-custom-gray'>
                            Engaging, culturally immersive programs that teach children vernacular languages and African heritage through creative visual arts.
                        </p>
                    </div>
                    <div className='shadow-2xl p-6 md:p-8 w-auto bg-custom-yellow rounded-3xl space-y-6 transition-transform transform hover:scale-[1.05] hover:cursor-pointer'>
                        <div className="flex items-center justify-between relative">
                            <Blend strokeWidth={0.5} className="text-white w-16 h-16 md:w-16 md:h-16" />
                            <Palette strokeWidth={0.5} className="text-white w-32 h-32 md:w-28 md:h-28 lg:h-32 lg:w-32 absolute top-0 right-2" />
                        </div>
                        <h1 className='text-2xl md:text-3xl font-bold  mb-2'>
                            Artistic <br /> empowerment
                        </h1>
                        <p className='text-base font-light leading-relaxed text-custom-gray'>
                            Empowering apsiring visual artists from diverse backgrounds with mentorship, skills training, and pathways to sustainable careers
                        </p>
                    </div>
                    <div className='shadow-2xl p-6 md:p-8 w-auto bg-custom-yellow rounded-3xl space-y-6 transition-transform transform hover:scale-[1.05] hover:cursor-pointer'>
                        <div className="flex items-center justify-between relative">
                            <SquareStack strokeWidth={0.5} className="text-white w-16 h-16 md:w-16 md:h-16" />
                            <ScrollText strokeWidth={0.5} className="text-white w-32 h-32 md:w-28 md:h-28 lg:h-32 lg:w-32 absolute top-0 right-2" />
                        </div>
                        <h1 className='text-2xl md:text-3xl font-bold  mb-2'>
                            Authentic <br />Storytelling
                        </h1>
                        <p className='text-base font-light leading-relaxed text-custom-gray'>
                            Producing original animated films and media content that genuinely reflex African experiences and challenge stereotypes
                        </p>
                    </div>
                </div>
            </section>
            <section className='h-fit mb-10'>
                <h1 className='text-5xl font-bold text-center mb-10 text-custom-yellow my-4'>How we do it</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mx-auto max-w-7xl'>
                    <div className='bg-custom-beige rounded-3xl'>
                        <img
                            src="/images/Firefly_Mzizi.jpg"
                            alt="Firefly_mizizi"
                            className='h-64 w-full object-cover rounded-t-3xl' />
                        <h1 className='text-2xl md:text-3xl font-bold  px-6 py-4'>Firefly MIZIZI</h1>
                        <p className='text-lg font-light leading-relaxed text-custom-gray px-6 pb-6'>Cultural preservation and vernacular language education through visual arts</p>
                    </div>

                    <div className='bg-custom-beige rounded-3xl'>
                        <img
                            src="/images/Firefly_Talanta.jpg"
                            alt="Firefly_talanta"
                            className='h-64 w-full object-cover rounded-t-3xl' />
                        <h1 className='text-2xl md:text-3xl font-bold  px-6 py-4'>Firefly TALANTA</h1>
                        <p className='text-lg font-light leading-relaxed text-custom-gray px-6 pb-6'>Fellowship and mentorship programs for youth in visual arts</p>
                    </div>

                    <div className='bg-custom-beige rounded-3xl'>
                        <img
                            src="/images/Firefly_Taswira.png"
                            alt="Firefly_taswira"
                            className='h-64 w-full object-cover rounded-t-3xl' />
                        <h1 className='text-2xl md:text-3xl font-bold  px-6 py-4'>Firefly TASWIRA</h1>
                        <p className='text-lg font-light leading-relaxed text-custom-gray px-6 pb-6'>Production of animated content that showcases authentic African stories.</p>
                    </div>
                </div>
            </section>
            <section className='h-fit py-4'>
                      <FloatingIconsBackground />

                <h1 className='text-center text-5xl font-bold text-custom-yellow my-3'>Meet our team</h1>
                <p className='font-light text-custom-gray mt-4 text-xl text-center my-6'>The professional team behind firefly</p>
                <div className='grid grid-cols-1 md:grid-cols-2 w-fit mx-auto gap-10'>
                    <div className='text-center mx-auto'>
                        <img src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="CEO"
                            className='h-56 w-56 object-cover mb-4  rounded-full mx-auto' />
                        <h1 className='border-b-2 border-custom-yellow  w-fit mx-auto pb-2 text-2xl'>Sheryl Kambuni</h1>
                        <p className='font-light text-custom-gray mt-4 text-xl'>CEO & Visionary Leader</p>
                    </div>
                   <div className='text-center mx-auto'>
                        <img src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="CEO"
                            className='h-56 w-56 object-cover mb-4 rounded-full p-2 mx-auto' />
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
