import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import MyStack from '../../modules/navigation/Stack';
import TabToken from '../../modules/navigation/TabToken';
import { getItem } from '../../api/storage';

function Main() {
  const { token } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(token).length) {
      dispatch(getItem());
    }
  }, [token]);

  return (
    <NavigationContainer>
      {Object.keys(token).length ? <TabToken /> : <MyStack />}
    </NavigationContainer>
  );
}

export default Main;
