import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Controller, useForm, Control, FieldErrors } from 'react-hook-form';
import { COLORS } from 'constants/color';
import { Search } from 'lucide-react-native';
import * as Icons from 'lucide-react-native';

type Props<T> = {
  title: keyof T;
  label: string;
  placeHolder: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'number-pad';
  icon: string;
  padding?: number;
};

const InputBox = ({ title, placeHolder, control, errors, keyboardType = 'default', padding = 30 }: Props) => {
  return (
    <View style={{ marginVertical: padding, width: '100%' }}>
      <Controller
        control={control}
        name={title}
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <Search size={22} color="#026672" style={{ marginRight: 8 }} />
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

export default InputBox;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'PoppinsRegular',
    backgroundColor: '#fff',
    color: '#000',
  },
  error: {
    color: 'red',
    marginTop: -8,
    marginBottom: 12,
  },
});
