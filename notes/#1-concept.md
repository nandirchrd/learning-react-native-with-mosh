Core components & Apis
- View
- Text
- Image
- Button
- Touchables
- Alert

1. Text
    numberOfLine = > number
2. Image
    source => { require(sourceImg) } or { {uri: sourceUrl, width: number, height: number } }
    blurRadius => number
    fadeDuration => number
3. Touchables 
    All (TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity)
    Android (TouchableNativeFeedback)
4. Button
   Color => colors
5. Alert
   Alert.alert("The title", "The Body", [
    {text: "Button1", onPress: () => "Button 1 Pressed" }, 
    {text: "Button2", onPress: () => "Button 2 Pressed" }
   ])
   Alert.prompt("The title", "The Message", callback) ONLY WORKS ON IOS
6. Stylesheet
   Stylesheet is for style validation