import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStoreContext } from '../../utils/GlobalState';
import useStyles from './styles';

const content = [
    {title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum. Tempus iaculis urna id volutpat lacus. Massa vitae tortor condimentum lacinia quis. Ut consequat semper viverra nam libero. Vestibulum sed arcu non odio. Nisl purus in mollis nunc sed id semper. Aliquam vestibulum morbi blandit cursus. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Ac tortor dignissim convallis aenean et tortor. Eu sem integer vitae justo eget magna fermentum. Tristique senectus et netus et malesuada fames. Imperdiet sed euismod nisi porta. Porttitor eget dolor morbi non arcu. Etiam tempor orci eu lobortis.'},
    {title: 'In fermentum', content: 'In fermentum et sollicitudin ac. Vitae ultricies leo integer malesuada nunc vel risus commodo. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Facilisis leo vel fringilla est ullamcorper eget. Mattis enim ut tellus elementum sagittis vitae et leo. At imperdiet dui accumsan sit. Egestas dui id ornare arcu odio ut. At varius vel pharetra vel turpis nunc eget. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ut faucibus pulvinar elementum integer enim neque. Consequat nisl vel pretium lectus quam id.'},
    {title: 'Nunc scelerisque', content: 'Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Vestibulum sed arcu non odio euismod lacinia. Sed sed risus pretium quam vulputate dignissim suspendisse in. Faucibus pulvinar elementum integer enim. Varius vel pharetra vel turpis nunc. Arcu cursus vitae congue mauris rhoncus aenean. Non odio euismod lacinia at quis risus sed vulputate odio. Nulla pharetra diam sit amet nisl. Tempus iaculis urna id volutpat lacus. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nibh mauris cursus mattis molestie. Nulla pellentesque dignissim enim sit. Sit amet nisl purus in. Enim neque volutpat ac tincidunt. Nunc vel risus commodo viverra maecenas accumsan lacus. Ridiculus mus mauris vitae ultricies leo.'},
    {title: 'Nisl pretium', content: 'Nisl pretium fusce id velit ut tortor. Et sollicitudin ac orci phasellus egestas tellus rutrum. Nascetur ridiculus mus mauris vitae ultricies. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Sodales ut eu sem integer vitae justo. Phasellus egestas tellus rutrum tellus pellentesque eu. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Cras sed felis eget velit aliquet. Urna cursus eget nunc scelerisque viverra. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum.'},
    {title: 'Feugiat sed', content: 'Feugiat sed lectus vestibulum mattis ullamcorper velit. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Integer enim neque volutpat ac tincidunt vitae semper quis. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Mollis aliquam ut porttitor leo a diam. Mi proin sed libero enim sed faucibus turpis. Eu nisl nunc mi ipsum faucibus vitae aliquet. Vitae auctor eu augue ut lectus arcu bibendum at. Id interdum velit laoreet id donec ultrices tincidunt arcu. Nibh tortor id aliquet lectus proin nibh nisl. Semper quis lectus nulla at. Ut eu sem integer vitae justo eget magna. Ac auctor augue mauris augue neque gravida. Amet tellus cras adipiscing enim eu turpis egestas. Diam vulputate ut pharetra sit amet. Sed id semper risus in hendrerit gravida rutrum.'},
    {title: 'Tristique et', content: 'Tristique et egestas quis ipsum suspendisse ultrices gravida. Sed augue lacus viverra vitae. Lectus proin nibh nisl condimentum. Elit eget gravida cum sociis. Dignissim diam quis enim lobortis scelerisque fermentum. Proin fermentum leo vel orci porta. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Velit laoreet id donec ultrices tincidunt arcu. Vitae semper quis lectus nulla at. Tristique magna sit amet purus gravida quis blandit turpis cursus. Odio eu feugiat pretium nibh. Sollicitudin tempor id eu nisl nunc. Facilisis magna etiam tempor orci eu lobortis. Pharetra diam sit amet nisl suscipit adipiscing. In hac habitasse platea dictumst quisque sagittis purus sit amet. Tellus in metus vulputate eu scelerisque felis imperdiet.'},
    {title: 'Tincidunt nunc', content: 'Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Nec feugiat in fermentum posuere. Pretium quam vulputate dignissim suspendisse in. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Ullamcorper sit amet risus nullam eget felis eget nunc. Scelerisque fermentum dui faucibus in ornare. Sollicitudin ac orci phasellus egestas. Consequat semper viverra nam libero justo laoreet sit amet cursus. Odio ut sem nulla pharetra. Urna molestie at elementum eu facilisis sed odio morbi quis.'},
    {title: 'Justo laoreet', content: 'Justo laoreet sit amet cursus sit. Ac tincidunt vitae semper quis lectus nulla. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Blandit libero volutpat sed cras ornare. Ullamcorper malesuada proin libero nunc consequat interdum. Sapien pellentesque habitant morbi tristique senectus. Gravida in fermentum et sollicitudin ac orci phasellus. Sit amet nisl purus in mollis nunc sed id semper. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Vestibulum lectus mauris ultrices eros in cursus. Eu mi bibendum neque egestas congue quisque. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Viverra vitae congue eu consequat ac felis.'},
    {title: 'Elementum facilisis', content: 'Elementum facilisis leo vel fringilla est. Sit amet risus nullam eget felis eget nunc. Quisque id diam vel quam. Condimentum lacinia quis vel eros donec ac odio tempor. Ipsum nunc aliquet bibendum enim facilisis gravida neque.'},
    {title: 'Ac turpis', content: 'Ac turpis egestas integer eget aliquet nibh. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Aliquam sem et tortor consequat id. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Scelerisque in dictum non consectetur a erat nam at. Commodo viverra maecenas accumsan lacus. Sapien faucibus et molestie ac feugiat sed. Sed arcu non odio euismod lacinia at quis risus. Et netus et malesuada fames. Vitae congue mauris rhoncus aenean vel elit. Rhoncus mattis rhoncus urna neque viverra justo. Nulla at volutpat diam ut. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.'},
    {title: 'In fermentum', content: 'In fermentum et sollicitudin ac. Vitae ultricies leo integer malesuada nunc vel risus commodo. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Facilisis leo vel fringilla est ullamcorper eget. Mattis enim ut tellus elementum sagittis vitae et leo. At imperdiet dui accumsan sit. Egestas dui id ornare arcu odio ut. At varius vel pharetra vel turpis nunc eget. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ut faucibus pulvinar elementum integer enim neque. Consequat nisl vel pretium lectus quam id.'},
];

const Policy = () => {
    const classes = useStyles();

    const [state, ] = useStoreContext();
    const { currentMimicPage } = state;

    return (
        <Container maxWidth='xl' style={{marginTop: '120px', marginBottom: '50px'}}>
            <Grid container direction='column' alignItems='center'>
                <Typography variant='h2'>
                    {currentMimicPage.name}
                </Typography>
            </Grid>
            {content.map((paragraph, index) => (
                <Box key={index}>
                    <Typography variant='subtitle2' style={{fontFamily: 'serif', fontWeight: 'bold'}}>
                        {index + 1}. {paragraph.title}
                    </Typography>
                    <Typography>
                        {paragraph.content}
                    </Typography>
                </Box>
            ))}
     
                
            
        </Container>
    );
};

export default Policy;
