---
title: "02-combinatorial-logic"
aliases: 
tags: 
- cosc204
- lecture
sr-due: 2022-07-19
sr-interval: 3
sr-ease: 250
---

- [slides](https://blackboard.otago.ac.nz/bbcswebdav/pid-2954102-dt-content-rid-18888626_1/courses/COSC204_S2DNI_2022/L2%20-%20Combinatorial%20Logic.pdf)

# Combinatorial Logic Circuit
> [!Definition]
> Combinatorial Logic Circuit is a circuit whose digital outputs are dependent only on its digital inputs
They can be described using logic expressions and therefore logic gates. We assume the outputs respond immediately^[1]

They can be defined:
- Using a truth table
- Using boolean equations ($Q\ =\ A+\ B$) 
- Using graphical symbols  

- [1 Bit half adder](https://i.imgur.com/mjCVU4I.png)
- [1 Bit full adder: (includes carry input)](https://i.imgur.com/yu6kS83.png)
- [Ripple carry adder](https://i.imgur.com/HtEIZ5t.png)
- 3 Bit parity Generator
	- Adds an extra bit to the input data so that the number of ones in the output is always odd
	- Used for error checking
	- [truth table](https://i.imgur.com/KDUiJbN.png)
	- [boolean equation](https://i.imgur.com/mwBpnlO.png)
	- [circuit](https://i.imgur.com/tsgDISC.png)
- [7 segment displlay](https://i.imgur.com/qtPmtwR.png)

# Boolean Equations

Precedence
- NOT is unary, so it has the highest precedence
- AND is mulitply, so it comes next
- OR is like plusl, to it comes last

![Precedence table|200](https://i.imgur.com/jPlrVwW.png)

De Morgan's Theorum
- 

Creating boolean equations:
- for each row where output is 1
- write the equation as a function of the inputs  (using AND)
- Write the final equation, putting OR between each clause
- [example](https://i.imgur.com/RoBTEfH.png)




# Circuit basics:
- current flows + to -
- input to a unit (e.g., LED) is the + end

# Logic Gates
- NOT
- AND
- OR
- NAND
- NOR
- XOR/EOR




[^1] : In real circuits propagation delay must be considered, hence the clock cycle on CPUs
