import { FreeMode, Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import breakpoints from '../../swiperBreakpoints';
import { useRef } from 'react';


export default function SwiperProducts({ children, autoPlay }) {
    const swiperRef = useRef(null);

    const slidePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const slideNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <Swiper
        ref={swiperRef}
        modules={[FreeMode, Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1.1}
        spaceBetween={10}
        slidesPerGroup={3}
        centeredSlides={false}
        autoHeight={false}
        autoplay={autoPlay ? {
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        } : false}
        navigation={false}
        pagination={false}
        scrollbar={false}
        breakpoints={breakpoints}
        className="transition-all duration-300 ease-in-out cursor-grab h-auto"
        >
            {children}
        </Swiper>
    )
  }
