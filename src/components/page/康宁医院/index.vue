<template>
  <div class="p-page">
     <!-- 头部切换 -->
     <headerBg
       cardBg="kn"
       :cardId="cardId"
       @commitUser="getCommitUser"
       :show="show"
       :popupLength="3"
       color="#355DA8"
     >
       <template #userInfo>
         <div :class="'header' + (cardId + 1)" @click="show = true">
           <div class="post">
             <div class="name">
               <div class="text1">{{ userInfo.name }}</div>
               <!--  -->

             </div>
             <div class="text3">
               {{  userInfo.post }}
             </div>
           </div>
           <div class="pm">
             <div class="text4">
               <van-image :src="cardId + 1 == 1
                     ? IMG + 'kn/icon/phone2.png'
                     : IMG + 'kn/icon/phone.png'" />{{
                 userInfo.phone
               }}
             </div>
             <div class="text5">
               <van-image
                 :src="
                   cardId + 1 == 1
                     ? IMG + 'kn/icon/email2.png'
                     : IMG + 'kn/icon/email.png'
                 "
               />{{ userInfo.email }}
             </div>
             <div class="text6">
               <van-image
                 :src="
                   cardId + 1 == 1
                     ? IMG + 'kn/icon/address2.png'
                     : IMG + 'kn/icon/address.png'
                 "
               />
               <div class="textccc">{{ userInfo.address }}</div>
               <!--  -->
             </div>
           </div>
         </div>
       </template>
       <template #default="slotProps">
         <div
           :class="[
             'header' + (slotProps.item + 1),
             { selectCard: cardIds == slotProps.item },
             'b-dotted',
           ]"
           @click="cardIds = slotProps.item"
         >
           <div class="post">
             <div class="name">
               <div class="text1">{{ userInfo.name }}</div>

               </div>

             <div class="text3">
               {{
                 userInfo.post
               }}
             </div>
           </div>
           <div class="pm">
             <div class="text4">
               <van-image :src=" slotProps.item + 1 == 1
                     ? IMG + 'kn/icon/phone2.png'
                     : IMG + 'kn/icon/phone.png'" />{{
                 userInfo.phone
               }}
             </div>
             <div class="text5">
               <van-image
                 :src="
                   slotProps.item + 1 == 1
                     ? IMG + 'kn/icon/email2.png'
                     : IMG + 'kn/icon/email.png'
                 "
               />{{ userInfo.email }}
             </div>
             <div class="text6">
               <van-image
                 :src="
                   slotProps.item + 1 == 1
                     ? IMG + 'kn/icon/address2.png'
                     : IMG + 'kn/icon/address.png'
                 "
               />
               <div class="textccc">{{ userInfo.address }}</div>
             </div>
           </div>
         </div>
       </template>
     </headerBg>
     <!-- 电话和地址 -->
     <pAddress
       phoneButton="kn/icon/phoneButton.png"
       addressButton="kn/icon/addressButton.png"
       :phone="userInfo.phone"
       :address="userInfo.address"
       name="康宁医院"
       :type="0"
     ></pAddress>
     <!-- 二维码和形象照 -->
     <pQrcode :isWx="userInfo.wx_code" qrCodeIcon="kn/icon/sys.png"  :isXx="userInfo.image"
      phonoIcon="kn/icon/grxx.png" :phonoContent="{
        phonoTitle:'个人工作照'
      }"></pQrcode>
     <!-- tab栏 -->
     <tab
       :tabList="tabList"
       :tabId="tabId"
       :isTob="tabIsTop"
       id="tap"
       @butTab="butTab"
       color="#355DA8"
     ></tab>
     <knContent ref="content" :list="list"></knContent>

     <!-- 阿库标识 -->
     <aKuLogo></aKuLogo>
   </div>
 </template>

 <script>
 export default {
   data() {
     return {
       tabList: [
         {
           name: "医院简介",
           id: "yyjj",
         },
         {
           name: "科室介绍",
           id: "ksjs",
         },
         {
           name: "联系我们",
           id: "lxwm",
         },
       ], ///tab栏列表
       tabId: "yyjj", //默认tab
       tabIsTop: false, //用作下拉到一定程度现实tab栏
       cardId: 0,
       cardIds:0,
       userInfo: {
         name: "正在加载",
         post: "正在加载",
         phone: "正在加载",
         email: "正在加载",
         address: "正在加载",
         english: "正在加载",
       },
       show: false,
       list: [

       ],
      //  专家
       expertList:[],
      //  科室
       departmentList:[]
     };
   },
   created(){

     this.getUserInfo();
     this.getList()
     this.getExpertList()
     this.getDepartmentList()
   },
   mounted() {
     window.addEventListener("scroll", this.scrolling);
    //  this.getUserInfo();
    //  this.getList()
   },
   destroyed() {
     window.removeEventListener("scroll", this.scrolling);
   },

   methods: {
    getDepartmentList(){
      this.$http
         .categorySolutionTypeList({ parent_name: "科室" })
         .then(  (res) =>  {
          //  console.log("列表信息",res)
          //  this.departmentList=res.data.list
          this.list.push({name:'科室',list:res.data.list})
         });
    },
    // 专家
    getExpertList(){
      this.$http
         .categorySolutionTypeList({ parent_name: "专家" })
         .then(  (res) =>  {
          //  console.log("列表信息",res)
          //  this.expertList=res.data.list
          this.list.push({name:'专家',list:res.data.list})
         });
    },
     // 内容信息
     getList() {

       this.$http
         .categorySolutionTypeList({ parent_name: "列表信息" })
         .then(  (res) =>  {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          this.list.push({name:'列表信息',list:res.data.list})
         });
        // this.$http.cardUserList()

     },
     //判断
     getWebAddress(list, str) {
       if (list != []) {
         let webAddress = "";
         list.forEach((item) => {
           if (item.key == str) {
             webAddress = !(item.value == "" || item.value == null)
               ? item.value
               : "-";
           } else {
             webAddress = "-";
           }
         });
         return webAddress;
       } else {
         return "-";
       }
     },
     getUserInfo() {
       wx.miniProgram.postMessage(this.userInfo)
       this.$http.cardUserInfo().then((res) => {
         this.userInfo = res.data;
         this.cardId=res.data.select;

         console.log("1231231")
       });
     },

     // 名片切换
     getCommitUser(index) {
       console.log("名片切换",index)
       this.$http.cardInfo({ select_num: this.cardIds }).then((item) => {
         if (item.code == 200) {
           this.cardId = this.cardIds;
           this.show = false;
         }
       });
       // this.cardId=1
     },

     scrolling() {
       var scrollTop =
         document.body.scrollTop || document.documentElement.scrollTop;
       var tabScroll = document.getElementById("tap").offsetTop;
       // console.log(scrollTop);
       // console.log("获取tap栏高度", tabScroll);
       if (scrollTop >= tabScroll) {
         this.tabIsTop = true;
       } else {
         this.tabIsTop = false;
       }
     },

     butTab(id) {
       console.log(id);
       this.tabId = id;
       // window.location.hash=this.tabId
       var id = this.tabId.replace("#", "");
      //  console.log(id);
      //  document.getElementById(id).scrollIntoView();
      this.$refs.content.butTab(id);
     },
   },
 };
 </script>

 <style lang="scss" scoped>
 .header1 {
   // width: 100%;
   height: 100%;
   padding: 44px 0 0 30px;
   .post {
   }
   .name {


     .text1 {

       font-size: 16px;
       font-weight: 800;
       letter-spacing: 5px;
       color: #355DA8;
     }
     .text2 {
       font-size: 9px;
       color: #422188;
     }
   }
   .text3 {
     font-size: 10px;
     letter-spacing: 5px;
   }
   .pm {
     margin-top: 25px;
   }
   .text4 {
     /deep/ .van-image {
       width: 10px;
       height: 10px;
       margin-right: 4px;
     }

     color: #666666;
     font-size: 11px;
   }
   .text5 {
     /deep/ .van-image {
       width: 10px;
       height: 10px;
       margin-right: 4px;
     }
     color: #666666;
     font-size: 11px;
     margin-top: 4px;
   }
   .text6 {
     /deep/ .van-image {
       width: 10px;
       height: 10px;
       margin-right: 4px;
     }
     .textccc {
       width: 247px;
     }
     display: flex;
     margin-top: 4px;
     color: #666666;
     font-size: 11px;
     align-items: baseline;
   }
 }

 .header2 {
   // width: 100%;
   height: 100%;
   padding: 38px 0 0 40px;
   .post {
     .name {

       .text1 {
         width: 100%;
         font-size: 16px;
         font-weight: 800;
         letter-spacing: 5px;
       }
       .text2 {
         font-size: 12px;
         color: #422188;
       }
     }
   }
   .text3 {
     font-size: 10px;
     color: #333333;
     margin-top:5px;
   }
   .pm {
     margin-top: 30px;
   }
   .text4 {
     /deep/ .van-image {
       width: 10px;
       height: 10px;
       margin-right: 4px;
     }
     color: #666666;
     font-size: 11px;
   }
   .text5 {
     /deep/ .van-image {
       width: 10px;
       height: 10px;
       margin-right: 4px;
     }
     color: #666666;
     font-size: 11px;
     margin-top: 4px;
   }
   .text6 {
     /deep/ .van-image {
       width: 10px;
       height: 10px;
       margin-right: 4px;
     }
     .textccc {
       width: 253px;
     }
     display: flex;
     margin-top: 4px;
     color: #666666;
     font-size: 11px;
     align-items: baseline;
   }
 }

 .header3 {
   // width: 100%;
   height: 100%;
   padding: 107px 0 0 55px;
   display: flex;
   align-items: center;
   .post {


     .name {
      margin-right: 35px;
       .text1 {
        text-align: center;
         font-size: 16px;
         font-weight: 800;
         color: #355DA8;

       }
       .text2 {
         font-size: 12px;
         color: #fff;
         margin-right: 2px;
       }
     }
   }
   .text3 {
     font-size: 10px;
     color: #666666;
   }
   .pm {
      width: 70%;
   }
   .text4 {
     /deep/ .van-image {
       width: 10px;
       height: 10px;
       margin-right: 4px;
     }
     color: #666666;
     font-size: 11px;
   }
   .text5 {
     /deep/ .van-image {
       width: 10px;
       height: 10px;
       margin-right: 4px;
     }
     color: #666666;
     font-size: 11px;
     margin-top: 8px;
   }
   .text6 {
     /deep/ .van-image {
       width: 10px;
       height: 10px;
       margin-right: 4px;
     }
     .textccc {
      width: 150px;
     }
     display: flex;
     margin-top: 8px;
     color: #666666;
     font-size: 11px;
     align-items: baseline;
   }
 }

 .selectCard {
   border: 1px solid #355DA8 !important;
 }

 .cultureName {
   font-size: 14px;
   color: #333;
   margin-left: 5px;
 }
 .cultureDescribe {
   font-size: 12px;
   color: #666;
   margin: 6px 0 0 15px;
 }

 .m-t-14 {
   margin-bottom: 14px;
 }
 .a-item{
   align-items: baseline !important;
   width:290px ;

 }

 </style>
