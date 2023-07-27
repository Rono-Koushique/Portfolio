"use client";
import Image from "next/image";
import React from "react";
import backgroundImage from "@/asset/image/mail-bg.jpg";
import HorzAnime from "../_components/extra/HorzAnime";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SmallBtn from "../_components/buttons/SmallBtn";
import FormError from "../_components/forms/FormError";

type Props = {};

export default function MailMe({}: Props) {
    return (
        <section className="relative flex py-36">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image
                    className="object-cover -hue-rotate-15"
                    src={backgroundImage}
                    alt=""
                    fill={true}
                />
            </div>
            <div className="flex flex-col items-center text-center z-10 text-white font-normal w-full px-5 md:px-12 lg:px-14 mg:items-center mg:text-center">
                <h4 className="section-subtitle font-poppins">React Me</h4>
                <h3 className="section-title mt-2 font-arial">Contact</h3>
                <div className="mt-6">
                    <HorzAnime />
                </div>
                <MailForm />
            </div>
        </section>
    );
}

type MailForm = {
    name: string;
    email: string;
    message: string;
};

const initialValues = {
    name: "",
    email: "",
    message: "",
};

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must not exceed 50 characters"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address")
        .max(100, "Email must not exceed 100 characters"),
    message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(500, "Message must not exceed 500 characters"),
});

const handleSubmit = (values: MailForm) => {
    console.log(values);
};

function MailForm() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="bg-neutral-900 rounded-lg mg:rounded-2xl shadow-2xl shadow-black px-5 py-7 lg:p-10 w-full max-w-screen-xl mt-12 flex flex-col gap-8">
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Your Name"
                    />
                    <ErrorMessage name="name" component={FormError} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    <ErrorMessage name="email" component={FormError} />
                </div>
                <div className="form-control">
                    <label htmlFor="message">Message</label>
                    <Field
                        as="textarea"
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Enter Your Message"
                    />
                    <ErrorMessage name="message" component={FormError} />
                </div>
                <SmallBtn text="Submit" />
            </Form>
        </Formik>
    );
}
