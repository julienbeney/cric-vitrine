import { useMediaQuery } from "@uidotdev/usehooks";

const useDevice = () => {
    const isMobile = useMediaQuery("(max-width : 767px)");
    const isTablet = useMediaQuery(
      "(min-width : 768px) and (max-width : 1024px)"
    );
    const isDesktop = useMediaQuery(
      "(min-width : 1025px) and (max-width : 2379px)"
    );
    const isDesktopLarge = useMediaQuery("(min-width : 2380px)");
  
    return { isMobile, isTablet, isDesktop, isDesktopLarge };
  };
  
  export default useDevice;