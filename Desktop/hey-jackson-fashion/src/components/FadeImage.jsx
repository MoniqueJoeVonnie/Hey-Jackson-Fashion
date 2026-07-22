import { useState } from "react";
import "../styles/FadeImage.css";

function FadeImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  ...imageProps
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`fade-image-wrapper ${wrapperClassName} ${
        isLoaded ? "loaded" : ""
      }`}
    >
      {!isLoaded && (
        <div
          className="image-skeleton"
          aria-hidden="true"
        />
      )}

      <img
        src={src}
        alt={alt}
        className={`fade-image ${className}`}
        onLoad={() => setIsLoaded(true)}
        {...imageProps}
      />
    </div>
  );
}

export default FadeImage;