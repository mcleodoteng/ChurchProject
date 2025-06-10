import { useState } from "react";
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
  const [showingSubImages, setShowingSubImages] = useState(false);

  const openModal = (image, index) => {
    setSelectedMainImage(image);
    setSelectedImage(image);
    setCurrentIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedMainImage(null);
    setCurrentIndex(0);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    const currentGroup = [selectedMainImage, ...selectedMainImage.subImages];
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < currentGroup.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(currentGroup[newIndex]);
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
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-lg cursor-pointer group 
              ${index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
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
                  disabled={
                    currentIndex ===
                    (selectedMainImage.subImages
                      ? selectedMainImage.subImages.length
                      : 0)
                  }
                >
                  <ChevronRightIcon className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent">
                <div className="p-4 text-white text-center">
                  <h3 className="text-xl font-semibold">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm opacity-80">{selectedImage.date}</p>
                  <p className="mt-2 text-sm font-medium">
                    Photo {currentIndex + 1} of{" "}
                    {selectedMainImage.subImages
                      ? selectedMainImage.subImages.length + 1
                      : 1}
                  </p>
                </div>
                {selectedMainImage.subImages && (
                  <div className="flex gap-2 p-4 overflow-x-auto pb-6 justify-center">
                    <div
                      key="main"
                      onClick={() => {
                        setCurrentIndex(0);
                        setSelectedImage(selectedMainImage);
                      }}
                      className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                        currentIndex === 0
                          ? "border-white"
                          : "border-transparent"
                      }`}
                    >
                      <OptimizedImage
                        src={selectedMainImage.src}
                        alt={selectedMainImage.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {selectedMainImage.subImages.map((subImage, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setCurrentIndex(idx + 1);
                          setSelectedImage(subImage);
                        }}
                        className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                          currentIndex === idx + 1
                            ? "border-white"
                            : "border-transparent"
                        }`}
                      >
                        <OptimizedImage
                          src={subImage.src}
                          alt={subImage.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
