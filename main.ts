/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mason
 * Created on: Sep 2025
 * This program Finds distance using a sonar
*/

let distanceToObject:number = 0

//setup 
basic.showIcon(IconNames.Happy)

//find distance from Sonar
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceToObject = sonar.ping(
      DigitalPin.P1,
      DigitalPin.P2,
      PingUnit.Centimeters
  ) 
  basic.showNumber(distanceToObject)
  basic.showIcon(IconNames.Happy)
})