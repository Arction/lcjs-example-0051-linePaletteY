(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const l=a(89),{lightningChart:s,PalettedFill:o,LUT:n,ColorRGBA:r,SolidFill:i,Themes:d}=l,h=s({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:d[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Line Chart with dynamic good/bad values highlighting"),c=-3e4,u=r(255,0,0),S=r(0,255,0),g=(h.getDefaultAxisX(),h.getDefaultAxisY());g.addConstantLine().setMouseInteractions(!1).setValue(c).setStrokeStyle((e=>e.setFillStyle(new i({color:u.setA(50)})))),g.addConstantLine().setMouseInteractions(!1).setValue(1e4).setStrokeStyle((e=>e.setFillStyle(new i({color:S.setA(50)})))),fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0051/data.json").then((e=>e.json())).then((e=>{const t=h.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).addArrayY(e),a=t.getStrokeStyle().getFillStyle().getColor(),l=t.getYMin(),s=new o({lookUpProperty:"y",lut:new n({interpolate:!1,steps:[{value:l,color:u},{value:c,color:a},{value:1e4,color:S}]})});t.setStrokeStyle((e=>e.setFillStyle(s))),g.setStrokeStyle((e=>e.setFillStyle(s)))}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);