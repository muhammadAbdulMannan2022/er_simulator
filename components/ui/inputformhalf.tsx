import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Controller, useForm, Control, FieldErrors } from 'react-hook-form';
import { COLORS } from 'constants/color';
import { Lock, Mail, User, LockKeyhole, ClipboardPlus } from 'lucide-react-native';
import * as Icons from 'lucide-react-native';

type Props<T> = {
  title: keyof T;
  label: string;
  placeHolder: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'number-pad';
  icon: string;
};

const InputFormHalf = ({
  title,
  label,
  placeHolder,
  control,
  errors,
  keyboardType = 'default',
  icon,
}: Props) => {
  const IconComponent = Icons[icon];
  return (
    <View style={{ marginBottom: 10, width: '47.5%' }}>
      <Text className="font-roboto text-white" style={{ fontSize: 20, marginBottom: 12 }}>
        {label}
      </Text>
      <Controller
        control={control}
        name={title}
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <IconComponent size={22} color="#026672" style={{ marginRight: 8 }} />
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
            />
            {errors[title] && <Text style={{ color: 'red' }}>{errors[title].message}</Text>}
          </View>
        )}
      />
    </View>
  );
};

export default InputFormHalf;

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
