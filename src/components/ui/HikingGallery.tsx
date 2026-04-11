import { motion } from 'framer-motion';
import cloughtonImage from '../../assets/hiking_images_optimized/cloughton.webp';
import cloughtonTwoImage from '../../assets/hiking_images_optimized/cloughton_2.webp';
import dogmillsImage from '../../assets/hiking_images_optimized/dogmills.webp';
import iomImage from '../../assets/hiking_images_optimized/iom.webp';
import iomTwoImage from '../../assets/hiking_images_optimized/iom_2.webp';
import laxeyImage from '../../assets/hiking_images_optimized/laxey.webp';
import pendlehillImage from '../../assets/hiking_images_optimized/pendlehill.webp';

type HikingImage = {
  src: string;
  alt: string;
};

const hikingImages: HikingImage[] = [
  { src: cloughtonImage, alt: 'Hiking at Cloughton' },
  { src: cloughtonTwoImage, alt: 'Trail view near Cloughton' },
  { src: dogmillsImage, alt: 'Hiking route at Dogmills' },
  { src: iomImage, alt: 'Isle of Man hiking landscape' },
  { src: iomTwoImage, alt: 'Isle of Man countryside walk' },
  { src: laxeyImage, alt: 'Hike around Laxey' },
  { src: pendlehillImage, alt: 'Hiking at Pendle Hill' },
];

const loopingImages = [...hikingImages, ...hikingImages];

function HikingGallery() {
  return (
    <div className="mt-4 overflow-hidden border-2 border-camel-600/60 bg-khaki-beige-900/55 py-4 dark:border-ebony-600 dark:bg-charcoal-brown-200/70">
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {loopingImages.map((image, index) => (
          <div key={`${image.src}-${index}`} className="h-36 w-44 shrink-0 border-2 border-khaki-beige-800/80 bg-khaki-beige-900 dark:border-ebony-500/80 dark:bg-charcoal-brown-300 sm:h-40 sm:w-52">
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default HikingGallery;
