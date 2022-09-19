import { useEffect, useState } from 'react';

const useGetWindowSize = () => {
  const [liveWidth, setLiveWidth] = useState(window.innerWidth);

  useEffect(() => {
    const detectBrowserSizeChange = () => {
      setLiveWidth(window.innerWidth);
    };

    window.addEventListener('resize', detectBrowserSizeChange);
  }, [liveWidth]);
  return liveWidth;
};

export default useGetWindowSize;
