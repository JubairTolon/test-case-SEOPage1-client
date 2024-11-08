import { useQuery } from '@tanstack/react-query';

const fetchAttachments = async () => {
    const response = await fetch('https://seo-page-server.vercel.app/api/attachments');
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
