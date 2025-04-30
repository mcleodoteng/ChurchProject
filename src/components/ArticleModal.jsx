import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, ShareIcon } from "@heroicons/react/24/outline";

const ArticleModal = ({ article, isOpen, onClose }) => {
  if (!article) return null;

  const handleShare = async () => {
    try {
      const shareUrl = `${window.location.origin}/read?article=${article.id}`;
      await navigator.clipboard.writeText(shareUrl);
      alert("Article link copied to clipboard!");
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
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
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
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-end space-x-2 mb-4">
                  <button
                    type="button"
                    className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors"
                    onClick={handleShare}
                    title="Share article"
                  >
                    <ShareIcon className="h-6 w-6 text-gray-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                {article.image && (
                  <div className="relative h-64 w-full mb-6">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover rounded-xl"
                    />
                  </div>
                )}

                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-900 mb-4"
                >
                  {article.title}
                </Dialog.Title>

                {article.date && (
                  <p className="text-sm text-gray-500 mb-4">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}

                <div className="mt-4 prose prose-lg max-w-none">
                  {article.content}
                </div>

                <div className="mt-6 flex items-center space-x-4">
                  <img
                    src="/images/ministries/logo.jpg"
                    alt={article.author}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      {article.author}
                    </p>
                    <p className="text-sm text-gray-500">{article.category}</p>
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

export default ArticleModal;
