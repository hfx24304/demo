var APP_ID = 'Y4RuxDksN1wyA79Ik1bpp3KT-gzGzoHsz';
var APP_KEY = 'xEi0Lx9J2rwGWCGWmKRSO1Tx';
var AV = require('leancloud-storage');
AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});

//调用
var todo = AV.Object.extend('demo');
var demoData = new todo();

export default demoData 
/*demoData.save({
	words: 'Hello World!'
}).then(function(object) {
	alert('LeanCloud Rocks!');
})*/