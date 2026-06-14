import { LoadingScreen } from '@mythic/shared/ui';
import { NexusPortalLogo } from './NexusPortalLogo';
import { NexusLoadingText } from './NexusLoadingText';
import { NexusLoadingProgress } from './NexusLoadingProgress';

interface NexusLoadingScreenProps {
  isVisible?: boolean;
}

export const NexusLoadingScreen = ({ isVisible = true }: NexusLoadingScreenProps) => {
  return (
    <LoadingScreen isVisible={isVisible}>
      <NexusPortalLogo />
      <NexusLoadingText />
      <NexusLoadingProgress />
    </LoadingScreen>
  );
};
