/* 二、Promise的使用 */
let checkLogin = function () {
    return new Promise((resolve, reject) => {
        let flag = document.cookie.indexOf("userId") > -1 ? true : false;
        // let flag;

        if (flag =true) {
            resolve({
                status: 0,
                result: true
            })
        } else {
            reject("err");
        }
    })
};
let getUserInfo = () => {
    return new Promise((resolve,reject) => {
        let userInfo = {
            userId: "101"
        };
        resolve(userInfo);
    });
}
checkLogin().then((res1) => {
    if (res1.status === 0) {
        console.log("登录成功！");
        return getUserInfo();
    }
}).catch((error) => {
    console.log(`错误信息:${error}`);
}).then((res2)=>{
    console.log(`userId:${res2.userId}`)
});

Promise.all([checkLogin(),getUserInfo()]).then(([res1,res2])=>{
    console.log(`result:${res1.result},result2:${res2.userId}`)
})