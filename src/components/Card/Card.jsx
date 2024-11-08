import React from 'react'
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import clientImg from '../../assets/client.jpeg'
import assignedImg from '../../assets/assigned.jpeg'
import demo1 from '../../assets/demo1.jpg'
import demo2 from '../../assets/demo2.jpeg'
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { MdNoteAlt } from "react-icons/md";
import { PiWechatLogo } from "react-icons/pi";
import { RiAttachment2 } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import AttachmentModal from '../AttachmentModal/AttachmentModal';
import { QueryClient } from '@tanstack/react-query';


export default function Card({
    _id,
    clientName,
    assignedTo,
    taskDetails,
    totalTaskAssigned,
    totalDone,
    totalClient,
    totalText,
    totalAttachment,
    date
}) {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedFiles, setSelectedFiles] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const handleUpload = async (files) => {
        setLoading(true);
        const formData = new FormData();
        files.forEach(file => formData.append('files', file));
        formData.append('_id', _id);

        try {
            const response = await fetch('http://localhost:5000/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                await response.json();
                setStatus(response.ok);
                setLoading(false);

                QueryClient.invalidateQueries(['attachments']);

            }

        } catch (error) {
            console.error('Error uploading files:', error);
            setLoading(false);
        }
    };



    return (
        <div className="bg-white p-4 rounded-md text-gray-700">
            <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-slate-400 rounded-full overflow-hidden'>
                        <img className='object-cover w-full h-full' src={clientImg} alt="client image" />
                    </div>
                    <p className="font-semibold text-xs">{clientName}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-slate-400 rounded-full overflow-hidden'>
                        <img className='object-cover w-full h-full' src={assignedImg} alt="client image" />
                    </div>
                    <p className="font-semibold text-xs">{assignedTo}</p>
                </div>
            </div>
            <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 w-[70%]'>
                        <span><HiMiniSquare3Stack3D /></span>
                        <p className={`${styles.line_clamp} text-xs`}>{taskDetails}</p>
                    </div>
                    <div className='flex items-center gap-2 bg-[#F2F4F7] p-1 rounded-md'>
                        <span><MdNoteAlt /></span>
                        <p className="font-semibold text-xs">{totalDone}/{totalTaskAssigned}</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-slate-400 rounded-full overflow-hidden'>
                        <img className='object-cover w-full h-full' src={demo1} alt="client image" />
                    </div>
                    <div className='w-8 h-8 bg-slate-400 rounded-full overflow-hidden'>
                        <img className='object-cover w-full h-full' src={demo2} alt="client image" />
                    </div>
                    <span className='w-8 h-8 bg-[#F2F4F7] rounded-full grid place-items-center'>
                        <p className='font-semibold text-xs'>
                            {totalClient > 12 ? `12+` : totalClient}
                        </p>
                    </span>
                </div>
                <div className='flex items-center gap-1 p-1'>
                    <span><PiWechatLogo /></span>
                    <p className="font-semibold text-xs">{totalText}</p>
                </div>
                <button
                    className="flex items-center gap-1 hover:bg-slate-200 rounded-md p-1 active:bg-slate-100 transition duration-300"
                    onClick={handleOpenModal}>
                    <span><RiAttachment2 /></span>
                    <p className="font-semibold text-xs">{totalAttachment}</p>
                </button>
                <div className='flex items-center gap-1 p-1'>
                    <span><FaRegCalendarAlt /></span>
                    <p className="font-semibold text-xs">{date}</p>
                </div>
            </div>
            <AttachmentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onUpload={handleUpload}
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
                loading={loading}
                status={status}
            />
        </div>
    );
}

Card.propTypes = {
    _id: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    assignedTo: PropTypes.string.isRequired,
    taskDetails: PropTypes.string.isRequired,
    totalTaskAssigned: PropTypes.number.isRequired,
    totalDone: PropTypes.number.isRequired,
    totalClient: PropTypes.number.isRequired,
    totalText: PropTypes.number,
    totalAttachment: PropTypes.number,
    date: PropTypes.string.isRequired
};
