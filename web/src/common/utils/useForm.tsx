import { useState, useEffect } from "react";
import { notification } from "antd";

import axios from "axios";

export const useForm = (validate: any, url: string) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "펀딩 신청 완료",
      description: "함께해 주셔서 감사합니다!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    // const url = "ec2-54-211-11-208.compute-1.amazonaws.com:3000/funding";
    console.log(url)
    console.log(values)

    axios
      .post(url, {
        ...values,
      })
      .then(() => {
        setShouldSubmit(true);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    console.log(values)
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
