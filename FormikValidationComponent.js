import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export default function FormikValidationComponent() {
    return (
        <div className="container-fluid">
            <Formik

                initialValues={
                    {
                        Name: '',
                        Email: '',
                        Age: 0
                    }
                }

                validationSchema={
                    yup.object({
                        Name: yup.string().required('User Name Required').min(4, 'Too Short..').max(10, 'Too Long'),
                        Email: yup.string().required('Email Required').email('Invalid Email'),
                        Age: yup.number().required('Age Required')
                    })
                }

                onSubmit={
                    values => {
                        alert(JSON.stringify(values));
                    }
                }
            >
                
                        <Form>
                           {
                            <div>
                            <dl>
                                <dt>User Name</dt>
                                <dd><Field name='Name' type='text'></Field></dd>
                                <dd className="text-danger"><ErrorMessage name='Name'></ErrorMessage></dd>
                                <dt>Email</dt>
                                <dd><Field name='Email' type='text'></Field></dd>
                                <dd className="text-danger"><ErrorMessage name='Email'></ErrorMessage></dd>
                                <dt>Age</dt>
                                <dd><Field name='Age' type='text'></Field></dd>
                                <dd className="text-danger"><ErrorMessage name='Age'></ErrorMessage></dd>
                            </dl>
                            <button>Submit</button>
                            </div>
                           }
                        </Form>
                    
                
            </Formik>

        </div>
    )
}