import { RotatingTriangles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingTriangles />
    </LoaderContainer>
  );
};
