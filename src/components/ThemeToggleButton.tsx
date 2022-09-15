import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react';
import styled, { CreateStyled } from '@emotion/styled';

const transientOptions: Parameters<CreateStyled>[1] = {
  shouldForwardProp: (propName: string) => !propName.startsWith('$'),
};

// PROP TYPES
type ThemeToggleButtonProps = Omit<IconButtonProps, 'aria-label'>;

const iconSize = 20;

const RoundButton = styled(IconButton, transientOptions)`
  & svg {
    width: ${iconSize}px;
    height: ${iconSize}px;
  }
`;

function ThemeToggleButton(props: ThemeToggleButtonProps): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <RoundButton
      $colorMode={colorMode}
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      aria-label={`Activate ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      isRound
      {...props}
    />
  );
}

export default ThemeToggleButton;
