import Card from '../../components/Card/Card';
import { useAttachments } from '../../hooks/useQuery';
import styles from './Home.module.css';


const cardData = [
    {
        _id: '1d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
    {
        _id: '2d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
    {
        _id: '3d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
    {
        _id: '4d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
    {
        _id: '5d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
    {
        _id: '6d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
    {
        _id: '7d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
    {
        _id: '8d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
];

const ovededData = [
    {
        _id: '1d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
    {
        _id: '2d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
    {
        _id: '3d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
    {
        _id: '4d',
        clientName: 'Client Name',
        clientImg: '',
        assignedTo: 'Sadik Istiak',
        assignedToImg: '',
        taskDetails: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, repudiandae!',
        totalTaskAssigned: 2,
        totalDone: 1,
        demoImg1: '',
        demoImg2: '',
        totalClient: 25,
        totalText: 15,
        totalAttachment: 25,
        date: '30-12-22',
    },
];


const Home = () => {
    const { data: attachments, isLoading, error } = useAttachments();

    if (isLoading) return <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Loading...</p>;
    if (error) return <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Error: {error.message}</p>;

    return (
        <section className={`${styles.home_container} h-[100vh] p-2 md:p-8 flex items-start gap-6 overflow-x-auto w-full`}>
            <div className="min-w-[350px] max-h-full bg-[#F2F4F7] flex flex-col">
                <div className="flex items-center justify-between p-4 mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#D21010] rounded-s-full"></div>
                        <span className="text-gray-700 font-medium">Incomplete</span>
                    </div>
                    <span className="text-gray-700 bg-[#E8EEF3] w-8 h-8 grid place-items-center font-medium rounded-md">0</span>
                </div>
                <div className={`${styles.card_container} flex flex-col gap-4 p-2 overflow-y-auto h-[calc(100%-64px)] pb-8`}>
                    {
                        cardData.map((cData, index) => (
                            <Card
                                key={index}
                                _id={cData._id}
                                clientName={cData.clientName}
                                assignedTo={cData.assignedTo}
                                taskDetails={cData.taskDetails}
                                totalTaskAssigned={cData.totalTaskAssigned}
                                totalDone={cData.totalDone}
                                totalClient={cData.totalClient}
                                totalText={cData.totalText}
                                totalAttachment={attachments?.attachments?.length}
                                date={cData.date}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="min-w-[350px] max-h-full bg-[#F2F4F7] flex flex-col">
                <div className="flex items-center justify-between p-4 mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#00B5FF] rounded-s-full"></div>
                        <span className="text-gray-700 font-medium">To Do</span>
                    </div>
                    <span className="text-gray-700 bg-[#E8EEF3] w-8 h-8 grid place-items-center font-medium rounded-md">0</span>
                </div>
                <div className={`${styles.card_container} flex flex-col gap-4 p-2 overflow-y-auto h-[calc(100%-64px)] pb-8`}>
                    {
                        cardData.map((cData, index) => (
                            <Card
                                key={index}
                                _id={cData._id}
                                clientName={cData.clientName}
                                assignedTo={cData.assignedTo}
                                taskDetails={cData.taskDetails}
                                totalTaskAssigned={cData.totalTaskAssigned}
                                totalDone={cData.totalDone}
                                totalClient={cData.totalClient}
                                totalText={cData.totalText}
                                totalAttachment={attachments?.attachments?.length}
                                date={cData.date}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="min-w-[350px] max-h-full bg-[#F2F4F7] flex flex-col">
                <div className="flex items-center justify-between p-4 mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#FFE700] rounded-s-full"></div>
                        <span className="text-gray-700 font-medium">Doing</span>
                    </div>
                    <span className="text-gray-700 bg-[#E8EEF3] w-8 h-8 grid place-items-center font-medium rounded-md">0</span>
                </div>
                <div className={`${styles.card_container} flex flex-col gap-4 p-2 overflow-y-auto h-[calc(100%-64px)] pb-8`}>
                    {
                        cardData.map((cData, index) => (
                            <Card
                                key={index}
                                _id={cData._id}
                                clientName={cData.clientName}
                                assignedTo={cData.assignedTo}
                                taskDetails={cData.taskDetails}
                                totalTaskAssigned={cData.totalTaskAssigned}
                                totalDone={cData.totalDone}
                                totalClient={cData.totalClient}
                                totalText={cData.totalText}
                                totalAttachment={attachments?.attachments?.length}
                                date={cData.date}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="min-w-[350px] max-h-full bg-[#F2F4F7] flex flex-col">
                <div className="flex items-center justify-between p-4 mb-4">
                    <span className="text-gray-700 font-medium">Under Review</span>
                    <span className="text-gray-700 bg-[#E8EEF3] w-8 h-8 grid place-items-center font-medium rounded-md">0</span>
                </div>
                <div className={`${styles.card_container} flex flex-col gap-4 p-2 overflow-y-auto h-[calc(100%-64px)] pb-8`}>
                    {
                        cardData.map((cData, index) => (
                            <Card
                                key={index}
                                _id={cData._id}
                                clientName={cData.clientName}
                                assignedTo={cData.assignedTo}
                                taskDetails={cData.taskDetails}
                                totalTaskAssigned={cData.totalTaskAssigned}
                                totalDone={cData.totalDone}
                                totalClient={cData.totalClient}
                                totalText={cData.totalText}
                                totalAttachment={attachments?.attachments?.length}
                                date={cData.date}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="min-w-[350px] max-h-full bg-[#F2F4F7] flex flex-col">
                <div className="flex items-center justify-between p-4 mb-4">
                    <span className="text-gray-700 font-medium">Completed</span>
                    <span className="text-gray-700 bg-[#E8EEF3] w-8 h-8 grid place-items-center font-medium rounded-md">0</span>
                </div>
                <div className={`${styles.card_container} flex flex-col gap-4 p-2 overflow-y-auto h-[calc(100%-64px)] pb-8`}>
                    {
                        cardData.map((cData, index) => (
                            <Card
                                key={index}
                                _id={cData._id}
                                clientName={cData.clientName}
                                assignedTo={cData.assignedTo}
                                taskDetails={cData.taskDetails}
                                totalTaskAssigned={cData.totalTaskAssigned}
                                totalDone={cData.totalDone}
                                totalClient={cData.totalClient}
                                totalText={cData.totalText}
                                totalAttachment={attachments?.attachments?.length}
                                date={cData.date}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="min-w-[350px] max-h-full bg-[#F2F4F7] flex flex-col">
                <div className="flex items-center justify-between p-4 mb-4">
                    <span className="text-gray-700 font-medium">Overdue</span>
                    <span className="text-gray-700 bg-[#E8EEF3] w-8 h-8 grid place-items-center font-medium rounded-md">0</span>
                </div>
                <div className={`${styles.card_container} flex flex-col gap-4 p-2 overflow-y-auto h-[calc(100%-64px)] pb-8`}>
                    {
                        ovededData.map((cData, index) => (
                            <Card
                                key={index}
                                _id={cData._id}
                                clientName={cData.clientName}
                                assignedTo={cData.assignedTo}
                                taskDetails={cData.taskDetails}
                                totalTaskAssigned={cData.totalTaskAssigned}
                                totalDone={cData.totalDone}
                                totalClient={cData.totalClient}
                                totalText={cData.totalText}
                                totalAttachment={attachments?.attachments?.length}
                                date={cData.date}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;
