import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail } from '../../modules/axios/query';
import { SET_USER_DETAIL } from '../../modules/redux/slices/usersListSlice';

function UserDetail({ route }) {
  const user = useSelector((state) => state.usersListSlice.userDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetail('userDetail', route.params.id));

    return () => {
      dispatch(SET_USER_DETAIL([]));
    };
  }, []);

  return (
    <View>
      {
        user?.length > 0 ? user?.map((item, index) => (
          <View key={index}>
            {
              Object.keys(item).map((key, index) => (
                typeof item[key] === 'string' ? (
                  <View key={index}>
                    <Text>{`${key}: ${item[key] || 'EMPTY!'}`}</Text>
                  </View>
                )
                  : null
              ))
            }
          </View>
        )) : <ActivityIndicator size="large" color="#000" />
      }
    </View>
  );
}

export default UserDetail;
