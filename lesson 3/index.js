function myFunction(a,b) {
 let c=[]
    for (let i = 0; i < a.length; i++) {
        if (!c.includes(a[i])) {
            c.push(a[i]);
        }
    }

    for (let i = 0; i < b.length; i++) {
        if (!c.includes(b[i])) {
            c.push(b[i]);
        }
    }

    return c.sort()
}

console.log(myFunction([1, 2, 3], [3, 4, 5]));
