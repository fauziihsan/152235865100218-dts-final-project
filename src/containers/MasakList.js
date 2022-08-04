import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import masak from '../apis/masak';
import MasakCard from '../components/MasakCard';

const MasakList = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [masaks, setMasaks] = useState([]);
    const [masaksReady, setMasaksReady] = useState(false);

    useEffect(() => {
        const fetchMasaks = async () => {
            try {
                const fetchedMasaks = await masak.get("api/category/recipes/masakan-hari-raya");
                setMasaks(fetchedMasaks.data.results);
                setMasaksReady(true);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMasaks();
    }, []);

    useEffect(() => {
        if (!masaksReady) return;
        const sortMasaks = (type) => {
            if (type === 'asc') {
                const sorted = [...masaks].sort((a, b) => a.vote_average - b.vote_average);
                setMasaks(sorted);
            }
            if (type === 'desc') {
                const sorted = [...masaks].sort((a, b) => b.vote_average - a.vote_average);
                setMasaks(sorted);
            }
        }

        sortMasaks(queryParams.get('sort'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams, masaksReady]);
    
    useEffect(() => {
        const nextPage = queryParams.get('page');
        console.log(nextPage);

        //ada logic untuk ngefetch masaks dengan page=2
        //ada logic untuk update statenya dengan masaks berikutnya
    }, [queryParams]);

    const setSortParam = (type) => {
        queryParams.set("sort", type);
        setQueryParams(queryParams);
    }
    
    const setNextPage = (page) => {
        queryParams.set("page", page);
        setQueryParams(queryParams);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
        }}>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                Sort by Rating
                <Button
                    variant="contained"
                    sx={{ ml: 2 }}
                    onClick={() => setSortParam("asc")}
                >
                    Asc
                </Button>
                <Button
                    variant="contained"
                    sx={{ ml: 2, mr: 2 }}
                    onClick={() => setSortParam("desc")}
                >
                    Desc
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {
                    masaks.map(masak => (
                        <MasakCard key={masak.title} masak={masak}></MasakCard>
                    ))
                }
            </Box>
            <Button
                    variant="contained"
                    sx={{ ml: 2, mr: 2 }}
                    onClick={() => setNextPage("2")}
                >
                    Lebih Lanjut
                </Button>
            <div >Dibuat Oleh Fauzi</div>
        </Box>
    );
}

export default MasakList;
