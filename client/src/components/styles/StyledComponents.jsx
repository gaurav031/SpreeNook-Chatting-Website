import { styled } from '@mui/material';
import { Link as Linkcomponent} from 'react-router-dom';
import { greyColor } from '../../constants/color';

export const VisuallyHiddenInput = styled('input')({
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    overflow:'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
    padding:0
});

export const Link = styled(Linkcomponent) `
  text-decoration: none;
  color:black;
  padding: 1rem;
  &:hover {
  background-color: rgba(0,0,0,0.1);
  }
`;
export const InputBox = styled("input")`
 width:100%;
 height:100%;
 border:none;
 outline:none;
 padding: 0 3rem;
 border-radius:1.5rem;
 background-color:${greyColor};

`;