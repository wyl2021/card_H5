export default {
  data() {
    return {
      IMG: 'https://card-img1.oss-cn-beijing.aliyuncs.com/'
    }
  },
  getList(list){
    var res = []
    list.forEach((item,index)=>{
      res.push({
        id: index,
        text: item.text,
        activeIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + item.activeIcon,
        inactiveIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + item.inactiveIcon,
        path: index == 0 ? '/' : index == 1 ? '/thirdIndex' : index == 2 ? '/secondIndex' : index == 3 ? 'fourthIndex' : 'fiveIndex',
      })
    })
    return res
  },
  getBox(list) {
      console.log()
    return {
      activeColor: list.activeColor,
      inactiveColor: list.inactiveColor,
      list:this.getList(list.list)

      // [
      //   {
      //     id: 0,
      //     text: list.list[0].text,
      //     activeIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + list.list[0].activeIcon,
      //     inactiveIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + list.list[0].inactiveIcon,
      //     path: "/",
      //   },
      //   {
      //     id: 1,
      //     text: list.list[1].text,
      //     activeIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + list.list[1].activeIcon,
      //     inactiveIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + list.list[1].inactiveIcon,
      //     path: "/thirdIndex",
      //   },
      //   {
      //     id: 2,
      //     text: list.list[2].text,
      //     activeIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + list.list[2].activeIcon,
      //     inactiveIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + list.list[2].inactiveIcon,
      //     path: "/secondIndex",
      //   },
      //   {
      //     id: 3,
      //     text: list.list[3].text,
      //     activeIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + list.list[3].activeIcon,
      //     inactiveIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + list.list[3].inactiveIcon,
      //     path: "/fourthIndex",
      //   },
      //   {
      //     id: 4,
      //     text: list.list[4].text,
      //     activeIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + list.list[4].activeIcon,
      //     inactiveIcon: 'https://card-img1.oss-cn-beijing.aliyuncs.com/' + list.list[4].inactiveIcon,
      //     path: "/fiveIndex",
      //   },
      // ],

    }
  }
}
