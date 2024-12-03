import image1 from "../../../../public/assets/img/about/about-three.png";
import image2 from "../../../../public/assets/img/about/about-three-2.png";
import image3 from "../../../../public/assets/img/about/about-three-3.png";
import Count from "../../common/count";

const AboutThree = () => {
    return (
        <div className="about__three section-padding">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
                        <div className="about__three-content">
                            <span className="subtitle-one">À propos de nous</span>
                            <h2>Chez HAT, nous proposons des solutions<span className="highlighted-two">innovantes et durables</span></h2>
                            <p>Avec notre expertise et notre engagement envers l’excellence, nous collaborons avec nos clients pour bâtir un avenir plus propre, sécurisé et prospère.</p>
                            <div className="about__three-content-service">
                                <div className="about__three-content-service-single">
                                    <i className="fa-solid fa-recycle"></i>
                                    <div className="content">
                                        <h4>Expertise Technique</h4>
                                        <p>Une équipe qualifiée offrant des solutions sur mesure et à la pointe de la technologie.</p>
                                    </div>
                                </div>
                                <div className="about__three-content-service-single">
                                    <i className="fa-solid fa-leaf"></i>
                                    <div className="content">
                                        <h4>Engagement Durable</h4>
                                        <p>Des solutions respectueuses de l'environnement, alliant performance et durabilité.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-9">
                        <div className="about__three-right">
                            <div className="row align-items-center">
                                <div className="about__three-right-counter">
                                    <h4 className="counter">+<Count number={5}/></h4>
                                    <span>Années d'expérience</span>								
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-6 col-sm-6">
                                    <div className="about__three-right-image-left-side">
                                        <img src={image1.src} alt="image" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-5 col-sm-6">
                                    <div className="about__three-right-image">
                                        <img src={image2.src} alt="image" />
                                    </div>
                                    <div className="about__three-right-image">
                                        <img src={image3.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutThree;