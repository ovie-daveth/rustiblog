import { IKImage } from 'imagekitio-react'
import React from 'react'

interface Prop {
    img_url: string,
    className: string,
    alt: string,
    w: any,
    h?: any
}
const Img = ({img_url, className, alt, w, h}: Prop) => {
  return (
    <IKImage 
    urlEndpoint={import.meta.env.VITE_IMAGEKIT_URLENDPOINT}
    path={img_url}
    alt={alt}
    loading='lazy'
    lqip={{active: true, quality: 20}}
    width={w}
    height={h}
    className={className}
    transformation={[
      {
        width: w,
        height: h,
      },
    ]}
    />
  )
}

export default Img