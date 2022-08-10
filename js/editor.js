

function editor(id){
var ControleEditor ;
var MyDiv = document.getElementById(id);
 var MyEditor = "<iframe width='908px' height='1024px' id='editor' ></iframe>";
 var Boldi = '<a id="buton" href="javascript:Command(\'bold\',\'\');"><img src="img/bold.png"/></a>';
 var iTalic = '<a id="buton" href="javascript:Command(\'italic\',\'\');"><img src="img/italic.png"/></a>';
 var UnderLine = '<a id="buton" href="javascript:Command(\'underline\',\'\');"><img src="img/underline.png"/></a>';
 var Center = '<a id="buton" href="javascript:Command(\'justifycenter\',\'\');"><img src="img/center.png"/></a>';
 var Right = '<a id="buton" href="javascript:Command(\'justifyright\',\'\');"><img src="img/right.png"/></a>';
 var Left = '<a id="buton" href="javascript:Command(\'justifyleft\',\'\');"><img src="img/left.png"/></a>';
 var Btable = '<a id="buton" href="javascript:ShowFormTable();"><img src="img/table--plus.png"/></a>';
 var ldir = '<a id="buton" href="javascript:ChangeDir(\'ltr\');"><img src="img/ltr.png"/></a>';
 var rdir = '<a id="buton" href="javascript:ChangeDir(\'rlt\');"><img src="img/rtl.png"/></a>';
 var MySmille = '<a id="buton" href="javascript:smilles();"><img src="img/smille/02 Laugh.png"/></a>';
 var divtable = "<div id='tabdiv'></div>";
 var smilleDiv = "<div id='smille'></div>";
 MyDiv.innerHTML = Boldi+iTalic+UnderLine+Left+Center+Right+"<br />"+Btable+ldir+rdir+MySmille+"<br /><br />"+divtable+"<br />"+smilleDiv+"<br />"+MyEditor ;
 if(document.getElementById("editor").contentDocument){
  ControleEditor = document.getElementById("editor").contentDocument ;
 }else{
  ControleEditor = document.getElementById("editor").contentWindow.document;
 }
 ControleEditor.designMode = "On" ;
 ControleEditor.open();
 ControleEditor.write("");
 ControleEditor.close();
 }
window.onload = function (){
editor("pedi");
ChangeDir("rtl");
}

function Command(func,txt){
var EditorExec;
 if(document.getElementById("editor").contentDocument){
  EditorExec = document.getElementById("editor").contentDocument ;
 }else{
  EditorExec = document.getElementById("editor").contentWindow.document;
 }
 EditorExec.execCommand(func,false,txt);
 EditorExec.focus();
}

function ImgAdd(url){
 var image = document.createElement("img");
  image.src = url ;
  var Editor;
 if(document.getElementById("editor").contentDocument){
  Editor = document.getElementById("editor").contentDocument.body ;
 }else{
  Editor = document.getElementById("editor").contentWindow.document.body;
 } 
 Editor.appendChild(image);
}

function smilles(){
var DivS = document.getElementById("smille");
DivS.innerHTML = '<a id="buton" href="javascript:ImgAdd(\'img/smille/02 Laugh.png\');"><img src="img/smille/02 Laugh.png"/></a>';

}

function ShowFormTable(){
 var DivTab = document.getElementById("tabdiv");
DivTab.innerHTML = '<table cellpadding="2" cellspacing="2" class="tablex" width="546">'+
'<tr><td class="tag" colspan="2"> انشاء جدول جديد</td></tr>'+
'<tr><td class="tag" >عدد الحقول</td><td class="content"><input size="48" id="trnum" /></td></tr>'+
'<tr><td class="tag" >عدد الخانات</td><td class="content"><input size="48" id="tdnum" /></td></tr>'+
'<tr><td class="tag" >حجم الحاشية</td><td class="content"><input size="48" id="brnum" /></td></tr>'+
'<tr><td class="tag" colspan="2"><input value="send" Onclick ="javascript:CreateTable();"type="button"/></td></tr>'+
'</table>';

} 


function CreateTable(){
var EditorAdd;
 if(document.getElementById("editor").contentDocument){
  EditorAdd = document.getElementById("editor").contentDocument.body ;
 }else{
  EditorAdd = document.getElementById("editor").contentWindow.document.body;
 }
 var Table = document.createElement("table");
 var tBody = document.createElement("tbody");
 var Reg = /^([0-9]+)$/ ;
 // Inputs Values 
                       var TrNu = document.getElementById("trnum").value;
					   var TdNu = document.getElementById("tdnum").value;
					   var BrNu = document.getElementById("brnum").value;
					   if(Reg.test(TrNu) == "" || Reg.test(TdNu) == "" ||Reg.test(BrNu) == "") {
					   alert("\t");
					   }else {
 // End Variable 
 for (var i=0; i < TrNu ; i++){
        var Tr = document.createElement("tr");
            for (var j=0; j< TdNu; j++){
			 var Td = document.createElement("td");
			Td.innerHTML = "&#160;";
			Tr.appendChild(Td);
			}
			tBody.appendChild(Tr);	
 }
 
 Table.appendChild(tBody);
 EditorAdd.appendChild(Table);
 Table.setAttribute("border",BrNu);
}

}
 function ChangeDir(dire){
var EditorDir;
 if(document.getElementById("editor").contentDocument){
  EditorDir = document.getElementById("editor").contentDocument.body ;
 }else{
  EditorDir = document.getElementById("editor").contentWindow.document.body;
 }
 EditorDir.setAttribute("dir",""+dire+"");
}
 