'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


import './slideshow.css';
import Image from 'next/image';

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductMobileSliceshow = ({ images, title, className }: Props) => {


    

    return (

        <div className={ className }>

<Swiper

        
        navigation={true}
        autoplay= {{
            delay: 2500,
        }}
        
        modules={[FreeMode, Navigation, Autoplay, Navigation]}
        className="mySwiper2"
      >
        {
            images.map(image => (
                <SwiperSlide key={image}>
                    <Image
                     src={`/products/${image}`}
                     alt={title}
                     width={600}
                     height={500}
                     className='object-fill'                             
                        
                    />
                </SwiperSlide>
            ))
        }

        
      </Swiper>

      
        </div>
    )
}
