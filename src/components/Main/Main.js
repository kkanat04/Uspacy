import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import MyStack from '../../modules/navigation/Stack';
import TabToken from '../../modules/navigation/TabToken';
import { getItem } from '../../api/storage';

function Main() {
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(user).length) {
      dispatch(getItem());
    }
  }, [user]);

  return (
    <NavigationContainer>
      {Object.keys(user).length ? <TabToken /> : <MyStack />}
    </NavigationContainer>
  );
}

export default Main;
