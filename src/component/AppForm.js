import React from 'react';
import  {StyleSheet  } from 'react-native';
import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage';
import {Formik} from 'formik';
import {useFormikContent} from  'formik';  
function AppForm({name,...otherProps}) {
    const {setFieldTouched, handleChange,errors,touched}=useFormikContent();
    return (
        <>
        <AppTextInput  
        onBlur={()=>setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>

    );
}

export default AppForm;