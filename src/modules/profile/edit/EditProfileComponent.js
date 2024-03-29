import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import Input from "components/ui/Inputs/Base";
import {formFields} from "modules/profile/edit/constants";
import Button from "components/ui/Button/base";
import classes from './EditProfile.module.scss';


const EditProfileComponent = (
    {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        userData,
        setFieldValue
    }
) => {
    useEffect(() => {
        if (!userData) {
            return;
        }

        {
            setFieldValue('name', userData.name, false)
        }
        {
            setFieldValue('email', userData.email, false)
        }
    }, [userData])

    return (

        <div className={classes.sectionUpdateProfile}>
            <h2 className='text-center mb-4'>
                Update profile
            </h2>
            <form onSubmit={handleSubmit}>
                <Input
                    id={formFields.name}
                    spacing='mb-3'
                    name={formFields.name}
                    type={formFields.name}
                    placeholder={formFields.name}
                    onChange={handleChange}
                    label={formFields.name}
                    value={values.name || ''}
                    error={errors.name ? errors.name : null}
                    errorInput={errors.name && touched.name ? 'errorInput' : null}
                    errorLabel={errors.name && touched.name ? 'errorLabel' : null}
                />
                <Input
                    id={formFields.email}
                    spacing='mb-3'
                    name={formFields.email}
                    type={formFields.email}
                    placeholder={formFields.email}
                    onChange={handleChange}
                    label={formFields.email}
                    value={values.email || ''}
                    error={errors.email ? errors.email : null}
                    errorInput={errors.email && touched.email ? 'errorInput' : null}
                    errorLabel={errors.email && touched.email ? 'errorLabel' : null}
                />

                <Button text='Update form'/>
            </form>
        </div>

    );
};

EditProfileComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object,
    errors: PropTypes.object,
    error: PropTypes.string,
    touched: PropTypes.object,
    userData: PropTypes.object,
};

EditProfileComponent.defaultProps = {
    userData: {},
    errors: {},
    error: '',
};

export default EditProfileComponent;