import { useEffect, useState } from "react";

const useSignUp = () => {
  const [isUserSignedIn, setIsUserSignedInr] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTCEnabled, setISTCEnabled] = useState(false);
  const [error, setError] = useState("");
  const [userList,setUserList]=useState()
  let userData=[]

  const submitSignupHandler = () => {
    if (userName && password && confirmPassword && isTCEnabled) {
      if (
        confirmPassword?.toLowerCase() === password.toLowerCase() &&
        isTCEnabled === true
      ) {
        const userDetails = {};
        userDetails.userName = userName;
        userDetails.password = password;
        userDetails.isTCEnabled = isTCEnabled;
        debugger
        userData.push(userDetails);
        setUserList(userData)
        localStorage.setItem("userData", userData);
        setError("");
      } else {
        setError("password and confirm password are not same");
      }
    } else {
      setError("please fill the all details");
    }
  };

  return {
    setUserName,
    userName,
    setPassword,
    setConfirmPassword,
    isTCEnabled,
    submitSignupHandler,
    setISTCEnabled,
    error,
  };
};

export default useSignUp;
