import React, { useRef } from 'react';
import './Home.css'
import AbautMe from '../abaut-me/AbautMe';
import Layout from '../../components/layout-component/MainLayout';
import Projects from '../projects/Projects';

const Home: React.FC = () => {

    const homeRef = useRef<HTMLDivElement>(null);
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const projects = useRef<HTMLDivElement>(null);

    const handleNavigate = (section:string) => {

        switch (section) {
            case '/':
                homeRef.current?.scrollIntoView({ behavior: 'smooth' });               
                break;
                case '/about-me':
                    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });               
                break;
                case '/projects':
                    projects.current?.scrollIntoView({ behavior: 'smooth' });               
                break;            
            default:
                homeRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
        }

    }

    return (
        <>
         <Layout onNavigate={handleNavigate}>
        <div ref={homeRef} className="background-home">
            <div className='row contain-main-home'>
                <div className='col-md-12'>
                    <label className='standard-title-home'>Hi!</label>
                </div>
                <div className='col-md-12'>
                    <label className='standard-title-home'>I'm Styward Campo</label>
                </div>
                <div className='col-md-12'>
                    <label className='standard-subtitle-home'>Software Developer</label>
                </div>
                <div className='col-md-12'>
                    <p className='standard-text-p-home'>
                        <i>
                    Everything you've ever wanted is on the other side of fear
                    </i>
                    </p>
                </div>

                <div className='col-md-12'>
                    <button className='standard-btn-primary' >Contact me</button>
                </div>
            </div>
        </div>
        

      
            <div ref={aboutMeRef} className='content-abautme'>
            <AbautMe/>
            </div>

            <div ref={projects} className='content-abautme'>
            <Projects/>
            </div>
  

            </Layout>
        </>
    );
};

export default Home;