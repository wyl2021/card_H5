//url获取图片宽高
export const getImageSize = function (url, callback) {
  var img = new Image();
  img.src = url;
  if (img.complete) {
    callback&&callback(img.width, img.height);
  } else {
    img.onload = function () {
      callback&&callback(img.width, img.height);
    };
  };
  
};