import Image from 'next/image';

import { Github, Mail, Tistory } from '../../../../public/svgs';

import '../../../styles/page.scss';

export default function RefPage() {
    return (
      <div className="refContainer">
        <table>
          <thead>
            <tr>
                <td><Image src={Mail} alt="mail"/></td>
                <td><Image src={Github} alt="mail"/></td>
                <td><Image src={Tistory} alt="mail"/></td>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>baehayoung0214@gmail.com</td>
              <td><a href="https://github.com/baehayoung">Develop Github</a></td>
              <td><a href="https://bongstudy.tistory.com/">Baeha Develop Blog</a></td>
            </tr>
            <tr>
              <td></td>
              <td><a href="https://github.com/5ha0/fortools">Fortools project - 보안 관련 Git</a></td>
              <td><a href="https://bonggang.tistory.com/"> Security Blog</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  