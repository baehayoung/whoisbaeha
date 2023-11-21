import Image from 'next/image'

import profileImgFirst from '../../public/images/profileImg1.jpg';
import '../styles/page.scss';

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="imgContainer">
        <Image src={profileImgFirst} alt="profileImg" fill objectFit="contain" />
      </div>
      <div className="firstPparagraph">
        <h2>안녕하세요.</h2>
        <h1>프론트엔드 개발자 배하입니다.</h1>
        <h2>만든 것을 바로바로 눈으로 확인하는 것이 좋아서 FE 개발을 시작했습니다</h2>
        <h2>다양한 피드백을 받고,그 피드백을 바탕으로 성장하는 그런 개발자가 되고싶습니다.</h2>
      </div>
    </div>
  )
}
