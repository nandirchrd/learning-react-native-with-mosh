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
3. Flexbox
   flex-direction: 'row' | 'col' (X, Y)
   align
   align-content: 'start' | 'center' | 'end'
   justify-content: 'start' | 'center' | 'end' | 'space-evenly' | 'space-around' | 'space-between' (MAIN)
   align-items: 'start' | 'center' | 'end' | 'space-evenly' | 'space-around' | 'space-between' | 'stretch' | 'baseline' (SECONDARY)
   flex-wrap: 'wrap' | 'nowrap' | 'wrap-reverse'
   <!-- ITEMS -->
   align-self: 'flex-start' | 'flex-end' | 'stretch'
   flex-basis: 100 (Height or Width)
   flex-grow: 1 (Fit-content)
   flex-shrink: 2 (Almost same like grow)