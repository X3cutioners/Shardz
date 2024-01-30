import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SideBar } from '../Components/SideBar'
import { Directory } from '../Components/Directory'
import { Image } from '../Components/Image'
import { Archive } from '../Components/Archive'
import NavBar from '../Components/NavBar'
import { useSessionStorage } from 'react-storage-complete'
export const SharedFiles = () => {
  const [accessToken] = useSessionStorage('access_token', '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);
  if (accessToken) {
    return (
      <>
        <header><NavBar pageTitle="Shared Files" /></header>
        <div className='w-screen flex flex-row'>
          <SideBar />
          <div className="grid grid-flow-col gap-4">
            <Directory name="Documents" />
            <Directory name="Downloads" />
            <Directory name="Pictures" />
            <Directory name="Videos" />
            <Image name="file.txt" />
            <Image name="file.txt" />
            <Archive name="worker.js.zip" />
          </div>
        </div>
      </>
    )
  }
}
