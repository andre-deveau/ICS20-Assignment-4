// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Template/sw.js", {
    scope: "/ICS2O-PWA-Template/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  const TAX = 1.13
  const delivery = 10
  const size = parseFloat(document.getElementById("Salad-Size").value)
  const dressing = parseFloat(document.getElementById("Salad-Dressing").value)

  const basePriceNoTAX = size + dressing
  const basePrice = basePriceNoTAX * TAX
  const deliveryOnly = (basePriceNoTAX + delivery) * TAX

  const buttonOnChecked = document.getElementById("flash1").checked

  if (buttonOnChecked == true) {
    document.getElementById("Cost").innerHTML =
      "Your total is: $" + deliveryOnly.toFixed(2) + "including tax."
  } else {
    document.getElementById("Cost").innerHTML =
      "Your total is: $" + basePrice.toFixed(2) + "including tax."
  }
}
