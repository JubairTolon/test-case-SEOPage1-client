import { useQuery } from '@tanstack/react-query';

const fetchAttachments = async () => {
    const response = await fetch('http://localhost:5000/api/attachments');
    if (!response.ok) {
        throw new Error('Failed to fetch attachments');
    }
    return response.json();
};

export function useAttachments() {
    return useQuery({
        queryKey: ['attachments'],
        queryFn: fetchAttachments,
    });
}
