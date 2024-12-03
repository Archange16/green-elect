import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import banner1 from "../../../../public/assets/img/banner/banner-three.png";
import banner2 from "../../../../public/assets/img/banner/banner-three-2.png";
import banner3 from "../../../../public/assets/img/banner/banner-three2.png"
import shape from "../../../../public/assets/img/banner/banner-three-shape-overlay.png";

const BannerThree = () => {
  	return (
		<>
        <div className="banner__three">
            <Swiper
                effect= 'fade'
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                modules={[Autoplay, EffectFade]}
            >
                <SwiperSlide>
                    <div className="banner__three-single-slide" style={{backgroundImage: `url(${banner1.src})`}}>
                        <div className="banner__three-bg-shape-overlay" style={{backgroundImage: `url(${shape.src})`}}></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <div className="banner__three-content">
                                        <span className="subtitle-one">Engagement</span>
                                        <h2>Engagement pour des Pratiques  <span className="text-bordered">Dura</span>bles</h2>
                                        <p>La protection de l'environnement est au cœur de notre démarche. Nos produits sont conçus pour limiter leur impact écologique et respectent les normes internationales de qualité et de sécurité.</p>
                                        <Link href="/about" className="btn-two">En savoir plus<i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__three-single-slide" style={{backgroundImage: `url(${banner2.src})`}}>
                        <div className="banner__three-bg-shape-overlay" style={{backgroundImage: `url(${shape.src})`}}></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <div className="banner__three-content">
                                        <span className="subtitle-one">Maintenance Industrielle</span>
                                        <h2>L'Excellence en Maintenance Industrielle</h2>
                                        <p>Une maintenance proactive garantit la performance continue de nos installations. Nous minimisons les interruptions et optimisons l'efficacité de nos équipements.</p>
                                        <Link href="/about" className="btn-two">En savoir plus<i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__three-single-slide" style={{backgroundImage: `url(${banner3.src})`}}>
                        <div className="banner__three-bg-shape-overlay" style={{backgroundImage: `url(${shape.src})`}}></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <div className="banner__three-content">
                                        <span className="subtitle-one">Énergies Renouvelables</span>
                                        <h2>Énergies Renouvelables : vers un Avenir Durable</h2>
                                        <p>Les énergies renouvelables offrent des solutions respectueuses de l'environnement. Nous soutenons activement la transition énergétique durable.</p>
                                        <Link href="/about" className="btn-two">En savoir plus<i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
		</>
	);
};

export default BannerThree;