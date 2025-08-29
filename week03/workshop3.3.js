students = [
    {
        name:"pooh",grade:"C",
    },
    {
        name:"Gus",grade:"F",
    },
    {
        name:"M",grade:"F",
    }
]   
students.forEach((students) => {
    console.log(`Student Name :`,students.name,`   Student Grade :`,students.grade)
});
function showStudentCount () {
    console.log("จำนวนนักศึกษา",students.length)
}
showStudentCount()