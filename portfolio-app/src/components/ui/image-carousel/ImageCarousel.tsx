import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import SmallButton from "../../ui/small-button/SmallButton";
import Image from "next/image";

interface ImageCarouselProps {
    sources: string[];
    displayImage: string;
};

function ImageCarousel({ sources, displayImage }: ImageCarouselProps) {
	const [toggler, setToggler] = useState(false);

	return (
		<div>
            <div style={{ textAlign: "left" }}>
                <Image
                    src={displayImage}
                    alt="Image of webpage"
                    layout="responsive"
                    width={600}
                    height={300}
                    style={{ borderRadius: "5px", boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.543)" }}
                />
                <SmallButton onClick={() => setToggler(!toggler)} buttonText="See More Images" />
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