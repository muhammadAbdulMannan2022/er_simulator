import Layout from 'components/layout';
import * as React from 'react';
import { Text } from 'react-native';
import * as TogglePrimitive from '@rn-primitives/toggle';

export default function Index() {
  const [isActive, setIsActive] = React.useState(true);
  return (
    <Layout>
      <TogglePrimitive.Root pressed={isActive} onPressedChange={setIsActive}></TogglePrimitive.Root>
    </Layout>
  );
}
