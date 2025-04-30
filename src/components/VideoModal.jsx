import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, ShareIcon } from "@heroicons/react/24/outline";

const VideoModal = ({ video, isOpen, onClose }) => {
  if (!video) return null;

  const handleShare = async () => {
    try {
      const shareUrl = `${window.location.origin}/watch?video=${video.videoId}`;
      await navigator.clipboard.writeText(shareUrl);
      alert("Video link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link:", err);
      alert("Failed to copy link to clipboard");
    }
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-black text-left align-middle shadow-xl transition-all">
                <div className="absolute right-4 top-4 z-10 flex space-x-2">
                  <button
                    type="button"
                    className="rounded-full bg-black/50 p-2 hover:bg-black/70 transition-colors"
                    onClick={handleShare}
                    title="Share video"
                  >
                    <ShareIcon className="h-6 w-6 text-white" />
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-black/50 p-2 hover:bg-black/70 transition-colors"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6 text-white" />
                  </button>
                </div>

                <div className="relative pt-[56.25%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="bg-white p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-gray-900 mb-2"
                  >
                    {video.title}
                  </Dialog.Title>

                  <p className="text-sm text-gray-500 mb-4">
                    {video.date} • {video.duration}
                  </p>

                  <p className="text-gray-600 mb-4">{video.description}</p>

                  <div className="mt-4 flex items-center">
                    <img
                      src="/images/ministries/logo.jpg"
                      alt={video.speaker}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">
                        {video.speaker}
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VideoModal;
