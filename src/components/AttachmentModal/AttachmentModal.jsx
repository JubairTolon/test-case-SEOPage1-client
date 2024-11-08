import PropTypes from 'prop-types';
import React from 'react';
import styles from './Modal.module.css';
import { RiAttachment2 } from 'react-icons/ri';
import { RxCross2 } from "react-icons/rx";


export default function AttachmentModal({ isOpen, onClose, onUpload, selectedFiles, setSelectedFiles, loading, status }) {
    const modalRef = React.useRef(null);
    const fileInputRef = React.useRef(null);


    React.useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
                setSelectedFiles([]);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose, setSelectedFiles]);

    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
    };

    const handleChooseFilesClick = () => {
        fileInputRef.current.click();
    };


    const handleUpload = () => {
        onUpload(selectedFiles);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed text-gray-700 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div ref={modalRef} className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative transition duration-300">
                <button
                    className="absolute top-2 right-2 px-2 rounded-full py-2 bg-gray-200 text-sm hover:bg-gray-300 transition duration-300"
                    onClick={onClose}>
                    <RxCross2 />
                </button>

                <h2 className="text-lg font-semibold mb-4">Upload Attachments</h2>
                <div className='flex items-center gap-2'>
                    <p className="text-sm">Select files to upload:</p>
                    <input
                        type="file"
                        ref={fileInputRef}
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <button
                        type="button"
                        onClick={handleChooseFilesClick}
                        className="px-2 py-2 bg-gray-200 rounded-md hover:bg-[#D9DBDE] flex items-center gap-2 text-xs">
                        <RiAttachment2 /> Choose Files
                    </button>
                </div>

                {selectedFiles.length > 0 && (
                    <ul className={`${styles.file_list_container} mt-4 max-h-44 overflow-y-auto grid gap-1`}>
                        {selectedFiles.map((file, index) => {
                            return (
                                <li key={index} className="text-sm flex justify-between bg-[#F2F4F7] p-1 rounded-sm">
                                    <span>{index + 1}. {file.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                )}

                <div className="flex justify-end mt-6 gap-2">
                    {!status ? <button
                        className={`px-4 py-2 rounded-full text-xs transition duration-300 ${!selectedFiles.length || loading
                            ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                            : 'bg-[#147CC3] text-white hover:bg-[#126FAF] active:bg-[#147CC3]'
                            }`}
                        onClick={handleUpload}
                        disabled={!selectedFiles.length || loading}>
                        {loading ? 'Uploading...' : 'Upload'}
                    </button>
                        :
                        <div className='flex items-center w-full justify-between gap-2 text-green-600 text-sm'>
                            <p>Uploaded</p>
                            <button
                                className={`px-4 py-2 rounded-full text-xs transition duration-300 bg-[#147CC3] text-white hover:bg-[#126FAF] active:bg-[#147CC3]`}
                                onClick={onClose}>
                                Done
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

AttachmentModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpload: PropTypes.func.isRequired,
    selectedFiles: PropTypes.array.isRequired,
    setSelectedFiles: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    status: PropTypes.bool.isRequired,
};