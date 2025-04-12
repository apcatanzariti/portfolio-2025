import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

interface ImageCarouselProps {
    sources: string[];
};

const style: React.CSSProperties = {
    position: "relative",
    cursor: "pointer",
    boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.543)",
    borderRadius: "5px",
    width: "40rem",
    height: "20rem",
    overflow: "hidden"
};

function ImageCarousel({ sources }: ImageCarouselProps) {
	const [toggler, setToggler] = useState(false);

	return (
		<div>
            <div style={style}>
                <Image
                    onClick={() => setToggler(!toggler)}
                    src="/Entergy-1.png"
                    alt="Image of webpage"
                    layout="responsive"
                    // width={0}
                    // height={0}
                    width={600}
                    height={300}
                    // fill={true}
                />
            </div>
			 <FsLightbox
				toggler={toggler}
                sources={
                    sources.map((source) => {
                        return source;
                    })
                }
			/>
		 </div>
	);
};

export default ImageCarousel;