!function(){var e=document.getElementById("coupon-type");e&&jQuery(e).on("change",(function(e){!function(e=!0){var t=document.getElementById("coupon-currency-symbol"),n=document.getElementById("coupon-percentage-symbol"),o=document.getElementById("coupon-value");e?(t.style.display="none",n.style.removeProperty("display"),o.setAttribute("max","100")):(n.style.display="none",t.style.removeProperty("display"),o.removeAttribute("max"))}("percentage"===this.value)}));var t,n=document.getElementById("coupon-code");n&&n.addEventListener("blur",(t=n.value,function(){var e,n;t!==this.value&&((e={coupon_code:this.value,coupon_id:document.getElementById("wp-travel-coupon-id").value,action:"wp_travel_engine_check_coupon_code",nonce:this.dataset.nonce},n=new FormData,Object.entries(e).forEach((function([e,t]){n.append(e,t)})),fetch(ajaxurl,{method:"POST",body:n})).then((function(e){return e.json()})).then((function(e){!function(e=!0){var t=document.getElementById("#wp-travel-coupon_code-error");t&&e&&t.style.removeProperty("display"),t&&!e&&(t.style.display="none")}(!e.success)})),t=this.value)})),jQuery((function(e){const t=flatpickr("#coupon-expiry-date",{minDate:new Date,onchange:e=>{},mode:"single"});flatpickr("#coupon-start-date",{minDate:new Date,onChange:e=>{t.setDate(e[0]),t.set("minDate",e[0])},mode:"single"}),e(".wte-coupon-tabs").tabs(),e(".wte-coupon-code-select").select2()}))}();