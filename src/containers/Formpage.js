import React from "react";
import { connect } from "react-redux";
import {
    Button, Form, FormGroup, Label, Input, FormFeedback, Container, InputGroupAddon, InputGroup, InputGroupText, DropdownItem, NavbarText, navs
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";


const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Lütfen isim ve soyisminizi giriniz ! bu alan boş geçilemez!"),
    email: Yup.string().required("Lütfen geçerli bir e-mail giriniz.").email("Geçerli e-mail giriniz."),
    phone: Yup.string().matches(phoneRegExp, "Telefon numarası şeklinde giriniz(Ör: 537 2632462)"),
    url: Yup.string().url("Lütfen geçerli bir url giriniz")


});

const AddBookForm = (props) => {
    return (
        <div>
            <Container>

                <h3 style={{ textAlign: "center" }}> FORM TASARIMI</h3>
                <br />

                <Formik
                    initialValues={{
                        name: "",
                        phone: "",
                        url: "",
                        email: "",
                        radio1:null,
                        checkbox: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        setSubmitting(false);
                        alert("Form Gönderildi.");
                        resetForm({});


                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        resetForm,
                        isSubmitting,

                        /* and other goodies */
                    }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="name">İsim Soyisim</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="İsim Soyisim"
                                        value={values.name}
                                        onChange={handleChange}
                                        invalid={errors.name}
                                    />
                                    {
                                        errors.name && <FormFeedback>{errors.name}</FormFeedback>
                                    }
                                </FormGroup>

                                <FormGroup>
                                    <Label for="email">E-mail Giriniz.</Label>
                                    <Input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="E-mail Giriniz"
                                        value={values.email}
                                        onChange={handleChange}
                                        invalid={errors.email}

                                    />
                                    {
                                        errors.email && <FormFeedback>{errors.email}</FormFeedback>
                                    }
                                </FormGroup>

                                <FormGroup>
                                    <Label for="phone">Telefon Numarası</Label>
                                    <Input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Telefon numarası giriniz."
                                        value={values.phone}
                                        onChange={handleChange}
                                        invalid={errors.phone}
                                    />
                                    {
                                        errors.phone && <FormFeedback>{errors.phone}</FormFeedback>
                                    }
                                </FormGroup>




                                <FormGroup>
                                    <Label for="url">Web Url Giriniz</Label>
                                    <Input
                                        type="url"
                                        name="url"
                                        id="url"
                                        placeholder="Web Url Giriniz ."
                                        value={values.url}
                                        invalid={errors.url}
                                        onChange={handleChange}
                                    />
                                    {
                                        errors.url && <FormFeedback>{errors.url}</FormFeedback>
                                    }
                                </FormGroup>








                                <FormGroup tag="fieldset">
                                    <Label for="radio1">Size ulaşmak için günün en iyi zamanı ne zaman?</Label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input 
                                            type="radio"
                                             name="radio1"
                                             id="radio1"
                                             value={values.radio1}
                                             onChange={handleChange}

                                             />
                    Sabah          </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio"
                                             name="radio1"
                                                id="radio1"
                                             value={values.radio1}
                                             onChange={handleChange}
                                             
                                             
                                             
                                             />
                        Akşam          </Label>
                                    </FormGroup>

                                </FormGroup>
                                <Label for="url">E-posta bültenimizi almak ister misiniz?</Label>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" 
                                           name="checkbox"
                                           id="checkbox"
                                        value={values.checkbox}
                                        onChange={handleChange}
                                        invalid={errors.checkbox}
                                        
                                        
                                        
                                        
                                        
                                        />
                    Elbette!
                  </Label>
                                </FormGroup>

                                <br />

                                <Button color="warning">Tamam!</Button>


                            </Form>
                        )}
                </Formik>

            </Container>

        </div>
    );
};



export default (AddBookForm);
