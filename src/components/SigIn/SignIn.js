import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { classname } from '../../styles/styles';
import { post, setToken } from '../../modules/axios/query';
import { setItem } from '../../api/storage';

function SignIn() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const [err, setErr] = useState('');

  const edit = (prop, val) => {
    setErr('');
    setData({ ...data, [prop]: val });
  };

  const signIn = () => {
    dispatch(
      post(
        'auth',
        data,
        (res) => {
          setToken(res.jwt);
          setItem(res);
        },
        (err) => setErr(err?.response?.data || err),
      ),
    );
  };

  return (
    <View style={classname.sigIn}>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => {
          edit('email', text);
        }}
      />

      <TextInput
        placeholder="Password"
        onChangeText={(text) => {
          edit('password', text);
        }}
      />

      {err !== '' && (
        <Text style={classname.errorText}>
          {err?.email || err?.password || err?.message}
        </Text>
      )}

      <TouchableOpacity onPress={signIn}>
        <Text>SigIn</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignIn;
