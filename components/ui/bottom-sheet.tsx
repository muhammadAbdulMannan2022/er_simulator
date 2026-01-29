import { Ionicons } from "@expo/vector-icons";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import { RNText } from "./text";
import { COLORS } from "constants/color";

interface FilterBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  options: string[];
  title: string;
  onSelect: (option: string) => void;
  selectedValue?: string;
}

const BottomSheet = ({
  visible,
  onClose,
  options,
  title,
  onSelect,
  selectedValue,
}: FilterBottomSheetProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.content}>
          <View style={styles.header}>
            <RNText variant="header" size="lg">
              {title}
            </RNText>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.optionsList}
            showsVerticalScrollIndicator={false}
          >
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionItem,
                  selectedValue === option && styles.selectedOptionItem,
                ]}
                onPress={() => onSelect(option)}
              >
                <RNText
                  variant="medium"
                  size="base"
                  style={[
                    styles.optionText,
                    selectedValue === option && styles.selectedOptionText,
                  ]}
                >
                  {option}
                </RNText>
                {selectedValue === option && (
                  <Ionicons name="checkmark" size={20} color={COLORS.button} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.bgdeep + 80,
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: COLORS.button,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "70%",
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
  },
  closeBtn: {
    padding: 5,
  },
  optionsList: {
    paddingHorizontal: 20,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  selectedOptionItem: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  optionText: {
    color: "#333",
  },
  selectedOptionText: {
    color: COLORS.button,
    fontWeight: "600",
  },
});

export default BottomSheet;
