import './about.css';
import aboutImg from '../images/abagrouppic.jpg';
function About() {
    return (
<div>

    <section id="about-container">
    <div id="about-container-top">
        <h1>About Us</h1>
        <img src={aboutImg} />
    </div>

    <div id="about-container-bottom">
        <p><b>Asian Barbell Association (ABA)</b> was officially created by Victor Nguyen as a school organization at University of South Carolina on January 24, 2024. The goal of ABA was to create a community that motivates and guides others in succeeding in their self-improvement, using fitness as a means of teaching. We want to create a community where anyone who's open-minded and wanting to better themselves can come and find some answers. We emphasizes on Asian culture and wanting to break the stereotype of Asians being "non-athletic". Through workshops, mentorship programs, and supportive group workouts, the ABA empowers individuals of all fitness levels to build strength, confidence, and community. Together, let's lift not just weights, but also our spirits and celebrate the vibrant diversity of our Asian heritage.</p>
    </div>
</section>
</div>

    )
}

export default About;