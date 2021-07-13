menu_list_array["Margherita", "Double Cheese Margherita", "Farm House", "Peppy Paneer", "Mexican Green Wave", "Pepper Barbecue Chicken", "Chicken Sausage", "Chicken Golden Delight", "Non Veg Supreme", "Chicken Dominator", "Pepper Barbecue Chicken"]
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for (var i=0; i<menu_list_array.length;i++){
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function additem(){
    var htmldata;
    var item=document.getElementById("additem").value
    menu_list_array.sort();
    htmldata='<section class="card">'
    for (var i=0; i<menu_list_array.length;i++){
              +'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4DbSFfgN-JWQ5UE1ZXeqrgxos2LozFphbQdBKVucuwTx9SYA9NDzLZJLFI00M0msJAjU&usqp=CAU">'
              + menu_list_array[i] + '</div>'
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_additem").innerHTML = htmldata;
}
function add_toppings(){
    var item= document.getElementById("additem").value;
    menu_list_array.push(item);
    additem();
}