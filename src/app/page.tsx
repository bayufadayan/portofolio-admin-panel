'use client'
import CardCount from "@/components/cardCount";
import { MdOutlineAccountCircle, MdOutlineAssignment, MdOutlineBuild, MdOutlineCardMembership, MdOutlineDirectionsRun, MdOutlineSchool, MdOutlineTimeline } from "react-icons/md";
import { IoBriefcaseOutline, IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [counts, setCounts] = useState({
    personalInformation: 0,
    socialMedia: 0,
    jobTitle: 0,
    certificate: 0,
    skill: 0,
    experience: 0,
    activity: 0,
    education: 0,
    project: 0,
  });

  const fetchData = async (endpoint: string, key: string) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);
      setCounts((prev) => ({ ...prev, [key]: res.data.length }));
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
    }
  };

  useEffect(() => {
    fetchData("personal-informations", "personalInformation");
    fetchData("social-medias", "socialMedia");
    fetchData("job-titles", "jobTitle");
    fetchData("certificates", "certificate");
    fetchData("skills", "skill");
    fetchData("experiences", "experience");
    fetchData("activities", "activity");
    fetchData("educations", "education");
    fetchData("projects", "project");
  }, []);

  return (
    <div>
      <div className="mb-6">
        <div>
          <h2 className="font-bold">Selamat Datang di</h2>
          <h1 className="font-bold text-4xl">ADMIN PANEL</h1>
        </div>

        <p className="mt-2">Merupakan halaman admin untuk mengelola data pada website portofolio utama di bayufadayan.my.id</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <CardCount
          title="Personal Information"
          value={counts.personalInformation}
          color="from-red-600 to-red-400 dark:from-red-800 dark:to-red-600"
          url="/personal-information"
          icon={<MdOutlineAccountCircle className="text-white dark:text-gray-200 w-12 h-12" />}
        />
        <CardCount
          title="Social Media"
          value={counts.socialMedia}
          color="from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600"
          url="/social-media"
          icon={<IoShareSocialOutline className="text-white dark:text-gray-200 w-12 h-12" />}
        />
        <CardCount
          title="Job Title"
          value={counts.jobTitle}
          color="from-green-600 to-green-400 dark:from-green-800 dark:to-green-600"
          url="/job-title"
          icon={<IoBriefcaseOutline className="text-white dark:text-gray-200 w-12 h-12" />}
        />
        <CardCount
          title="Project"
          value={counts.project}
          color="from-yellow-600 to-yellow-400 dark:from-yellow-800 dark:to-yellow-600"
          url="/project"
          icon={<MdOutlineAssignment className="text-white dark:text-gray-200 w-12 h-12" />}
        />
        <CardCount
          title="Certificate"
          value={counts.certificate}
          color="from-purple-600 to-purple-400 dark:from-purple-800 dark:to-purple-600"
          url="/certificate"
          icon={<MdOutlineCardMembership className="text-white dark:text-gray-200 w-12 h-12" />}
        />
        <CardCount
          title="Skill"
          value={counts.skill}
          color="from-pink-600 to-pink-400 dark:from-pink-800 dark:to-pink-600"
          url="/skill"
          icon={<MdOutlineBuild className="text-white dark:text-gray-200 w-12 h-12" />}
        />
        <CardCount
          title="Experience"
          value={counts.experience}
          color="from-indigo-600 to-indigo-400 dark:from-indigo-800 dark:to-indigo-600"
          url="/experience"
          icon={<MdOutlineTimeline className="text-white dark:text-gray-200 w-12 h-12" />}
        />
        <CardCount
          title="Activity"
          value={counts.activity}
          color="from-cyan-600 to-cyan-400 dark:from-cyan-800 dark:to-cyan-600"
          url="/activity"
          icon={<MdOutlineDirectionsRun className="text-white dark:text-gray-200 w-12 h-12" />}
        />
        <CardCount
          title="Education"
          value={counts.education}
          color="from-orange-600 to-orange-400 dark:from-orange-800 dark:to-orange-600"
          url="/education"
          icon={<MdOutlineSchool className="text-white dark:text-gray-200 w-12 h-12" />}
        />

      </div>

      <div className="mt-4 flex justify-center md:justify-start w-ful">
        <Link href={"https://bayufadayan.my.id"} target="_blank" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Check My Portofolio
          </span>
        </Link>
      </div>

    </div>
  );
}
