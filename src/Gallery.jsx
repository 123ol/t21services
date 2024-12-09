import logo from './assets/photo_2024-12-08_21-10-14.jpg';
import img1 from './assets/photo_2024-12-08_21-09-57.jpg';
import img2 from'./assets/photo_2024-12-08_21-10-09.jpg';
import img3 from './assets/photo_2024-12-08_21-10-11.jpg';

const images = [
  { src: logo, alt: "Logo", width: 300, height: 200 },
  { src: img1, alt: "Image 1", width: 300, height: 300 },
  { src: img2, alt: "Image 2", width: 300, height: 250 },
  { src: img3, alt: "Image 3", width: 300, height: 350 },
  
];



const MasonryGrid = () => {
  return (
    <div className="px-4 py-40">

      <h1  className="text-2xl font-semibold  md:text-4xl bg-gradient-to-r from-[#DD9933] to-[#191919] text-transparent bg-clip-text text-center my-8" >T21 Grid</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="mb-4">
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: `${image.width}px`,
                height: `${image.height}px`,
              }}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
