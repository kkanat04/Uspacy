import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, AsyncStorage } from "react-native";
import { classname } from "../../styles/styles";
import { Post, setToken } from "../../api/query";
import { storeData } from "../../api/storage";


const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState([]);

  const edit = (prop, val) => {
    setErr("");
    setData({ ...data, [prop]: val });
  };

  const signIn = () => {
    Post("auth", data, (res) => {
        setToken(res.jwt);
        storeData(res.jwt);
      }, (err) => setErr(err?.response?.data),
    );
  };

    return (
      <View style={classname.sigIn}>
        <TextInput placeholder="Email" onChangeText={(text) => {
          edit("email", text);
        }} />

        <TextInput placeholder="Password" onChangeText={(text) => {
          edit("password", text);
        }} />

        {
          err != "" && <Text style={classname.errorText}>{err?.email || err?.password || err?.message}</Text>
        }

        <TouchableOpacity onPress={signIn}>
          <Text>SigIn</Text>
        </TouchableOpacity>
      </View>
    );
  };


  export default SignIn;
