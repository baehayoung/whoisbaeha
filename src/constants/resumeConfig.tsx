import { experienceProps, projectProps, skillProps } from '@/types/resumeType';
import { Github, cpp, Confluence, CSS, Git, Gitlab, HTML, JS, Jira, NodeJS, Python, React, Redux } from '../../public/svgs';

export const introString = `3년차 웹 프론트엔드 개발자 배하영입니다.
- 저는 이해하고 움직이는 것을 좋아합니다. 프론트엔드 개발자가 되기 전 보안 공부를 하는 과정에서 생긴 습관으로, 구현한 코드와 전달받은 코드들을 이해하고 개발하려 노력합니다.
- 저는 기록하는 것을 좋아합니다. 배운 내용들을 다이어리와 회사 공간에 기록하며 같은 실수를 반복하지 않으려 노력합니다.`

const workList:Array<experienceProps> = [
    {
        title: 'LG전자 HE본부 연구원',
        duration: '2022.02~', 
        description: `webOS TV 내 시스템 앱을 개발, 유지, 보수하는 팀에서 근무하고 있습니다.

주로 React(Enact)를 사용해 개발을 진행하고 있으며, jest와 python 등을 통해 개발한 코드를 테스트하고 있습니다.`
    },
    {
        title: 'LG전자 HE본부 인턴', 
        duration: '2022.01~2022.02', 
        description: `채용연계 인턴활동으로 원격근무를 위한 페이지 제작 프로젝트를 진행했습니다.
프로젝트 주제는 근무하는 팀에서 정해줬지만 그 이후 분석 및 설계, 개발, 테스트 등은 모두 직접 진행했습니다.

본 과정에서 가장 많이 배운 것은 현업 프로세스 및 테스트였습니다.
인턴 기간동안 진행한 내역은 2번의 발표 과정을 통해 공유되었고, 현재 근무하고 있는 회사에 입사할 수 있었습니다. `
    },
];

const educationList:Array<experienceProps> = [
    {
        title: '경북대학교 컴퓨터학부',
        duration: '2015.03~2019.07', 
        description: '컴퓨터학부에서 전공지식을 학습했습니다. 기초 전공 지식 및 다양한 언어들의 기초를 배웠습니다.'
    },  {
        title: '오울루 공과대학(교환학생)', 
        duration: '2018.01~2018.05', 
        description: '컴퓨터 전공으로 교환학생 기간을 지내며 전공지식 및 언어 능력 향상을 위해 학습했습니다.\n(동일 전공에 대해 학습)'
    }, {
        title: '차세대 보안인재 양성 프로그램, Best of the Best', 
        duration: '2019.08~2020.04', 
        description: `보안 관련 지식을 학습하며, 프로젝트를 통해 배운 내용을 응용하고, 심화 과정을 학습했습니다.

좋은 성과를 거둬 미국에서 진행되는 보안 컨퍼런스(RSA)에 참여해 많은 것을 배울 수 있는 좋은 시간이었습니다.`
    }
];
const othersList:Array<experienceProps> = [
    {
        title: '대학교 연계 LG전자 해외 교육형 인턴(인도)', 
        duration: '2018.07', 
        description: `대학교 연계 활동으로 아두이노를 활용해 스마트홈 시스템 구축 프로젝트를 진행했습니다.
        
아두이노를 활용해 스마트홈을, 개인의 스마트폰 앱을 통해 제어 시스템을 구현했으며 제가 맡은 역할은 주로 앱 개발입니다. 앱 개발은 Java를 기반으로 안드로이드 스튜디오를 통해 구현했습니다.`
    }, 
];
export const experiencesList = [workList, educationList, othersList];

const frontEndProjList:Array<projectProps> = [
    {
        title: 'Family Settings App 개발', duration: '2021~', role: '앱 개발 - main owner', link: 'https://youtu.be/xbS3RBpvhNs?si=ZbBuanZj8jRUhnpb',
        description:'TV 사용자가 사용시간설정, 시력/청력 보호 모드, 사용시간 확인 등을 할 수 있는 TV System App입니다.\n', 
        details: [
            '앱 개발 - 제공되는 Enact Framework 활용하여 개발했으며 차트와 같은 미지원 컴포넌트는 직접 구현', 
            '테스트 코드 작성 - jest 기반 unit code와 앱 전체 동작성을 테스트하는 python 테스트 코드 작성',
            '유지 보수 - 변경되는 스펙 및 이슈 관리'
        ], 
        skills: ['Enact(React)', 'Redux', 'Jest', 'nodeJS']
    }, 
    {
        title: 'Settings App 유지 보수 및 변경점 대응', duration: '2021~', role: '앱 개발', link: 'https://youtu.be/0S9QAbR-nzE?si=c3vngPo8mraxYuBe',
        description: 'TV 설정 메뉴로 스펙 관리가 까다롭고 다수의 개발자가 함께 맡고있는 TV System App입니다.\n입사 전 코드 리팩토링을 진행한 덕분에 이해하기 쉬운 구조로 이루어져 있어서 프로젝트의 구조 등을 생각해볼 수 있었던 앱입니다.', 
        details: [
            '유지 보수 - 새로운 기능 코드 추가 개발 및 변경되는 스펙 및 이슈 관리. 복잡한 스펙으로 인해 요구사항이 많은 앱',
            '테스트 코드 작성 - jest 기반 unit code 작성',
        ], 
        skills: ['Enact(React)', 'Redux', 'Jest']
    }, 
    {
        title: 'Game Home App 개발', duration: '2022~', role: '앱 개발', 
        description: '게임 특화 앱으로 게임 실행, input 및 게임 관련 앱 확인 등을 할 수 있는 App입니다.', 
        details: [
            '앱 개발 - 제공되는 Enact Framework 활용하여 개발', 
            '테스트 코드 작성 - jest 기반 unit code와 앱 전체 동작성을 테스트하는 python 테스트 코드 작성',
            '유지 보수 - 변경되는 스펙 및 이슈 관리'
        ], 
        skills: ['Enact(React)', 'Redux', 'Jest']
    }, 
    {
        title: 'First Use App 유지 보수(Network / 약관 등)', duration: '2023~', role: '앱 유지보수', 
        description: '처음 TV를 구입 후 설정을 하는 TV System App입니다.\n다수의 개발자가 함께 개발 중이며 그 중 Network와 약관 앱 주개발자로 일하고 있습니다.', 
        details: [
            '유지 보수 - 변경되는 스펙 및 이슈 관리', 
            '테스트 코드 작성 - 변경된 스펙에 따른 테스트 코드 수정',
        ], 
        skills: ['Enact(React)', 'Redux', 'Jest']
    },
    {
        title: 'Software App App 유지 보수', duration: '2021~', role: '앱 유지보수', 
        description: 'TV 업데이트를 위한 TV System App입니다.\n변경점이 적은 편이며 주로 유지보수를 위한 이슈 개선을 진행했습니다.', 
        details: [
            '유지 보수 - 변경되는 스펙 및 이슈 관리'
        ], 
        skills: ['Enact(React)', 'Redux', 'Jest']
    } 
];
const otherProjList:Array<projectProps> = [
    {
        title: 'Fortools library 개발', duration: '2019.09~2019.12 (3 month)', role: 'PM 및 개발', link: 'https://github.com/5ha0/fortools',
        description: '포렌식을 위한 파이썬 라이브러리입니다.', 
        details: [
            'PM - 프로젝트 관리를 위해 일정, 팀원별 역할, 진행 내역 등 관리',
            '설계 - 기본 프로젝트 구조에 대해 설계',
            '개발 - 파이썬 라이브러리 개발 및 텔레그램 기반 chatbot 구현(현재 운영 중단)'
        ], 
        skills: ['Python']
    }, 
    {
        title: '원격근무 지원 페이지 개발', duration: '2021.01~2021.12 (1 month)', role: '설계 및 개발', 
        description: '인턴 과정에서 진행한 프로젝트로 재택근무 환경을 위해 원격으로 기기에 접속 및 제어할 수 있는 페이지를 개발했습니다.', 
        details: [
            '프로젝트 설계 및 관리 - 프로젝트 진행 관리 (WBS, 요구사항 정의서, 테스트 케이스 등 작성)',
            '개발 - Express 기반 웹서버 생성, 유저UI 페이지 개발, socket.IO 기반 통신, xterm 기반 터미널 제공'
        ], 
        skills: ['nodeJS', 'Express', 'socket.IO']
    }, 
];
export const projectList = [frontEndProjList, otherProjList];

export const frontSkillList = [JS, React, HTML, CSS, Redux];
export const backSkillList = [ NodeJS, Python, cpp];
export const manageSkillList = [Git, Github, Gitlab, Jira, Confluence];