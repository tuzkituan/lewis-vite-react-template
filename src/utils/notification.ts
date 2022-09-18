import { useEffect, useState } from 'react';

import { useToast } from '@chakra-ui/react';

const useToastHook = () => {
  const [state, setState] = useState<any>();

  const toast = useToast();

  useEffect(() => {
    if (state) {
      toast({
        title: state?.title,
        description: state?.description,
        status: state?.status || 'info',
        duration: 5000,
        position: 'bottom-right',
        isClosable: true,
      });
    }
  }, [state, toast]);

  return [state, setState];
};

export default useToastHook;
