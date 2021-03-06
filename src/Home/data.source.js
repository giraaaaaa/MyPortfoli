import React ,{useState} from 'react';
import javalogo from './image/javascriptlogo.png'
import reactlogo from './image/reactlogo.png'
import nodelogo from './image/nodejs.png'
import emaillogo from './image/emaillogo.png'
import githublogo from './image/githublogo.png'
import githublogoclick from './image/githublogoclick.png'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import kill from './image/kill.gif'
import Texty from 'rc-texty';
import { message, Popover } from 'antd';

// let Link       = Scroll.Link;
// let Element    = Scroll.Element;
// let Events     = Scroll.Events;
// let scroll     = Scroll.animateScroll;
// let scrollSpy  = Scroll.scrollSpy;

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          // href: 'Content1',
          children: [{ children: <div onClick= {() => scroll.scrollToTop()}>{'Home'}</div>, name: 'text' }],
        },
       
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          // href: '2',
          children: [{ children: <div onClick= {() => scroll.scrollTo( 2000,
          {duration: 1500,
          delay: 10,
          smooth: true,
          containerId: 'header0'},
        
          )}>{'Skills'}</div>, name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          // href: '3',
          children: [{ children: 'About', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          // href: '4',
          children: [{ children: <div onClick= {() => window.scrollMore("500")}>{'Contact Me'}</div>, name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    // children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
    children:  <div className="texty-demo" style={{ 
      marginTop: 16,
      fontSize: 100 }}>
        <Texty style={
            {  textAlign: "center",
            color: "#fff"}}>
            {'React Devloper'}
        </Texty>
      </div>
    // children: <content>{Demo}</content>
  },
  content: {
    className: 'banner0-content',
    children: 'Gill Ha Lee',
  },
button: { className: 'banner0-button', children: <div
onClick={() => {scroll.scrollToBottom()}}
>{'Contact Me'}</div> },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Skills' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              
              children:
              <img src={reactlogo} alt="profile"/>


            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'React',
            },
            // { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                <img src={javalogo} alt="profile"/>
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Javascript',
            },
            {
              name: 'content',
              // children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                <img src={nodelogo} alt="profile"/>
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'NodeJs',
            },
            {
              name: 'content',
              // children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    // children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
    children: kill
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '간단 자기소개' },
  content: {
    className: 'content1-content',
    children:
      '금형 디자인을 전공한 저는 기존 전공 보다 뚜렷한 비전을 가진 소프트웨어로 눈을 돌렸습니다. IT개발자를 새로운 목표로 삼고 역량을 갖추기 위해 삼성 SDS 멀티캠퍼스에서 진행하는 ‘임베디드 소프트웨어 기반 IoT 고급 개발자 양성 과정’에 지원하여 공부했습니다. 또한 \'일라티\'에서 2019년 9월부터 2020년 4월까지 react native 프론트엔드 개발자로 \'캐롯\'앱 개발에 참여하였습니다.  ',
      
  },
};
// export const Content30DataSource = {
//   wrapper: { className: 'home-page-wrapper content3-wrapper' },
//   page: { className: 'home-page content3' },
//   OverPack: { playScale: 0.3 },
//   titleWrapper: {
//     className: 'title-wrapper',
//     children: [
//       {
//         name: 'title',
//         children: 'Contact Me',
//         className: 'title-h1',
//       }
//       // {
//       //   name: 'content',
//       //   className: 'title-content',
//       //   children: '基于阿里云强大的基础资源',
//       // },
//     ],
//   },
//   block: {
//     className: 'content3-block-wrapper',
//     children: [
//       {
//         name: 'block0',
//         className: 'content3-block',
//         md: 8,
//         xs: 24,
//         children: {
//           icon: {
//             className: 'content3-icon',
//             children:
//               githublogo
//           },
//           textWrapper: { className: 'content3-text' },
//           title: { className: 'content3-title', children: 'Github' },
//           // content: {
//             // className: 'content3-content',
//             // children:
//             //   '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
//           // },
//         },
//       },
//       {
//         name: 'block1',
//         className: 'content3-block',
//         md: 8,
//         xs: 24,
//         children: {
//           icon: {
//             className: 'content3-icon',
//             children: 
//             emaillogo
            
//           },
//           textWrapper: { className: 'content3-text' },
//           title: { className: 'content3-title', children: 'Email' },
//           content: {
//             className: 'content3-content',
//             children:
//               '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
//           },
//         },
//       },
//       {
//         name: 'block2',
//         className: 'content3-block',
//         md: 8,
//         xs: 24,
//         children: {
//           icon: {
//             className: 'content3-icon',
//             children:
//               'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
//           },
//           textWrapper: { className: 'content3-text' },
//           title: { className: 'content3-title', children: 'BitCoinWallet' },
//           content: {
//             className: 'content3-content',
//             children:
//               '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
//           },
//         },
//       },


//     ],
//   },
// };

export const Content40DataSource = {
  
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Contact ME' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      // {
      //   name: 'block0',
      //   className: 'content0-block',
      //   md: 8,
      //   xs: 24,
      //   children: {
      //     className: 'content0-block-item',
      //     children: [
      //       {
      //         name: 'image',
      //         className: 'content0-block-icon',
              
      //         children:
      //         <img src={reactlogo} alt="profile"/>


      //       },
      //       {
      //         name: 'title',
      //         className: 'content0-block-title',
      //         children: 'React',
      //       },
      //       // { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
      //     ],
      //   },
      // },
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
              <CopyToClipboard text={"landamaizer@gmail.com"}
              >
                    <Popover content="Copy">
                      <img src={emaillogo}
                      onClick={() => message.success("복사되었습니다.")}
                      alt="profile"/>
                    </Popover>
              </CopyToClipboard> 
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Email',
            },
            {
              name: 'content',
              // children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
              <Popover content="Click">
              <img src={githublogo} alt="profile"
              onClick={() => window.open("https://github.com/giraaaaaa")}
              >
              </img>
              </Popover >
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Github',
            },
            {
              name: 'content',
              // children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};

export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
