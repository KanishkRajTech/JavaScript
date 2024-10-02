const myObject = {
    js: 'javadcript',
    cpp: 'c++',
    rb: "rubby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const arr =["js", "rb", "py", "java"]
for (const key in arr) {
    console.log(arr[key]);
    
}