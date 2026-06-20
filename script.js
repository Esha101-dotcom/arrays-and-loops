let fruit = ["apple", "banana", "orange"]
document.write("<h1> FRUITS ARRAY: </h1>");
document.write(fruit + "<br><br>");



document.write("<h2>Array Elements:</h2>");
for (let i = 0; i < fruit.length; i++) {
    document.write(fruit[i] + "<br>")
}



document.write("<h3>Counting 1 to 10:</h3>");
for (let i = 0; i <= 10; i++) {
    document.write(i + "<br> ");
}



let num = prompt("Enter a number for table:");
document.write("<h3>Multiplication Table of " + num + "</h3>");
for (let i = 1; i <= 10; i++) {
    document.write(num + "x" + i + "=" + (num * i) + "<br>");
}



let items = ["cake", "apple", "cookies"];
let search = prompt("Enter item to search:");

document.write("<h3>Search Items</h3>");

if (search == "cake") {
    document.write("Cake is available");
} else {
    document.write(search + " is not available");
}



let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

document.write("<h3>Multidimensional Array:</h3>");

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
}



     let numbers = [24, 53, 78, 91, 12];

        let max = Math.max(...numbers);
        let min = Math.min(...numbers);

        document.write("<h3>Maximum and Minimum Values</h3>");
        document.write("Array: " + numbers + "<br>");
        document.write("Maximum Value: " + max + "<br>");
        document.write("Minimum Value: " + min + "<br>");