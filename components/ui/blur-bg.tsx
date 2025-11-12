// import { COLORS } from "@/constants";
import { ImageBackground, ImageBackgroundProps, View } from 'react-native';

export function BlurBG({
  style,
  centered,
  ...props
}: ImageBackgroundProps & {
  centered?: boolean;
}) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={[
          {
            flex: 1,
            width: '100%',
            height: '100%',
          },
          style,
        ]}
        {...props}
        source={require('../../assets/images/background1.png')}
        resizeMode="cover"></ImageBackground>
    </View>
  );
}
