import { categorySolutionTypeList } from "@/api/http/index"
// 使用缓存机制存储已获取的数据
let cachedModelList = null;

// 获取模型列表数据
const fetchModelList = async () => {
  // 如果有缓存数据，直接返回
  if (cachedModelList) {
    return cachedModelList;
  }

  try {
    // 注意：这里的this可能指向问题，实际使用时需确保$http可用
    const res = await categorySolutionTypeList({
      parent_name: "模版内容"
    });

    // 验证响应结构
    if (!res || !res.data) {
      console.warn('模型列表响应结构不符合预期');
      cachedModelList = [];
      return [];
    }

    cachedModelList = res.data.list || [];
    return cachedModelList;
  } catch (error) {
    console.error('获取模型列表失败:', error);
    return [];
  }
};

// 根据名称查找项目
const findItemByName = (modelList, name) => {
  return modelList.find(item => item.name === name) || {};
};

// 生成查询方法的工厂函数
const createDataAccessor = (name, isFirstDescribe = false) => {
  return async () => {
    const list = await fetchModelList();
    const item = findItemByName(list, name);

    if (isFirstDescribe) {
      console.log(item.solution_list[0].describe)
      return item.solution_list[0].describe || '';
    }

    return item.solution_list || [];
  };
};

export default {
  // 异步获取模型列表
  async modelList() {
    return await fetchModelList();
  },

  // 获取简介文本
  text: createDataAccessor("简介文本", true),

  // 获取简介数据列表
  textList: createDataAccessor("简介数据"),

  // 获取企业文化列表
  cultureList: createDataAccessor("企业文化"),

  // 获取核心技术列表
  technologyList: createDataAccessor("君睿核心技术"),

  // 获取合作伙伴列表
  partnerList: createDataAccessor("君睿合作伙伴"),

  // 获取企业风采列表
  eleganceList: createDataAccessor("君睿企业风采"),

  // 获取联系我们列表
  addressList: createDataAccessor("联系我们"),

  // 获取发展历程列表
  courseList: createDataAccessor("发展历程"),

  // 获取荣誉资质列表
  honorList: createDataAccessor("君睿荣誉资质"),

  //获取模版列表
  modelList: createDataAccessor("模版列表"),
};
