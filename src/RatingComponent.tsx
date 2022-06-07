import React, { useState } from "react";
import { Stack, Fab, SvgIcon, Avatar, Grid } from '@mui/material';
// import { ReactComponent as StarIcon } from './images/icon-star.svg';

const StarIcon = () => {
    return (
        <SvgIcon>
            <path width={17} height={16} fill="#FC7614" d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"/>

        </SvgIcon>
    )
}

const RatingComponent: React.FC = () => {
    const [hovered, setHovered] = useState<boolean>(false);
    const handleHoverEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = 'orange';
        setHovered(() => true);
    }
    const handleHoverLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = '#262F38';
        setHovered(() => false);
    }
    const dots = [1, 2, 3, 4, 5].map((number) =>
        <Fab key={number.toString()}
            style={{ backgroundColor: '#262f38' }}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}>{number}</Fab>
    );

    return (
        <div className="ratingComponent">
            <Avatar sx={{ bgcolor: '#262F38' }} >
                <SvgIcon component={StarIcon} />
            </Avatar>
            <h2>How did we do?</h2>
            <p>
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>
            <Stack direction="row" spacing={2} justifyContent='center'>
                {dots}
            </Stack>
            <Grid container sx={{ paddingTop: 5}}>
                <Grid item xs={12}>
                    <Fab variant="extended" sx={{ width: '100%' }}>
                        Submit
                    </Fab>
                </Grid>
            </Grid>

        </div>
    )
}

export default RatingComponent;