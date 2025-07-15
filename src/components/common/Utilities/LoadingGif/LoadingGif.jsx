// src/components/common/Utilities/LoadingGif/LoadingGif.jsx
import loadingGif from '../../../../assets/loading.gif'; // Ajusta esta ruta si es necesario

import { StyledLoadingGifWrapper, StyledLoadingImage } from './StyledLoadingGif';

function LoadingGif() {
  return (
    <StyledLoadingGifWrapper>
      <StyledLoadingImage src={loadingGif} alt="Cargando..." />
    </StyledLoadingGifWrapper>
  );
}

export default LoadingGif;
