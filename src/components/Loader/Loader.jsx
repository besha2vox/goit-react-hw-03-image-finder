import { LoaderWrapper } from './Loader.styled';
import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </LoaderWrapper>
  );
};

export default Loader;
