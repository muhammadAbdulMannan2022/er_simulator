import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import Hat from '../../../assets/svgs/hat.svg';
import { Bookmark, Play, Plus, Save, X } from 'lucide-react-native';
import NewImprovement from 'components/ui/newimprovement';
import SavedImprovement from 'components/ui/savedimprovement';
import { useRouter } from 'expo-router';
import { Input } from 'components/input';
import Camera from '../../../assets/svgs/camera.svg';
import CardWithBar from 'components/ui/cardwithbar';
import ProgressCard from 'components/ui/progresscard';

const MyPlan = () => {
  const router = useRouter();
  const [completed, setCompleted] = useState(true);
  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          My Simulations
        </Text>
        {/* <View style={{ position: 'absolute', top: 0, left: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#82A4A5',
              borderWidth: 1,
              borderColor: COLORS.deep,
              borderRadius: 40,
              padding: 3,
            }}>
            <X size={35} color={'#fff'} />
          </TouchableOpacity>
        </View> */}
      </View>

      <View style={{ width: '92%', marginHorizontal: 'auto', marginTop: 50, gap: 20 }}>
        <ProgressCard serial={1} complete={completed} />
        <ProgressCard serial={2} complete={false} />
        <ProgressCard serial={3} complete={completed} />
        <ProgressCard serial={4} complete={false} />
        <ProgressCard serial={5} complete={completed} />
      </View>
    </Layout>
  );
};

export default MyPlan;
