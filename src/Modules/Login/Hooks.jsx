import React from "react";
import {useNavigate} from "react-router-dom";

const useLoginHook = () => {
  const navigation = useNavigate();

  const navigateToSignup = () => {
    navigation.navigate('/signup')
  };
  return {
    navigateToSignup
  };
};

export default useLoginHook;
