import React from 'react'
import '../css/SkillPage.css'
export default function SkillPage() {
  return (
    <>
      {/* <hr className='PageBorder' /> */}
      <div className='Container' id='SkillPageMainContainer'>
        <div className="BackgroundClip" id="TitleSkillPage">
          SKILLS PAGE
        </div>
        <div className="BackgroundClip">
        I enjoy working with and have experiencing in using an array[] of technologies that help me solve different problems with quality and efficiency.
        </div>
        <div className="SkillBox">
          <div id="React">
            <img src="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" alt="ReactImg" />
            <h1>REACT</h1>
          </div>
          <div id="CPP">
            <img src="https://raw.githubusercontent.com/github/explore/180320cffc25f4ed1bbdfd33d4db3a66eeeeb358/topics/cpp/cpp.png" alt="CPP" />
            <h1>C++</h1>
          </div>
          <div id="Python">
            <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" alt="Python" />
            <h1>PYTHON</h1>
          </div>
          <div id="Javascript">
            <img src="https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667" alt="Javascript" />
            <h1>JAVASCRIPT</h1>
          </div>
          <div id="HTML">
            <img src="https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667" alt="HTML" />
            <h1>HTML</h1>
          </div>
          <div id="CSS">
            <img src="https://camo.githubusercontent.com/76cbf1a11cee8ff59d0649b61c632256e8deb569aee75ae0c4bfe7312b4366aa/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f362f36322f435353335f6c6f676f2e7376672f37363870782d435353335f6c6f676f2e7376672e706e673f3230323130373035323132383137" alt="CSS" />
            <h1>CSS</h1>
          </div>
          <div id="GIT">
            <img src="https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667" alt="GIT" />
            <h1>GIT</h1>
          </div>
          <div id="Github">
            <img src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png" alt="Github" />
            <h1>GITHUB</h1>
          </div>
          <div id="NodeJS">
            <img src="https://camo.githubusercontent.com/900baefb89e187c8b32cdbb3b440d1502fe8f30a1a335cc5dc5868af0142f8b1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667" alt="NodeJS" />
            <h1>NODE JS</h1>
          </div>
        </div>
        <div className="BackgroundClip" id='Platform'>
          These are platforms that I have used before and am comfortabe in using
        </div>
        <div className="SkillBox" id='Platforms'>
          <div id="windows10">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png" alt="Windows10" />
            <h1>WINDOWS 10</h1>
          </div>
          <div id="linux">
            <img src="https://raw.githubusercontent.com/SILICON-HAWK/SILICON-HAWK/main/imageSource/linux%20logo.png" alt="Linux" id='Linux' />
            <h1>LINUX</h1>
          </div>
        </div>
      </div>
    </>
  )
}
