// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict";
function calculate() {
        let Celsius = parseFloat(document.getElementById("Celsius").value);
        let Conversion = (Celsius * 9/5) + 32 ;
        let ans= "";
    if (Conversion < 15) {
        ans = "It is cold"
    }
    if (Conversion >= 15) {
        ans = "It is HOT"; 
    }
        // Display the results
    document.getElementById("Conversion").innerHTML = "Conversion " + Conversion.toFixed(1) + "°F";
        document.getElementById("ans").innerHTML = ans ;
}