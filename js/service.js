'use strict';

var application_domain = 'http://soap.hysjgyey.com/';
//全局使用。即所有弹出层都默认采用，但是单个配置skin的优先级更高
layer.config({skin: 'demo-class'});

//创建axios实例
const instance = axios.create({
	baseURL: application_domain,
	timeout: 10000 //请求超时时间
});

//请求拦截器
instance.interceptors.request.use(config => {
	return config;
});

//响应拦截器即异常处理
instance.interceptors.response.use(response => {
		//请求正常则返回
		return Promise.resolve(response.data);
	}, err => {
		if(err.message.includes('timeout')){
			return Promise.reject(err);
		}
		return Promise.reject(err);
	}
);
/**
 * [service 服务接口]
 * @type {Object}
 */
var szjcomo_service = {
	/**
	 * [login 用户登录功能]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {[type]}   iUname    [description]
	 * @param      {[type]}   iPassword [description]
	 * @param      {[type]}   iGroup    [description]
	 * @return     {[type]}             [description]
	 */
	login:async function(iUname,iPassword,iGroup) {
		let that = this;
		try {
			let result = await that.post('sap/ziqcCheckPdaUname',{iUname:iUname,iPassword:iPassword,iGroup:iGroup});
			if(result.eResult != '') return that.appResult(result.eMessage);
			return that.appResult('SUCCESS',result,false);
		} catch(err) {
			return that.appResult(err.message);
		}
	},
	/**
	 * [find_stock 查询库存]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {[type]}   options [description]
	 * @return     {[type]}           [description]
	 */
	find_stock:async function(options) {
		let that = this;
		try {
			let result = await that.post('sap/ziqcGetMaterialBin',options);
			if(result.status) return that.appResult(result.message);
			return that.appResult(result.eMessage,result.etList,false);
		} catch(err) {
			return that.appResult(err.message);
		}
	},
	/**
	 * [receive_goods 收货接口]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {[type]}   options [description]
	 * @return     {[type]}           [description]
	 */
	receive_goods:async function(options) {
		let that = this;
		try {
			let result = await that.post('sap/ziqcGetMaterialBin',options);
			if(result.status != 200) return that.appResult(result.message);
			return that.appResult(result.eMessage,result,false);
		} catch(err) {
			return that.appResult(err.message);
		}
	},
	/**
	 * [receive_onshelve 入库上架]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {Object}   options [description]
	 * @return     {[type]}           [description]
	 */
	receive_onshelve:async function(options = {}) {
		let that = this;
		try {
			let result = await that.post('sap/ziqcGetMaterialBin',options);
			if(result.status != 200) return that.appResult(result.message);
			return that.appResult(result.eMessage,result,false);
		} catch(err) {
			return that.appResult(err.message);
		}
	},
	/**
	 * [po_return_index 查询退货凭证]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {Object}   options [description]
	 * @return     {[type]}           [description]
	 */
	po_return_index:async function(options = {}) {
		let that = this;
		try {
			let result = await that.post('sap/ziqcGet261MblnrList',options);
			if(result.status != 200) return that.appResult(result.message);
			return that.appResult(result.eMessage,result,false);
		} catch(err) {
			return that.appResult(err.message);
		}
	},
	/**
	 * [transfer_onshelve_query 移库查询]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {Object}   options [description]
	 * @return     {[type]}           [description]
	 */
	transfer_onshelve_query:async function(options = {}) {
		let that = this;
		try {
			let result = await that.post('sap/ziqcGet261MblnrList',options);
			if(result.status != 200) return that.appResult(result.message);
			return that.appResult(result.eMessage,result,false);
		} catch(err) {
			return that.appResult(err.message);
		}
	},
	/**
	 * [transfer_offshelve 移仓下架]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {Object}   options [description]
	 * @return     {[type]}           [description]
	 */
	transfer_offshelve:async function(options = {}) {
		let that = this;
		try {
			let result = await that.post('sap/ziqcGet261MblnrList',options);
			if(result.status != 200) return that.appResult(result.message);
			return that.appResult(result.eMessage,result,false);
		} catch(err) {
			return that.appResult(err.message);
		}
	},
	/**
	 * [transfer_onshelve 直接移仓上架]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {Object}   options [description]
	 * @return     {[type]}           [description]
	 */
	transfer_onshelve:async function(options = {}) {
		let that = this;
		try {
			let result = await that.post('sap/ziqcGet261MblnrList',options);
			if(result.status != 200) return that.appResult(result.message);
			return that.appResult(result.eMessage,result,false);
		} catch(err) {
			return that.appResult(err.message);
		}
	},
	/**
	 * [print 标签打印]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @return     {[type]}   [description]
	 */
	print:async function(options) {
		let that = this;
		try {
			let result = await that.post('sap/ziqcGet261MblnrList',options);
			if(result.status != 200) return that.appResult(result.message);
			return that.appResult(result.eMessage,result,false);
		} catch(err) {
			return that.appResult(err.message);
		}
	},
	/**
	 * [appResult 统一返回值]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {[type]}   message     [description]
	 * @param      {[type]}   data        [description]
	 * @param      {Boolean}  error       [description]
	 * @param      {Number}   result_code [description]
	 * @return     {[type]}               [description]
	 */
	appResult:function(message,data = null,error = true,result_code = -1) {
		return {message:message,data:data,error:error,result_code:result_code};
	},
	/**
	 * [get 获取get请求]
	 * @Author    como
	 * @DateTime  2018-12-19
	 * @copyright 思智捷管理系统
	 * @version   [1.5.0]
	 * @param     {String}   url [description]
	 * @return    {[type]}       [description]
	 */
	get:async function(url, data, conf  = {},loading = true){
		let that = this;
		that.openLoading(loading);
		try{
			let result = await instance({
				method: 'get',
				url,
				params: data
			});
			that.closeLoading(loading);
			return result;
		} catch(err){
			that.closeLoading(loading);
			return that.appResult(err.message);
		}
	},
	/**
	 * [发送post请求]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {[type]}   url     [description]
	 * @param      {[type]}   data    [description]
	 * @param      {Object}   conf    [description]
	 * @param      {Boolean}  loading [description]
	 * @return     {[type]}           [description]
	 */
	post:async function(url,data,conf = {},loading = true){
		let that = this;
		that.openLoading(loading);
		try {
			let result = await instance({
				method: 'post',
				url,
				data: data,
				headers: conf
			});
			that.closeLoading(loading);
			return result;
		} catch (err) {
			that.closeLoading(loading);
			return that.appResult(err.message);
		}
	},
	/**
	 * [loading 请求加载效果]
	 * @author 	   szjcomo
	 * @createTime 2019-12-09
	 * @return     {[type]}   [description]
	 */
	openLoading:function(loading = true) {
		layer.load(0);
	},
	/**
	 * [closeLoading 关闭请求效果]
	 * @author 	   szjcomo
	 * @createTime 2019-12-09
	 * @return     {[type]}   [description]
	 */
	closeLoading:function(loading = true) {
		layer.closeAll('loading');
	},
	/**
	 * [layer_options 参数设置]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {Object}   options [description]
	 * @return     {[type]}           [description]
	 */
	layer_options:function(options = {}) {
		let defaults = {title:'数据操作提醒',closeBtn:false,area:['90%']};
		return Object.assign(defaults,options);
	},
	/**
	 * [check_empty 空值检查]
	 * @author 	   szjcomo
	 * @createTime 2020-07-28
	 * @param      {[type]}   fields [description]
	 * @param      {Object}   data   [description]
	 * @return     {[type]}          [description]
	 */
	check_empty:function(fields,data = {}) {
		let that = this;
		let result = that.appResult('SUCCESS',data,false);
		for(let item in fields) {
			if(data[item] == undefined) {
				result = that.appResult(fields[item]);
				break;
			}
			if(data[item].length == 0 ) {
				result = that.appResult(fields[item]);
				break;
			}
		}
		return result;
	}
};