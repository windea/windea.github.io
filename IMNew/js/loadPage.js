// ------------------------------------------------------------------------------ //
//
// Template name : Bootsnav - Multi Purpose Header
// Categorie : Bootstrap Menu in CSS
// Author : adamnurdin01
// Version : v.1.2
// Created : 2016-06-02
// Last update : 2016-10-19
//
// ------------------------------------------------------------------------------ //

(function ($) {
	"use strict";
    String.prototype.format = function(args) {
        var result = this;
        if (arguments.length > 0) {
            if (arguments.length == 1 && typeof(args) == "object") {
                for (var key in args) {
                    if (args[key] != undefined) {
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            } else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] != undefined) {
                        var reg = new RegExp("({)" + i + "(})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
        }
        return result;
    }
    var menuJson = {
        "Menus": [
            { "MenuTitle": "概览", "MenuLink": "javascript:void(0);", 
              SubMenus: [
                  { "MenuTitle": "目的/目标", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnXRqDlglVPe2oKCu0FX6qaf" }, 
                  { "MenuTitle": "原则", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccn4O9DuRRYW7vhbWTZcAQSHe" }
              ] 
            },
            { "MenuTitle": "活动", "MenuLink": "javascript:void(0);", 
              SubMenus: [
                  { "MenuTitle": "业务总监会", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccn4Q6q4s06Z8rDYj5nnpREhg" }, 
                  { "MenuTitle": "业务需求梳理会", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccn0Ghbvoq7fi6ZtX8pss3hFf" }, 
                  { "MenuTitle": "产品需求填充会", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnhHo0YhZZFtWQ9Sym9FawZc" }, 
                  { "MenuTitle": "产品组日会", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnSLtBH7uozcFnlXAJs5Q61c" }, 
                  { "MenuTitle": "跨组周例会", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnADbphIL8bgEuUXwRYpsNQe" }, 
                  { "MenuTitle": "需求梳理会", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnXKanNWVQ3DPMSO01RVIk3A" }, 
                  { "MenuTitle": "迭代计划会", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnuvHyt6GQghnC5gg6ep16zg" }, 
                  { "MenuTitle": "每日站会", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnLgJFWkBwQJwYBRlNcAvfyb" }, 
                  { "MenuTitle": "产品评审会", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnXSncVu3LER3HBmecDK13Rb" }, 
                  { "MenuTitle": "团队回顾会", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnQbItprAt1NOibEbg6Ro3Ph" }
              ]
            },
            { "MenuTitle": "角色", "MenuLink": "https://xfmkp6q7le.feishu.cn/file/boxcn2zWUJsYiWvqN2YlvZQaFDd", 
              SubMenus: [
                  { "MenuTitle": "业务", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f#IqOaDI" }, 
                  { "MenuTitle": "CPO", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f#MO49jq" }, 
                  { "MenuTitle": "PO", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f#2vqpmr" }, 
                  { "MenuTitle": "UX", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f#AdVoL0" }, 
                  { "MenuTitle": "UI", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f#QTAz5z" }, 
                  { "MenuTitle": "版本经理", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f#Yvjlkn" }, 
                  { "MenuTitle": "CBA", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f#VuooSA" }, 
                  { "MenuTitle": "中后台PM", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f#Yvjlkn" }, 
                  { "MenuTitle": "Scrum Master", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f#DdfLjY" }, 
                  { "MenuTitle": "研发团队", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f#nmPTmX" },
              ]
            },
            { "MenuTitle": "需求管理", "MenuLink": "javascript:void(0);", 
              SubMenus: [
                  { "MenuTitle": "需求结构", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnchoEdBIYksKjsJLUubSUJb" }, 
                  { "MenuTitle": "实践方法", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnOAEQwBcGQgpTxzYszMVzth" }, 
                  { "MenuTitle": "变更管理", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnbLUjLo06ZKNbnIUEKieYZf" },
              ]
            },
            { "MenuTitle": "运维&质量管理", "MenuLink": "javascript:void(0);", 
              SubMenus: [
                  { "MenuTitle": "内建质量", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccn376hpEkmnqH94G2LNDToRg" }, 
                  { "MenuTitle": "运维管理", "MenuLink": "https://xfmkp6q7le.feishu.cn/docs/doccnGcFnmgv4G2AHJZKonICQYd" }, 
              ]
            },
        ]
    };

    function buildMenu(menuJson) {
        var singleMenu = '<li><a href="{0}" target="_blank">{1}</a></li>';
        var parentMenu = '<li class="dropdown"><a href="{0}" target="_blank" class="dropdown-toggle" data-toggle="dropdown">{1}</a><ul  class="dropdown-menu">';
        var childMenu = '<li><a href="{0}" target="_blank">{1}</a></li>';
        var parentMenuEnd = '</ul></li>';

        var menuHtml = [];
        menuJson.Menus.forEach(function(menu) {
            if (menu.SubMenus) {
                //has subMenu
                menuHtml.push(parentMenu.format(menu.MenuLink, menu.MenuTitle));
                menu.SubMenus.forEach(function(subMenu) {
                    menuHtml.push(childMenu.format(subMenu.MenuLink, subMenu.MenuTitle));
                });
                menuHtml.push(parentMenuEnd);
            } else {
                menuHtml.push(singleMenu.format(menu.MenuLink, menu.MenuTitle));
            }
        });
        $("#navBar").html(menuHtml.join(""));
    }

    $(document).ready(function() {
        buildMenu(menuJson);
    });

    var trainMapJson = {
        "Areas": [
            { "AreaTitle":"业务概念", "AreaCoords":"66,46,145,78", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnCqcFmabsG70mIHq94RE2UO"},
            { "AreaTitle":"业务路线图", "AreaCoords":"180,46,286,78", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnYGvqDJV7RlkP5Cf6cdikYd"},
            { "AreaTitle":"业务流程（下阶段）", "AreaCoords":"316,46,482,78", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnMdl74VceitQIEzcI051J6f"},
            { "AreaTitle":"业务流程（SPn-2）", "AreaCoords":"502,46,678,78", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnd3Mmit07BgFANLXYpOn4sG"},
            { "AreaTitle":"产品概念", "AreaCoords":"66,110,145,142", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnjlyQJhzUbD4UuYxaVpR2Md"},
            { "AreaTitle":"产品路线图", "AreaCoords":"180,110,286,142", "AreaLink":"https://xfmkp6q7le.feishu.cn/base/bascnXJ6QoaLPaHqSgWfxhxeADb?table=tblKE4zELt7vAc1x&view=vew3HqFwSU"},
            { "AreaTitle":"PRD（下阶段）", "AreaCoords":"316,110,482,142", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccneWClu8rb1nVmYKHDnf8Axc"},
            { "AreaTitle":"PRD（SPn-1）", "AreaCoords":"502,110,678,142", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccn8FeWtCvv3rbaE0MI8h1Ame"},
            { "AreaTitle":"技术概念", "AreaCoords":"66,176,145,206", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccn2N12rC6Q6HzQqcL6duKUnc"},
            { "AreaTitle":"技术路线图", "AreaCoords":"180,176,286,206", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnY74MoStghHY8V946nyIBFc"},
            { "AreaTitle":"技术需求（下阶段）", "AreaCoords":"316,176,482,206", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnaLjerdh22EvGujn1qQKpdc"},
            { "AreaTitle":"技术需求（SPn-1）", "AreaCoords":"502,176,678,206", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnz0rfj1UMJVbp2zBiYPUdib"},
            { "AreaTitle":"迭代概念", "AreaCoords":"714,144,806,174", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnCOsXmsscCrTbKbuL5vsQHg"},
            { "AreaTitle":"运行维护", "AreaCoords":"835,144,920,174", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnbEsgOQCDLbX9xiCFza5P9g"},
            { "AreaTitle":"反馈", "AreaCoords":"862,96,928,130", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnCfhW1HngIMYTsHe1uMo5ZV"},
            { "AreaTitle":"用户", "AreaCoords":"972,148,1014,178", "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccn4riqCCcX5WNd60yyF1ul3g"},
        ]
    };

    var CriticalActivityMapJson = {
        "Areas": [
{ "AreaTitle":"01角色职责"     , "AreaCoords":"180,246,285,278"     , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f"}, 
{ "AreaTitle":"02角色职责"     , "AreaCoords":"654,168,765,202"    , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f"}, 
{ "AreaTitle":"03角色职责"     , "AreaCoords":"774,405,885,434"   , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f"}, 
{ "AreaTitle":"04角色职责"     , "AreaCoords":"330,704,490,754" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f"}, 
{ "AreaTitle":"05角色职责"     , "AreaCoords":"182,520,242,548" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f"}, 
{ "AreaTitle":"角色职责01"     , "AreaCoords":"588,802,652,832" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f"}, 
{ "AreaTitle":"角色职责02"     , "AreaCoords":"726,866,786,900" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f"}, 
{ "AreaTitle":"角色职责03"     , "AreaCoords":"915,770,944,804" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f"}, 
{ "AreaTitle":"角色职责04"     , "AreaCoords":"950,634,1036,666" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f"}, 
{ "AreaTitle":"角色职责05"     , "AreaCoords":"872,504,930,540" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnTsTnDfCl7bRvyksdhUUS6f"}, 
{ "AreaTitle":"业务总监会"   , "AreaCoords":"160,190,284,210"   , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccn4Q6q4s06Z8rDYj5nnpREhg"}, 
{ "AreaTitle":"产品组日会"   , "AreaCoords":"150,460,242,470"  , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnSLtBH7uozcFnlXAJs5Q61c"}, 
{ "AreaTitle":"业务需求梳理会", "AreaCoords":"686,116,824,130"   , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccn0Ghbvoq7fi6ZtX8pss3hFf"}, 
{ "AreaTitle":"产品需求填充会", "AreaCoords":"804,348,938,368" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnhHo0YhZZFtWQ9Sym9FawZc"}, 
{ "AreaTitle":"需求梳理会"   , "AreaCoords":"570,774,648,784" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnXKanNWVQ3DPMSO01RVIk3A"}, 
{ "AreaTitle":"迭代计划会"   , "AreaCoords":"750,840,828,852" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnuvHyt6GQghnC5gg6ep16zg"}, 
{ "AreaTitle":"每日站会"     , "AreaCoords":"940,740,1000,755" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnLgJFWkBwQJwYBRlNcAvfyb"}, 
{ "AreaTitle":"跨组周例会"   , "AreaCoords":"392,654,486,666" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnADbphIL8bgEuUXwRYpsNQe"}, 
{ "AreaTitle":"团队回顾会"   , "AreaCoords":"898,476,972,486" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnQbItprAt1NOibEbg6Ro3Ph"}, 
{ "AreaTitle":"产品评审会"   , "AreaCoords":"970,602,1044,615" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccnXSncVu3LER3HBmecDK13Rb"}, 
// { "AreaTitle":"内建质量"   , "AreaCoords":"554,355,640,437" , "AreaLink":"https://xfmkp6q7le.feishu.cn/docs/doccn376hpEkmnqH94G2LNDToRg"}, 
        ]
    };

    function buildMaps(container, mapJson) {
        var map = '<area shape="rect" coords="{1}" title="{0}" alt="{0}" data-layer="1" cursor="pointer" href="{2}" target="_blank">';

        var mapHtml = [];
        mapJson.Areas.forEach(function(area) {
            mapHtml.push(map.format(area.AreaTitle, area.AreaCoords, area.AreaLink));
        });
        $(container).html(mapHtml.join(""));
    }

    $(document).ready(function() {
        buildMaps("#train-map", trainMapJson);
        buildMaps("#recycle-map", CriticalActivityMapJson);
    });
}(jQuery));
