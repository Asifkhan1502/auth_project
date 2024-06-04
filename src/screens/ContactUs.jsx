import { useState } from "react";
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import { useFormik } from 'formik';
import * as yup from 'yup';


const ContactUs = () => {
    const [data, setData] = useState({});
    const [showModal, setModal] = useState(false)

    let schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        address: yup.string().required(),
        dob: yup.date().required(),
        bio: yup.string().required(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            dob: '',
            bio: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
            setData(values);
            setModal(true)
        },
    });

    return (
        <>
            <div className="flex flex-col items-center gap-8">
                <h2 className="font-bold text-xl">Contact us</h2>
                <form onSubmit={formik.handleSubmit} className="w-[32rem] flex flex-col gap-[2rem]">
                    <div className="flex gap-8">
                        <label className="flex flex-col w-[15rem]">
                            Name:
                            <input type="text" {...formik.getFieldProps('name')}
                                className="rounded-md border border-black-600 outline-none focus:border-2 focus:border-violet-400" />
                            {formik.touched.name && formik.errors.name ? (
                                <span className="text-red-400">{formik.errors.name}</span>
                            ) : null}
                        </label>

                        <label className="flex flex-col w-[15rem]">
                            Email:
                            <input type="email" {...formik.getFieldProps('email')} className="rounded-md border border-black-600 outline-none focus:border-2 focus:border-violet-400" />
                            {formik.touched.email && formik.errors.email ? (
                                <span className="text-red-400">{formik.errors.email}</span>
                            ) : null}
                        </label>
                    </div>

                    <div className="flex gap-8">
                        <label className="flex flex-col w-[15rem]">
                            Address:
                            <input type="text" {...formik.getFieldProps('address')} className="rounded-md border border-black-600 outline-none focus:border-2 focus:border-violet-400" />
                            {formik.touched.address && formik.errors.address ? (
                                <span className="text-red-400">{formik.errors.address}</span>
                            ) : null}
                        </label>

                        <label className="flex flex-col w-[15rem]">
                            Date of Birth:
                            <input type="date" {...formik.getFieldProps('dob')} className="rounded-md border border-black-600 outline-none focus:border-2 focus:border-violet-400" />
                            {formik.touched.dob && formik.errors.dob ? (
                                <span className="text-red-400">{formik.errors.dob}</span>
                            ) : null}
                        </label>
                    </div>

                    <label className="flex flex-col w-full">
                        Bio:
                        <textarea {...formik.getFieldProps('bio')} className="rounded-md border border-black-600 outline-none focus:border-2 focus:border-violet-400" />
                        {formik.touched.bio && formik.errors.bio ? (
                            <span className="text-red-400">{formik.errors.bio}</span>
                        ) : null}
                    </label>

                    <button type="submit" className="rounded-md bg-purple-400 px-6 py-2">Submit</button>
                </form>
            </div>
            {showModal &&
                <div className="absolute w-screen bg-opacity-50 bg-black h-screen lack top-0 left-0 flex items-center justify-center">
                    <div className="relative bg-white rounded-lg p-8 opacity-[1] flex flex-col gap-4">
                        <span className="absolute right-2 top-2 cursor-pointer" onClick={() => setModal(false)}>&#x274c;</span>
                        <label className="font-bold">Name: <span className="font-light">{data.name}</span></label>
                        <label className="font-bold">Email: <span className="font-light">{data.email}</span></label>
                        <label className="font-bold">Address: <span className="font-light">{data.address}</span></label>
                        <label className="font-bold">DOB: <span className="font-light">{data.dob}</span></label>
                        <label className="font-bold">Bio: <span className="font-light">{data.bio}</span></label>
                    </div>
                </div>
            }
        </>
    )
}
export default ContactUs