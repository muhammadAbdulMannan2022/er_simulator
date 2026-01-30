import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RNText } from "./text";

interface SimPack {
  id: string;
  count: number;
  price: string;
  oldPrice?: string;
}

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (pack: SimPack) => void;
}

const SIM_PACKS: SimPack[] = [
  { id: "5", count: 5, price: "$9.99", oldPrice: "$12.99" },
  { id: "20", count: 20, price: "$22.99" },
];

const AddSimPackModal = ({ visible, onClose, onSelect }: Props) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.card}>
          {/* Close */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={18} color="#fff" />
          </TouchableOpacity>

          <View >
          {/* Title */}
          <RNText variant="header" size="lg" style={styles.title}>
            Add Sim Packs Anytime
          </RNText>

          <RNText size="sm" style={styles.subtitle}>
            Purchase Extra Sim Experiences For The Current Month Whenever You
            Need Them.
          </RNText>

          {/* Packs */}
          <View style={styles.packRow}>
            {SIM_PACKS.map((pack) => (
               <TouchableOpacity
               key={pack.id}
               style={[
                  styles.packCard,
                  pack.id === "20" && styles.activePack,
               ]}
               onPress={() => onSelect(pack)}
               >
                <RNText size="xl" style={styles.packCount}>
                  +{pack.count}
                </RNText>

                <View style={styles.priceRow}>
                  {pack.oldPrice && (
                     <RNText size="xs" style={styles.oldPrice}>
                      {pack.oldPrice}
                    </RNText>
                  )}
                  <RNText size="sm" style={styles.price}>
                    {pack.price}
                  </RNText>
                </View>

                <RNText size="xs" style={styles.packDesc}>
                  Add {pack.count} Extra Sim Experiences
                </RNText>
              </TouchableOpacity>
            ))}
          </View>
            </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default AddSimPackModal;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#0E3B42",
    borderRadius: 20,
    padding: 20,
  },
  closeBtn: {
    position: "absolute",
    right: 14,
    top: 14,
    padding: 6,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: "#fff"
  },
  title: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 36,
    textAlign: "center"
  },
  subtitle: {
    color: "#BFD9DD",
    marginBottom: 20,
    textAlign: "center"
  },
  packRow: {
    flexDirection: "row",
    gap: 12,
  },
  packCard: {
    flex: 1,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#2C5E65",
  },
  activePack: {
    backgroundColor: "#0FA4AF",
    borderColor: "#0FA4AF",
  },
  packCount: {
    color: "#fff",
    fontWeight: "700",
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#FFB4A2",
  },
  price: {
    color: "#fff",
    fontWeight: "600",
  },
  packDesc: {
    color: "#D7F3F6",
  },
});
