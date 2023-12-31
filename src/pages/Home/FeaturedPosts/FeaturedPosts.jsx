import React, { useContext } from 'react';
import { useEffect } from "react";
import { fetchPosts } from "../../../StateManagment/Posts/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import { ThemeContext } from '../../../providers/ThemeProvider';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const FeaturedPosts = () => {

    const { theme } = useContext(ThemeContext);

    const controls = useAnimation();
    const [ref, inView] = useInView();

    const { isLoading, posts, error } = useSelector(state => state.posts);

    // console.log(posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div className={`${theme} md:pt-20 pt-10`}>

            <div className='relative group w-10/12 mx-auto'>

                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 },
                    }}
                    transition={{ duration: 0.9 }}

                    className='text-5xl font-[Poppins]'>
                    Featured Posts
                </motion.h1>

                <span className="absolute -bottom-2 md:w-1/3 w-11/12 left-0 h-0.5 bg-[#3c6e71] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform -rotate-1 duration-700"></span>

            </div>

            <Marquee pauseOnHover speed={100}>
                {
                    posts && posts.slice(0, 6).map(topPost =>
                        <div key={topPost._id} className='mx-5 my-20'>
                            <div className='relative px-5 py-8 bg-opacity-40 rounded-xl shadow-xl shadow-[#3c6e71] md:w-[600px] w-[300px] hover:bg-[#3c6e71] duration-700'>
                                <div className='flex justify-center'>
                                    <img src={topPost.userPhoto} alt="" className='rounded-full -mt-[61px] h-14' />
                                </div>
                                <h2 className='font-[Cinzel]'>{topPost.text.substring(0, 70)}... {"  "}
                                    <span className='text-[#023e8a] hover:font-semibold cursor-pointer'><Link to="/news-feed">Read more</Link></span>
                                </h2>
                                <h2 className='font-[Cinzel]'>{topPost.userName}</h2>
                            </div>
                        </div>
                    )
                }
            </Marquee>
        </div>
    );
};

export default FeaturedPosts;