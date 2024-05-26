import { useQuery } from '@tanstack/react-query';

const useAnimeDetails = (malId: number) => {
    return useQuery({
        queryKey: ['getAnimeDetails', malId],
        queryFn: () => fetch(`https://api.jikan.moe/v4/anime/${malId}`).then((res) => res.json()),
        enabled: !!malId,
        retry: 2,
    });
};

export default useAnimeDetails;
