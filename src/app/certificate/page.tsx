/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoIosAdd } from 'react-icons/io'

export default function CertificatePage() {
    const [certificateData, setCertificateData] = useState<any[]>([]);

    const fetchCertificateData = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/certificates`);
            const project = res.data;

            setCertificateData(project);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchCertificateData();
    }, []);

    return (
        <div>
            <div className="mb-6">
                <div className='my-2'>
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            Certificate
                        </span>
                        <p>Management</p>
                    </h1>
                </div>
                <p>Manajemen sertifikat yang telah didapatkan</p>
            </div>
            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <button type="button" className="mb-2 flex gap-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <IoIosAdd size={20} />
                        <p>Add New Data</p>
                    </button>
                    {certificateData.length > 0 ? (
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Issuer
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Image URL
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Certificate Link
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {certificateData.map((item, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.title}
                                        </th>
                                        <td className="px-6 py-4">{item.issuer}</td>
                                        <td className="px-6 py-4">
                                            <Link href={item.image_url}>
                                                {item.image_url}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={item.certificate_link}>
                                                {item.certificate_link}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md">
                            <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">
                                Belum ada data
                            </p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition">
                                Tambah Data
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
