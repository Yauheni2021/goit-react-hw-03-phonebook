import { PropTypes } from "prop-types";
import {
    FilterInput,
} from './Filter.styled';
import { Formik, Form, Label } from "formik";
import * as yup from 'yup'; 

const schema = yup.object().shape({
    name: yup.string().required(),

})

export const Filter = ({ title, value, filterText }) => {
    return (
        <Formik validationSchema={schema}>
            <Form autoComplete="off">
                <Label htmlFor="filter">
                    {title}
                    <FilterInput
                        type="text"
                        name="filter"
                        value={value}
                        onChange={filterText}
                    />
                </Label>
            </Form>
        </Formik>
    );
};

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    filterText: PropTypes.func.isRequired,
};