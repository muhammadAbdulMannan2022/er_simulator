import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Controller, useForm, Control, FieldErrors } from 'react-hook-form';
import { COLORS } from 'constants/color';
import { Eye, EyeOff} from 'lucide-react-native';
import * as Icons from 'lucide-react-native';
import { ReactNode, useState } from 'react';

type Props<T> = {
  title: keyof T;
  label: string;
  placeHolder: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'number-pad';
  icon?: string;
  password?: boolean;
  svg?: ReactNode;
  rightIcon?: ReactNode;
};

const InputForm = ({
  title,
  label,
  placeHolder,
  control,
  errors,
  keyboardType = 'default',
  icon,
  password = false,
  svg,
  rightIcon
}: Props) => {
  const IconComponent = Icons[icon];
  const [seePass, setSeePass] = useState(true)
  return (
    <View style={{ marginBottom: 10, width: '100%' }}>
      <Text className="font-roboto text-white" style={{ fontSize: 20, marginBottom: 12 }}>
        {label}
      </Text>
      <Controller
        control={control}
        name={title}
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            {svg ? svg :
            <IconComponent size={22} color="#026672" style={{ marginRight: 8 }} />
            }
            <TextInput
              placeholder={placeHolder}
              value={value}
              onChangeText={onChange}
              placeholderTextColor={COLORS.textGray}
              autoCorrect={false}
              autoCapitalize="words"
              spellCheck={false}
              keyboardType={keyboardType}
              style={styles.input}
              secureTextEntry={password ? seePass : false}
            />
            {errors[title] && <Text style={{ color: 'red' }}>{errors[title].message}</Text>}

            { password && <View style={{ right: 20, position: 'absolute'}}>{
               seePass ?
               <TouchableOpacity onPress={() => setSeePass(false)}>
                  <EyeOff color={COLORS.bglight} />
               </TouchableOpacity>

               :<TouchableOpacity onPress={() => setSeePass(true)}>
                  <Eye color={COLORS.bglight} />
               </TouchableOpacity>}
            </View>
            }
            {
               rightIcon && <View style={{ right: 20, position: 'absolute'}}>
                  {rightIcon}
               </View>
            }
          </View>
        )}
      />
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: COLORS.inputBackgroung,
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,

    borderRadius: 10,
    fontSize: 18,

    fontFamily: 'PoppinsRegular',
    backgroundColor: COLORS.inputBackgroung,
    color: 'white',
  },
  error: {
    color: 'red',
    marginTop: -8,
    marginBottom: 12,
  },
});
