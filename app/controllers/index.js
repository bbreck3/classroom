function doClick(e) {
    alert($.label.text);
}
/**
 * 		The below was supposed to open the "class.xml" for testing purposes. 
 * 
 * 				 it does not work, the coompler gives: "Error while parsing XML file"
 * 
 * 				It works fine without the "class.xml" but when adding the "class.xml" to the application neither "index.xml" nor "class.xmk" works
 * 
 */
$.index.open();
/*for (i=0;i<10;i++){
	var l = Alloy.createController('label').getView();
	$.index.add(l);
}*/
//$.class.open();

