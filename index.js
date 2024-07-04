// console.log("Hello SBTVC888");

// var studentsAll = [
//     {
//         nickName: "ณณฑ์",
//         age: "123346587984698546984694646465846",
//         birthday: "31 ก.ย. 2549",
//         note: "ความสามารถพิเศษคือ ลืมเเล้ว ลืมอยู่ ลืมต่อ",
//         prefix: "ณายแภฑญ์",
//         firstName: "ฆณกฬ",
//         lastName: "ไฑญปฬะโฆณ",
//         imageProfile: "./img/non.jpg",
//         url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
//         researchInteresting: [
//             {
//                 topic: "สนใจเกี่ยวกับ Deep Dark Fantasy",
//                 url: "https://www.youtube.com/embed/Ka-nXPpkNQk?si=UWqULd15-Q1iFrVR"
//             },
//         ]
//     },
//     {
//         nickName: "ก้าว",
//         age: "1.265465464684",
//         birthday: "32 ก.ย. 2549",
//         note: "มีความสามารถพิเศษคือ สามารถถือเเก้วมังกรเเละเดินไปมาได้",
//         prefix: "นรายเเพรทยย์",
//         firstName: "พัดสะดุสาน",
//         lastName: "พุดทิกอน",
//         imageProfile: "./img/kao.jpg",
//         url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
//         researchInteresting: [
//             {
//                 topic: "สนใจเกี่ยวกับ พระเยซูขณะอยู่ในเรือ",
//                 url: "https://www.youtube.com/embed/BxyOIKWG6XQ?si=mOnNrvsI-0DnODJ4"
//             },
//         ]
//     },
//     {
//         nickName: "นพ",
//         age: "77",
//         birthday: "33 ก.ย. 2549",
//         note: "มีความสามารถพิเศษคือ สามารถลดอายุตัวเองให้เด็กลงพอที่จะเล่นของเล่นเด็กได้",
//         prefix: "นรายเเพรทยย์",
//         firstName: "ทะนานบ",
//         lastName: "ยดถาสัก",
//         imageProfile: "./img/nop.jpg",
//         url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
//         researchInteresting: [
//             {
//                 topic: "สนใจเกี่ยวกับ วิธี Hack NASA ด้วย HTML",
//                 url: "https://www.youtube.com/embed/Dz_pSACswyk?si=B5uvuEpHUrKEY6tS"
//             },
//         ]
//     },
//     {
//         nickName: "ชิ",
//         age: "(x^4 + 20x^3 + 200x^2 + 400x + 400)",
//         birthday: "34 ก.ย. 2549",
//         note: "มีผลงานคือผู้ประดิษฐ์คิดค้นกล้องถ่ายรูปจากเครื่องคิดเลขเป็นคนเเรกในหมู่บ้าน",
//         prefix: "นรายเเพรทยย์",
//         firstName: "ยดสะกอน",
//         lastName: "อังคะนาวิน",
//         imageProfile: "./img/chi.jpg",
//         url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
//         researchInteresting: [
//             {
//                 topic: "สนใจเกี่ยวกับ การเป็นชายชาตรี",
//                 url: "https://www.youtube.com/embed/IXFjJGZlzEE?si=sC1PHgCaKSzhv8vx"
//             },
//         ]
//     },
//     {
//         nickName: "เพา",
//         age: "18",
//         birthday: "35 ก.ย. 2549",
//         note: "มีความสามารถพิเศษคือ <strong>มีค*ย</strong>",
//         prefix: "นรางเเพรทยย์",
//         firstName: "พัดชะระพน",
//         lastName: "เเสงอุสา",
//         imageProfile: "./img/pao.jpg",
//         url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
//         researchInteresting: [
//             {
//                 topic: "สนใจเกี่ยวกับ การผ่าตัดเเปลงเพศ",
//                 url: "https://www.youtube.com/embed/elcC4oynB1Q?si=K1LcMwJdU0C3G3iQ"
//             },
//         ]
//     },
//     {
//         nickName: "ไผ่",
//         age: "52",
//         birthday: "36 ก.ย. 2549",
//         note: "คติประจำใจ จน เคลียด กินเหล้า ต่อมา Doctor ไผ่ได้เลิกเหล้าทำให้ Doctor ไผ่ไม่จนไม่เคลียด เเละไม่กินเหล้า เเละหันไปกินเต่าบินเเทนเหล้า ปัจจุบัน Doctor ไผ่เป็นเบาหวาน",
//         prefix: "นรางเเพรทยย์",
//         firstName: "เฉลิมพร",
//         lastName: "สุริยะ",
//         imageProfile: "./img/pai.jpg",
//         url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
//         researchInteresting: [
//             {
//                 topic: "สนใจเกี่ยวกับ โรค Gachimuchi ในเพศชาย",
//                 url: "https://www.youtube.com/embed/O5FvsKiifM0?si=-HDq8oVt_m9FPFbS"
//             },
//         ]
//     },
//     {
//         nickName: "เค้ก",
//         age: "5.62 ขวบ",
//         birthday: "37 ก.ย. 2549",
//         note: "เนื่องจาก Doctor เค้กเป็นคนที่รักเเม่มาก เเละเนื่องจากเป็นวันเเม่ Doctor เค้กคนอยากจะทำอะไรทดเเทนบุญคุณเเม่ซักอย่างเขาได้ไปลองค้นหาว่าคนจะทำอะไรดี เเล้วจึงได้สรุปซื้อ พัดลมราคา 1 บาทเพื่อทดเเทนบุญคุณเเม่นิดหน่อย",
//         prefix: "นรางเเพรทยย์",
//         firstName: "ปะพาพอน",
//         lastName: "พูผาลี",
//         imageProfile: "./img/cake.jpg",
//         url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
//         researchInteresting: [
//             {
//                 topic: "สนใจเกี่ยวกับ พัดลม",
//                 url: "https://www.youtube.com/embed/QoVcBGouCyo?si=C-qXpsj4mzGwgd8v"
//             },
//         ]
//     },
//     {
//         nickName: "ชมพู่",
//         age: "19",
//         birthday: "38 ก.ย. 2549",
//         note: "มีความสามารถพิเศษคือ เมื่อ Doctor ชมพูไปนั่งที่รถพวงเเล้วจะทำให้รถพ่วงไม่สามารถเคลื่อนที่ได้เนื่องจากน้ำหนักเกินพิกัดที่รถพ่วงจะรับได้จนต้องให้รถไถ่ที่ขับตามมมาช่วยดันตูดรถ เพื่อให้รถยังคงสามารถพา Doctor ชมพูไปยังที่หมายได้สำเร็จ",
//         prefix: "นรางเเพรทยย์",
//         firstName: "ละพัดสะละดา",
//         lastName: "ชายยะจาก",
//         imageProfile: "./img/chompoo.jpg",
//         url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
//         researchInteresting: [
//             {
//                 topic: "สนใจเกี่ยวกับ คืนความสุขให้ประเทศไทย",
//                 url: "https://www.youtube.com/embed/xLYSBVmoPhY?si=vT4dX7x9Q9IQuery"
//             },
//         ]
//     },
//     {
//         nickName: "โต้งงงงงงง",
//         age: "888",
//         birthday: "888 ป.ป.ป. 888",
//         note: "ผลงานผู้อำนวยการเว็ป SBTVC888.net เเละ XXXSBTVCHUB.com",
//         prefix: "นายวิศวะคอมพิวเตอร์กิ๊กก๊อก",
//         firstName: "จะตุรน",
//         lastName: "นิยะรัด",
//         imageProfile: "./img/p-tong.jpg",
//         url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
//         researchInteresting: [
//             {
//                 topic: "สนใจเกี่ยวกับ การเลิกเป็นวิศวะกิ๊กก๊อกเเละไปเป็นหมอ",
//                 url: "https://www.youtube.com/embed/bdjLUiely9U?si=Ojd2wUzfeNFpiZJB"
//             },
//         ]
//     }
// ];


// console.log(studentsAll);


// // document.getElementById("").innerHTML = "";

// var textList = "";

// for(let i = 0; i < studentsAll.length; i++){
//     let researchTextList = "";
//     for(let ii = 0; ii < studentsAll[i].researchInteresting.length; ii++){
//         researchTextList += `<p>${studentsAll[i].researchInteresting[ii].topic}</p>
//         <iframe width="560" height="315" src="${studentsAll[i].researchInteresting[ii].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
//     }
//     textList += `
//         <h3>Doctor ${studentsAll[i].prefix} ${studentsAll[i].firstName} ${studentsAll[i].lastName} (${studentsAll[i].nickName}) </h3>
//         <p>ประวัติ Doctor ${studentsAll[i].nickName} : อายุ ${studentsAll[i].age} ${studentsAll[i].note}</p>
//         <img src="${studentsAll[i].imageProfile}" alt="${studentsAll[i].imageProfile}lnwza" width="20%" style="border-radius: 50px; border-color: black; border-style: solid;">
//         <a href="${studentsAll[i].url}" target="_blank">
//             <p>เพลงโดนจัย</p>
//         </a>
//         ${researchTextList}
//     `;
// }

// document.getElementById("dataDoctor").innerHTML = textList;



