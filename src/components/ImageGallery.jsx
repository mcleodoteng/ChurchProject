import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OptimizedImage } from "./Home";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMainImage, setSelectedMainImage] = useState(null);
  const [expandedGroups, setExpandedGroups] = useState(new Set());

  // Flatten images array to include subImages
  const flattenedImages = images.reduce((acc, image) => {
    acc.push(image);
    if (image.subImages) {
      acc.push(
        ...image.subImages.map((subImage) => ({
          ...subImage,
          mainImage: image,
        }))
      );
    }
    return acc;
  }, []);

  const openModal = (image, index) => {
    const mainImage = image.mainImage || image;
    setSelectedMainImage(mainImage);
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedMainImage(null);
    setCurrentIndex(0);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < flattenedImages.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(flattenedImages[newIndex]);
      setSelectedMainImage(
        flattenedImages[newIndex].mainImage || flattenedImages[newIndex]
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") navigateImage(-1);
    if (e.key === "ArrowRight") navigateImage(1);
    if (e.key === "Escape") closeModal();
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
        {flattenedImages.map((image, index) => (
          <motion.div
            key={`${image.src}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-lg cursor-pointer group 
              ${
                (index % 5 === 0 && !image.mainImage) ? "md:col-span-2 md:row-span-2" : ""
              }`}
            onClick={() => openModal(image, index)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm opacity-80">{image.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl mx-auto p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white z-10 hover:opacity-75 transition-opacity"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
              <div className="relative aspect-[16/9] max-h-[80vh]">
                <OptimizedImage
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(-1);
                  }}
                  className="bg-white/10 text-white p-2 rounded-r-lg hover:bg-white/20 transition-colors disabled:opacity-50"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeftIcon className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(1);
                  }}
                  className="bg-white/10 text-white p-2 rounded-l-lg hover:bg-white/20 transition-colors disabled:opacity-50"
                  disabled={currentIndex === flattenedImages.length - 1}
                >
                  <ChevronRightIcon className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent">
                <div className="p-4 text-white text-center">
                  <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                  <p className="text-sm opacity-80">{selectedImage.date}</p>
                  <p className="mt-2 text-sm font-medium">
                    Photo {currentIndex + 1} of {flattenedImages.length}
                  </p>
                </div>
                <div className="flex gap-2 p-4 overflow-x-auto pb-6 justify-center">
                  {flattenedImages.map((image, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setSelectedImage(image);
                        setSelectedMainImage(image.mainImage || image);
                      }}
                      className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                        currentIndex === idx
                          ? "border-white"
                          : "border-transparent"
                      }`}
                    >
                      <OptimizedImage
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
