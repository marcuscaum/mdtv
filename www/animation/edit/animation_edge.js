/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'tv',
            type:'image',
            rect:['18px','43px','420px','274px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tv.png",'0px','0px']
         },
         {
            id:'source-sans-prosans-serif',
            type:'text',
            rect:['461px','43px','auto','auto','auto','auto'],
            text:"Porque",
            font:['source-sans-pro, sans-serif',65.83,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'source-sans-prosans-serif2',
            type:'text',
            rect:['950px','132px','auto','auto','auto','auto'],
            text:"toda informação é um",
            align:"left",
            font:['source-sans-pro, sans-serif',45.61,"rgba(255,255,255,1)","100","none","normal"]
         },
         {
            id:'source-sans-prosans-serif3',
            type:'text',
            rect:['482','243','auto','auto','auto','auto'],
            text:"Privilégio.",
            align:"left",
            font:['source-sans-pro, sans-serif',65.83,"rgba(255,255,255,1)","bold","none","normal"]
         },
         {
            id:'logo',
            type:'image',
            rect:['79px','128px','298px','103px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
         },
         {
            id:'IconTime',
            type:'image',
            rect:['764px','111px','138px','138px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"IconTime.png",'0px','0px']
         },
         {
            id:'weather',
            type:'image',
            rect:['159px','111px','138px','138px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"weather.png",'0px','0px']
         },
         {
            id:'news',
            type:'image',
            rect:['470','168','138px','138px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"news.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_tv}": [
            ["style", "top", '43px'],
            ["style", "left", '250px']
         ],
         "${_logo}": [
            ["style", "top", '128px'],
            ["style", "height", '103px'],
            ["style", "opacity", '0'],
            ["style", "left", '79px'],
            ["style", "width", '298px']
         ],
         "${_source-sans-prosans-serif2}": [
            ["style", "top", '132px'],
            ["style", "width", 'auto'],
            ["style", "opacity", '0'],
            ["style", "height", '124px'],
            ["style", "font-weight", '100'],
            ["style", "left", '950px'],
            ["style", "font-size", '45.61px']
         ],
         "${_source-sans-prosans-serif3}": [
            ["style", "top", '194px'],
            ["style", "font-size", '92px'],
            ["style", "height", '124px'],
            ["style", "opacity", '0'],
            ["style", "left", '960px'],
            ["style", "width", 'auto']
         ],
         "${_IconTime}": [
            ["style", "top", '111px'],
            ["style", "opacity", '0'],
            ["style", "left", '739px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,139,76,1.00)'],
            ["style", "width", '940px'],
            ["style", "height", '360px'],
            ["style", "overflow", 'hidden']
         ],
         "${_news}": [
            ["style", "top", '111px'],
            ["style", "opacity", '0'],
            ["style", "left", '739px'],
            ["style", "width", '122px']
         ],
         "${_source-sans-prosans-serif}": [
            ["style", "top", '43px'],
            ["style", "font-size", '65.83px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "height", '89px'],
            ["style", "opacity", '0'],
            ["style", "left", '951px'],
            ["style", "width", 'auto']
         ],
         "${_weather}": [
            ["style", "top", '111px'],
            ["style", "opacity", '0'],
            ["style", "left", '739px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15000,
         autoPlay: true,
         labels: {
            "start": 0
         },
         timeline: [
            { id: "eid49", tween: [ "style", "${_news}", "left", '401px', { fromValue: '739px'}], position: 3000, duration: 1125, easing: "easeOutQuart" },
            { id: "eid50", tween: [ "style", "${_news}", "left", '255px', { fromValue: '401px'}], position: 4125, duration: 375, easing: "easeOutQuart" },
            { id: "eid2", tween: [ "style", "${_source-sans-prosans-serif3}", "left", '460px', { fromValue: '960px'}], position: 5250, duration: 1000, easing: "easeOutQuart" },
            { id: "eid27", tween: [ "style", "${_source-sans-prosans-serif}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 1000, easing: "easeOutQuart" },
            { id: "eid26", tween: [ "style", "${_source-sans-prosans-serif}", "left", '461px', { fromValue: '951px'}], position: 5250, duration: 1000, easing: "easeOutQuart" },
            { id: "eid23", tween: [ "style", "${_source-sans-prosans-serif2}", "left", '460px', { fromValue: '950px'}], position: 5250, duration: 1000, easing: "easeOutQuart" },
            { id: "eid64", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0.000000'}], position: 6250, duration: 750, easing: "easeOutQuart" },
            { id: "eid25", tween: [ "style", "${_source-sans-prosans-serif2}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 1000, easing: "easeOutQuart" },
            { id: "eid43", tween: [ "style", "${_weather}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1125, easing: "easeOutQuart" },
            { id: "eid42", tween: [ "style", "${_weather}", "opacity", '0', { fromValue: '1'}], position: 2625, duration: 375, easing: "easeOutQuart" },
            { id: "eid22", tween: [ "style", "${_source-sans-prosans-serif3}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 1000, easing: "easeOutQuart" },
            { id: "eid31", tween: [ "style", "${_IconTime}", "left", '401px', { fromValue: '739px'}], position: 0, duration: 1200, easing: "easeOutQuart" },
            { id: "eid34", tween: [ "style", "${_IconTime}", "left", '255px', { fromValue: '401px'}], position: 1200, duration: 300, easing: "easeOutQuart" },
            { id: "eid37", tween: [ "style", "${_weather}", "left", '401px', { fromValue: '739px'}], position: 1500, duration: 1125, easing: "easeOutQuart" },
            { id: "eid38", tween: [ "style", "${_weather}", "left", '255px', { fromValue: '401px'}], position: 2625, duration: 375, easing: "easeOutQuart" },
            { id: "eid51", tween: [ "style", "${_news}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 1125, easing: "easeOutQuart" },
            { id: "eid52", tween: [ "style", "${_news}", "opacity", '0', { fromValue: '1'}], position: 4125, duration: 375, easing: "easeOutQuart" },
            { id: "eid33", tween: [ "style", "${_IconTime}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1200, easing: "easeOutQuart" },
            { id: "eid35", tween: [ "style", "${_IconTime}", "opacity", '0', { fromValue: '1'}], position: 1200, duration: 300, easing: "easeOutQuart" },
            { id: "eid29", tween: [ "style", "${_tv}", "left", '18px', { fromValue: '250px'}], position: 4500, duration: 1000, easing: "easeOutQuart" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3152717");
