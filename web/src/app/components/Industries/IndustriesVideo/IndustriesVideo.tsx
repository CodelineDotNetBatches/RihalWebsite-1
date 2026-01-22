import React from 'react'

const IndustriesVedio = () => {
    return (

        <div className="top-[60px] left-[77.8438px] w-[1129.3121px] h-[782.2222px] rounded-[25.3968px] border-[1.6931px] border-[#0B9E8C]/[0.33] bg-[linear-gradient(0deg,rgba(11,158,140,0.33),rgba(11,158,140,0.33)),rgba(11,26,43,0.20)] overflow-hidden relative">
            <div className="absolute top-[896.7858px] left-[-337.3413px] w-[1647.8502px] h-[933.5189px] rounded-[20px] overflow-hidden" />
            <video
                className="object-fill top-[896.7858px] left-[-337.3413px] w-[1647.8502px] h-[933.5189px] rounded-[20px]"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/Images/Industry/video-poster.jpg"
            >
                <source src="/Images/Industry/3.mp4" type="video/mp4" />
            </video>
        </div>



    )
}

export default IndustriesVedio