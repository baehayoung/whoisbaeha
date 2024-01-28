import { itemProps, skillProps } from '@/types/resumeType';
import { Github, cpp, Confluence, CSS, Git, Gitlab, HTML, JS, Jira, NodeJS, Python, React, Redux } from '../../public/svgs';

export const introString = `3년차 웹 프론트엔드 개발자 배하영입니다.
현재 LG전자에서 React로 앱 개발을 담당하고 있습니다. 

프론트엔드는 사용자가 직접적으로 보게 되는 화면을 만드는 만큼 다양한 부분들을 고민하고 개발하는 분야라고 생각합니다.
사용자와 맞닿은 개발이기에 사용자 경험과 일차적으로 연결되며, 빠르게 성장하는 기술인만큼 개발자 역시 함께 빠르게 변화하고 발전해야 하는 분야입니다.

새로운 기술에 적응하고 대응해야 하지만 그만큼 다양한 기술을 사용해볼 수 있고, 사용자 경험을 고려한 섬세한 개발 능력이 필요하지만 그렇기에 결과물을 빠르게 확인할 수 있고 다양한 피드백을 받을 수 있습니다.
이런 부분들이 즐거워 프론트엔드 개발을 시작했습니다.`

const workList: Array<itemProps> = [
    {
        title: 'LG전자 HE본부',
        role: '연구원(프론트엔드 개발자)',
        duration: '2022.02~',
        description: `webOS 기반 스마트 TV 시스템 앱 개발자로 근무`,
        details: ['React(Enact) 기반 앱 개발', 'Family Settings, Game Home 앱 신규 개발', 'Settings, Software Update, First Use 앱 유지 보수 (신규 요구사항 대응 및 이슈 개선)'],
        skills: ['React(Enact)', 'Jest', 'Python']
    },
    {
        title: 'LG전자 HE본부',
        role: '인턴',
        duration: '2022.01~2022.02',
        description: `채용연계 인턴활동으로 원격근무를 위한 페이지 제작 프로젝트를 진행했습니다.
프로젝트 주제를 전달받아 분석 및 설계, 개발, 테스트 등을 진행했습니다.
인턴 기간동안 진행한 내역은 피드백을 통해 디벨롭 되며, 과제 발표를 통해 공유되었습니다. 
본 과정으로 현재 근무하고 있는 회사에 입사할 수 있었습니다.`,
        details: ['Node.js 기반 서버 개발', 'HTML 및 JS 기반 사용자 화면 개발', '현업 프로세스 및 테스트 방법 습득'],
        skills: ['Node.js', 'Express', 'HTML']
    },
];

const educationList: Array<itemProps> = [
    {
        title: '경북대학교 컴퓨터학부',
        duration: '2015.03~2019.07',
        role: '학부 졸업'
    }, {
        title: '오울루 공과대학',
        duration: '2018.01~2018.05',
        role: '교환학생'
    }, {
        title: '차세대 보안인재 양성 프로그램, Best of the Best',
        duration: '2019.08~2020.04',
        role: '교육생',
        // description: '보안 관련 지식을 학습하며, 프로젝트를 통해 배운 내용을 응용하고, 심화 과정을 학습했습니다.'
    }
];
const othersList: Array<itemProps> = [
    {
        title: '대학교 연계 LG전자 해외 교육형 인턴(인도)',
        duration: '2018.07',
        role: '체험형 인턴'
        // description: `대학교 연계 활동으로 아두이노를 활용해 스마트홈 시스템 구축 프로젝트를 진행했습니다. 아두이노를 활용해 스마트홈을, 개인의 스마트폰 앱을 통해 제어 시스템을 구현했으며 제가 맡은 역할은 주로 앱 개발입니다.`,
        // works: ['Java 안드로이드 앱 개발']
    },
];
export const experiencesList = { workList, educationList, othersList };

const frontEndProjList: Array<itemProps> = [
    {
        title: 'Family Settings App 개발', duration: '2021~', role: '앱 개발', link: 'https://youtu.be/xbS3RBpvhNs?si=ZbBuanZj8jRUhnpb',
        description: 'TV 사용자가 사용시간설정, 시력/청력 보호 모드, 사용시간 확인 등을 할 수 있는 TV System App입니다.',
        details: [
            '앱 개발 - 제공되는 Enact Framework 활용하여 개발했으며 차트와 같은 미지원 컴포넌트는 직접 구현',
            '테스트 코드 작성 - jest 기반 unit code와 앱 전체 동작성을 테스트하는 python 테스트 코드 작성',
            '유지 보수 - 변경되는 스펙 및 이슈 관리'
        ],
        skills: ['Enact(React)', 'Jest', 'nodeJS']
    },
    {
        title: 'Settings App 유지 보수', duration: '2021~', role: '앱 개발', link: 'https://youtu.be/0S9QAbR-nzE?si=c3vngPo8mraxYuBe',
        description: 'TV 설정 메뉴로 다수의 개발자가 함께 개발하는 TV System App입니다. 다수의 개발자가 함께 개발하는만큼 유지 보수를 고려한 프로젝트의 구조로 개발되어 협업 및 설계 관련 부분을 생각해볼 수 있었던 앱입니다.',
        details: [
            '신규 기능 대응 - 새로운 기능 추가 개발',
            '유지 보수 - 변경되는 스펙 및 이슈 관리',
            '테스트 코드 작성 - jest 기반 unit code 작성',
        ],
        skills: ['Enact(React)', 'Jest']
    },
    {
        title: 'Game Home App 개발', duration: '2022~', role: '앱 개발',
        description: '게임 특화 앱으로 게임 실행, input 및 게임 관련 앱 확인 등을 할 수 있는 App입니다.',
        details: [
            '앱 개발 - 제공되는 Enact Framework 활용하여 개발',
            '테스트 코드 작성 - jest 기반 unit code와 앱 전체 동작성을 테스트하는 python 테스트 코드 작성',
            '유지 보수 - 변경되는 스펙 및 이슈 관리'
        ],
        skills: ['Enact(React)', 'Jest']
    },
    {
        title: 'First Use App 유지 보수(Network / 약관 등)', duration: '2023~', role: '앱 유지보수',
        description: '처음 TV를 구입 후 설정을 하는 TV System App입니다.\n다수의 개발자가 함께 개발 중이며 그 중 Network와 약관 앱 주개발자로 일하고 있습니다.',
        details: [
            '유지 보수 - 변경되는 스펙 및 이슈 관리',
            '테스트 코드 작성 - 변경된 스펙에 따른 테스트 코드 수정',
        ],
        skills: ['Enact(React)', 'Jest']
    },
    {
        title: 'Software App 유지 보수', duration: '2021~', role: '앱 유지보수',
        description: 'TV 업데이트를 위한 TV System App입니다.\n변경점이 적은 편이며 주로 유지보수를 위한 이슈 개선을 진행했습니다.',
        details: [
            '유지 보수 - 변경되는 스펙 및 이슈 관리'
        ],
        skills: ['Enact(React)', 'Jest']
    }
];
const otherProjList: Array<itemProps> = [
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
export const backSkillList = [NodeJS, Python, cpp];
export const manageSkillList = [Git, Github, Gitlab, Jira, Confluence];