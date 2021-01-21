import React from 'react';
import gambar from '../../assets/images/me2020.jpg';
import bintang from '../../assets/images/bintang.png';
import '../../assets/css/about.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { GitlabFilled, InstagramFilled , GithubFilled, LinkedinFilled } from '@ant-design/icons';

function AboutMe() {
        return (
            <div className='container'>
                <div className='kotak'>
                <div className='gambar'>
                  <img src={bintang} id='bintang' alt='bintang' /><br/>
                  <img src={gambar} id='foto' alt='foto' /><br/>
                  <img src={bintang} id='bintang' alt='bintang'/><br/>
                </div>
                <div className='bio'>
                  <h2>Rantika Ayuning Dewi</h2>
                  <h4>Cilacap, Central Java</h4>
                  <br/>
                  <p id='p1'>Skills</p>
                  <p id='p2'>HTML5, CSS3, Javascript ES6, ReactJS, Git</p>
                  <p id='p3'>Hobby</p>
                  <p id='p4'>Work out and Watch Youtube</p>
                </div>
                <div>
                  <Button type='dashed' href='https://github.com/Rantikaayuning'><GithubFilled /></Button>
                  <Button type='dashed' href='https://gitlab.com/Rantikaayuning'><GitlabFilled /></Button>
                  <Button type='dashed' href='https://www.instagram.com/rantikaayuning/'><InstagramFilled /></Button>
                  <Button type='dashed' href='https://www.linkedin.com/in/rantika-ayuning-dewi-b96563151/'><LinkedinFilled /></Button>
                </div>
                </div>
            </div>
        )
    }

export default AboutMe;