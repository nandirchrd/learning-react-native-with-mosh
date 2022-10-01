NOTES
- Dimensions
- Device Orientation
- Flexbox
- Absolute & Relative Positioning

1. Dimensions 
   {
    models: "Oppo"
    points: 320x460
    scaleFactor: 2x
    pixels: 640x920
    viewWidth: 150x2=300
   }
   Density - Independent Pixels => PhysicalPixels = Dips x ScaleFactor
   Dimensions.get('screen') => { width: 123, height: 234, scale: 2 }
2. Device Orientation
   We will use library @react-native-community/hooks
   useDeviceOrientation => {landscape: true, potrait: false}
   useDimensions