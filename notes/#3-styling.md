# Styling
- StyleProperties
- OrganizingStyle
- PlatformSpesificStyle
- Icons

1. StyleProperties
   - Border 
        - BorderWidth: number 
            (BorderLeft, BorderRight, BorderTop, BorderBottom)
        - BorderColor: string
        - BorderRadius: number 
            (BorderRadiusTopLeft, BorderRadiusTopRight, BorderRadiusBottomLeft, BorderRadiusBottomRight)
   - Shadows (IOS)
        - ShadowColor: string
        - ShadowOffset: { width: number, height: number} 
        - ShadowOpacity: number
        - ShadowRadius: number
    (Android)
        - Elevation: number
   - Text Styling
        - FontFamily: string
        - FontStyle: string
        - FontSize: 20
        - FontWeight: string
        - Color: string
        - TextTransform: string
        - TextAlign: string
        - LineHeight: number
   - Icons
        @expo/vector-icons  => <Sozial name='facebook' size:{30} color:'blue' />
   - FlatformSpesific
        Platform.select({
            ios: {
                stylehere
            },
            android: {
                stylehere
            }
        })
    - CustomButton
        <TouchablesOpacity styles={{backgroundColor: colors[color]}} onPress={onPress}>
            <Text> {title} </Text/>
        </TouchablesOpacity/>