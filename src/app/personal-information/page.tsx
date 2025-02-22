/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import axios from 'axios';
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";
import React, { useEffect, useState } from 'react'

export default function PersonalInformation() {
    const [projectData, setProjectData] = useState<any[]>([]);

    const fetchProjectData = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/personal-informations`);
            const project = res.data;

            setProjectData(project);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchProjectData();
    }, []);

    return (
        <div>
            <div className="mb-6">
                <div className='my-2'>
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            Personal Information
                        </span>
                        <p>Management</p>
                    </h1>
                </div>
                <p>Manajemen Informasi personal</p>
            </div>

            {projectData.length > 0 ? (
                <div className="flex flex-col md:flex-row gap-4 md:gap-0">
                    <div className='w-full md:w-1/2 flex flex-col gap-4'>
                        <div>
                            <p>Nama Lengkap</p>
                            <h2 className="text-lg md:text-2xl font-bold dark:text-white">{projectData[0].name}</h2>
                        </div>
                        <div>
                            <p>Email</p>
                            <h2 className="text-lg md:text-2xl font-bold dark:text-white">
                                {projectData[0].email}
                            </h2>
                        </div>
                        <div>
                            <p>Nomor Telepon</p>
                            <h2 className="text-lg md:text-2xl font-bold dark:text-white flex gap-2 items-center">
                                <span>(+62) {projectData[0].phone.replace(/^0/, '')}</span>
                                <FiExternalLink className='text-blue-400 cursor-pointer hover:text-blue-700 rounded' />
                            </h2>
                        </div>
                        <div>
                            <p>Profile Image (URL)</p>
                            <h2 className="text-lg md:text-2xl font-bold dark:text-white break-words pe-8">{projectData[0].profile_image}</h2>
                            <div className="mt-4 w-[400px] h-[200px] hidden md:block border-2 border-gray-300 dark:border-gray-600 rounded-xl shadow-md overflow-hidden">
                                <Image
                                    src={projectData[0].profile_image}
                                    width={250}
                                    height={250}
                                    alt="Picture of the author"
                                    className="object-cover w-full h-full rounded-lg "
                                />
                            </div>

                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-4'>
                        <div>
                            <p>Alamat</p>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={projectData[0].address} defaultValue={projectData[0].address} required />
                        </div>
                        <div>
                            <p>Deskripsi</p>
                            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Isi Deskripsi" defaultValue={projectData[0].description}></textarea>
                        </div>
                    </div>
                </div>
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
    )
}
