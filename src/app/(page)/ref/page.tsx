import Image from 'next/image';

import { Github, Mail, Tistory } from '../../../../public/svgs';

import '../../../styles/page.scss';

export default function RefPage() {
    return (
      <div className="refContainer">
        <div className="contentsContainer">
          <div className="refItem">
            <Image style={{marginBottom: '23px'}} src={Mail} alt="mail" width={40}/>
            <span className="item">baehayoung0214@gmail.com</span>
          </div>
          <div className="refItem">
            <Image style={{marginBottom: '15px'}} src={Github} alt="github" width={39}/>
            <a href="https://github.com/baehayoung" className="item">Develop Github</a>
            <a href="https://github.com/5ha0/fortools" className="item">Fortools project - 보안 관련 Git</a>
          </div>
          <div className="refItem">
            <Image style={{marginBottom: '25px'}} src={Tistory} alt="tistory" width={30}/>
            <a href="https://bongstudy.tistory.com/">Baeha Develop Blog</a>
            <a href="https://bonggang.tistory.com/"> Security Blog</a>
          </div>
        </div>
      </div>
    )
  }
  