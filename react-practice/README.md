Form is a library that helps with froms in react.
Formik is used to
    1. Managing Data
    2. Form submission
    3. Form validation
Formik helps you to deal with forms in scalable and parformant and easy way.

---------------------------------------
Simple form validation (Youtube form)
---------------------------------------
We have 3 field with a submit button
    1. Name
    2. Email
    3. Channel name
In this we are dealing with mainly 3 things
    1. Managing the form state
    2. Handling form submission
    3. Validation and error messages

useFormik Hook: 
    which is a function which takes an object as a parameter, and which returns an object with different varieties of methods and properties.

    This formik hook is use to manage above 3 points.
        1. Managing the form state
        2. Handling form submission
        3. Validation and error messages

----------------------
Managing form state
----------------------

Step 1: We need to track the form fields, so when the value changes in field we need to track that, for this

    1. The first property we pass in useFormik was "initialValues"
    2. initialValues is an object which contains our form fields
    3. Very important: the properties should match with "name" attribute of the corresponding form fields.

Step 2:  We need to add the onchange and the value prop for each of the form field to ensure the form fields are in track with react and formik

    1. Add onChange and value props to each field.
    2. Now pass formik.handleChange on "onChange" method
    3. Same as pass formik.values.name in "value" attribute
    4. By doing that the formik will automatically starts the tracking of form field values

