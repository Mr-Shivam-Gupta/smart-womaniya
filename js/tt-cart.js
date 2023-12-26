window.onload = function() {
    var curCost = 0;
    var curName = 0;
    var cartItems = [];
    var cindex = 0;
    var fx = 0,
        fy = 0;
    var tx = 0,
        ty = 0;
    var curItem = "";
    var item_list = document.querySelectorAll(".add-item");
    $delivery = $("input[name=delivery]:checked").val();
    var delivery = Number($delivery);
    document.getElementById("cost_delivery").innerHTML = delivery.toFixed(2);
    for (var i = 0; i < item_list.length; i++) {
        item_list[i].addEventListener("click", function(ev) {
            curCost = this.getAttribute("data-cost");
            curName = this.getAttribute("data-name");
            curImage = this.getAttribute("data-image");
            var id = this.getAttribute("data-id");
            var x = $(this).position();
            fx = (((window.innerWidth) - 982) / 2) + (160 * (id - 1));
            (function() {
                mover_animator(fx, fy, tx, ty);
            })(setTimeout(function() {
                addItem(id, curCost, curName, curImage);
            }, 350));
        })
    }
    $(document).on("click", ".cart-item-remove", function() {
        curCost = $(this).parent(".cart-item").find(".cvalue").text();
        removeCost(curCost);
        //this.parentNode.remove(); // ie fix
        this.parentNode.outerHTML='';
        //$( "#items-counter" ).empty();   
        toggleEptyCart();
        curCounter = $("#items .cart-item").length;
        $("#items-counter").empty();
        document.getElementById("items-counter").innerHTML += "<span class='animate'>" + curCounter +
            "<span class='circle'></span></span>";
    })

    function addItem(id, cost) {
        cindex++
        cartItems[cindex] = cost;
        $("#items-counter").empty();
        curCounter = $("#items .cart-item").length + 1;
        document.getElementById("items").innerHTML += "<div class='cart-item hidden' id='item" + cindex +
            "' data-id='" + id + "'><span class='cart-item-image'><img alt='" + curName + "' src='" + curImage +
            "'/></span><span class='cart-item-name h4'>" + curName +
            "</span><span class='cart-item-price'>$<span class='cvalue'>" + cost +
            "</span></span> <span class='cart-item-remove'><span class='ti-close'></span><span></div>";
        document.getElementById("items-counter").innerHTML += "<span class='animate'>" + curCounter +
            "<span class='circle'></span></span>";
        document.getElementById("item" + cindex).classList.remove("hidden");
        toggleEptyCart();
    }

    function addCost(amount) {
        $delivery = $("input[name=delivery]:checked").val();
        var delivery = Number($delivery);
        var oldcost = document.getElementById("cost_value").innerHTML;
        oldcost = parseFloat(oldcost);
        amount = parseFloat(amount);
        var newcost = oldcost + amount;
        var total = oldcost + amount;
        document.getElementById("cost_value").innerHTML = newcost.toFixed(2);
        var carttotal = total + delivery;
        document.getElementById("total-total").innerHTML = carttotal.toFixed(2);
        $("#amount").val(carttotal.toFixed(2));
    }

    function loadItems() {}

    function removeItem() {}

    function removeCost(amount) {
        $delivery = $("input[name=delivery]:checked").val();
        var delivery = Number($delivery);
        var oldcost = document.getElementById("cost_value").innerHTML;
        oldcost = parseFloat(oldcost);
        amount = parseFloat(amount);
        var newcost = (oldcost - amount);
        if (newcost == "NaN") {
            newcost = 0.00
        }
        var total = (oldcost - amount);
        if (total == "NaN") {
            total = 0.00
        }
        var carttotal = total + delivery;
        document.getElementById("total-total").innerHTML = carttotal.toFixed(2);
        document.getElementById("cost_value").innerHTML = newcost.toFixed(2);
        document.getElementById("cost_delivery").innerHTML = delivery.toFixed(2);
        $("#amount").val(carttotal.toFixed(2));
    }

    function mover_animator(x1, y1, x2, y2) {
        var div = document.createElement("div");
        div.className = "mover_animator " + cindex;
        div.style.display = "none";
        document.body.appendChild(div);
        $(div).css({
                "left": x1 + "px",
                "bottom": y1 + "px",
                "top": "auto",
                "right": "auto"
            })
            .fadeIn(10)
            .animate({
                "right": "auto",
                "top": "auto",
                "left": (window.innerWidth - 200) + "px",
                "bottom": (window.innerHeight - 240) + "px"
            }, 300, function() {
                addCost(curCost)
            })
        setTimeout(function() {
            $(div).remove();
            toggleEptyCart();
        }, 200);
    }

    function updateNumber() {
        var nums = document.querySelectorAll(".cart-item");
        var len = nums.length;
        if (len > 0) {
            for (var i = 0; i < len; i++) {
                nums[i].querySelector(".cart-item-name h3").innerHTML = "Item " + (i + 1) + " ---";
            }
        }
    }

    function toggleEptyCart() {
        if (document.querySelectorAll(".cart-item").length >= 1) {
            document.getElementById("cart-summary").style.display = "block";
            document.getElementById("cart-delivery").style.display = "block";
            document.getElementById("cart-form").style.display = "block";
            document.getElementById("cart-empty").style.display = "none";
            document.getElementById("items-counter").style.display = "block";
        }
        else {
            document.getElementById("cart-summary").style.display = "none";
            document.getElementById("cart-delivery").style.display = "none";
            document.getElementById("cart-form").style.display = "none";
            document.getElementById("cart-empty").style.display = "block";
            document.getElementById("items-counter").style.display = "none";
        }
    }
    $('input').change(function() {
        $delivery = $(this).val();
        $total = document.getElementById("cost_value").innerHTML;
        var total = Number($total);
        var delivery = Number($delivery);
        var carttotal = total + delivery;
        document.getElementById("total-total").innerHTML = carttotal.toFixed(2);
        $("#amount").val(carttotal.toFixed(2));
        document.getElementById("cost_delivery").innerHTML = delivery.toFixed(2);
    });
};